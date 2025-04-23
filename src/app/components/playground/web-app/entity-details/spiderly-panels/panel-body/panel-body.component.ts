import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'panel-body',
  templateUrl: './panel-body.component.html',
  styles: [],
  imports: [
    CommonModule,
  ]
})
export class PanelBodyComponent implements OnInit {
  @Input() normalBottomPadding: boolean = false; // FT: By default we set to false, when the grid is inside the body.

  constructor() { }

  ngOnInit(): void {
  }
}