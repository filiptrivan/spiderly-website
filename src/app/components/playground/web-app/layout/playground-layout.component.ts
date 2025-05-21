import { Component, Input, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { PlaygroundAppTopBarComponent } from '../topbar/playground-topbar.component';
import { PlaygroundLayoutService } from './playground-layout.service';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ToastModule } from 'primeng/toast'
import { SpiderlyClass } from '../../entities/entities';
import { EntityDetailsComponent } from '../entity-details/entity-details.component';
import { PlaygroundSidebarMenuComponent, SpiderlyMenuItem } from '../sidebar/playground-sidebar-menu.component';
import { TableComponent } from '../table/table.component';
import { getEntityPluralName } from '../entity-details/services/helper-functions';
import { PrimengOption } from '../entity-details/entities/primeng-option';

@Component({
    selector: 'app-playground-layout',
    templateUrl: './playground-layout.component.html',
    styleUrl: './playground-layout.component.scss',
    imports: [
        CommonModule,
        RouterModule,
        PlaygroundAppTopBarComponent,
        PlaygroundSidebarMenuComponent,
        TableComponent,
        EntityDetailsComponent,
        ToastModule,
        ConfirmDialogModule,
    ]
})
export class PlaygroundLayoutComponent implements OnDestroy {
    @Input() entities: SpiderlyClass[] = [];
    dropdownOptions: { [key: string]: PrimengOption[] } = {};

    isTableSelected: boolean = false;
    lastSelectedEntity: SpiderlyClass;
    lastIndexSelected: number;

    @Input() menu: SpiderlyMenuItem[] = [];

    overlayMenuOpenSubscription: Subscription;

    menuOutsideClickListener: any;

    profileMenuOutsideClickListener: any;

    @ViewChild(PlaygroundSidebarMenuComponent) appSidebar!: PlaygroundSidebarMenuComponent;

    @ViewChild(PlaygroundAppTopBarComponent) appTopbar!: PlaygroundAppTopBarComponent;

    constructor(
        protected layoutService: PlaygroundLayoutService, 
        protected renderer: Renderer2, 
        protected router: Router,
    ) {
        this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
            if (!this.menuOutsideClickListener) {
                this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                    const isOutsideClicked = !(
                        this.appSidebar.el.nativeElement.isSameNode(event.target) || 
                        this.appSidebar.el.nativeElement.contains(event.target) ||
                        this.appTopbar.menubutton.nativeElement.isSameNode(event.target) || 
                        this.appTopbar.menubutton.nativeElement.contains(event.target)
                    );
                    
                    if (isOutsideClicked) {
                        this.hideMenu();
                    }
                });
            }

            if (!this.profileMenuOutsideClickListener) {
                this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                    const isOutsideClicked = !(
                        this.appTopbar.menu.nativeElement.isSameNode(event.target) || 
                        this.appTopbar.menu.nativeElement.contains(event.target)
                    );

                    if (isOutsideClicked) {
                        this.hideProfileMenu();
                    }
                });
            }
        });

        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                this.hideMenu();
                this.hideProfileMenu();
            });
    }

    ngOnInit() {
        
    }

    hideMenu() {
        this.layoutService.state.staticMenuMobileActive = false;
        this.layoutService.state.overlayMenuActive = false;

        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
            this.menuOutsideClickListener = null;
        }
    }

    hideProfileMenu() {
        this.layoutService.state.profileSidebarVisible = false;

        if (this.profileMenuOutsideClickListener) {
            this.profileMenuOutsideClickListener();
            this.profileMenuOutsideClickListener = null;
        }
    }

    get containerClass() {
        return {
            'layout-overlay': this.layoutService.layoutConfig.menuMode === 'overlay',
            'layout-static': this.layoutService.layoutConfig.menuMode === 'static',
            'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.layoutConfig.menuMode === 'static',
            'layout-overlay-active': this.layoutService.state.overlayMenuActive,
            'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
            'p-ripple-disabled': true
        }
    }

    menuItemSelectChange = (entity: SpiderlyClass) => {
        this.lastSelectedEntity = entity;
        this.isTableSelected = true;
    }

    navigateToDetails(index: number) {
        this.isTableSelected = false;
        this.lastIndexSelected = index;

    }

    getEntityPluralName(entity: SpiderlyClass): string {
        return getEntityPluralName(entity);
    }

    ngOnDestroy() {
        if (this.overlayMenuOpenSubscription) {
            this.overlayMenuOpenSubscription.unsubscribe();
        }

        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
        }
    }
}
