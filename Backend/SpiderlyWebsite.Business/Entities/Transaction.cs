using Microsoft.EntityFrameworkCore;
using Spiderly.Shared.Attributes.Entity;
using Spiderly.Shared.BaseEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpiderlyWebsite.Business.Entities
{
    public class Transaction : BusinessObject<long>
    {
        /// <summary>
        /// Implemented so that even if the user is deleted, we still retain the email address that made the transaction
        /// </summary>
        [EmailAddress]
        [StringLength(70, MinimumLength = 5)]
        [Required]
        public string UserEmail { get; set; }

        [Required]
        [Precision(18, 2)]
        public decimal AmountPaid { get; set; }

        [Required]
        [StringLength(20, MinimumLength = 1)]
        public string Currency { get; set; }

        [WithMany(nameof(User.Transactions))]
        [Required]
        public virtual User User { get; set; }

        [WithMany(nameof(Subscription.Transactions))]
        [Required]
        public virtual UserSubscription Subscription { get; set; }
    }
}
