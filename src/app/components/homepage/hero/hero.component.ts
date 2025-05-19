import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWrapperComponent } from "../../section-wrapper/section-wrapper.component";
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  standalone: true,
  imports: [
    CommonModule, 
    SectionWrapperComponent, 
    ButtonModule,
    RouterModule
  ]
})
export class HeroComponent {

}
