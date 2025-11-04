using LightInject;
using Spiderly.Shared.Helpers;
using Spiderly.Shared.Extensions;
using SpiderlyWebsite.WebAPI.DI;
using SpiderlyWebsite.Infrastructure;
using Stripe;
using Quartz;

public class Startup
{
    public static string _jsonConfigurationFile = "appsettings.json";
    private readonly IHostEnvironment _hostEnvironment;

    public Startup(IConfiguration configuration, IHostEnvironment hostEnvironment)
    {
        Configuration = configuration;
        _hostEnvironment = hostEnvironment;

        if (_hostEnvironment.IsStaging())
            _jsonConfigurationFile = "appsettings.Staging.json";
        else if (_hostEnvironment.IsProduction())
            _jsonConfigurationFile = "appsettings.Production.json";

        SpiderlyWebsite.WebAPI.SettingsProvider.Current = Helper.ReadAssemblyConfiguration<SpiderlyWebsite.WebAPI.Settings>(_jsonConfigurationFile);
        SpiderlyWebsite.Business.SettingsProvider.Current = Helper.ReadAssemblyConfiguration<SpiderlyWebsite.Business.Settings>(_jsonConfigurationFile);
        Spiderly.Infrastructure.SettingsProvider.Current = Helper.ReadAssemblyConfiguration<Spiderly.Infrastructure.Settings>(_jsonConfigurationFile);
        Spiderly.Security.SettingsProvider.Current = Helper.ReadAssemblyConfiguration<Spiderly.Security.Settings>(_jsonConfigurationFile);
        Spiderly.Shared.SettingsProvider.Current = Helper.ReadAssemblyConfiguration<Spiderly.Shared.Settings>(_jsonConfigurationFile);
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.SpiderlyConfigureServices<SpiderlyWebsiteApplicationDbContext>();
    }

    public void ConfigureContainer(IServiceContainer container)
    {
        container.RegisterInstance(container);

        container.RegisterFrom<CompositionRoot>();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        StripeConfiguration.ApiKey = SpiderlyWebsite.WebAPI.SettingsProvider.Current.StripeApiKey;

        app.UseCors(builder =>
        {
            builder
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
                .WithOrigins(new[] { SpiderlyWebsite.WebAPI.SettingsProvider.Current.FrontendUrl })
                .WithExposedHeaders("Content-Disposition"); // Allows frontend to access the 'Content-Disposition' header to retrieve the Excel file name
        });

        app.SpiderlyConfigure(env);

        app.UseEndpoints(endpoints =>
        {
            endpoints
                .MapControllers();
        });
    }
}
