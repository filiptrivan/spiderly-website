import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';

export interface AppConfig {
  menuMode: string;
  scale: number;
  color: string;
}

interface LayoutState {
  overlayMenuActive: boolean;
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
    overlayMenuActive: true,
    staticMenuMobileActive: true,
  };

  private overlayOpen = new Subject<any>();

  overlayOpen$ = this.overlayOpen.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  closeSidebar() {
    this.state.staticMenuMobileActive = false;
    this.state.overlayMenuActive = false;
  }

  onMenuToggle() {
    this.state.overlayMenuActive = !this.state.overlayMenuActive;
    if (this.state.overlayMenuActive) {
      this.overlayOpen.next(null);
    }

    this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;

    if (this.isDesktop()) {
      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }

  isDesktop() {
    if (isPlatformBrowser(this.platformId)) {
      return window.innerWidth >= 1730;
    }
    return false;
  }
}
