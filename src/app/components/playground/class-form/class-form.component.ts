import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { BaseFormService, LastMenuIconIndexClicked } from '../web-app/entity-details/services/base-form.service';
import { IndexCardComponent } from '../index-card/index-card.component';
import { SpiderlyTextboxComponent } from '../web-app/entity-details/controls/spiderly-textbox/spiderly-textbox.component';
import { SpiderlyDropdownComponent } from '../web-app/entity-details/controls/spiderly-dropdown/spiderly-dropdown.component';
import { SpiderlyClass, SpiderlyProperty, SpiderlyAttribute } from '../entities/entities';
import { SpiderlyFormGroup } from '../web-app/entity-details/spiderly-form-control/spiderly-form-control';
import { getEntityAttributeOptions, getPropertyAttributeOptions, PropertyAttributeCodes, getPropertyAttributeUIControlTypeOptions, showEntityAttributeValueTextbox, showEntityAttributeValueDropdown, showPropertyAttributeValueTextbox, showPropertyAttributeValueDropdown, getPropertyAttributeUIControlWidthOptions } from './services/get-options-functions';
import { PrimengOption } from '../web-app/entity-details/entities/primeng-option';
import { SpiderlyPanelComponent } from "../web-app/entity-details/spiderly-panels/spiderly-panel/spiderly-panel.component";
import { PanelBodyComponent } from "../web-app/entity-details/spiderly-panels/panel-body/panel-body.component";
import { PanelHeaderComponent } from "../web-app/entity-details/spiderly-panels/panel-header/panel-header.component";

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  imports: [
    CommonModule,
    ButtonModule,
    IndexCardComponent,
    SpiderlyTextboxComponent,
    SpiderlyDropdownComponent,
    SpiderlyPanelComponent,
    PanelBodyComponent,
    PanelHeaderComponent
],
})
export class ClassFormComponent {
    @Input() entityFormGroup: SpiderlyFormGroup<SpiderlyClass>;
    @Input() entityIndex: number;
    
    @Input() entities: SpiderlyClass[] = [];
    @Input() menu: MenuItem[] = [];

    lastEntityAttributesMenuIconIndexClicked = new LastMenuIconIndexClicked({});
    lastPropertiesMenuIconIndexClicked = new LastMenuIconIndexClicked({});
    lastPropertyAttributesMenuIconIndexClicked = new LastMenuIconIndexClicked({});

    entityAttributeOptions: PrimengOption[] = getEntityAttributeOptions();
    propertyAttributeOptions: PrimengOption[] = getPropertyAttributeOptions();
    @Input() cSharpDataTypeOptions: PrimengOption[] = [];

    showEntityAttributeValueTextbox = showEntityAttributeValueTextbox;
    showEntityAttributeValueDropdown = showEntityAttributeValueDropdown;
    showPropertyAttributeValueTextbox = showPropertyAttributeValueTextbox;
    showPropertyAttributeValueDropdown = showPropertyAttributeValueDropdown;
    
    constructor(
        public baseFormService: BaseFormService,
    ) {
            
    }

    ngOnInit(){

    }

    getPropertyAttributeValueOptions(formGroup: SpiderlyFormGroup<SpiderlyAttribute>): PrimengOption[] {
      const attributeName = formGroup.controls.name.value;

      if (attributeName === PropertyAttributeCodes.UIControlType) {
        return getPropertyAttributeUIControlTypeOptions();
      }
      if (attributeName === PropertyAttributeCodes.UIControlWidth) {
        return getPropertyAttributeUIControlWidthOptions();
      }

      return [];
    }

    //#region Helpers

    getEntityAttributesCrudMenu = (formGroup: SpiderlyFormGroup<SpiderlyClass>) => {
      return this.baseFormService.getCrudMenuForOrderedData(new SpiderlyAttribute({}), formGroup.controls.attributes, this.lastEntityAttributesMenuIconIndexClicked);
    }
  
    getPropertiesCrudMenu = (formGroup: SpiderlyFormGroup<SpiderlyClass>) => {
      return this.baseFormService.getCrudMenuForOrderedData(new SpiderlyProperty({}), formGroup.controls.properties, this.lastPropertiesMenuIconIndexClicked);
    }
  
    getPropertyAttributesCrudMenu = (formGroup: SpiderlyFormGroup<SpiderlyProperty>) => {
      return this.baseFormService.getCrudMenuForOrderedData(new SpiderlyAttribute({}), formGroup.controls.attributes, this.lastPropertyAttributesMenuIconIndexClicked);
    }

    addNewEntityAttribute(formGroup: SpiderlyFormGroup<SpiderlyClass>) {
        this.baseFormService.addNewFormGroupToFormArray(formGroup.controls.attributes, new SpiderlyAttribute({}), null);
    }

    addNewProperty(formGroup: SpiderlyFormGroup<SpiderlyClass>) {
        this.baseFormService.addNewFormGroupToFormArray(formGroup.controls.properties, new SpiderlyProperty({}), null);
    }

    addNewPropertyAttribute(formGroup: SpiderlyFormGroup<SpiderlyProperty>) {
        this.baseFormService.addNewFormGroupToFormArray(formGroup.controls.attributes, new SpiderlyAttribute({}), null);
    }

    //#endregion

}
