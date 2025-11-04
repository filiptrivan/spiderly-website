using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpiderlyWebsite.Business
{
    public static class SettingsProvider
    {
        public static Settings Current { internal get; set; } = new Settings();
    }

    public class Settings
    {
        public string StripeWebhookSecretKey { get; set; }
        public string SpiderlyPrivateLicenseKey { get; set; }
    }
}
