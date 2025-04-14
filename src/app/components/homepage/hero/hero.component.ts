import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWrapperComponent } from "../../section-wrapper/section-wrapper.component";
// import { ButtonComponent } from '../../button/button.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  standalone: true,
  imports: [
    CommonModule, 
    SectionWrapperComponent, 
    // ButtonComponent,
    ButtonModule
  ]
})
export class HeroComponent {
  terminalMessages: string[] = [
    "spiderly init",
    "App name without spaces: SpiderlyTestApp",
    "Template type (blank/loyalty/invertory management): blank",
    "Basic app structure created, now you can use Spiderly to generate the rest of the app!",
  ];
}
