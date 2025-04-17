import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SpiderlyClass } from '../../entities';
import { PanelHeaderComponent } from './helpers/spiderly-panels/panel-header/panel-header.component';
import { PanelBodyComponent } from './helpers/spiderly-panels/panel-body/panel-body.component';
import { PanelFooterComponent } from './helpers/spiderly-panels/panel-footer/panel-footer.component';
import { SpiderlyPanelComponent } from './helpers/spiderly-panels/spiderly-panel/spiderly-panel.component';
import { SpiderlyControlsModule } from './helpers/controls/spiderly-controls.module';
import { getControl } from './helpers/services/helper-functions';
import { SpiderlyFormGroup } from './helpers/spiderly-form-control/spiderly-form-control';

@Component({
    selector: 'app-playground-details',
    templateUrl: './playground-details.component.html',
    styleUrl: './playground-details.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        ButtonModule,
        TooltipModule,
        SpiderlyPanelComponent,
        PanelHeaderComponent,
        PanelBodyComponent,
        PanelFooterComponent,
        SpiderlyControlsModule,
    ]
})
export class PlaygroundDetailsComponent implements OnInit {
    @Input() entity: SpiderlyClass;
    @Input() index: number;

    constructor(
    ) {
    }

    ngOnInit() {
    }
    
    control(formControlName: string, formGroup: SpiderlyFormGroup){
        return getControl(formControlName, formGroup);
    }
}
