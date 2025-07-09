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
      question: 'How to install Spiderly?',
      answer: 'You can find the installation instructions <a href="/docs/getting-started" target="_blank" rel="noopener" title="Go to Installation Instructions">here</a>.'
    },    
    {
      question: 'What are the prerequisites for using Spiderly?',
      answer: 'The prerequisites are listed in the first step of the <a href="/docs/getting-started" target="_blank" rel="noopener" title="Go to Getting Started Guide">getting-started guide</a>.'
    },
    {
      question: 'What parts of the app does Spiderly Source Generators generate?',
      answer: `
        <h3>Frontend (UI)</h3>
        <ul>
          <li>TypeScript classes with strongly typed constructors</li> 
          <li>Table view pages — records with sorting, filtering, and pagination</li> 
          <li>Admin pages — forms for creating and editing records</li> 
          <li>Angular reactive form validators</li> 
          <li>API client</li>
        </ul>
        <h3>Backend (API)</h3>
        <ul>
          <li>Partial DTO classes</li>
          <li>Controllers</li>
          <li>FluentValidation rules</li>
          <li>CRUD service methods — database interaction</li>
          <li>Object mapping configuration</li>
        </ul>`
    },
    {
      question: 'Is Spiderly open-source?',
      answer: 'Yes, Spiderly is <a href="https://github.com/filiptrivan/spiderly" target="_blank" rel="noopener noreferrer" title="Go to GitHub Repository">open-source</a> and released under the MIT License. You\'re free to use it in personal, commercial, or open-source projects.'
    },
    {
      question: 'How does Spiderly compare to the ABP Framework?',
      answer: `
In most scenarios, Spiderly is the better choice—especially if you're building a typical business or admin-style app with .NET and Angular. 
It's much simpler to set up, requires less boilerplate, under the MIT license. 
You get full CRUD, API, Angular UI, validation, mapping, and even DTOs generated automatically from your EF Core model. <br/><br/>

<table class="docs-table">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Spiderly</th>
      <th>ABP Framework</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>End-to-end code generation</strong></td>
      <td>Yes — from EF Core to UI + API client + validation</td>
      <td>No — you build modules manually</td>
    </tr>
    <tr>
      <td><strong>Auto-sync on changes</strong></td>
      <td>Real-time generation on code change</td>
      <td>Manual updates required</td>
    </tr>
    <tr>
      <td><strong>Tech stack</strong></td>
      <td>
        .NET + Angular (with EF Core, PrimeNG, FluentValidation, Serilog...)<br>
      </td>
      <td>Modular with flexibility (Blazor, Angular, MVC…)</td>
    </tr>
    <tr>
      <td><strong>OS support</strong></td>
      <td>Windows only</td>
      <td>Cross-platform (Windows, Linux, macOS)</td>
    </tr>
  </tbody>
</table>
`,
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
    this.metaService.updateTag({ name: 'description', content: 'Find answers to common questions about Spiderly. Our FAQ covers pricing, OS support, tech stack, code generation scope, prerequisites, installation guide.'});
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }


}

export interface FAQ {
  question: string;
  answer: string;
}
