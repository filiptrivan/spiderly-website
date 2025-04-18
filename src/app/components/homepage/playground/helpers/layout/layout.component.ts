import { Component, Input, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AppTopBarComponent } from './topbar/topbar.component';
import { LayoutService } from './layout.service';
import { SidebarMenuComponent, SpiderlyMenuItem } from './sidebar/sidebar-menu.component';
import { CommonModule } from '@angular/common';
import { SpiderlyClass } from '../entities';
import { TableComponent } from './table/table.component';
import { PlaygroundDetailsComponent } from './playground-details/playground-details.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ToastModule } from 'primeng/toast'

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        AppTopBarComponent,
        SidebarMenuComponent,
        TableComponent,
        PlaygroundDetailsComponent,
        ToastModule,
        ConfirmDialogModule,
    ]
})
export class LayoutComponent implements OnDestroy {
    @Input() entities: SpiderlyClass[] = [];
    isTableSelected: boolean = false;
    lastSelectedEntity: SpiderlyClass;
    lastIndexSelected: number;

    @Input() menu: SpiderlyMenuItem[] = [];

    overlayMenuOpenSubscription: Subscription;

    menuOutsideClickListener: any;

    profileMenuOutsideClickListener: any;

    @ViewChild(SidebarMenuComponent) appSidebar!: SidebarMenuComponent;

    @ViewChild(AppTopBarComponent) appTopbar!: AppTopBarComponent;

    constructor(
        protected layoutService: LayoutService, 
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

    ngOnDestroy() {
        if (this.overlayMenuOpenSubscription) {
            this.overlayMenuOpenSubscription.unsubscribe();
        }

        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
        }

    }
}
