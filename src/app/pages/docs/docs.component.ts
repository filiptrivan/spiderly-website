import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { DocsLayoutComponent } from '../../components/docs/layout/docs-layout.component';
import { DocsSpiderlyMenuItem } from '../../components/docs/layout/sidebar/docs-sidebar-menu.component';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  imports: [
    CommonModule,
    DocsLayoutComponent,
],
})
export class DocsComponent {
    menu: DocsSpiderlyMenuItem[] = [
      {
        items: [
          {
            label: 'Getting Started', 
            icon: 'pi pi-fw pi-home', 
            routerLink: '/docs/getting-started',
          },
          {
            separator: true,
          },
          {
            label: 'How to Add Entity', 
            icon: 'pi pi-fw pi-compass', 
            routerLink: '/docs/how-to-add-new-entity',
          },
          {
            label: 'Attributes', 
            icon: 'pi pi-fw pi-tag', 
            routerLink: '/docs/attributes',
          },
        ]
      }
    ];
  
  constructor(
    private metaService: Meta
  ) {
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }


}
