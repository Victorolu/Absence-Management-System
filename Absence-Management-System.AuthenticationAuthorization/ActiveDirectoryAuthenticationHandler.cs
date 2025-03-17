using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Absence_Management_System.AuthenticationAuthorization
{
    public class ActiveDirectoryAuthenticationHandler(
        IOptionsMonitor<AuthenticationSchemeOptions> options,
        ILoggerFactory logger,
        UrlEncoder encoder)
        : AuthenticationHandler<AuthenticationSchemeOptions>(options, logger, encoder)
    {
        public const string AdAuthentication = "AdAuthentication";


        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            var test = Request.Headers.Authorization;
            return AuthenticateResult.NoResult();
        }
    }
}
