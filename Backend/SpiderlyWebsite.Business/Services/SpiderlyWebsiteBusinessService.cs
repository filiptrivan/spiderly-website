using SpiderlyWebsite.Business.Services;
using SpiderlyWebsite.Business.Entities;
using SpiderlyWebsite.Business.DTO;
using SpiderlyWebsite.Business.Enums;
using SpiderlyWebsite.Business.DataMappers;
using SpiderlyWebsite.Business.ValidationRules;
using Spiderly.Shared.DTO;
using Spiderly.Shared.Excel;
using Spiderly.Shared.Interfaces;
using Spiderly.Shared.Extensions;
using Spiderly.Shared.Helpers;
using Spiderly.Security.DTO;
using Spiderly.Security.Services;
using Spiderly.Shared.Exceptions;
using Microsoft.EntityFrameworkCore;
using Mapster;
using FluentValidation;
using Spiderly.Shared.Emailing;
using Azure.Storage.Blobs;
using Azure.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Stripe;
using Stripe.Checkout;
using Stripe.Events;
using Stripe.Apps;

namespace SpiderlyWebsite.Business.Services
{
    public class SpiderlyWebsiteBusinessService : SpiderlyWebsite.Business.Services.BusinessServiceGenerated
    {
        private readonly IApplicationDbContext _context;
        private readonly SpiderlyWebsite.Business.Services.AuthorizationBusinessService _authorizationService;
        private readonly AuthenticationService _authenticationService;
        private readonly SecurityBusinessService<User> _securityBusinessService;
        private readonly EmailingService _emailingService;

        public SpiderlyWebsiteBusinessService(
            IApplicationDbContext context, 
            ExcelService excelService, 
            SpiderlyWebsite.Business.Services.AuthorizationBusinessService authorizationService, 
            SecurityBusinessService<User> securityBusinessService, 
            AuthenticationService authenticationService, 
            EmailingService emailingService,
            IFileManager fileManager
        )
            : base(context, excelService, authorizationService, fileManager)
        {
            _context = context;
            _authorizationService = authorizationService;
            _securityBusinessService = securityBusinessService;
            _authenticationService = authenticationService;
            _emailingService = emailingService;
        }

        #region User

        /// <summary>
        /// IsDisabled is handled inside authorization service
        /// </summary>
        protected override async Task OnBeforeSaveUserAndReturnSaveBodyDTO(UserSaveBodyDTO userSaveBodyDTO)
        {
            await _context.WithTransactionAsync(async () =>
            {
                if (userSaveBodyDTO.UserDTO.Id <= 0)
                    throw new HackerException("You can't add new user.");

                User user = await GetInstanceAsync<User, long>(userSaveBodyDTO.UserDTO.Id, userSaveBodyDTO.UserDTO.Version);

                if (userSaveBodyDTO.UserDTO.Email != user.Email ||
                    userSaveBodyDTO.UserDTO.HasLoggedInWithExternalProvider != user.HasLoggedInWithExternalProvider
                //userSaveBodyDTO.UserDTO.AccessedTheSystem != user.AccessedTheSystem
                )
                {
                    throw new HackerException("You can't change Email, HasLoggedInWithExternalProvider nor AccessedTheSystem from the main UI form.");
                }
            });
        }

        #endregion

        #region Notification

        public async Task SendNotificationEmail(long notificationId, int notificationVersion)
        {
            await _context.WithTransactionAsync(async () =>
            {
                await _authorizationService.AuthorizeAndThrowAsync<User>(BusinessPermissionCodes.UpdateNotification);

                // Checking version because if the user didn't save and some other user changed the version, he will send emails to wrong users
                Notification notification = await GetInstanceAsync<Notification, long>(notificationId, notificationVersion);

                List<string> recipients = notification.Recipients.Select(x => x.Email).ToList();

                await _emailingService.SendEmailAsync(recipients, notification.Title, notification.EmailBody);
            });
        }

