import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DocsStep } from '../layout/docs-layout.component';
import { HighlightModule } from 'ngx-highlightjs';
import { DocsTemplateComponent } from "../docs-template/docs-template.component";

@Component({
  selector: 'app-ui-customization',
  templateUrl: './ui-customization.component.html',
  styleUrl: '../layout/docs-layout.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    HighlightModule,
    DocsTemplateComponent
],
})
export class UICustomizationComponent {
  steps: DocsStep[];
  gradientTitle = 'Customizing Spiderly Application\'s UI'
  textBelowTitle = `
  Spiderly offers full flexibility when it comes to UI customization. While you're not required to use the default Angular-based UI or the Spiderly Angular library, doing so provides the best integration and experience.
  <br/> <br/>
  This step-by-step guide will show you how to customize key UI elements of your Spiderly app, including: app name, logo, favicon, theme colors, layout menu position, and displaying time in calendar control.
  `

  constructor() {

  }

  ngOnInit() {
    this.steps = [
      {
        title: 'Change the App Name',
        fragment: 'change-app-name',
        description: `
        In the frontend project opened with Visual Studio Code, locate the <span class="code-block">src\\environments\\environment.ts</span> file and 
        change the value of <span class="code-block">companyName</span> to your the desired app name.
        `,
      },
      {
        title: 'Change the Logo',
        fragment: 'change-logo',
        description: `
        In the frontend project opened with Visual Studio Code, locate the <span class="code-block">src\\assets\\images\\logo\\logo.svg</span> file and 
        replace it with your own <span class="code-block">logo.svg</span>.
        <br/> <br/>
        ℹ️ If you want to change the logo's <i>path</i>, <i>filename</i>, or <i>file extension</i>, open 
        <span class="code-block">src\\app\\business\\services\\config.service.ts</span> and override the logo path like this: <br/> <br/>
        `,
        codeExample: `
export class ConfigService extends ConfigBaseService {
  // ... other overrides
  override logoPath: string = 'assets/your-logo-path.png';
  // ...
}
`
      },
      {
        title: 'Change the Favicon',
        fragment: 'change-favicon',
        description: `
        In the frontend project opened with Visual Studio Code, locate the <span class="code-block">src\\assets\\images\\logo\\favicon.ico</span> file and 
        change it with your own <span class="code-block">favicon.ico</span>.
        `,
      },
      {
        title: 'Change Theme Colors',
        fragment: 'change-theme-colors',
        description: `
        In the frontend project opened with Visual Studio Code, open the <span class="code-block">src\\assets\\primeng-theme.ts</span> file and 
        edit the theme values, such as the <span class="code-block">primary</span>.
        <br/> <br/>
        For more information and advanced theming options, visit the <a href="https://primeng.org/theming" target="_blank" rel="nofollow noopener noreferrer">PrimeNG Theming Guide</a>.
        `,
      },
      {
        title: 'Enable Dark Theme',
        fragment: 'enable-dark-theme',
        description: `
        In the frontend project opened with Visual Studio Code, open the <span class="code-block">src\\index.html</span> file and 
        add the <span class="code-block">dark</span> class to the <span class="code-block">html</span> tag, like this:
        <br/> <br/>
        `,
        codeExample: `
<!doctype html>
<html lang="en" class="dark">
<head>
  <!-- ... -->
</head>
`,
        description2: `
        <br/>
        For more information and advanced dark theme options, visit the <a href="https://primeng.org/theming#darkmode" target="_blank" rel="nofollow noopener noreferrer">PrimeNG Dark Theme Guide</a>.
`
      },
      {
        title: 'Displaying Time in Calendar Control on the Details Page',
        fragment: 'calendar-control-show-time',
        description: `
        <ol>
          <li>In the frontend project opened with Visual Studio Code, open the <span class="code-block">src\\app\\pages\\your-entity-name\\your-entity-name-details.html</span> file.</li>
          <li>In your details component template (<span class="code-block">&lt;your-entity-name-base-details&gt;</span>), add the following Angular output binding:</li>
        </ol>
        `,
        codeExample: `
<your-entity-base-details
// ... other attributes
(onAfterFormGroupInit)="yourEntityNameFormGroup.controls.yourDateProperty.showTime = true"
></your-entity-base-details>
`
      },
      {
        title: 'Switching to a Top Menu Layout',
        fragment: 'top-menu-layout',
        description: `
        By default, Spiderly generates your app with a side menu layout. However, if you'd prefer a top menu layout and either forgot to use the <span class="code-block">--top-menu</span> flag during 
        <span class="code-block">spiderly init</span> or changed your mind later in development, you can easily update it by following these steps:
        <ol>
          <li>In the frontend project opened with Visual Studio Code, open the <span class="code-block">src\\app\\business\\layout\\layout.component.html</span> file.</li>
          <li>Update the layout component by setting the <span class="code-block">[isSideMenuLayout]</span> attribute to <span class="code-block">false</span>:</li>
        </ol>
        `,
        codeExample: `
<spiderly-layout [menu]="menu" [isSideMenuLayout]="false"></spiderly-layout>
`,
        description2: `
        <br/>
        If you want to add custom actions (buttons, links, or any other content) to the header area, positioned to the left of the profile avatar, you can do so like this:
        <br/> <br/>
`,
        codeExample2: `
<spiderly-layout [menu]="menu" [isSideMenuLayout]="false">
    <div ACTIONS>
        Your custom actions
    </div>
</spiderly-layout>      
`
      },
      {
        title: 'Using the Spiderly Data View Component',
        fragment: 'data-view-component',
        description: `
        If you want to display data in a cleaner, card-based layout instead of a plain table — while still keeping filtering capabilities — you can use the <span class="code-block">spiderly-data-view</span> Angular component.
        <br/> <br/>
        In your <span class="code-block">html</span> file:
        <br/> <br/>
        `,
        codeExample: `
<spiderly-data-view 
[getTableDataObservableMethod]="getYourEntityNameTableDataObservableMethod" 
[filters]="filters"
>
  <ng-template #cardBody [templateType]="templateType" let-item let-index="index">
      {{item.name}}
  </ng-template>
</spiderly-data-view>
`,
        description2: `
        <br/>
        In your <span class="code-block">ts</span> file:
        <br/> <br/>
        `,
        codeExample2: `
import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { ApiService } from 'src/app/business/services/api/api.service';
import { Filter, DataViewCardBody, Role, SpiderlyControlsModule, SpiderlyDataViewComponent, SpiderlyTemplateTypeDirective } from 'spiderly';

@Component({
    selector: 'your-component-name',
    templateUrl: './your-component-name.component.html',
    imports: [
        SpiderlyTemplateTypeDirective,
        SpiderlyDataViewComponent,
        SpiderlyControlsModule,
    ]
})
export class YourEntityNameDataViewComponent implements OnInit {
    templateType?: DataViewCardBody<YourEntityName>;
    filters: Filter<YourEntityName>[];

    getYourEntityNameTableDataObservableMethod = this.apiService.getYourEntityNameTableData;

    constructor(
        private apiService: ApiService,
        private translocoService: TranslocoService,
    ) { }

    ngOnInit(){
        this.filters = [
            {name: this.translocoService.translate('Name'), filterType: 'text', field: 'name'},
            {name: this.translocoService.translate('Id'), filterType: 'numeric', field: 'id', showMatchModes: true},
            {name: this.translocoService.translate('CreatedAt'), filterType: 'date', field: 'createdAt', showMatchModes: true},
        ]
    }
}
`,
      },
    ];
  }
  
}
