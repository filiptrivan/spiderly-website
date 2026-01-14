import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { ButtonModule } from 'primeng/button';
import { DocsTemplateComponent } from '../docs-template/docs-template.component';
import { DocsStep } from '../layout/docs-layout.component';

@Component({
  selector: 'app-add-new-entity',
  templateUrl: './add-new-entity.component.html',
  styleUrl: '../layout/docs-layout.component.scss',
  imports: [CommonModule, RouterModule, ButtonModule, HighlightModule, DocsTemplateComponent],
})
export class AddNewEntityComponent {
  steps: DocsStep[];
  gradientTitle = 'Add New EF Core Entity ';
  whiteTitle = 'With Spiderly';
  textBelowTitle = `
  The EF Core entity and its attributes form the foundation of everything in
  Spiderly. All other components are built and generated based on these
  entities. <br/> <br/>
  
  In this step-by-step guide, you'll learn how to create a new
  entity in your project. This includes adding it to the backend, updating the
  database, and generating the corresponding frontend code.
  `;

  constructor() {}

  ngOnInit() {
    this.steps = [
      {
        title: 'Open the Backend',
        fragment: 'open-the-backend',
        description:
          'Open the backend project located at <span class="code-block">your-app-name\\Backend\\YourAppName.sln</span> using Visual Studio.',
      },
      {
        title: 'Add New Entity',
        fragment: 'add-new-entity',
        description: `
        In the backend project opened with Visual Studio, locate the <span class="code-block">YourAppName.Business\\Entities</span> 
        folder and add a new public class for your entity (e.g., <span class="code-block">YourEntityName.cs</span>).
        <br/> <br/>
        
        The entity class must inherit from <span class="code-block">BusinessObject&lt;ID&gt;</span> if it supports create, read, update and delete operations, 
        or from <span class="code-block">ReadonlyObject&lt;ID&gt;</span> if it is read-only and does not support create, update, or delete 
        operations from the UI.
        <br/> <br/>

        <h3>Example of an entity:</h3>
        `,
        codeExample: `
namespace YourAppName.Business.Entities
{
    [TranslatePluralEn("Your entity plural name")]
    public class YourEntityName : BusinessObject<long>
    {
        [StringLength(75, MinimumLength = 1)]
        [Required]
        public string Name { get; set; }

        [UIControlType(nameof(UIControlTypeCodes.TextArea))]
        [StringLength(500, MinimumLength = 1)]
        public string Description { get; set; }
    }
}
`,
      },
      {
        title: 'Add Your Entity to the Database',
        fragment: 'add-your-entity-to-the-database',
        description: `
        Open a terminal in the <span class="code-block">Backend</span> folder and run the following commands to create and apply a migration:
        <br/><br/>
        <b>Create a migration:</b>
        `,
        terminalMessages: [{ text: 'dotnet ef migrations add YourMigrationScriptName --project YourAppName.Infrastructure --startup-project YourAppName.WebAPI', showCopyButton: true }],
        description2: `
        <br/>
        <b>Apply the migration to the database:</b>
        `,
        terminalMessages2: [{ text: 'dotnet ef database update --project YourAppName.Infrastructure --startup-project YourAppName.WebAPI', showCopyButton: true }],
      },
      {
        title: 'Generate Components',
        fragment: 'generate-components',
        description: `
        Use the <b>Spiderly CLI</b> to generate a default template for your new entity. You can customize the generated files afterwards. <br/> <br/>

        Run the following command from the root of your application: <br/> <br/>
        `,
        terminalMessages: [{ text: 'spiderly add-new-page', showCopyButton: true }],
        description2: `
        <br/>
        This will generate the following files:

        <ol>
          <li>
            <b>List Page</b> - In your Angular project (opened with Visual Studio Code):<br>
            <span class="code-block">src\\app\\pages\\your-entity-name\\your-entity-name-list.component.ts</span><br>
            <span class="code-block">src\\app\\pages\\your-entity-name\\your-entity-name-list.component.html</span>
          </li>
          <li>
            <b>Details Page - Also in your Angular project:</b><br>
            <span class="code-block">src\\app\\pages\\your-entity-name\\your-entity-name-details.component.ts</span><br>
            <span class="code-block">src\\app\\pages\\your-entity-name\\your-entity-name-details.component.html</span>
          </li>
        </ol>
        `,
      },
      {
        title: 'Define Routes for Your Page',
        fragment: 'define-routes-for-your-page',
        description: `
        In the frontend project opened with Visual Studio Code, open the <span class="code-block">src\\app\\app.routes.ts</span> file 
        and add new route objects to the <span class="code-block">layoutRoutes</span> array:
        <br/> <br/>
        `,
        codeExample: `
{
    path: 'your-entity-name', // URL for the list page (e.g., /your-entity-name)
    loadComponent: () => import('./pages/your-entity-name/your-entity-name-list.component').then(c => c.YourEntityNameListComponent),
    canActivate: [AuthGuard],
},
{
    path: 'your-entity-name/:id', // URL for the details page (e.g., /your-entity-name/123)
    loadComponent: () => import('./pages/your-entity-name/your-entity-name-details.component').then(c => c.YourEntityNameDetailsComponent),
    canActivate: [AuthGuard],
},
`,
      },
      {
        title: 'Add the Page to the Navigation Menu',
        fragment: 'add-the-page-to-the-navigation-menu',
        description: `
        In the frontend project opened with Visual Studio Code, open the <span class="code-block">src\\app\\business\\layout\\layout.component.ts</span> file.
        
        Locate the <span class="code-block">this.menu</span> array and add a new menu item object for your entity. 
        Use the following structure as a reference:
        <br/><br/>
        `,
        codeExample: `
{ 
    label: this.translocoService.translate('YourEntityName'), 
    icon: 'pi pi-fw pi-question', // Refer to https://primeng.org/icons#list for available icons
    routerLink: ['your-entity-name'], // Must match the list page path defined in app.routes.ts
    visible: true,
},
`,
      },
    ];
  }
}
