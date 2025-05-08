import { ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuitemComponent } from './docs-menuitem.component';
import { CommonModule } from '@angular/common';
import { DocsLayoutService } from '../docs-layout.service';

export interface DocsSpiderlyMenuItem extends MenuItem{
    hasPermission?: (permissionCodes: string[]) => boolean;
    showPartnerDialog?: boolean; 
}

@Component({
    selector: 'docs-sidebar-menu', // FT: Don't change selector to 'menu', because other style will apply to it
    templateUrl: './docs-sidebar-menu.component.html',
    styleUrl: '../docs-layout.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        MenuitemComponent
    ]
})
export class SidebarMenuComponent implements OnInit {
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
