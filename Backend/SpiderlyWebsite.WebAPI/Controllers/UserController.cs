using Microsoft.AspNetCore.Mvc;
using Spiderly.Shared.Attributes;
using Spiderly.Shared.Interfaces;
using Azure.Storage.Blobs;
using Spiderly.Shared.DTO;
using Spiderly.Shared.Resources;
using Spiderly.Security.Services;
using SpiderlyWebsite.Business.Services;
using SpiderlyWebsite.Business.DTO;
using SpiderlyWebsite.Business.Entities;
using Stripe.Checkout;

namespace SpiderlyWebsite.WebAPI.Controllers
{
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class UserController : UserBaseController
    {
        private readonly IApplicationDbContext _context;
        private readonly SpiderlyWebsiteBusinessService _spiderlyWebsiteBusinessService;
        private readonly AuthenticationService _authenticationService;

        public UserController(
            IApplicationDbContext context, 
            SpiderlyWebsiteBusinessService spiderlyWebsiteBusinessService, 
            AuthenticationService authenticationService
        )
            : base(context, spiderlyWebsiteBusinessService)
        {
            _context = context;
            _spiderlyWebsiteBusinessService = spiderlyWebsiteBusinessService;
            _authenticationService = authenticationService;
        }

        [HttpGet]
        [AuthGuard]
        [SkipSpinner]
        public async Task<UserDTO> GetCurrentUser()
        {
            long userId = _authenticationService.GetCurrentUserId();
            return await _spiderlyWebsiteBusinessService.GetUserDTO(userId, false); // Don't need to authorize because he is current user
        }

    }
}

