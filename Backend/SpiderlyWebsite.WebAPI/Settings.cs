namespace SpiderlyWebsite.WebAPI
{
    public static class SettingsProvider
    {
        public static Settings Current { internal get; set; } = new Settings();
    }

    public class Settings
    {
        public string FrontendUrl { get; set; }
        public string ExcelContentType { get; set; }
        public string StripeApiKey { get; set; }
    }
}
