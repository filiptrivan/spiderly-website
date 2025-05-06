import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SpiderlyClass } from '../../entities/entities';
import { LayoutService } from '../docs-layout.service';
import { SpiderlyMenuItem } from './sidebar-menu.component';
import { SidebarMenuService } from './sidebar-menu.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[menuitem]',
    templateUrl: './menuitem.component.html',
    styleUrl: '../layout/layout.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class MenuitemComponent implements OnInit, OnDestroy {
    @Input() item: SpiderlyMenuItem;
    @Input() index!: number;
    
    @Output() onMenuItemSelect: EventEmitter<SpiderlyClass> = new EventEmitter();
    
    activeItemClass = signal('');
    private menuSourceSubscription: Subscription;

    constructor(
        public layoutService: LayoutService, 
        private menuService: SidebarMenuService, 
    ) {
        this.menuSourceSubscription = this.menuService.menuSource$.subscribe(entity => {
            this.updateActiveStateFromRoute(entity);
        });
    }

    ngOnInit() {
        this.updateActiveStateFromRoute(null);
    }

    updateActiveStateFromRoute(lastSelectedEntity: SpiderlyClass) {
        if (lastSelectedEntity?.name === this.item.entity?.name) {
            this.activeItemClass.set('active-route');
        }
        else{
            this.activeItemClass.set('')
        }
    }

    itemClick(event: Event) {
        this.onMenuItemSelect.next(this.item.entity)
        this.menuService.onMenuStateChange(this.item.entity);
    }

    ngOnDestroy() {
        if (this.menuSourceSubscription) {
            this.menuSourceSubscription.unsubscribe();
        }
    }
}
