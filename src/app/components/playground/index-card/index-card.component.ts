import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelBodyComponent } from '../web-app/entity-details/spiderly-panels/panel-body/panel-body.component';
import { PanelHeaderComponent } from '../web-app/entity-details/spiderly-panels/panel-header/panel-header.component';
import { SpiderlyPanelComponent } from '../web-app/entity-details/spiderly-panels/spiderly-panel/spiderly-panel.component';

@Component({
    selector: 'index-card',
    templateUrl: './index-card.component.html',
    styleUrl: './index-card.component.scss',
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

    @Input() collapsed: boolean = false; // FT HACK: Only for initialized entities User and Gender panels

    @Output() onMenuIconClick = new EventEmitter<number>();
    @Output() onRemoveIconClick = new EventEmitter<null>();

    constructor(
    ) {

    }

    ngOnInit(){
    }

    menuIconClick(index: number){
        this.onMenuIconClick.next(index);
    }

    removeIconClick(){
        this.onRemoveIconClick.next(null);
    }

    ngOnDestroy() {
    }

}