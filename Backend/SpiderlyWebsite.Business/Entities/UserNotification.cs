using Spiderly.Shared.Attributes.Entity;

namespace SpiderlyWebsite.Business.Entities
{
    [M2M]
    public class UserNotification 
    {
        [M2MWithMany(nameof(Notification.Recipients))]
        public virtual Notification Notification { get; set; }

        [M2MWithMany(nameof(User.Notifications))]
        public virtual User User { get; set; }

        public bool IsMarkedAsRead { get; set; }
    }
}
