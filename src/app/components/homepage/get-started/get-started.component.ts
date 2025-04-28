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
      "title": "Install Prerequisites",
      "description": "Before you begin, ensure you have the following prerequisites installed."
    },
    {
      title: 'Install the Spiderly CLI',
      description: "Use the Spiderly CLI to properly initialize your app so the Spiderly Library can function."
    },
    {
      title: 'Initialize App',
      description: 'Run this script in the folder where you want your app to be located.'
    },
    {
      title: 'Start the app',
      description: 'After app base initialization, open both, backend and frontend, with you preferred code editors. Start both apps.',
    },
  ]
  
  terminalMessages: TerminalMessage[][] = [
    [
      
    ],
    [
      {text:'dotnet tool install -g Spiderly.AppInitializer', showCopyButton: true},
    ],
    [
      {text: 'spiderly init', showCopyButton: true},
      {text: 'App name without spaces: SpiderlyDemoApp'},
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
  description?: string;
}

export interface TerminalMessage {
  text: string;
  showCopyButton?: boolean;
  icon?: string;
}
