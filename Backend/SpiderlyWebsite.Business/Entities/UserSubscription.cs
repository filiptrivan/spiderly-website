using Spiderly.Shared.Attributes.Entity;
using Spiderly.Shared.Attributes.Entity.Translation;
using Spiderly.Shared.Attributes.Entity.UI;
using Spiderly.Shared.BaseEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpiderlyWebsite.Business.Entities
{
    public class UserSubscription : BusinessObject<long>
    {
        [UIDoNotGenerate]
        [DisplayName]
        [StringLength(500, MinimumLength = 1)]
        [Required]
        public string StripeProductName { get; set; }

        [UIDoNotGenerate]
        [StringLength(100, MinimumLength = 1)]
        [Required]
        public string StripeProductId { get; set; }

        [UIDoNotGenerate]
        [TranslateEn("License Key")]
        [UIControlWidth("col-8")]
        [StringLength(200, MinimumLength = 10)]
        [Required]
        public string ApiKeyValue { get; set; }

        [UIDoNotGenerate]
        [Required]
        public DateTime ValidFrom { get; set; }

        [UIDoNotGenerate]
        [Required]
        public DateTime ValidTo { get; set; }

        public bool? Canceled { get; set; }

        [UIDoNotGenerate]
        [WithMany(nameof(User.UserSubscriptions))]
        [CascadeDelete]
        [Required]
        public virtual User User { get; set; }

        public virtual List<Transaction> Transactions { get; } = new();
    }
}
