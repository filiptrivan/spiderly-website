import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWrapperComponent } from '../../section-wrapper/section-wrapper.component';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: [
    './tech-stack.component.scss',
    '../../../pages/homepage/homepage.component.scss',
  ],
  imports: [CommonModule, RouterModule, SectionWrapperComponent],
})
export class TechStackComponent {
  techStack: TechStack[] = [];

  constructor(
  ) {
      
  }

  ngOnInit(){
    this.techStack = [
      {
        title: 'Backend',
        subtitle: '.NET (C#)',
        logoUrls: ['dotnet-logo.svg']
      },
      {
        title: 'Frontend',
        subtitle: 'Angular',
        logoUrls: ['angular-logo.svg']
      },
      {
        title: 'Database',
        subtitle: 'SQL Server or PostgreSQL',
        logoUrls: ['microsoft-sql-server-logo.svg', 'postgresql-logo.svg']
      },
      {
        title: 'ORM',
        subtitle: 'Entity Framework Core',
        logoUrls: ['entity-framework-core-logo.svg']
      },
      {
        title: 'UI Components Library',
        subtitle: 'PrimeNG',
        logoUrls: ['primeng-logo.svg'],
      },
      {
        title: 'Logging',
        subtitle: 'Serilog',
        logoUrls: ['serilog-logo.svg'],
      },
      {
        title: 'Backend Validation',
        subtitle: 'FluentValidation',
        logoUrls: ['fluent-validation-logo.svg'],
      },
      {
        title: 'Object Mapping',
        subtitle: 'Mapster',
        logoUrls: ['mapster-logo.svg'],
      },
      {
        title: 'Frontend Translations',
        subtitle: 'Transloco',
        logoUrls: ['transloco-logo.svg'],
      },
    ];
  }
}

export interface TechStack {
  title: string;
  subtitle: string;
  logoUrls: string[];
}
