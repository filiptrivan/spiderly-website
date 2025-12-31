import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SectionWrapperComponent } from '../../components/section-wrapper/section-wrapper.component';
import { ButtonModule } from 'primeng/button';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, CommonModule, SectionWrapperComponent, ButtonModule],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {
    this.titleService.setTitle('404 Page Not Found | Spiderly');
    this.metaService.updateTag({
      name: 'description',
      content:
        "The page you're looking for doesn't exist. Return to the Spiderly homepage to generate your .NET (C#) + Angular web app.",
    });
    this.metaService.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }
}
