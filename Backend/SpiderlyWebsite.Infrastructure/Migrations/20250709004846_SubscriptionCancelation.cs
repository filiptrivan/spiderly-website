using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpiderlyWebsite.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class SubscriptionCancelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Canceled",
                table: "UserSubscription",
                type: "bit",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Canceled",
                table: "UserSubscription");
        }
    }
}