        /// <summary>
        /// Don't need authorization because user can do whatever he wants with his notifications
        /// </summary>
        public async Task DeleteNotificationForCurrentUser(long notificationId, int notificationVersion)
        {
            await _context.WithTransactionAsync(async () =>
            {
                long currentUserId = _authenticationService.GetCurrentUserId();

                Notification notification = await GetInstanceAsync<Notification, long>(notificationId, notificationVersion);

                await _context.DbSet<UserNotification>()
                    .Where(x => x.User.Id == currentUserId && x.Notification.Id == notification.Id)
                    .ExecuteDeleteAsync();
            });
        }

        /// <summary>
        /// Don't need authorization because user can do whatever he wants with his notifications
        /// </summary>
        public async Task MarkNotificationAsReadForCurrentUser(long notificationId, int notificationVersion)
        {
            await _context.WithTransactionAsync(async () =>
            {
                long currentUserId = _authenticationService.GetCurrentUserId();

                Notification notification = await GetInstanceAsync<Notification, long>(notificationId, notificationVersion);

                await _context.DbSet<UserNotification>()
                    .Where(x => x.User.Id == currentUserId && x.Notification.Id == notification.Id)
                    .ExecuteUpdateAsync(setters => setters.SetProperty(x => x.IsMarkedAsRead, true));
            });
        }

        /// <summary>
        /// Don't need authorization because user can do whatever he wants with his notifications
        /// </summary>
        public async Task MarkNotificationAsUnreadForCurrentUser(long notificationId, int notificationVersion)
        {
            await _context.WithTransactionAsync(async () =>
            {
                long currentUserId = _authenticationService.GetCurrentUserId();

                Notification notification = await GetInstanceAsync<Notification, long>(notificationId, notificationVersion);

                await _context.DbSet<UserNotification>()
                    .Where(x => x.User.Id == currentUserId && x.Notification.Id == notification.Id)
                    .ExecuteUpdateAsync(setters => setters.SetProperty(x => x.IsMarkedAsRead, false));
            });
        }

        public async Task<int> GetUnreadNotificationsCountForCurrentUser()
        {
            long currentUserId = _authenticationService.GetCurrentUserId();

            return await _context.WithTransactionAsync(async () =>
            {
                var notificationUsersQuery = _context.DbSet<UserNotification>()
                    .Where(x => x.User.Id == currentUserId && x.IsMarkedAsRead == false);

                int count = await notificationUsersQuery.CountAsync();

                return count;
            });
        }

        public async Task<PaginatedResultDTO<NotificationDTO>> GetNotificationsForCurrentUser(FilterDTO filterDTO)
        {
            PaginatedResultDTO<NotificationDTO> result = new();
            long currentUserId = _authenticationService.GetCurrentUserId(); // Not doing user.Notifications, because he could have a lot of them.

            await _context.WithTransactionAsync(async () =>
            {
                var notificationUsersQuery = _context.DbSet<UserNotification>()
                    .Where(x => x.User.Id == currentUserId)
                    .Select(x => new
                    {
                        UserId = x.User.Id,
                        NotificationId = x.Notification.Id,
                        IsMarkedAsRead = x.IsMarkedAsRead,
                    });

                int count = await notificationUsersQuery.CountAsync();

                var notificationUsers = await notificationUsersQuery
                    .Skip(filterDTO.First)
                    .Take(filterDTO.Rows)
                    .ToListAsync();

                List<NotificationDTO> notificationsDTO = new();

                foreach (var item in notificationUsers)
                {
                    NotificationDTO notificationDTO = new();

                    Notification notification = await GetInstanceAsync<Notification, long>(item.NotificationId, null);
                    notificationDTO.Id = notification.Id;
                    notificationDTO.Version = notification.Version;
                    notificationDTO.Title = notification.Title;
                    notificationDTO.Description = notification.Description;
                    notificationDTO.CreatedAt = notification.CreatedAt;

                    notificationDTO.IsMarkedAsRead = item.IsMarkedAsRead;

                    notificationsDTO.Add(notificationDTO);
                }

                notificationsDTO = notificationsDTO.OrderByDescending(x => x.CreatedAt).ToList();

                result.Data = notificationsDTO;
                result.TotalRecords = count;
            });

            return result;
        }

