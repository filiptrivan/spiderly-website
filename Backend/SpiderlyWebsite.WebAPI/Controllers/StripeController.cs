using Azure;
using Microsoft.AspNetCore.Mvc;
using Stripe;
using Stripe.Checkout;
using Stripe.Events;
using Stripe.Apps;
using Spiderly.Shared.Interfaces;
using SpiderlyWebsite.Business.Services;
using Spiderly.Security.Services;
using Spiderly.Shared.Extensions;
using SpiderlyWebsite.Business.Entities;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;
using Spiderly.Shared.Exceptions;
using Spiderly.Shared.Attributes.Entity.UI;
using Spiderly.Shared.Attributes;

namespace SpiderlyWebsite.WebAPI.Controllers
{
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class StripeController : Controller
    {
        private readonly IApplicationDbContext _context;
        private readonly SpiderlyWebsiteBusinessService _spiderlyWebsiteBusinessService;
        private readonly SecurityBusinessService<User> _securityBusinessService;
        private readonly AuthenticationService _authenticationService;

        public StripeController(
            IApplicationDbContext context,
            SpiderlyWebsiteBusinessService spiderlyWebsiteBusinessService,
            AuthenticationService authenticationService,
            SecurityBusinessService<User> securityBusinessService
        )
        {
            _context = context;
            _spiderlyWebsiteBusinessService = spiderlyWebsiteBusinessService;
            _authenticationService = authenticationService;
            _securityBusinessService = securityBusinessService;
        }

        [HttpPost]
        public async Task<string> CreateCheckoutSession()
        {
            return await _spiderlyWebsiteBusinessService.CreateCheckoutSession(SettingsProvider.Current.FrontendUrl);
        }

        [HttpPost]
        public async Task<IActionResult> Webhook()
        {
            string json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();
            string stripeSignature = Request.Headers["Stripe-Signature"];

            await _spiderlyWebsiteBusinessService.HandleStripeWebhook(json, stripeSignature);

            return Ok();
        }

        [HttpGet]
        [AuthGuard]
        public async Task CancelSubscription(long subscriptionId)
        {
            await _spiderlyWebsiteBusinessService.CancelSubscription(subscriptionId);
        }

    }
}
