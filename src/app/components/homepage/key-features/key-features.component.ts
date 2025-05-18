import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWrapperComponent } from '../../section-wrapper/section-wrapper.component';

@Component({
  selector: 'app-key-features',
  templateUrl: './key-features.component.html',
  styleUrl: './key-features.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionWrapperComponent],
})
export class KeyFeaturesComponent {
  lastSelectedStepIndex: number = 0;

  keyFeatures: KeyFeature[] = [
    {
      title: 'CRUD Handling',
      description: `For each EF Core entity, the generator creates:
        <ul>
          <li>Angular admin pages</li>
          <li>Angular API client</li>
          <li>.NET controllers</li>
          <li>Service methods to interact with the database</li>
        </ul>`,
      icon: 'pi pi-pencil',
    },
    {
      title: 'API Client',
      description: `Generates an Angular service class with methods that match your .NET controllers. Each method corresponds to a controller action and includes strongly typed parameters and responses based on your DTO classes.`,
      icon: 'pi pi-send',
    },
    {
      title: 'UI Admin Pages',
      description: `For each EF Core entity, the generator creates:
        <ul>
          <li>A table view page — displays records with sorting, filtering, and pagination</li> 
          <li>An admin page — a form for creating and editing records</li> 
        </ul>`,
      icon: 'pi pi-desktop',
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
      title: '.NET + Angular App Starter Template',
      description: `Sets up the .NET (C#) and Angular app with built-in support for: authentication (including Google Sign-In), authorization, emailing, logging, global error handling, and more.`,
      icon: 'pi pi-cog',
    },
  ];
}

export interface KeyFeature {
  title: string;
  description: string;
  icon: string;
}
