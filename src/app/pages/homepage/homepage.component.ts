import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/homepage/hero/hero.component';
import { KeyBenefitsComponent } from "../../components/homepage/key-benefits/key-benefits.component";
import { WordFromAFounderComponent } from "../../components/homepage/word-from-a-founder/word-from-a-founder.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  template: ` 
  <app-hero/>
  <app-key-benefits/>
  <app-word-from-a-founder/>
  `,
  standalone: true,
  imports: [CommonModule, HeroComponent, KeyBenefitsComponent, WordFromAFounderComponent],
})
export class HomepageComponent {
  
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {
    this.titleService.setTitle('Spiderly - .NET (C#) + Angular Web Apps Generator');
    this.metaService.updateTag({ name: 'description', content: 'Spiderly is a .NET (C#) library that turns C# classes into full .NET (C#) + Angular web apps with full customization. No more boilerplate code - focus only on building logic.' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }

}
