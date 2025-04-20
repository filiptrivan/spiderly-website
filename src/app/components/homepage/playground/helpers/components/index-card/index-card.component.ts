import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { SpiderlyPanelComponent } from '../../layout/playground-details/helpers/spiderly-panels/spiderly-panel/spiderly-panel.component';
import { PanelHeaderComponent } from '../../layout/playground-details/helpers/spiderly-panels/panel-header/panel-header.component';
import { PanelBodyComponent } from '../../layout/playground-details/helpers/spiderly-panels/panel-body/panel-body.component';

@Component({
    selector: 'index-card',
    templateUrl: './index-card.component.html',
    styleUrl: '../../../playground.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        SpiderlyPanelComponent,
        PanelHeaderComponent,
        PanelBodyComponent,
    ]
})
export class IndexCardComponent {
    @Input() last: boolean;
    @Input() index: number;
    @Input() header: string = '';
    @Input() description: string;
    @Input() showRemoveIcon: boolean;
    @Input() showCrudMenu: boolean = true;

    @Input() crudMenu: MenuItem[];

    @Output() onMenuIconClick = new EventEmitter<number>();
    @Output() onRemoveIconClick = new EventEmitter<null>();
    
    constructor(
        protected formBuilder: FormBuilder,
    ) {

    }

    ngOnInit(){
        // console.log(this.last);
    }

    menuIconClick(index: number){
        this.onMenuIconClick.next(index);
    }

    removeIconClick(){
        this.onRemoveIconClick.next(null);
    }

}