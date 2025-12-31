import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [CommonModule, RouterModule],
})
export class HeaderComponent {
  isSideMenuActive = false;

  toggleSideMenu() {
    this.isSideMenuActive = !this.isSideMenuActive;
  }
}
