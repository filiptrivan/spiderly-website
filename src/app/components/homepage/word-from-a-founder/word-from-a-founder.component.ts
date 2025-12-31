import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWrapperComponent } from '../../section-wrapper/section-wrapper.component';

@Component({
  selector: 'app-word-from-a-founder',
  templateUrl: './word-from-a-founder.component.html',
  styleUrl: './word-from-a-founder.component.scss',
  imports: [CommonModule, RouterModule, SectionWrapperComponent],
})
export class WordFromAFounderComponent {}
