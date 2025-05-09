import { Component, Input, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { DocsAppTopBarComponent } from './topbar/docs-topbar.component';
import { DocsLayoutService } from './docs-layout.service';
import { CommonModule } from '@angular/common';
import { DocsSidebarMenuComponent, DocsSpiderlyMenuItem } from './sidebar/docs-sidebar-menu.component';

@Component({
    selector: 'app-docs-layout',
    templateUrl: './docs-layout.component.html',
    styleUrl: './docs-layout.component.scss',
    imports: [
        CommonModule,
        RouterModule,
        DocsAppTopBarComponent,
        DocsSidebarMenuComponent,
    ]
})
export class DocsLayoutComponent implements OnDestroy {
    @Input() menu: DocsSpiderlyMenuItem[] = [];

    overlayMenuOpenSubscription: Subscription;

    menuOutsideClickListener: any;

    profileMenuOutsideClickListener: any;

    @ViewChild(DocsSidebarMenuComponent) appSidebar!: DocsSidebarMenuComponent;

    @ViewChild(DocsAppTopBarComponent) appTopbar!: DocsAppTopBarComponent;

    constructor(
        protected layoutService: DocsLayoutService, 
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

    ngOnDestroy() {
        if (this.overlayMenuOpenSubscription) {
            this.overlayMenuOpenSubscription.unsubscribe();
        }

        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
        }
    }
}
