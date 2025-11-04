import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: [
    '../layout/docs-layout.component.scss',
    './terminal.component.scss',
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class TerminalComponent {
  @Input() messages: TerminalMessage[] = [];

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
}

export interface TerminalMessage {
  text: string;
  showCopyButton?: boolean;
  icon?: string;
}