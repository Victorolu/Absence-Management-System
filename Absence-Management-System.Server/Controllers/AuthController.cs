using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Absence_Management_System.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.DirectoryServices;

namespace Absence_Management_System.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController(IConfiguration config) : ControllerBase
    {

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IResult Login([FromBody] User user)
        {
            if (!ValidateUser(user)) return Results.Unauthorized();
            var key = Encoding.ASCII.GetBytes(config["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity([
                    new Claim("Id", Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                ]),
                Expires = DateTime.Now.AddMinutes(Convert.ToDouble(config["Jwt:ExpiryInMinutes"])),
                Issuer = config["Jwt:Issuer"],
                Audience = config["Jwt:Audience"],
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha512Signature)
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = tokenHandler.WriteToken(token);

            return Results.Ok(jwtToken);

        }

        private bool ValidateUser(User user)
        {
            try
            {
                var userEntry = new DirectoryEntry($"LDAP://{config["Jwt:DomainName"]}", user.UserName, user.Password);
                var obj = userEntry.NativeObject;
                return true;
            }
            catch (DirectoryServicesCOMException ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
        }
    }
}
