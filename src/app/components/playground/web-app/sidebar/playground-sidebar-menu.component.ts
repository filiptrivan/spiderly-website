import { ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuitemComponent } from './playground-menuitem.component';
import { CommonModule } from '@angular/common';
import { SpiderlyClass } from '../../entities/entities';
import { PlaygroundLayoutService } from '../layout/playground-layout.service';

export interface SpiderlyMenuItem extends MenuItem{
    hasPermission?: (permissionCodes: string[]) => boolean;
    showPartnerDialog?: boolean; 
    entity?: SpiderlyClass;
}

@Component({
    selector: 'playground-sidebar-menu', // FT: Don't change selector to 'menu', because other style will apply to it
    templateUrl: './playground-sidebar-menu.component.html',
    styleUrl: '../layout/playground-layout.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        MenuitemComponent
    ]
})
export class PlaygroundSidebarMenuComponent implements OnInit {
    @Input() menu: SpiderlyMenuItem[] = [];
    @Input() lastSelectedEntity: SpiderlyClass;
    @Output() onMenuItemSelect: EventEmitter<SpiderlyClass> = new EventEmitter();

    constructor(
        public layoutService: PlaygroundLayoutService, 
        public el: ElementRef
    ) {
        
    }

    ngOnInit() {
    }


    ngOnDestroy(): void {

    }

}
