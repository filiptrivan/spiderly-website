import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/homepage/hero/hero.component';
import { GetStartedComponent } from "../../components/homepage/get-started/get-started.component";
import { KeyBenefitsComponent } from "../../components/homepage/key-benefits/key-benefits.component";
import { WordFromAFounderComponent } from "../../components/homepage/word-from-a-founder/word-from-a-founder.component";

@Component({
  selector: 'app-homepage',
  template: ` 
  <app-hero/>
  <app-key-benefits/>
  <app-word-from-a-founder/>
  <app-get-started/>
  `,
  standalone: true,
  imports: [CommonModule, HeroComponent, GetStartedComponent, KeyBenefitsComponent, WordFromAFounderComponent],
})
export class HomepageComponent {

}
