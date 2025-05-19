import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/homepage/hero/hero.component';
import { KeyBenefitsComponent } from "../../components/homepage/key-benefits/key-benefits.component";
import { WordFromAFounderComponent } from "../../components/homepage/word-from-a-founder/word-from-a-founder.component";
import { Meta, Title } from '@angular/platform-browser';
import { KeyFeaturesComponent } from "../../components/homepage/key-features/key-features.component";
import { TechStackComponent } from "../../components/homepage/tech-stack/tech-stack.component";

@Component({
  selector: 'app-homepage',
  template: ` 
  <app-hero/>
  <app-key-features/>
  <app-tech-stack/>
  <app-key-benefits/>
  <app-word-from-a-founder/>
  `,
  standalone: true,
  imports: [CommonModule, HeroComponent, KeyBenefitsComponent, WordFromAFounderComponent, KeyFeaturesComponent, TechStackComponent],
})
export class HomepageComponent {
  
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {
    this.titleService.setTitle('.NET (C#) Web App Boilerplate Code Generator | Spiderly');
    this.metaService.updateTag({ name: 'description', content: 'Spiderly is a free open-source .NET (C#) boilerplate code generator that turns EF Core model into fully customizable .NET (C#) + Angular web application.' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }

}