        #endregion

        #region Transaction

        public override Task<PaginatedResultDTO<TransactionDTO>> GetPaginatedTransactionList(FilterDTO filterDTO, IQueryable<Transaction> query, bool authorize)
        {
            query = query.Where(x => x.User.Id == _authenticationService.GetCurrentUserId());
                
            return base.GetPaginatedTransactionList(filterDTO, query, authorize);
        }

        #endregion

        #region UserSubscription

        public override Task<PaginatedResultDTO<UserSubscriptionDTO>> GetPaginatedUserSubscriptionList(FilterDTO filterDTO, IQueryable<UserSubscription> query, bool authorize)
        {
            query = query.Where(x => x.User.Id == _authenticationService.GetCurrentUserId());

            return base.GetPaginatedUserSubscriptionList(filterDTO, query, authorize);
        }

        #endregion

        #region Stripe

        public async Task<string> CreateCheckoutSession(string frontendUrl)
        {
            string currentUserEmail = _authenticationService.GetCurrentUserEmailOrDefault();
            CustomerService customerService = new();
            StripeList<Customer> customerList = await customerService.ListAsync(new CustomerListOptions
            {
                Email = currentUserEmail,
                Limit = 1
            });
            Customer customer = customerList.Data.SingleOrDefault();
            string customerId = null;

            if (customer != null)
                customerId = customer.Id;

            if (currentUserEmail == null)
                throw new HackerException("Trying to make a Stripe checkout session without a signed in user.");

            await _context.WithTransactionAsync(async () =>
            {
                bool hasValidSubscription = await _context.DbSet<UserSubscription>()
                    .AnyAsync(x => 
                        x.User.Email == currentUserEmail &&
                        DateTime.UtcNow > x.ValidFrom  &&
                        DateTime.UtcNow <= x.ValidTo
                    );

                if (hasValidSubscription)
                    throw new BusinessException("You already have an active subscription.");
            });

            SessionCreateOptions options = new SessionCreateOptions
            {
                LineItems = new List<SessionLineItemOptions>
                {
                  new SessionLineItemOptions
                  {
                    Price = "price_1Rgmx4QIRfhXz4oOSApghot4",
                    Quantity = 1,
                  },
                },
                CustomerEmail = currentUserEmail,
                Customer = customerId,
                Mode = "subscription",
                SuccessUrl = $"{frontendUrl}/successful-payment",
                CancelUrl = $"{frontendUrl}/pricing",
                SubscriptionData = new SessionSubscriptionDataOptions
                {
                    TrialPeriodDays = 31, // First month free
                },
            };
            SessionService service = new();
            Session session = service.Create(options);

            return session.Url;
        }

