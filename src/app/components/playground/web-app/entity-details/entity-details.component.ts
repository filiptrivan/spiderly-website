import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SpiderlyAttribute, SpiderlyClass, SpiderlyProperty } from '../../entities/entities';
import { SpiderlyControlsModule } from './controls/spiderly-controls.module';
import { SpiderlyFormControl, SpiderlyFormGroup } from './spiderly-form-control/spiderly-form-control';
import { PanelBodyComponent } from './spiderly-panels/panel-body/panel-body.component';
import { PanelFooterComponent } from './spiderly-panels/panel-footer/panel-footer.component';
import { PanelHeaderComponent } from './spiderly-panels/panel-header/panel-header.component';
import { SpiderlyPanelComponent } from './spiderly-panels/spiderly-panel/spiderly-panel.component';
import { CSharpDataTypeCodes, PropertyAttributeCodes, UIControlTypeCodes } from '../../class-form/services/get-options-functions';
import { PrimengOption } from './entities/primeng-option';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

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
    formGroup: SpiderlyFormGroup;
    @Input() entity: SpiderlyClass;
    @Input() entities: SpiderlyClass[];
    @Input() index: number;

    UIControlTypeCodes = UIControlTypeCodes;

    dropdownOptions: { [key: string]: PrimengOption[] } = {};
    dropdownFilteredOptions: { [key: string]: PrimengOption[] } = {};

    constructor(
    ) {
    }
    
    ngOnInit() {
        this.refreshFormGroup();
        this.initDropdownOptions();
    }

    refreshFormGroup = () => {
        this.formGroup = new SpiderlyFormGroup({});
        let ctor = this.entity.data[this.index];
        if (ctor == null) {
            ctor = {}
            this.entity.properties.forEach(property => {
                ctor[property.name] = undefined;
            });
        }
        this.initFormGroup(this.formGroup, ctor)
    }

    // FT: Not using the baseFormService.initFormGroup because this is specific runtime use case 
    initFormGroup = (
        formGroup: SpiderlyFormGroup, 
        ctor: any,
        updateOnChangeControls?: string[]
    ) => {
        if (formGroup == null)
            console.error('FT: You need to instantiate the form group.')
    
        if (ctor == null)
            console.error('FT: Ctor can not be null.')

        const formControlNames = Object.keys(ctor);
    
        formControlNames.forEach(formControlName => {
            let formControl: SpiderlyFormControl;
    
            const initialValue = ctor[formControlName];

            if (updateOnChangeControls?.includes(formControlName)){
                formControl = new SpiderlyFormControl(initialValue, { updateOn: 'change' });
            }
            else{
                formControl = new SpiderlyFormControl(initialValue, { updateOn: 'blur' });
            }

            formControl.label = formControlName;
            formControl.labelForDisplay = formControlName;
    
            formGroup.setControl(formControlName, formControl); // FT: Use setControl because it will update formControl if it already exists
        });
    
        return formGroup;
    }

    getUIControlTypeCode = (property: SpiderlyProperty) : UIControlTypeCodes => {
        const uiControlType: SpiderlyAttribute = property.attributes.find(x => x.name === PropertyAttributeCodes.UIControlType);

        if (uiControlType != null) {
            return UIControlTypeCodes[uiControlType.value];
        }

        if (property.dataType === CSharpDataTypeCodes.String) {
            return UIControlTypeCodes.TextBox;
        }
        else if (property.dataType === CSharpDataTypeCodes.Bool) {
            return UIControlTypeCodes.CheckBox;
        }
        else if (property.dataType === CSharpDataTypeCodes.Decimal) {
            return UIControlTypeCodes.Decimal;
        }
        else if (property.dataType === CSharpDataTypeCodes.Long || property.dataType === CSharpDataTypeCodes.Int || property.dataType === CSharpDataTypeCodes.Byte) {
            return UIControlTypeCodes.Integer;
        }

        return UIControlTypeCodes.Autocomplete;
    }

    getUIControlWidth = (property: SpiderlyProperty) => {
        const uiControlWidthAttribute = property.attributes.find(x => x.name === PropertyAttributeCodes.UIControlWidth);

        if (uiControlWidthAttribute != null) {
            return uiControlWidthAttribute.value;
        }

        return null;
    }

    initDropdownOptions = () => {
        this.dropdownOptions = {};
        this.dropdownFilteredOptions = {};

        this.entity.properties.forEach(property => {
            const uiControlTypeCode = this.getUIControlTypeCode(property);
            if (uiControlTypeCode !== UIControlTypeCodes.Autocomplete && uiControlTypeCode !== UIControlTypeCodes.Dropdown) {
              return;
            }
            
            const entity = this.entities.find(e => e.name === property.dataType);
            
            const displayProperty = entity.properties.find(p => p.name === PropertyAttributeCodes.DisplayName);

            this.dropdownOptions[entity.name] = this.dropdownFilteredOptions[entity.name] = entity.data.map((dataItem, i) => {
                return {
                    label: displayProperty == null ? i.toString() : dataItem[displayProperty.name], 
                    value: i
                }
            });
        });
    }

    search(event: AutoCompleteCompleteEvent, className: string) {
        const query = event.query.toLowerCase();

        this.dropdownFilteredOptions[className] = this.dropdownOptions[className].filter(option =>
          option.label.toLowerCase().includes(query)
        );
    }

    save() {
        throw new Error('Method not implemented.');
    }
    
    onReturn() {
        throw new Error('Method not implemented.');
    }
}
