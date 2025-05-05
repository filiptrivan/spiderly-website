import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../components/section-wrapper/section-wrapper.component';
import { SpiderlyPanelComponent } from '../../components/playground/web-app/entity-details/spiderly-panels/spiderly-panel/spiderly-panel.component';
import { Meta, Title } from '@angular/platform-browser';
import { LayoutComponent } from "../../components/playground/web-app/layout/layout.component";
import { SpiderlyMenuItem } from '../../components/playground/web-app/sidebar/sidebar-menu.component';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.scss',
  imports: [
    CommonModule,
    SectionWrapperComponent,
    LayoutComponent
],
})
export class DocsComponent {
    menu: SpiderlyMenuItem[] = [
      {
          label: 'Home', 
          icon: 'pi pi-fw pi-home', 
      },
      {
          separator: true,
      }
    ];
  
  constructor(
    private titleService: Title, 
    private metaService: Meta
  ) {
    this.titleService.setTitle('Spiderly Docs - Frequently Asked Questions');
    this.metaService.updateTag({ name: 'description', content: 'Find answers to common questions about Spiderly - the powerful tool that instantly generates full-stack .NET (C#) + Angular applications from your C# classes.'});
  }


}
