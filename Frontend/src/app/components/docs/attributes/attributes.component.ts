import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CopyButtonComponent } from '../../copy-button/copy-button.component';
import { HighlightModule } from 'ngx-highlightjs';
import { copyToClipboard } from '../../helpers/helper-functions';


@Component({
  selector: 'app-attributes-docs',
  templateUrl: './attributes.component.html',
  styleUrls: [
    './attributes.component.scss',
    '../layout/docs-layout.component.scss'
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    HighlightModule,
    CopyButtonComponent
]
})
export class AttributesDocsComponent {

  constructor(
  ) {

  }
  
  ngOnInit(){

  }

  copyCodeSnippet(event: Event): void {
    const button = event.target as HTMLElement;
    const wrapper = button.closest('.code-snippet-wrapper');
    const codeElement = wrapper?.querySelector('code');
    const code = codeElement?.textContent?.trim() || '';
    
    copyToClipboard(code);
  }

}