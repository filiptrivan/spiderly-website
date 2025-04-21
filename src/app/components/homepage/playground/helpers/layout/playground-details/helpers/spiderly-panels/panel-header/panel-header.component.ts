import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel-header',
  templateUrl: './panel-header.component.html',
  imports: [
    CommonModule,
  ],
  styles: [`
    .p-panel-icons-end {
      font-size: 50px;
    }
    .number-circle {
      border-radius: 50%;
      width: 33px;
      height: 33px;
      padding: 5px;

      background: var(--p-primary-color);
      border: 1px solid var(--p-primary-color);
      color: white;
      text-align: center;
      margin-right: 16px;
      display: inline-block;
    }
  `],
})
export class PanelHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() showBigTitle: boolean;
  @Input() showIcon: boolean = true;
  @Input() icon: string;
  @Input() index: number;
  @Input() tabs: SpiderlyTab[];

  constructor(
  ) { }

  ngOnInit(): void {
    if (this.title == null)
      this.title = 'Details';

    if (this.showIcon === true && this.icon == null)
      this.icon = 'pi pi-file-edit';
  }

  setTabIsSelected(tab: SpiderlyTab){
    this.tabs.forEach(t => {
      t.isSelected = false;
    });

    tab.isSelected = true;
  }
}

export class SpiderlyTab
{
    label?: string;
    id?: number;
    icon?: string;
    isSelected?: boolean;
  
    constructor(
    {
        label,
        id,
        icon,
        isSelected,
    }:{
        label?: string;
        id?: number;
        icon?: string;
        isSelected?: boolean;
    } = {}
    ) {
        this.label = label;
        this.id = id;
        this.icon = icon;
        this.isSelected = isSelected;
    }

}