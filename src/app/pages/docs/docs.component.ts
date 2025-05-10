import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SpiderlyMenuItem } from '../../components/playground/web-app/sidebar/playground-sidebar-menu.component';
import { DocsLayoutComponent } from '../../components/docs/layout/docs-layout.component';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  imports: [
    CommonModule,
    DocsLayoutComponent,
],
})
export class DocsComponent {
    menu: SpiderlyMenuItem[] = [
      {
        label: 'Docs home', 
        icon: 'pi pi-fw pi-home', 
        routerLink: '/docs/home',
      },
      {
        separator: true,
      },
      {
        items: [
          {
              label: 'Source generators', 
              icon: 'pi pi-fw pi-home', 
              items: [
                {
                  label: 'Authorize',
                  routerLink: 'authorize'
                }
              ]
          },
        ]
      }
    ];
  
  constructor(
    private titleService: Title, 
    private metaService: Meta
  ) {
    this.titleService.setTitle('Spiderly Docs - Frequently Asked Questions');
    this.metaService.updateTag({ name: 'description', content: 'Find answers to common questions about Spiderly - the powerful tool that instantly generates full-stack .NET (C#) + Angular applications from your C# classes.'});
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }


}
