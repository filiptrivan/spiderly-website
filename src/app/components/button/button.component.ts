
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class ButtonComponent {
    @Output() onClick = new EventEmitter();
    @Input() label: string = '';

    click(){
        this.onClick.next(null);
    }
}