        public async Task HandleStripeWebhook(string json, string stripeSignature)
        {
            string endpointSecret = SettingsProvider.Current.StripeWebhookSecretKey;

            Event stripeEvent = EventUtility.ConstructEvent(json, stripeSignature, endpointSecret);

            if (stripeEvent.Type == "invoice.paid")
            {
                Invoice invoice = stripeEvent.Data.Object as Invoice;

                InvoiceLineItemPricingPriceDetails priceDetails = invoice.Lines.Data.Single().Pricing.PriceDetails;
                string productId = priceDetails.Product;

                ProductService productService = new();
                Product product = await productService.GetAsync(productId);
                string productName = product.Name;

                await _context.WithTransactionAsync(async () =>
                {
                    User user = await _context.DbSet<User>().Where(x => x.Email == invoice.CustomerEmail).SingleAsync();

                    // Check if the user already has a subscription
                    UserSubscription existingSubscription = await _context.DbSet<UserSubscription>()
                        .Where(x =>
                            x.StripeProductId == productId &&
                            x.User.Email == invoice.CustomerEmail
                        )
                        .SingleOrDefaultAsync();

                    DateTime licenseValidFrom = DateTime.UtcNow;
                    DateTime licenseExpiresAt = DateTime.UtcNow.AddDays(33); // 2 days grace period

                    // Create a new subscription if it doesn't exist
                    if (existingSubscription == null)
                    {
                        existingSubscription = new UserSubscription
                        {
                            StripeProductName = productName,
                            StripeProductId = productId,
                            User = user,
                            ApiKeyValue = SpiderlyLicenseManager.CreateToken(licenseExpiresAt, SettingsProvider.Current.SpiderlyPrivateLicenseKey),
                            ValidFrom = licenseValidFrom,
                            ValidTo = licenseExpiresAt, 
                        };
                        await _context.DbSet<UserSubscription>().AddAsync(existingSubscription);
                    }
                    else
                    {
                        existingSubscription.ApiKeyValue = SpiderlyLicenseManager.CreateToken(licenseExpiresAt, SettingsProvider.Current.SpiderlyPrivateLicenseKey);
                        existingSubscription.StripeProductName = productName;
                        existingSubscription.ValidFrom = licenseValidFrom;
                        existingSubscription.ValidTo = licenseExpiresAt;

                        _context.DbSet<UserSubscription>().Update(existingSubscription);
                    }

                    Transaction transaction = new Transaction
                    {
                        User = user,
                        UserEmail = invoice.CustomerEmail,
                        AmountPaid = invoice.AmountPaid / 100m, // Stripe stores amounts in cents, so we need to divide by 100 to get the actual amount
                        Currency = invoice.Currency,
                        Subscription = existingSubscription,
                    };

                    await _context.DbSet<Transaction>().AddAsync(transaction);

                    await _context.SaveChangesAsync();
                });
            }
        }

        public async Task CancelSubscription(long subscriptionId)
        {

            await _context.WithTransactionAsync(async () =>
            {
                long currentUserId = _authenticationService.GetCurrentUserId();

                UserSubscription subscription = await _context.DbSet<UserSubscription>()
                    .Where(x =>
                        x.Id == subscriptionId &&
                        x.User.Id == currentUserId &&
                        DateTime.UtcNow < x.ValidTo // Only allow cancellation of active subscriptions
                    )
                    .SingleAsync();

                await CancelStripeSubscriptionByEmailAndProductAsync(_authenticationService.GetCurrentUserEmail(), subscription.StripeProductId);

                if (subscription == null)
                    throw new BusinessException("You don't have an active subscription to cancel.");

                subscription.Canceled = true;
                _context.DbSet<UserSubscription>().Update(subscription);
                await _context.SaveChangesAsync();
            });
        }

        /// <summary>
        /// Cancels the first matching active subscription for a customer identified by email and productId.
        /// </summary>
        /// <param name="userEmail">Customer’s email in Stripe</param>
        /// <param name="productId">The Stripe Product ID to match in the subscription’s items</param>
        public async Task CancelStripeSubscriptionByEmailAndProductAsync(string userEmail, string productId)
        {
            CustomerService customerService = new();
            SubscriptionService subscriptionService = new();

            StripeList<Customer> customerList = await customerService.ListAsync(new CustomerListOptions
            {
                Email = userEmail,
                Limit = 2
            });

            if (customerList.Data.Count > 1)
                throw new BusinessException("Multiple customers found with the same email. Please contact support.");

            Customer customer = customerList.Data.Single();

            StripeList<Subscription> subscriptionList = await subscriptionService.ListAsync(new SubscriptionListOptions
            {
                Customer = customer.Id,
                Status = "all",
                Limit = 10
            });

            Subscription toCancel = subscriptionList.Data
                .Where(x => 
                    x.Status != "canceled" &&
                    x.Items.Data
                        .Any(item => item.Price.ProductId == productId)
                )
                .Single();

            Subscription canceledSub = await subscriptionService.CancelAsync(toCancel.Id, new SubscriptionCancelOptions
            {
                InvoiceNow = false,
                Prorate = false
            });
        }
    }

    #endregion
}
