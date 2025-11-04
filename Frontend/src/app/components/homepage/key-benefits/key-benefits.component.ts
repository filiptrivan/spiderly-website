import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWrapperComponent } from '../../section-wrapper/section-wrapper.component';

@Component({
  selector: 'app-key-benefits',
  templateUrl: './key-benefits.component.html',
  styleUrls: [
    '../../../pages/homepage/homepage.component.scss'
  ],
  imports: [CommonModule, RouterModule, SectionWrapperComponent],
})
export class KeyBenefitsComponent {
  keyBenefits: KeyBenefit[] = [
    {
      title: 'Faster Development',
      description:
        'Skip repetitive coding tasks and generate ready-to-use code instantly, so you can focus on building core features instead of boilerplate.',
      icon: 'pi pi-bolt'
    },
    {
      title: 'App Scalability',
      description:
        'To add admin features for a new entity, all you need is a single C# class, everything else is generated for you.',
      icon: 'pi pi-expand'
    },
    {
      title: 'Human Error Reduction',
      description:
        'By generating proven and pre-tested code automatically, the chances of manual errors are greatly reduced.',
      icon: 'pi pi-shield'
    },
    {
      title: 'Consistency',
      description:
        'Automatically applies the same patterns, conventions, industry standards and best practices to ensure a uniform codebase every time.',
      icon: 'pi pi-align-justify'
    },
    {
      title: 'Maintainability',
      description:
        'Generated code is correct and separated, making code reviews easier and keeping your project structure clean.',
      icon: 'pi pi-wrench'
    },
    {
      title: 'Business Logic Focus',
      description:
        'With Spiderly handling the scaffolding, you can forget about boilerplate code and focus on the core business logic that truly matters.',
      icon: 'pi pi-star'
    },
  ];
}

interface KeyBenefit {
  title: string;
  description: string;
  icon: string;
}
