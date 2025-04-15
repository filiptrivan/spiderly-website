import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/homepage/hero/hero.component';
import { GetStartedComponent } from "../../components/homepage/get-started/get-started.component";

@Component({
  selector: 'app-homepage',
  template: ` 
  <app-hero/>
  <app-get-started/>
  `,
  standalone: true,
  imports: [CommonModule, HeroComponent, GetStartedComponent],
})
export class HomepageComponent {}
