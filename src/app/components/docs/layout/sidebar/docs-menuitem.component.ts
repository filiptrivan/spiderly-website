import { Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DocsLayoutService } from '../docs-layout.service';
import { DocsSpiderlyMenuItem } from './docs-sidebar-menu.component';
import { SidebarMenuService } from './docs-sidebar-menu.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[menuitem]',
    templateUrl: './docs-menuitem.component.html',
    styleUrl: '../docs-layout.component.scss',
    animations: [
        trigger('children', [
            state('collapsed', style({
                height: '0'
            })),
            state('expanded', style({
                height: '*'
            })),
            transition('collapsed <=> expanded', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class MenuitemComponent implements OnInit, OnDestroy {
    @Input() item: DocsSpiderlyMenuItem;
    @Input() index!: number;
    @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;
    @Input() parentKey!: string;

    key: string = '';
    active = false;

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

    get submenuAnimation() {
        return this.root ? 'expanded' : (this.active ? 'expanded' : 'collapsed');
    }

    ngOnDestroy() {
        if (this.menuSourceSubscription) {
            this.menuSourceSubscription.unsubscribe();
        }
    }
}
