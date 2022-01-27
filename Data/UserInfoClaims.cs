using Microsoft.AspNetCore.Authentication;
using System.Security.Claims;

namespace QuoteApp.Data
{
    public class UserInfoClaims : IClaimsTransformation
    {

        private readonly DatabaseContext _db;
        public UserInfoClaims(DatabaseContext db){
            _db = db;
        }
        public Task<ClaimsPrincipal> TransformAsync(ClaimsPrincipal principal)
        {
            if (!principal.HasClaim(c => c.Type == ClaimTypes.Role))
            {                
                var email = principal.FindFirstValue(ClaimTypes.Email);
                // matching google alccount name
                //User? user = _db.Users.FirstOrDefault(x => x.UserName == principal.Identity.Name);
                User? user = _db.Users.FirstOrDefault(x => x.Email == email);
                if (user != null){
                    ClaimsIdentity id = new ClaimsIdentity();
                    id.AddClaim(new Claim("Role", user.Role));
                    principal.AddIdentity(id);
                }
            }
            return Task.FromResult(principal);
        }
    }
}