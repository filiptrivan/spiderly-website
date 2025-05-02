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
      "description": "All prerequisite commands are global and should be executed in the terminal."
    },    
    {
      title: 'Install the Spiderly CLI',
      description: "Command is global and should be executed in the terminal."
    },
    {
      title: 'Initialize App',
      description: "Run this command in the folder where you want your app to be located. By using the Spiderly CLI, you properly initialize the app, allowing all other Spiderly libraries to function."
    },
    {
      title: 'Start the app',
      description: 'After app base initialization, open both, backend and frontend, with you preferred code editors. Start both apps.',
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
  ]
  
  terminalMessages: TerminalMessage[][] = [
    [
      
    ],
    [
      {text:'dotnet tool install -g Spiderly.CLI', showCopyButton: true},
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
    [],
    [],
    []
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
