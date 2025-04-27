import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWrapperComponent } from '../../section-wrapper/section-wrapper.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    SectionWrapperComponent,
    ButtonModule
  ]
})
export class GetStartedComponent {
  lastSelectedStepIndex: number = 0;

  getStartedSteps: GetStartedStep[] = [
    {
      title: 'Install the CLI Tool',
      description: 'You need to have .NET SDK installed. You can check if you have by running <span class="code-block">dotnet --version</span>. If you don\'t have it, install it from <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer">here</a>.',
    },
    {
      title: 'Init the app',
      description: 'Using the Spiderly CLI tool, you initialize the basic application structure so that you can use all the functionalities of the Spiderly library.',
    },
    {
      title: 'Start the app',
      description: 'After app base initialization, Visual Studio (.NET backend) and Visual Studio Code (Angular frontend) will open up automaticaly. Start both. You can also go to your SQL Server Management Studio and see if Database has been initialized also.',
    },
  ]
  
  terminalMessages: TerminalMessage[][] = [
    [
      {text:'dotnet tool install -g Spiderly.ProjectInitializer', showCopyButton: true}
    ],
    [
      {text: 'spiderly init', showCopyButton: true},
      {text: 'App name without spaces: SpiderlyDemoApp'},
      {text: 'Template type (blank/loyalty/invertory management): blank'},
      {text: 'Basic Spiderly app structure created!'},
    ],
    [
      {text: 'dotnet run', showCopyButton: true},
      {text: 'npm start', showCopyButton: true},
    ],
  ];

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
}

export interface GetStartedStep {
  title: string;
  description: string;
}

export interface TerminalMessage {
  text: string;
  showCopyButton?: boolean;
  icon?: string;
}
