
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { createFakeGoogleWrapper, ProfileAvatarComponent, ProfileAvatarModalMenuItem } from 'spiderly';
import { AuthService } from 'src/app/business/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    ProfileAvatarComponent,
]
})
export class HeaderComponent {
  isSideMenuActive = false;

  profileDialogMenuItems: ProfileAvatarModalMenuItem[] = [
    {
      label: 'Transactions', 
      icon: 'pi pi-wallet',
      showSeparator: true,
      onClick: () => {
        this.router.navigateByUrl('transactions');
      }
    },
    {
      label: 'Subscriptions', 
      icon: 'pi pi-star',
      onClick: () => {
        this.router.navigateByUrl('subscriptions');
      }
    },
    {
      label: 'Sign Out', 
      icon: 'pi pi-sign-out',
      showSeparator: true,
      onClick: () => {
        this.authService.logout();
      }
    },
  ];

  isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private authService: AuthService,
    private router: Router,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    
  }

  toggleSideMenu() {
    this.isSideMenuActive = !this.isSideMenuActive;
  }

  openSignInDialog() {
    this.authService.lastClickedExternalLoginButton = 'header';
    createFakeGoogleWrapper().click();
  }
}

declare global {
  interface Window {
    google: any;
  }
}
