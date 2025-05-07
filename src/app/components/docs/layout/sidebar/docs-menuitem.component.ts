import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DocsLayoutService } from '../docs-layout.service';
import { DocsSpiderlyMenuItem } from './docs-sidebar-menu.component';
import { SidebarMenuService } from './docs-sidebar-menu.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[menuitem]',
    templateUrl: './docs-menuitem.component.html',
    styleUrl: '../docs-layout.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class MenuitemComponent implements OnInit, OnDestroy {
    @Input() item: DocsSpiderlyMenuItem;
    @Input() index!: number;
    
    activeItemClass = signal('');
    private menuSourceSubscription: Subscription;

    constructor(
        public layoutService: DocsLayoutService, 
        private menuService: SidebarMenuService, 
    ) {
        
    }

    ngOnInit() {
    }

    itemClick(event: Event) {
    }

    ngOnDestroy() {
        if (this.menuSourceSubscription) {
            this.menuSourceSubscription.unsubscribe();
        }
    }
}
