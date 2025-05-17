import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    ButtonModule,
  ]
})
export class GettingStartedComponent {
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
      description: 'After app base initialization, open both, the backend (<span class="code-block">{your_app_name}\\API\\{your_app_name}.sln</span>) and the frontend (<span class="code-block">{your_app_name}\\Angular</span>) in your preferred code editors, then start both using the scripts shown in the terminal.',
      terminalMessages: [
        {text: 'dotnet run', showCopyButton: true},
        {text: 'npm start', showCopyButton: true},
      ],
    },
    {
      title: 'Configure app settings',
      description: `In <span class="code-block">{your_app_name}\\API\\{your_app_name}.WebAPI\\appsettings.json</span>, set the following fields: <span class="code-block">"EmailSender"</span>, <span class="code-block">"EmailSenderPassword"</span>, <span class="code-block">"UnhandledExceptionRecipients"</span>, and <span class="code-block">"GoogleClientId"</span>. 
      <p>In <span class="code-block">{your_app_name}\\Angular\\src\\environments\\environment.ts</span>, set the <span class="code-block">"GoogleClientId"</span> field.</p>
      <p><a href="https://itsupport.umd.edu/itsupport?id=kb_article_view&sysparm_article=KB0015112" target="_blank" rel="noopener">How to make "EmailSenderPassword"?</a></p>
      <div><a href="https://youtu.be/C9EQcMOy5c4?si=781--PodiMHf6Hrl" target="_blank" rel="noopener">How to make "GoogleClientId"?</a></div>
      `,
    },
    {
      title: 'Register the user',
      description: 'Use the UI of your generated app to register the user via email or Google.',
    },
    {
      title: 'Assign admin permissions',
      description: 'Run the script located at <span class="code-block">{your_app_name}/Data/initialize-script.sql</span> using SQL Server Management Studio to assign admin permissions to the previously registered user.',
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
