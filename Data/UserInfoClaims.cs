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
                User? user = _db.Users.FirstOrDefault(x => x.UserName == principal.Identity.Name);
                if (user != null){
                    ClaimsIdentity id = new ClaimsIdentity();
                    id.AddClaim(new Claim(ClaimTypes.Role, user.Role));
                    principal.AddIdentity(id);
                }
            }
            return Task.FromResult(principal);
        }
    }
}