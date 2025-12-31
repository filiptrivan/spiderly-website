import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-copy-button',
  templateUrl: './copy-button.component.html',
  imports: [CommonModule, ButtonModule],
})
export class CopyButtonComponent {
  @Output() onClick = new EventEmitter<MouseEvent>();

  copyIcon = 'pi pi-copy';

  click(event) {
    this.onClick.next(event);

    this.copyIcon = 'pi pi-check';
    setTimeout(() => {
      this.copyIcon = 'pi pi-copy';
    }, 2000);
  }
}
