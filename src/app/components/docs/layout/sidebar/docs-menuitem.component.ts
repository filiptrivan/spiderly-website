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
    @Input() parentKey!: string;

    key: string = '';
    active = false;

    activeItemClass = signal('');
    private menuSourceSubscription: Subscription;

    constructor(
        public layoutService: DocsLayoutService, 
        private menuService: SidebarMenuService, 
    ) {
        // this.menuSourceSubscription = this.menuService.menuSource$.subscribe(value => {
        //     Promise.resolve(null).then(() => {
        //         if (value.routeEvent) {
        //             this.active = (value.key === this.key || value.key.startsWith(this.key + '-')) ? true : false;
        //         }
        //         else {
        //             if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
        //                 this.active = false;
        //             }
        //         }
        //     });
        // });

        // this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
        //     this.active = false;
        // });

        // this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        //     .subscribe(params => {
        //         if (this.item.routerLink) {
        //             this.updateActiveStateFromRoute();
        //         }
        //     });
    }

    ngOnInit() {
        this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
        
        if (this.item.routerLink) {
            this.updateActiveStateFromRoute();
        }
    }

    updateActiveStateFromRoute() {
        // let activeRoute = this.router.isActive(this.item.routerLink[0], { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' });

        // if (activeRoute) {
        //     this.menuService.onMenuStateChange({ key: this.key, routeEvent: true });
        // }
    }

    itemClick(event: Event) {
        if (this.item.items) {
            this.active = !this.active;
        }

        this.menuService.onMenuStateChange({ key: this.key });
    }

    get submenuAnimation() {
        return this.active ? 'expanded' : 'collapsed';
    }

    @HostBinding('class.active-menuitem') 
    get activeClass() {
        return this.active;
    }

    ngOnDestroy() {
        if (this.menuSourceSubscription) {
            this.menuSourceSubscription.unsubscribe();
        }
    }
}
