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
  standalone: true,
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
        logoUrl: 'dotnet-logo.svg'
      },
      {
        title: 'Frontend',
        subtitle: 'Angular',
        logoUrl: 'angular-logo.svg'
      },
      {
        title: 'Database',
        subtitle: 'Microsoft SQL Server',
        logoUrl: 'microsoft-sql-server-logo.svg'
      },
      {
        title: 'ORM',
        subtitle: 'Entity Framework Core',
        logoUrl: 'entity-framework-core-logo.svg'
      },
      {
        title: 'Cloud Provider',
        subtitle: 'Azure',
        logoUrl: 'azure-logo.svg'
      },
      {
        title: 'UI Components Library',
        subtitle: 'PrimeNG',
        logoUrl: 'primeng-logo.svg',
      },
      {
        title: 'Logging',
        subtitle: 'Serilog',
        logoUrl: 'serilog-logo.svg',
      },
      {
        title: 'Backend Validation',
        subtitle: 'FluentValidation',
        logoUrl: 'fluent-validation-logo.svg',
      },
      {
        title: 'Object Mapping',
        subtitle: 'Mapster',
        logoUrl: 'mapster-logo.svg',
      },
      {
        title: 'Frontend Translations',
        subtitle: 'Transloco',
        logoUrl: 'transloco-logo.svg',
      },
    ];
  }
}

export interface TechStack {
  title: string;
  subtitle: string;
  logoUrl: string;
}
