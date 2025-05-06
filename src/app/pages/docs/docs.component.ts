import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../components/section-wrapper/section-wrapper.component';
import { Meta, Title } from '@angular/platform-browser';
import { PlaygroundLayoutComponent } from "../../components/playground/web-app/layout/playground-layout.component";
import { SpiderlyMenuItem } from '../../components/playground/web-app/sidebar/playground-sidebar-menu.component';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.scss',
  imports: [
    CommonModule,
    SectionWrapperComponent,
    PlaygroundLayoutComponent
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
