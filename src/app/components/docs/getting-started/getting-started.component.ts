import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss',
  imports: [CommonModule, RouterModule, ButtonModule],
})
export class GettingStartedComponent {
  getStartedSteps: GetStartedStep[];

  @ViewChild('carouselWrapper') carouselWrapper: ElementRef;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getStartedSteps = [
      {
        title: 'Install Prerequisites',
        description:
          'Before getting started with Spiderly, make sure you have the following prerequisites installed.',
        prerequisites: true,
      },
      {
        title: 'Install the Spiderly CLI',
        description:
          'Command is global and should be executed in the terminal.',
        terminalMessages: [
          { text: 'dotnet tool install -g Spiderly.CLI', showCopyButton: true },
        ],
      },
      {
        title: 'Initialize the App',
        description:
          'Run this command in the folder where you want your app to be located.',
        terminalMessages: [
          { text: 'spiderly init', showCopyButton: true },
        ],
      },
      {
        title: 'Start the Backend',
        description:
          'Open the backend solution located at <span class="code-block">your-app-name\\API\\your-app-name.sln</span> using Visual Studio and click the <span class="code-block">IIS Express</span> run button to start the backend.',
      },
      {
        title: 'Start the Frontend',
        description:
          'Open the frontend project located at <span class="code-block">your-app-name\\Angular</span> using Visual Studio Code. Then open a new Visual Studio Code terminal (<span class="code-block">Ctrl + Shift + `</span>) and run the command.',
        terminalMessages: [{ text: 'npm start', showCopyButton: true }],
      },
      {
        title: 'Set Up Emailing',
        description: `
        In the <span class="code-block">your-app-name\\API\\your-app-name.WebAPI\\appsettings.json</span> file, set the following fields:
        <ul>
          <li><span class="code-block">"EmailSender"</span> - Set this to the email address you want to use for sending various types of emails, such as verification codes, unhandled exception alerts, and notifications.</li>
          <li><span class="code-block">"EmailSenderPassword"</span> - This must be the App Password for the same email account specified in <span class="code-block">"EmailSender"</span>. Do not use your regular Gmail password. Follow the video tutorial to see how to generate an App Password from your Google account.</li>
        </ul>
        `,
        video: this.sanitizer.bypassSecurityTrustHtml(`
          <div class="video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/evSorSxb_J8?si=VaOkxTr4g0PudO7L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        `),
      },
      {
        title: 'Set Up Unhandled Exception Recipients',
        description: `
        In the <span class="code-block">your-app-name\\API\\your-app-name.WebAPI\\appsettings.json</span> file, start by setting the value for the <span class="code-block">"UnhandledExceptionRecipients"</span> key to an array containing the same email address used for <span class="code-block">"EmailSender"</span>. This field is an array, so you can add multiple email addresses to receive alerts about unhandled exceptions.
        `,
      },
      {
        title: 'Set Up Google Authentication',
        description: `
        After following the video tutorial, you will obtain the Google Client ID. Once you have it, make sure to set it in the following two places:
        <ul>
          <li>In the <span class="code-block">your-app-name\\API\\your-app-name.WebAPI\\appsettings.json</span> file, set the value for the <span class="code-block">"GoogleClientId"</span> key.</li>
          <li>In the <span class="code-block">your-app-name\\Angular\\src\\environments\\environment.ts</span> file, set the value for the <span class="code-block">"GoogleClientId"</span> variable.</li>
        </ul>
        `,
        video: this.sanitizer.bypassSecurityTrustHtml(`
          <div class="video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0yriLp-NEvk?si=Yn8Xq5DOFH8KYA0_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        `),
      },
      {
        title: 'Register the User',
        description:
          'Use the UI of your generated app to register the user via email or Google.',
      },
      {
        title: 'Connect to SQL Server',
        description: `
        <ol class="margin-bottom-0">
          <li>Open <b>SQL Server Management Studio (SSMS)</b>.</li>
        
          <li>
            In the <b>Connect to Server window</b>, fill in the fields as follows:
            <ul>
              <li><b>Server Name</b>: <span class="code-block">localhost</span></li>
              <li><b>Authentication</b>: <span class="code-block">Windows Authentication</span></li>
              <li><b>Database Name</b>: <span class="code-block">&lt;default&gt;</span></li>
              <li><b>Encrypt</b>: <span class="code-block">Mandatory</span></li>
              <li><b>Trust Server Certificate</b>: <span class="code-block">True</span></li>
              <li><b>Color</b>: <span class="code-block">&lt;default&gt;</span></li>
            </ul>
          </li>

          <li>Click the <b>Connect button</b>.</li>
        </ol>
        `,
      },
      {
        title: 'Assign Admin Permissions',
        description:
          'Execute the script located at <span class="code-block">your-app-name/Data/initialize-script.sql</span> using SQL Server Management Studio to assign admin permissions to the previously registered user.',
      },
    ];
  }

  copyTerminalMessageToClipboard(terminalMessage: TerminalMessage) {
    terminalMessage.icon = 'pi pi-check';
    setTimeout(() => {
      terminalMessage.icon = 'pi pi-copy';
    }, 2000);

    this.copyToClipboard(terminalMessage.text);
  }

  copyToClipboard(text: string): void {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  }

  adjustCarouselHeight() {
    this.carouselWrapper.nativeElement.classList.add('active');
  }
}

export interface GetStartedStep {
  title: string;
  description: SafeHtml;
  terminalMessages?: TerminalMessage[];
  prerequisites?: boolean;
  video?: SafeHtml;
}

export interface TerminalMessage {
  text: string;
  showCopyButton?: boolean;
  icon?: string;
}
