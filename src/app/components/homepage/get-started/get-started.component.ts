import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWrapperComponent } from '../../section-wrapper/section-wrapper.component';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    SectionWrapperComponent,
  ]
})
export class GetStartedComponent {
  terminalMessages: string[] = [
    "spiderly init",
    "App name without spaces: SpiderlyDemoApp",
    "Template type (blank/loyalty/invertory management): blank",
    "Basic Spiderly app structure created!",
  ];
}
