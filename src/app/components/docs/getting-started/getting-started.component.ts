import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DomSanitizer } from '@angular/platform-browser';
import { TerminalComponent } from "../terminal/terminal.component";
import { DocsStep } from '../layout/docs-layout.component';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrl: '../layout/docs-layout.component.scss',
  imports: [CommonModule, RouterModule, ButtonModule, TerminalComponent],
})
export class GettingStartedComponent {
  getStartedSteps: DocsStep[];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getStartedSteps = [
      {
        title: 'Install Prerequisites',
        description:
          'Before getting started with Spiderly, make sure you have the following prerequisites installed. <br/> <br/>',
        prerequisites: true,
      },
      {
        title: 'Install the Spiderly CLI',
        description:
          'Run the Global Spiderly CLI installation command from <b>any location in the terminal</b>. <br/> <br/>',
        terminalMessages: [
          { text: 'dotnet tool install -g Spiderly.CLI', showCopyButton: true },
        ],
      },
      {
        title: 'Initialize the App',
        description:
          'Run this command in the folder <b>where you want your app to be located</b>. <br/> <br/>',
        terminalMessages: [
          { text: 'spiderly init', showCopyButton: true },
        ],
      },
      {
        title: 'Start the Backend',
        description:
          'Open the backend project located at <span class="code-block">your-app-name\\Backend\\YourAppName.sln</span> using Visual Studio and click the <span class="code-block">IIS Express</span> run button to start the backend.',
      },
      {
        title: 'Start the Frontend',
        description:
          'Open the frontend project located at <span class="code-block">your-app-name\\Frontend</span> using Visual Studio Code. Then open a new <b>Visual Studio Code terminal</b> (<span class="code-block">Ctrl + Shift + `</span>) and run the command. <br/> <br/>',
        terminalMessages: [{ text: 'npm start', showCopyButton: true }],
      },
      {
        title: 'Set Up Emailing',
        description: `
        In the backend project opened with Visual Studio, locate the <span class="code-block">YourAppName.WebAPI\\appsettings.json</span> file and set the following fields:
        <ul>
          <li><span class="code-block">"EmailSender"</span> - Set this to the <b>existing email address</b> you want to use for sending various types of emails, such as verification codes, unhandled exception alerts, and notifications.</li>
          <li><span class="code-block">"EmailSenderPassword"</span> - <b>Do not</b> use your regular Gmail password. This must be the <b>Gmail App Password</b> for the same email account specified in <span class="code-block">"EmailSender"</span>. Follow the video tutorial to see how to generate an Gmail App Password from your Google account.</li>
        </ul>
        `,
        video: this.sanitizer.bypassSecurityTrustHtml(`
          <div class="video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/evSorSxb_J8?si=VaOkxTr4g0PudO7L&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        `),
      },
      {
        title: 'Set Up Google Authentication',
        description: `
        After following the video tutorial, you will obtain the Google Client ID. Once you have it, make sure to set it in the following two places:
        <ul>
          <li>In the backend project opened with Visual Studio, locate the <span class="code-block">YourAppName.WebAPI\\appsettings.json</span> file and set the value for the <span class="code-block">"GoogleClientId"</span>.</li>
          <li>In the project opened with Visual Studio Code, locate the <span class="code-block">src\\environments\\environment.ts</span> file and set the value for the <span class="code-block">"GoogleClientId"</span>.</li>
        </ul>
        `,
        video: this.sanitizer.bypassSecurityTrustHtml(`
          <div class="video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0yriLp-NEvk?si=Yn8Xq5DOFH8KYA0_&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

}

