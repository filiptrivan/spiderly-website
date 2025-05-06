import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SectionWrapperComponent } from '../../components/section-wrapper/section-wrapper.component';
import { ButtonModule } from 'primeng/button';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, CommonModule, SectionWrapperComponent, ButtonModule],
  template: `
    <app-section-wrapper textAlign="center">
      <div>
        <h1 style="margin-bottom: 15px">
          <div class="gradient-title">Page Not Found</div>
          <div class="title">Oops! Something went wrong.</div>
        </h1>
        <div class="text-below-title" style="margin-bottom: 30px">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track to generating your web apps with Spiderly.
        </div>
        <div>
          <p-button [routerLink]="['/']" label="Go to Homepage"></p-button>
        </div>
      </div>
    </app-section-wrapper>
  `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {
    this.titleService.setTitle('Page Not Found - Spiderly');
    this.metaService.updateTag({ name: 'description', content: 'The page you\'re looking for doesn\'t exist. Return to Spiderly homepage to generate your .NET (C#) + Angular web apps.' });
  }
} 