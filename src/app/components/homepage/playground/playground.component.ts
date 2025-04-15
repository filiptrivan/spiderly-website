import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWrapperComponent } from "../../section-wrapper/section-wrapper.component";
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './helpers/layout/layout.component';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    SectionWrapperComponent,
    ButtonModule,
    RouterModule,
    LayoutComponent,
]
})
export class PlaygroundComponent {
  ocb: string = '{';
  ccb: string = '}';
}
