import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-wrapper',
  templateUrl: './section-wrapper.component.html',
  styleUrl: './section-wrapper.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class SectionWrapperComponent {
    @Input() color = 'black';
}
