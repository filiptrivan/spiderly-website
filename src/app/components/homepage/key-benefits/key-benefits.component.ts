import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWrapperComponent } from '../../section-wrapper/section-wrapper.component';

@Component({
  selector: 'app-key-benefits',
  templateUrl: './key-benefits.component.html',
  styleUrl: './key-benefits.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionWrapperComponent],
})
export class KeyBenefitsComponent {
  lastSelectedStepIndex: number = 0;

  keyBenefits: KeyBenefit[] = [
    {
      title: 'Speed',
      description:
        'With CRUD operations, Backend/Frontend architecture, Auth, Logging, and the best Libraries already set up for you, we save you a significant amount of time so you can focus on your specific business logic. This library makes working with LLMs like ChatGPT, Grok, and Claude much easier - we handle the big picture, so you can concentrate on the smaller, specific logic chunks with a smooth vibe coding experience.',
      icon: 'pi pi-bolt'
    },
    {
      title: 'Accuracy',
      description:
        'Even if the generated code is boilerplate, copy-pasting without focus inevitably leads to mistakes. Spiderly eliminates this subconscious burden, freeing your mind for more important tasks.',
      icon: 'pi pi-check'
    },
    {
      title: 'Customizability',
      description:
        'If you don\'t like any of Spiderly\'s functionalities (CRUD operations, backend/frontend architecture, auth, logging), you can disable them and implement your own. You can also build on top of the generated admin pages, add custom pages, and customize the appearance.',
      icon: 'pi pi-pencil'
    },
  ];
}

export interface KeyBenefit {
  title: string;
  description: string;
  icon: string;
}
