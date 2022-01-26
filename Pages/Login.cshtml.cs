using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace QuoteApp.Pages
{
    [AllowAnonymous]
    public class LoginModel : PageModel
    {
        public IActionResult OnGetAsync()
        {
            // Request a redirect to the external login provider.
            var authenticationProperties = new AuthenticationProperties
            {
                IsPersistent = true,
                RedirectUri = "/"   //after google authenticated, go back to the home page
            };
            return Challenge(authenticationProperties, GoogleDefaults.AuthenticationScheme);
        }  
    }
}