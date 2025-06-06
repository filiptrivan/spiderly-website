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
  This step-by-step guide will show you how to customize key UI elements of your Spiderly app, including: app name, logo, favicon, and theme colors.
  `

  constructor() {

  }

  ngOnInit() {
    this.steps = [
      {
        title: 'Change the App Name',
        description: `
        In the project opened with Visual Studio Code, locate the <span class="code-block">src\\environments\\environment.ts</span> file and 
        change the value of <span class="code-block">companyName</span> to your the desired app name.
        `,
      },
      {
        title: 'Change the Logo',
        description: `
        In the project opened with Visual Studio Code, locate the <span class="code-block">src\\assets\\images\\logo\\logo.svg</span> file and 
        change it with your own <span class="code-block">logo.svg</span>.
        `,
      },
      {
        title: 'Change the Favicon',
        description: `
        In the project opened with Visual Studio Code, locate the <span class="code-block">src\\assets\\images\\logo\\favicon.ico</span> file and 
        change it with your own <span class="code-block">favicon.ico</span>.
        `,
      },
      {
        title: 'Change Theme Colors',
        description: `
        In the project opened with Visual Studio Code, locate the <span class="code-block">src\\assets\\primeng-theme.ts</span> file and 
        edit the theme values, such as the <span class="code-block">primary</span>.
        <br/> <br/>
        For reference and advanced theming options, visit the <a href="https://primeng.org/theming" target="_blank" rel="nofollow noopener noreferrer">PrimeNG Theming Guide</a>.
        `,
      },
    ];
  }
  
}
