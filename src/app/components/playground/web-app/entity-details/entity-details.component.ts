import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SpiderlyAttribute, SpiderlyClass, SpiderlyProperty as SpiderlyProperty } from '../../entities/entities';
import { SpiderlyControlsModule } from './controls/spiderly-controls.module';
import { UIControlTypeCodes } from './enums/enums';
import { BaseFormService } from './services/base-form.service';
import { getControl } from './services/helper-functions';
import { SpiderlyFormGroup } from './spiderly-form-control/spiderly-form-control';
import { PanelBodyComponent } from './spiderly-panels/panel-body/panel-body.component';
import { PanelFooterComponent } from './spiderly-panels/panel-footer/panel-footer.component';
import { PanelHeaderComponent } from './spiderly-panels/panel-header/panel-header.component';
import { SpiderlyPanelComponent } from './spiderly-panels/spiderly-panel/spiderly-panel.component';

@Component({
    selector: 'app-entity-details',
    templateUrl: './entity-details.component.html',
    styleUrl: './entity-details.component.scss',
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
export class EntityDetailsComponent implements OnInit {
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
