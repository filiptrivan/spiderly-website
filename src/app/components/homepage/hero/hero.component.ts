import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWrapperComponent } from "../../section-wrapper/section-wrapper.component";
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  imports: [
    CommonModule,
    SectionWrapperComponent,
    ButtonModule,
    RouterModule,
    DialogModule,
  ]
})
export class HeroComponent {
  videoDialogVisible: boolean = false;

  openVideo() {
    this.videoDialogVisible = true;
  }
}
