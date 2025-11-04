using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpiderlyWebsite.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class DeletedSubscription2Table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserSubscription_Subscriptionn_SubscriptionId",
                table: "UserSubscription");

            migrationBuilder.DropTable(
                name: "Subscriptionn");

            migrationBuilder.DropIndex(
                name: "IX_UserSubscription_SubscriptionId",
                table: "UserSubscription");

            migrationBuilder.DropColumn(
                name: "SubscriptionId",
                table: "UserSubscription");

            migrationBuilder.AddColumn<string>(
                name: "StripeProductDescription",
                table: "UserSubscription",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "StripeProductId",
                table: "UserSubscription",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StripeProductDescription",
                table: "UserSubscription");

            migrationBuilder.DropColumn(
                name: "StripeProductId",
                table: "UserSubscription");

            migrationBuilder.AddColumn<int>(
                name: "SubscriptionId",
                table: "UserSubscription",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Subscriptionn",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ModifiedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    StripeSubscriptionId = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Version = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subscriptionn", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserSubscription_SubscriptionId",
                table: "UserSubscription",
                column: "SubscriptionId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserSubscription_Subscriptionn_SubscriptionId",
                table: "UserSubscription",
                column: "SubscriptionId",
                principalTable: "Subscriptionn",
                principalColumn: "Id");
        }
    }
}
