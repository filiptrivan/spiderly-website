import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/homepage/hero/hero.component';

@Component({
  selector: 'app-homepage',
  template: ` 
  <app-hero/>
  `,
  standalone: true,
  imports: [CommonModule, HeroComponent],
})
export class HomepageComponent {}
