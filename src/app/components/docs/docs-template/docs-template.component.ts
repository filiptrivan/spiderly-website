import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DocsStep } from '../layout/docs-layout.component';
import { HighlightModule } from 'ngx-highlightjs';
import { copyToClipboard } from '../../helpers/helper-functions';
import { TerminalComponent } from '../terminal/terminal.component';
import { CopyButtonComponent } from '../../copy-button/copy-button.component';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-docs-template',
  templateUrl: './docs-template.component.html',
  styleUrl: '../layout/docs-layout.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    HighlightModule,
    TerminalComponent,
    CopyButtonComponent,
  ],
})
export class DocsTemplateComponent {
  @Input() steps: DocsStep[];
  @Input() gradientTitle: string;
  @Input() whiteTitle: string;
  @Input() textBelowTitle: string;
  @Input() preferWatchingInstedText: string;
  @Input() sanitizedPreferWatchingInstedVideo: SafeHtml;
  @Input() showOrderNumbers: boolean = true;
  @Input() showTableOfContents: boolean = false;

  constructor() {}

  ngOnInit() {}

  copyToClipboard(text: string): void {
    copyToClipboard(text);
  }
}
