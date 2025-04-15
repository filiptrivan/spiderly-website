import { ElementRef, Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../layout/layout.service';
import { MenuitemComponent } from './menuitem.component';
import { CommonModule } from '@angular/common';

export interface SpiderlyMenuItem extends MenuItem{
    hasPermission?: (permissionCodes: string[]) => boolean;
    showPartnerDialog?: boolean; 
}

@Component({
    selector: 'sidebar-menu', // FT: Don't chane selector to 'menu', because other style will apply to it
    templateUrl: './sidebar-menu.component.html',
    styleUrl: '../../playground.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        MenuitemComponent
    ]
})
export class SidebarMenuComponent implements OnInit {
    @Input() menu: SpiderlyMenuItem[] = [];

    constructor(
        public layoutService: LayoutService, 
        public el: ElementRef
    ) {
        
    }

    ngOnInit() {
    }


    ngOnDestroy(): void {

    }

}
