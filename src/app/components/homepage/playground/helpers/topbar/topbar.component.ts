import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { filter } from 'rxjs';
import { LayoutService } from '../layout/layout.service';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';

interface SpiderlyMenuItem {
  label?: string;
  icon?: string;
  showSeparator?: boolean;
  onClick?: () => void;
  showNotificationBadge?: boolean;
}

@Component({
    selector: 'topbar',
    templateUrl: './topbar.component.html',
    styleUrl: '../../playground.component.scss',
    standalone: true,
    imports: [
      CommonModule,
      AvatarModule,
      BadgeModule,
      ButtonModule
    ]
})
export class AppTopBarComponent {
  currentUser: User = new User({id: 0, email: 'user@gmail.com'});
  unreadNotificationsCount: number = 1;
  menuItems: SpiderlyMenuItem[] = [];
  avatarLabel: string = 'U';
  companyName: string = 'Spiderly';
  showProfileIcon: boolean = true;

  notificationMenuItem: SpiderlyMenuItem =       
  {
    label: 'Notifications',
    icon: 'pi-bell',
    showNotificationBadge: true,
    onClick: () => {
      this.router.navigateByUrl(`/notifications`);
    },
  };

  @ViewChild('menubutton') menubutton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  @ViewChild('topbarprofiledropdownmenubutton') topbarProfileDropdownMenuButton!: ElementRef;

  constructor(
    public layoutService: LayoutService, 
    public el: ElementRef,
    protected router: Router,
  ) { 
  }

  async ngOnInit(){
    this.menuItems = [
      {
        label: 'Profile',
        icon: 'pi-user',
        showSeparator: true,
      },
      this.notificationMenuItem,
      {
        label: 'Settings',
        icon: 'pi-cog',
      },
      {
        label: 'Logout',
        icon: 'pi-sign-out',
        showSeparator: true,
      }
    ];

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.layoutService.state.profileDropdownSidebarVisible = false;
      });
  }

  onDocumentClick(event: any) {
    if (
      !this.menu.nativeElement.contains(event.target) 
    ) {
      if (this.layoutService.state.profileDropdownSidebarVisible == true) {
        this.layoutService.state.profileDropdownSidebarVisible = false;
      }
    }
  }

}

export class User
{
  id?: number;
	email?: string;

  constructor(
  {
    id,
		email,
  }:{
    id?: number;
		email?: string;
  } = {}
  ) {
    this.id = id;
    this.email = email;
  }
}