import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWrapperComponent } from '../../section-wrapper/section-wrapper.component';

@Component({
  selector: 'app-key-features',
  templateUrl: './key-features.component.html',
  styleUrls: ['./key-features.component.scss', '../../../pages/homepage/homepage.component.scss'],
  imports: [CommonModule, RouterModule, SectionWrapperComponent],
})
export class KeyFeaturesComponent {
  keyFeatures: KeyFeature[] = [
    {
      title: 'CRUD',
      description: `For each EF Core entity, the generator creates:
        <ul>
          <li>CRUD UI</li>
          <li>API client</li>
          <li>Controllers</li>
          <li>Service methods — database interaction</li>
        </ul>`,
      icon: 'pi pi-pencil',
    },
    {
      title: 'CRUD UI',
      description: `For each EF Core entity, the generator creates:
        <ul>
          <li>A table view page — displays records with sorting, filtering, and pagination</li> 
          <li>An admin page — a form for creating and editing records</li> 
        </ul>`,
      icon: 'pi pi-desktop',
    },
    {
      title: 'API Client',
      description: `Generates an Angular service class with methods that match your .NET controllers. Each method corresponds to a controller action and includes strongly typed parameters and responses based on your DTO classes.`,
      icon: 'pi pi-send',
    },
    {
      title: 'Shared .NET and Angular Validations',
      description: `Generates .NET FluentValidation rules and matching Angular reactive form validators. Both sides stay in sync while allowing separate customization if needed.`,
      icon: 'pi pi-check-square',
    },
    {
      title: 'C# DTO and TypeScript Classes',
      description: `Generates C# partial DTO classes and matching Angular TypeScript classes with strongly typed constructors.`,
      icon: 'pi pi-code',
    },
    {
      title: '.NET + Angular App Starter',
      description: `Sets up the .NET (C#) and Angular app template with built-in support for: authentication (including Google Sign-In), authorization, emailing, logging, global error handling, and more.`,
      icon: 'pi pi-cog',
    },
  ];
}

interface KeyFeature {
  title: string;
  description: string;
  icon: string;
}
