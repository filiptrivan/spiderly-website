using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpiderlyWebsite.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdateUserSubscription : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StripeProductDescription",
                table: "UserSubscription",
                newName: "StripeProductName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StripeProductName",
                table: "UserSubscription",
                newName: "StripeProductDescription");
        }
    }
}
