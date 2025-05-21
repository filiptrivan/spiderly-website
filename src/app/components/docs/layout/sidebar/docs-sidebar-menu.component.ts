import { ElementRef, Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuitemComponent } from './docs-menuitem.component';
import { CommonModule } from '@angular/common';
import { DocsLayoutService } from '../docs-layout.service';

export interface DocsSpiderlyMenuItem extends MenuItem{
}

@Component({
    selector: 'docs-sidebar-menu', // FT: Don't change selector to 'menu', because other style will apply to it
    templateUrl: './docs-sidebar-menu.component.html',
    styleUrl: '../docs-layout.component.scss',
    imports: [
        CommonModule,
        MenuitemComponent
    ]
})
export class DocsSidebarMenuComponent implements OnInit {
    @Input() menu: DocsSpiderlyMenuItem[] = [];

    constructor(
        public layoutService: DocsLayoutService, 
        public el: ElementRef
    ) {
        
    }

    ngOnInit() {
    }


    ngOnDestroy(): void {

    }

}
