using Spiderly.Shared.Attributes.Entity;
using Spiderly.Shared.Attributes.Entity.UI;
using Spiderly.Shared.BaseEntities;
using Spiderly.Shared.Enums;
using System.ComponentModel.DataAnnotations;
using Spiderly.Shared.Interfaces;
using SpiderlyWebsite.Business.DTO;

namespace SpiderlyWebsite.Business.Entities
{
    public class Notification : BusinessObject<long>, INotification<User>
    {
        [UIControlWidth("col-8")]
        [DisplayName]
        [StringLength(100, MinimumLength = 1)]
        [Required]
        public string Title { get; set; }

        [UIControlType(nameof(UIControlTypeCodes.TextArea))]
        [StringLength(400, MinimumLength = 1)]
        [Required]
        public string Description { get; set; }

        [UIControlType(nameof(UIControlTypeCodes.Editor))]
        [StringLength(1000, MinimumLength = 1)]
        public string EmailBody { get; set; }

        #region UITableColumn
        [UITableColumn(nameof(UserDTO.Email))]
        [UITableColumn(nameof(UserDTO.CreatedAt))]
        #endregion
        [SimpleManyToManyTableLazyLoad]
        public virtual List<User> Recipients { get; } = new(); // M2M
    }
}
