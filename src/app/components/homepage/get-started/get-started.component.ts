import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWrapperComponent } from "../../section-wrapper/section-wrapper.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss',
  standalone: true,
  imports: [
    CommonModule, 
    SectionWrapperComponent, 
    RouterModule
  ]
})
export class GetStartedComponent {
  terminalMessages: string[] = [
    "spiderly init",
    "App name without spaces: SpiderlyTestApp",
    "Template type (blank/loyalty/invertory management): blank",
    "Basic app structure created, now you can use Spiderly to generate the rest of the app!",
  ];
}
