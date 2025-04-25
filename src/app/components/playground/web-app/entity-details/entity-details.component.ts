import { BaseFormService } from './services/base-form.service';
import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SpiderlyAttribute, SpiderlyClass, SpiderlyProperty } from '../../entities/entities';
import { SpiderlyControlsModule } from './controls/spiderly-controls.module';
import { SpiderlyFormControl, SpiderlyFormGroup, SpiderlyValidatorFn } from './spiderly-form-control/spiderly-form-control';
import { PanelBodyComponent } from './spiderly-panels/panel-body/panel-body.component';
import { PanelFooterComponent } from './spiderly-panels/panel-footer/panel-footer.component';
import { PanelHeaderComponent } from './spiderly-panels/panel-header/panel-header.component';
import { SpiderlyPanelComponent } from './spiderly-panels/spiderly-panel/spiderly-panel.component';
import { CSharpDataTypeCodes, PropertyAttributeCodes, UIControlTypeCodes } from '../../class-form/services/get-options-functions';
import { PrimengOption } from './entities/primeng-option';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { MessageService } from 'primeng/api';
import { firstCharToUpper, getEntityDisplayProperty, getSuccessMessageOptions, splitPascalCase } from './services/helper-functions';
import { notEmptyValidator, setValidators } from './services/validator-functions';

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
    @Input() entity: SpiderlyClass;
    @Input() entities: SpiderlyClass[];
    @Input() index: number;
    @Input() dropdownOptions: { [key: string]: PrimengOption[] } = {};
    dropdownFilteredOptions: { [key: string]: PrimengOption[] } = {};

    @Output() onReturn = new EventEmitter();
    @Output() onSave = new EventEmitter();

    formGroup: SpiderlyFormGroup;
    isNewDataItem: boolean = false;

    UIControlTypeCodes = UIControlTypeCodes;

    constructor(
        private baseFormService: BaseFormService,
        private messageService: MessageService
    ) {
    }
    
    ngOnInit() {
        this.refreshFormGroup();
        this.dropdownFilteredOptions = this.dropdownOptions;
    }

    refreshFormGroup = () => {
        this.formGroup = new SpiderlyFormGroup({});
        let ctor = this.entity.data[this.index];
        
        if (ctor == null) {
            this.isNewDataItem = true;
            ctor = {};
        }

        this.initFormGroup(this.formGroup, ctor, this.entity.properties)
    }

    // FT: Not using the baseFormService.initFormGroup because this is specific runtime use case 
    initFormGroup = (
        formGroup: SpiderlyFormGroup, 
        ctor: any,
        properties: SpiderlyProperty[],
        updateOnChangeControls?: string[]
    ) => {
        if (formGroup == null)
            console.error('FT: You need to instantiate the form group.')
    
        properties.forEach(property => {
            const formControlName = property.name;

            if (ctor[formControlName] == null) {
                ctor[formControlName] = null;
            }

            let formControl: SpiderlyFormControl;
            const formControlLabelForDisplay = splitPascalCase(firstCharToUpper(formControlName));
    
            const initialValue = ctor[formControlName];

            if (updateOnChangeControls?.includes(formControlName)){
                formControl = new SpiderlyFormControl(initialValue, { updateOn: 'change' });
            }
            else{
                formControl = new SpiderlyFormControl(initialValue, { updateOn: 'blur' });
            }

            formControl.label = formControlName;
            formControl.labelForDisplay = formControlLabelForDisplay;
    
            let validators: SpiderlyValidatorFn[] = [];
            
            if (property.attributes.some(x => x.name === PropertyAttributeCodes.Required)) {
                validators.push(notEmptyValidator(formControl));
            }

            setValidators(formControl, validators)

            formGroup.setControl(formControlName, formControl); // FT: Use setControl because it will update formControl if it already exists
        });
    
        return formGroup;
    }

    getUIControlTypeCode = (property: SpiderlyProperty) : UIControlTypeCodes => {
        const uiControlType: SpiderlyAttribute = property.attributes.find(x => x.name === PropertyAttributeCodes.UIControlType);

        if (uiControlType != null && uiControlType.value != null) {
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
            return UIControlTypeCodes.Number;
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

    search(event: AutoCompleteCompleteEvent, className: string) {
        const query = event.query.toLowerCase();

        this.dropdownFilteredOptions[className] = this.dropdownOptions[className].filter(option =>
          option.label.toLowerCase().includes(query)
        );
    }

    save() {
        if (this.baseFormService.checkFormGroupValidity(this.formGroup, 'playground') === false) {
            return;
        }

        if (this.isNewDataItem) {
            this.entity.data.push(this.formGroup.value);
            this.index = this.entity.data.length - 1;
        }
        else{
            this.entity.data = this.entity.data.filter((_, i) => i !== this.index)
            this.entity.data.splice(this.index, 0, this.formGroup.value);
        }

        this.messageService.add(getSuccessMessageOptions('Successfully saved', null, 'playground'));
        this.isNewDataItem = false;
        this.onSave.next(null);
    }
    
    return() {
        this.onReturn.next(null);
    }
}
