using Microsoft.EntityFrameworkCore;
using SpiderlyWebsite.Business.Entities;
using Spiderly.Infrastructure;

namespace SpiderlyWebsite.Infrastructure
{
    public partial class SpiderlyWebsiteApplicationDbContext : ApplicationDbContext<User> // https://stackoverflow.com/questions/41829229/how-do-i-implement-dbcontext-inheritance-for-multiple-databases-in-ef7-net-co
    {
        public SpiderlyWebsiteApplicationDbContext(DbContextOptions<SpiderlyWebsiteApplicationDbContext> options)
        : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            return await base.SaveChangesAsync(cancellationToken);
        }

    }
}
