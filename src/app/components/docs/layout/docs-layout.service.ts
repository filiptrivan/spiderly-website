import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Subject } from 'rxjs';

export interface AppConfig {
    menuMode: string;
    scale: number;
    color: string;
}

export interface LayoutState {
    staticMenuDesktopInactive: boolean;
    overlayMenuActive: boolean;
    profileSidebarVisible: boolean;
    profileDropdownSidebarVisible:boolean;
    staticMenuMobileActive: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class DocsLayoutService {
    layoutConfig: AppConfig = {
        menuMode: 'overlay',
        scale: 14,
        color: `var(--p-primary-600)`,
    };

    state: LayoutState = {
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        profileDropdownSidebarVisible: false,
        staticMenuMobileActive: false,
    };

    private overlayOpen = new Subject<any>();

    overlayOpen$ = this.overlayOpen.asObservable();

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        
    }

    showProfileDropdownSidebar() {
        this.state.profileDropdownSidebarVisible = !this.state.profileDropdownSidebarVisible;
        if (this.state.profileDropdownSidebarVisible) {
            this.overlayOpen.next(null);
        }
    }

    onMenuToggle() {
        if (this.isOverlay()) {
            this.state.overlayMenuActive = !this.state.overlayMenuActive;
            if (this.state.overlayMenuActive) {
                this.overlayOpen.next(null);
            }
        }
        
        this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;

        if (this.state.staticMenuMobileActive) {
            this.overlayOpen.next(null);
        }
    }

    isOverlay() {
        return this.layoutConfig.menuMode === 'overlay';
    }
}
