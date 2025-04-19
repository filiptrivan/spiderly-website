import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SpiderlyAttribute, SpiderlyClass, SpiderlyProperty as SpiderlyProperty } from '../../entities';
import { PanelHeaderComponent } from './helpers/spiderly-panels/panel-header/panel-header.component';
import { PanelBodyComponent } from './helpers/spiderly-panels/panel-body/panel-body.component';
import { PanelFooterComponent } from './helpers/spiderly-panels/panel-footer/panel-footer.component';
import { SpiderlyPanelComponent } from './helpers/spiderly-panels/spiderly-panel/spiderly-panel.component';
import { SpiderlyControlsModule } from './helpers/controls/spiderly-controls.module';
import { getControl } from './helpers/services/helper-functions';
import { SpiderlyFormGroup } from './helpers/spiderly-form-control/spiderly-form-control';
import { UIControlTypeCodes } from './helpers/enums/enums';
import { BaseFormService } from './helpers/services/base-form.service';

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
    ],
})
export class PlaygroundDetailsComponent implements OnInit {
    formGroup = new SpiderlyFormGroup({});
    @Input() entity: SpiderlyClass;
    @Input() index: number;

    UIControlTypeCodes = UIControlTypeCodes;

    constructor(
        private baseFormService: BaseFormService,
    ) {
    }

    ngOnInit() {
        this.baseFormService.initFormGroup(this.formGroup, this.entity.data[this.index], this.entity.properties.map(x => x.name))
    }
    
    control = (formControlName: string, formGroup: SpiderlyFormGroup) => {
        return getControl(formControlName, formGroup);
    }

    getUIControlTypeCode = (property: SpiderlyProperty) : UIControlTypeCodes => {
        const uiControlType: SpiderlyAttribute = property.attributes.find(x => x.name === 'UIControlType');

        if (uiControlType != null) {
            return UIControlTypeCodes[uiControlType.value];
        }

        if (property.dataType === 'string') {
            return UIControlTypeCodes.TextBox;
        }
        else if (property.dataType === 'bool') {
            return UIControlTypeCodes.CheckBox;
        }
        else if (property.dataType === 'decimal') {
            return UIControlTypeCodes.Decimal;
        }
        else if (property.dataType === 'long' || property.dataType === 'int' || property.dataType === 'byte') {
            return UIControlTypeCodes.Integer;
        }

        return UIControlTypeCodes.Autocomplete;
    }
}
