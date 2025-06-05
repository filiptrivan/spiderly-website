import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DomSanitizer } from '@angular/platform-browser';
import { DocsStep } from '../layout/docs-layout.component';
import { TerminalComponent } from '../terminal/terminal.component';
import { HighlightModule } from 'ngx-highlightjs';
import { CopyButtonComponent } from '../../copy-button/copy-button.component';
import { copyToClipboard } from '../../helpers/helper-functions';

@Component({
  selector: 'app-how-to-add-new-entity',
  templateUrl: './how-to-add-new-entity.component.html',
  styleUrl: '../layout/docs-layout.component.scss',
  imports: [
    CommonModule, 
    RouterModule, 
    ButtonModule, 
    TerminalComponent,
    HighlightModule,
    CopyButtonComponent
  ],
})
export class HowToAddNewEntityComponent {
  howToAddNewEntitySteps: DocsStep[];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.howToAddNewEntitySteps = [
      {
        title: 'Open the Backend',
        description:
          'Open the backend project located at <span class="code-block">your-app-name\\Backend\\YourAppName.sln</span> using Visual Studio.',
      },
      {
        title: 'Add New Entity',
        description: `
        In the backend project opened with Visual Studio, locate the <span class="code-block">Business\\YourAppName.Business\\Entities</span> 
        folder and add a new public class for your entity (e.g., <span class="code-block">YourEntityName.cs</span>).
        <br/> <br/>
        
        The entity class must inherit from <span class="code-block">BusinessObject&lt;ID&gt;</span> if it supports create, read, update and delete operations, 
        or from <span class="code-block">ReadonlyObject&lt;ID&gt;</span> if it is read-only and does not support create, update, or delete 
        operations from the UI.
        `,
      },
      {
        title: 'Add Your Entity to the Database',
        description: `
        In the backend project opened with Visual Studio:
        <ol>
          <li>Open <b>Package Manager Console</b> via <em>View → Other Windows → Package Manager Console</em> (or press <span class="code-block">Ctrl + \`</span>).</li>
          <li>Inside opened <b>Package Manager Console</b> window set <span class="code-block">YourAppName.Infrastructure</span> as the <b>Default Project</b> in the dropdown.</li>
          <li>Run the command in the following terminal panel to create a migration:</li>
        </ol>
        `,
        terminalMessages: [
          {text: 'add-migration YourMigrationScriptName', showCopyButton: true},
        ],
        description2: `
        <ol start="4">
          <li>Run the command in the following terminal panel to apply the migration to the database:</li>
        </ol>
        `,
        terminalMessages2: [
          {text: 'update-database', showCopyButton: true}
        ],
      },
      {
        title: 'Generate Components',
        description: `
          Use the <b>Spiderly CLI</b> to generate a default template for your new entity. You can customize the generated files afterwards. 

          Running the following command in your terminal will generate:

          <ol>
            <li>
              <b>API Controller</b> - Located in your backend project opened with Visual Studio:<br>
              <span class="code-block">YourAppName.WebAPI\\Controllers\\YourEntityNameController.cs</span>
            </li>
            <li>
              <b>Details Page</b> - In your Angular project (opened with Visual Studio Code):<br>
              <span class="code-block">src\\app\\pages\\your-entity-name\\your-entity-name-details.component.ts</span><br>
              <span class="code-block">src\\app\\pages\\your-entity-name\\your-entity-name-details.component.html</span>
            </li>
            <li>
              <b>List Page</b> - Also in your Angular project:<br>
              <span class="code-block">src\\app\\pages\\your-entity-name\\your-entity-name-table.component.ts</span><br>
              <span class="code-block">src\\app\\pages\\your-entity-name\\your-entity-name-table.component.html</span>
            </li>
          </ol>
          `,
          terminalMessages: [
            {text: 'spiderly add-new-page', showCopyButton: true},
          ]
      },
      {
        title: 'Define Routes for Your Page',
        description: `
        In the frontend project opened with Visual Studio Code, locate the <span class="code-block">src\\app\\app.routes.ts</span> file 
        and add new child routes under the layout component's <span class="code-block">children</span> array. 
        Typically, you'll want to define two routes: one for the list view (e.g., a table) and another for the detail view.
        <br/> <br/>
        `,
        codeExample: `
{
    path: 'your-entity-name',
    loadComponent: () => import('./pages/your-entity-name-table.component').then(c => c.YourEntityNameTableComponent),
    canActivate: [AuthGuard],
},
{
    path: 'your-entity-name/:id', // :id is mandatory
    loadComponent: () => import('./pages/your-entity-name-details.component').then(c => c.YourEntityNameDetailsComponent),
    canActivate: [AuthGuard],
},
`
      },
      {
        title: 'Add the Page to the Navigation Menu',
        description: `
        In the frontend project opened with Visual Studio Code, locate the <span class="code-block">src\\app\\business\\layout\\layout.component.ts</span> file and add a new menu item.
        <br/> <br/>
        <a href="https://primeng.org/icons#list" target="_blank" rel="nofollow noopener noreferrer">Browse available PrimeNG icons</a> to select a suitable icon for your menu item.
        <br/> <br/>
        `,
        codeExample: `
{ 
    label: this.translocoService.translate('YourEntityName'), 
    icon: 'pi pi-fw pi-question', // https://primeng.org/icons#list
    routerLink: ['your-entity-name'],
    visible: true,
},
`
      },
    ];
  }

  copyToClipboard(text: string): void {
    copyToClipboard(text);
  }
  
}
