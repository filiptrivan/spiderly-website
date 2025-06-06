import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DocsStep } from '../layout/docs-layout.component';
import { HighlightModule } from 'ngx-highlightjs';
import { DocsTemplateComponent } from "../docs-template/docs-template.component";

@Component({
  selector: 'app-entity-authorization',
  templateUrl: './entity-authorization.component.html',
  styleUrl: '../layout/docs-layout.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    HighlightModule,
    DocsTemplateComponent
],
})
export class EntityAuthorizationComponent {
  steps: DocsStep[];
  gradientTitle = 'Entity Authorization: Create, Read, Update, Delete';
  textBelowTitle = `
  By default, all entities require authorization for Create, Read, Update, and Delete operations. 
  If your code encounters an authorization issue (e.g., an <span class="code-block">UnauthorizedException - You don\'t have the necessary rights to perform the operation.</span>), it means the current user lacks the necessary permissions.
  <br/> <br/>
  ⚠️ <b>Skipping Authorization</b>:
  If you want to <b>explicitly bypass authorization</b> for an entity, you can apply the <span class="code-block">[DoNotAuthorize]</span> attribute.  
  This disables all security checks for that entity across all operations.
  <br/> <br/>
  If your entity requires access control, follow the steps in this tutorial to configure proper authorization.
  `

  constructor() {

  }

  ngOnInit() {
    this.steps = [
      {
        title: 'Insert Permissions into the Database',
        description: `
        <ol>
          <li>Open <b>SQL Server Management Studio (SSMS)</b>.</li>
          <li>Connect to your SQL Server instance (see <a href="/docs/getting-started#step-9" target="_blank" rel="noopener" title="Go to Connect to SQL Server Explanation">Step 9 in the Getting Started guide</a>).</li>
          <li>Locate your application database in the Object Explorer.</li>
          <li>Right-click the database and select <em>New Query</em>.</li>
          <li>Execute the SQL commands below, replacing <span class="code-block">YourEntityName</span> with the actual entity name:</li>
        </ol>
        `,
        codeExample: `
BEGIN TRANSACTION;

INSERT INTO Permission (Name, Description, Code) VALUES (N'View YourEntityName', NULL, N'ReadYourEntityName');
INSERT INTO Permission (Name, Description, Code) VALUES (N'Edit existing YourEntityName', NULL, N'UpdateYourEntityName');
INSERT INTO Permission (Name, Description, Code) VALUES (N'Add new YourEntityName', NULL, N'InsertYourEntityName');
INSERT INTO Permission (Name, Description, Code) VALUES (N'Delete YourEntityName', NULL, N'DeleteYourEntityName');

COMMIT;
`,
      },
      {
        title: 'Assign Permissions to a Role',
        description: `
        In the application UI:
        <ol>
          <li>Navigate to <em>Administration → Roles</em>.</li>
          <li>Select the role you want to modify.</li>
          <li>In the <b>Permissions</b> control, add the newly created permissions.</li>
        </ol>
        This ensures users assigned to this role will have access to the specified entity operations.
        `,
      },
    ];
  }
  
}
