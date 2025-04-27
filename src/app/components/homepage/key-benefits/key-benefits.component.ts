import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWrapperComponent } from '../../section-wrapper/section-wrapper.component';

@Component({
  selector: 'app-key-benefits',
  templateUrl: './key-benefits.component.html',
  styleUrl: './key-benefits.component.scss',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    SectionWrapperComponent,
  ]
})
export class GetStartedComponent {
  lastSelectedStepIndex: number = 0;

  getStartedSteps: GetStartedStep[] = [
    {
      title: 'Install the CLI Tool',
      description: 'You need to have .NET SDK installed. You can check if you have by running <span class="code-block">dotnet --version</span>. If you don\'t have it, install it from <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer">here</a>.',
      terminalMessages: ['dotnet tool install -g Spiderly.ProjectInitializer']
    },
    {
      title: 'Init the app',
      description: 'Using the Spiderly CLI tool, you initialize the basic application structure so that you can use all the functionalities of the Spiderly library.',
      terminalMessages: ['dotnet tool install -g Spiderly.ProjectInitializer']
    },
    {
      title: 'Start the app',
      description: 'After app base initialization, Visual Studio (.NET backend) and Visual Studio Code (Angular frontend) will open up automaticaly. Start both. You can also go to your SQL Server Management Studio and see if Database has been initialized also.',
      terminalMessages: ['dotnet tool install -g Spiderly.ProjectInitializer']
    },
  ]
  
  terminalMessages: string[][] = [
    [
      'dotnet tool install -g Spiderly.ProjectInitializer'
    ],
    [
      "spiderly init",
      "App name without spaces: SpiderlyDemoApp",
      "Template type (blank/loyalty/invertory management): blank",
      "Basic Spiderly app structure created!",
    ],
    [
      "dotnet run",
      "npm start",
    ],
  ];
}

export interface GetStartedStep {
  title: string;
  description: string;
  terminalMessages: string[];
}
