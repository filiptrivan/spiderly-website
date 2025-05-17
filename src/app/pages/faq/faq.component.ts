import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../components/section-wrapper/section-wrapper.component';
import { SpiderlyPanelComponent } from '../../components/playground/web-app/entity-details/spiderly-panels/spiderly-panel/spiderly-panel.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  imports: [
    CommonModule,
    SectionWrapperComponent,
    SpiderlyPanelComponent,
],
})
export class FAQComponent {
  faqs: FAQ[] = [
    {
      question: 'Is Spiderly free to use?',
      answer: 'Yes, Spiderly is completely free, and every feature that was once free will always remain free!'
    },
    {
      question: 'How to install Spiderly?',
      answer: 'You can find the installation instructions <a href="/docs/getting-started" target="_blank" rel="noopener">here</a>.'
    },    
    {
      question: 'What are the prerequisites for using Spiderly?',
      answer: 'The prerequisites are listed in the first step of the <a href="/docs/getting-started" target="_blank" rel="noopener">getting-started guide</a>.'
    },
    {
      question: 'What parts of the app does Spiderly Source Generators generate?',
      answer: `
        <h3>Frontend (UI)</h3>
        <ul>
          <li>Admin pages</li>
          <li>Controllers</li>
        </ul>
        <h3>Backend (API)</h3>
        <ul>
          <li>Controllers</li>
          <li>Services (CRUD operations, table filtering, Excel export)</li>
          <li>Mappings (Entities <-> DTO)</li>
        </ul>`
    },
    {
      question: 'Is Spiderly open-source?',
      answer: 'Yes, Spiderly is <a href="https://github.com/filiptrivan/spiderly" target="_blank" rel="noopener noreferrer">open-source</a> and released under the MIT License. You\'re free to use it in personal, commercial, or open-source projects.'
    },
    {
      question: 'Does Spiderly work on Linux operating systems?',
      answer: 'No, Spiderly is currently not compatible with Linux. We are focusing on Windows support for now, but Linux support may be added in the future.'
    },
    {
      question: 'Does Spiderly work on macOS?',
      answer: 'No, Spiderly is currently not compatible with macOS. We are focusing on Windows support for now, but macOS support may be added in the future.'
    },
  ];
  
  constructor(
    private titleService: Title, 
    private metaService: Meta
  ) {
    this.titleService.setTitle('Frequently Asked Questions | Spiderly FAQ');
    this.metaService.updateTag({ name: 'description', content: 'Find answers to common questions about Spiderly - the powerful tool that instantly generates full-stack .NET (C#) + Angular applications from your C# classes.'});
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }


}

export interface FAQ {
  question: string;
  answer: string;
}
