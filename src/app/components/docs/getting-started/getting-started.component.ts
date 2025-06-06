import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { DocsStep } from '../layout/docs-layout.component';
import { DocsTemplateComponent } from "../docs-template/docs-template.component";

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrl: '../layout/docs-layout.component.scss',
  imports: [
    CommonModule, 
    RouterModule, 
    ButtonModule, 
    DocsTemplateComponent
  ],
})
export class GettingStartedComponent {
  steps: DocsStep[];
  gradientTitle = 'Getting Started With Spiderly';
  textBelowTitle = `
  Follow this quick start guide to configure and initialize your Spiderly app. 
  Once complete, you'll be ready to use all features and build with its full power.
  `;
  preferWatchingInstedText = 'You can follow along with the video walkthrough. It covers all the steps from this guide, assuming you\'ve already completed the first step — installing the prerequisites.';
  sanitizedPreferWatchingInstedVideo: SafeHtml;
  
  constructor(private sanitizer: DomSanitizer) {
    this.sanitizedPreferWatchingInstedVideo = this.sanitizer.bypassSecurityTrustHtml(`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/1EIzcJMf1IY?si=S98rD7Da_T-k2Vm2&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `)
  }

  ngOnInit() {
    this.steps = [
      {
        title: 'Install Prerequisites',
        description: this.sanitizer.bypassSecurityTrustHtml(`
        Before getting started with Spiderly, make sure you have the following prerequisites installed: <br/>
        <div class="example-wrapper">
          <div>
            <ul style="margin-bottom: 5px !important;">
              <li><a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads" target="_blank" rel="nofollow noopener noreferrer" title="Download SQL Server 2022 Developer">SQL Server 2022 Developer</a> (if you already have SQL Server Express installed, no need to install the Developer edition)</li>
              <li><a href="https://nodejs.org/en/download/" target="_blank" rel="nofollow noopener noreferrer" title="Download Node.js">Node.js</a></li>
              <li>
                Code Editors (Recommended):
                <ul>
                  <li>Backend: <a href="https://visualstudio.microsoft.com/downloads/" target="_blank" rel="nofollow noopener noreferrer" title="Download Visual Studio (Community Edition)">Visual Studio (Community Edition)</a></li>
                  <li>Frontend: <a href="https://code.visualstudio.com/download" target="_blank" rel="nofollow noopener noreferrer" title="Download Visual Studio Code">Visual Studio Code</a></li>
                </ul>
              </li>
              <li>Skip this step if you installed Visual Studio in a previous step - <a href="https://dotnet.microsoft.com/en-us/download" target="_blank" rel="nofollow noopener noreferrer" title="Download .NET 9.0">.NET 9.0</a></li>
              <li>Run the global Angular CLI and EF Core CLI installation command from any location in the terminal: <span class="code-block">npm install -g &#64;angular/cli && dotnet tool install -g dotnet-ef</span></li>
              <li><a href="https://learn.microsoft.com/en-us/ssms/release-notes-21#current-sql-server-management-studio-release" target="_blank" rel="nofollow noopener noreferrer" title="Download SQL Server Management Studio (SSMS)">SQL Server Management Studio (SSMS)</a></li>
              <li>Visual Studio Code Extension: <a href="https://marketplace.visualstudio.com/items?itemName=Angular.ng-template" target="_blank" rel="nofollow noopener noreferrer" title="Download Angular Language Service">Angular Language Service</a></li>
            </ul>
          </div>
        </div>
        `),
        prerequisites: true,
      },
      {
        title: 'Install the Spiderly CLI',
        description:
          'Run the Global Spiderly CLI installation command from <b>any location in the terminal</b>: <br/> <br/>',
        terminalMessages: [
          { text: 'dotnet tool install -g Spiderly.CLI', showCopyButton: true },
        ],
      },
      {
        title: 'Initialize the App',
        description:
          'Run this command in the folder <b>where you want your app to be located</b>: <br/> <br/>',
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
          'Open the frontend project located at <span class="code-block">your-app-name\\Frontend</span> using Visual Studio Code. Then open a new <b>Visual Studio Code terminal</b> via <em>Terminal -> New Terminal</em> (or press <span class="code-block">Ctrl + Shift + `</span>) and run the command: <br/> <br/>',
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
          'Execute the script located at <span class="code-block">your-app-name\\Database\\initialize-script.sql</span> using SQL Server Management Studio to assign admin permissions to the previously registered user.',
      },
    ];
  }

}

