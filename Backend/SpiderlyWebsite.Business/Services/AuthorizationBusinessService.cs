using Azure.Storage.Blobs;
using Spiderly.Security.Services;
using Spiderly.Shared.Interfaces;
using Spiderly.Shared.Extensions;
using Spiderly.Shared.Exceptions;
using SpiderlyWebsite.Business.Entities;
using SpiderlyWebsite.Business.DTO;
using SpiderlyWebsite.Business.Enums;
using Microsoft.EntityFrameworkCore;

namespace SpiderlyWebsite.Business.Services
{
    public class AuthorizationBusinessService : AuthorizationBusinessServiceGenerated
    {
        private readonly IApplicationDbContext _context;
        private readonly AuthenticationService _authenticationService;

        public AuthorizationBusinessService(
            IApplicationDbContext context,
            AuthenticationService authenticationService
        )
            : base(context, authenticationService)
        {
            _context = context;
            _authenticationService = authenticationService;
        }

        #region User

        public override async Task AuthorizeUserReadAndThrow(long? userId)
        {
            await _context.WithTransactionAsync(async () =>
            {
                bool hasAdminReadPermission = await IsAuthorizedAsync<User>(BusinessPermissionCodes.ReadUser);
                bool isCurrentUser = _authenticationService.GetCurrentUserId() == userId;

                if (isCurrentUser == false && hasAdminReadPermission == false)
                    throw new UnauthorizedException();
            });
        }

        public override async Task AuthorizeUserUpdateAndThrow(UserDTO userDTO)
        {
            await _context.WithTransactionAsync(async () =>
            {
                bool hasAdminUpdatePermission = await IsAuthorizedAsync<User>(BusinessPermissionCodes.UpdateUser);
                if (hasAdminUpdatePermission)
                    return;

                long currentUserId = _authenticationService.GetCurrentUserId();
                if (currentUserId != userDTO.Id)
                    throw new UnauthorizedException();

                User user = await GetInstanceAsync<User, long>(userDTO.Id, null);

                if (
                    userDTO.IsDisabled != user.IsDisabled ||
                    userDTO.HasLoggedInWithExternalProvider != user.HasLoggedInWithExternalProvider
                )
                {
                    throw new UnauthorizedException();
                }
            });
        }

        #endregion

        #region Transaction

        public override async Task AuthorizeTransactionReadAndThrow(List<long> transactionIdListToRead)
        {
            await _context.WithTransactionAsync(async () =>
            {
                List<long> userIds = await _context.DbSet<Transaction>()
                    .Where(x => transactionIdListToRead.Contains(x.Id))
                    .Select(x => x.User.Id)
                    .Distinct()
                    .ToListAsync();
                bool hasAdminReadPermission = await IsAuthorizedAsync<User>(BusinessPermissionCodes.ReadUser);
                long currentUserId = _authenticationService.GetCurrentUserId();

                bool isCurrentUser = false;

                if (userIds.All(id => id == currentUserId))
                {
                    isCurrentUser = true;
                }

                if (isCurrentUser == false && hasAdminReadPermission == false)
                    throw new UnauthorizedException();
            });
        }

        #endregion

        #region UserSubscription

        public override async Task AuthorizeUserSubscriptionReadAndThrow(List<long> subscriptionIdListToRead)
        {
            await _context.WithTransactionAsync(async () =>
            {
                List<long> userIds = await _context.DbSet<UserSubscription>()
                    .Where(x => subscriptionIdListToRead.Contains(x.Id))
                    .Select(x => x.User.Id)
                    .Distinct()
                    .ToListAsync();

                bool hasAdminReadPermission = await IsAuthorizedAsync<User>(BusinessPermissionCodes.ReadUser);
                long currentUserId = _authenticationService.GetCurrentUserId();

                bool isCurrentUser = false;

                if (userIds.All(id => id == currentUserId))
                {
                    isCurrentUser = true;
                }

                if (isCurrentUser == false && hasAdminReadPermission == false)
                    throw new UnauthorizedException();
            });
        }

        public override async Task AuthorizeUserSubscriptionReadAndThrow(long? userSubscriptionIdToRead)
        {
            await _context.WithTransactionAsync(async () =>
            {
                long userId = await _context.DbSet<UserSubscription>()
                    .Where(x => x.Id == userSubscriptionIdToRead)
                    .Select(x => x.User.Id)
                    .SingleAsync();

                bool hasAdminReadPermission = await IsAuthorizedAsync<User>(BusinessPermissionCodes.ReadUser);
                long currentUserId = _authenticationService.GetCurrentUserId();

                bool isCurrentUser = false;

                if (userId == currentUserId)
                {
                    isCurrentUser = true;
                }

                if (isCurrentUser == false && hasAdminReadPermission == false)
                    throw new UnauthorizedException();
            });
        }

        #endregion
    }
}
