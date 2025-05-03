import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWrapperComponent } from '../../section-wrapper/section-wrapper.component';
import { ButtonModule } from 'primeng/button';
import { Carousel, CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss',
  styles: [
    `
    // :host  ::ng-deep .p-carousel-item{
    //   max-height: 0;
    // }
    // :host ::ng-deep  .p-carousel-item-active{
    //   max-height: fit-content !important;
    // }
    `
  ],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    SectionWrapperComponent,
    ButtonModule,
    CarouselModule,
  ]
})
export class GetStartedComponent {
  lastSelectedStepIndex: number = 0;

  getStartedSteps: GetStartedStep[] = [
    {
      title: 'Install Prerequisites',
      description: 'All prerequisite commands are global and should be executed in the terminal.',
      additionalDescription: '',
    },    
    {
      title: 'Install the Spiderly CLI',
      description: "Command is global and should be executed in the terminal.",
      terminalMessages: [
        {text:'dotnet tool install -g Spiderly.CLI', showCopyButton: true},
      ],
    },
    {
      title: 'Initialize App',
      description: "Run this command in the folder where you want your app to be located. By using the Spiderly CLI, you properly initialize the app, allowing all other Spiderly libraries to function.",
      terminalMessages: [
        {text: 'spiderly init', showCopyButton: true},
        {text: 'App name without spaces: SpiderlyDemoApp'},
        {text: 'Basic Spiderly app structure created!'},
      ],
    },
    {
      title: 'Start the app',
      description: 'After app base initialization, open both, backend and frontend, with you preferred code editors. Start both apps.',
      terminalMessages: [
        {text: 'dotnet run', showCopyButton: true},
        {text: 'npm start', showCopyButton: true},
      ],
    },
    {
      title: 'Configure app settings',
      description: 'Enter the email and <a href="https://itsupport.umd.edu/itsupport?id=kb_article_view&sysparm_article=KB0015112" target="_blank" rel="noopener">app password for Gmail</a>. For Google Auth, use Google Cloud to create credentials and a client ID.',
    },
    {
      title: 'Register user',
      description: 'Register the user using email or Google Auth through UI.',
    },
    {
      title: 'Assign admin permissions',
      description: 'Run the script at {app-name}/Data/initialize-script.sql in SQL Server Management Studio.',
    },
  ];

  @ViewChild('carouselWrapper') carouselWrapper: ElementRef;
  
  ngOnInit(){
    
  }

  copyTerminalMessageToClipboard(terminalMessage: TerminalMessage) {
    terminalMessage.icon = 'pi pi-check'
    setTimeout(() => {
      terminalMessage.icon = 'pi pi-copy'
    }, 2000);

    this.copyToClipboard(terminalMessage.text);
  }

  copyToClipboard(text: string): void {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  }

  adjustCarouselHeight(){
    this.carouselWrapper.nativeElement.classList.add('active');
  }
}

export interface GetStartedStep {
  title: string;
  description?: string;
  additionalDescription?: string;
  terminalMessages?: TerminalMessage[];
}

export interface TerminalMessage {
  text: string;
  showCopyButton?: boolean;
  icon?: string;
}
