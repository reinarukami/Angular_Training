using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVCWithAngular2.Startup))]
namespace MVCWithAngular2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
