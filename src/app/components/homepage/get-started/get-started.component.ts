import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss',
  standalone: true,
  imports: [
    CommonModule, 
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
