import { BaseFormService, LastMenuIconIndexClicked } from './helpers/layout/playground-details/helpers/services/base-form.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWrapperComponent } from "../../section-wrapper/section-wrapper.component";
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './helpers/layout/layout.component';
import { SpiderlyAttribute, SpiderlyClass, SpiderlyProperty } from './helpers/entities';
import { SpiderlyMenuItem } from './helpers/layout/sidebar/sidebar-menu.component';
import { SpiderlyControlsModule } from "./helpers/layout/playground-details/helpers/controls/spiderly-controls.module";
import { SpiderlyTextboxComponent } from "./helpers/layout/playground-details/helpers/controls/spiderly-textbox/spiderly-textbox.component";
import { SpiderlyFormArray, SpiderlyFormControl, SpiderlyFormGroup } from './helpers/layout/playground-details/helpers/spiderly-form-control/spiderly-form-control';
import { MenuModule } from 'primeng/menu';
import { MenuItem, MessageService } from 'primeng/api';
import { PrimengOption } from './helpers/layout/playground-details/helpers/entities/primeng-option';
import { getCSharpDataTypeOptions, getEntityAttributeOptions, getPropertyAttributeOptions } from './helpers/get-options-functions';
import { IndexCardComponent } from './helpers/components/index-card/index-card.component';
import { SelectModule } from 'primeng/select';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
  imports: [
    CommonModule,
    SectionWrapperComponent,
    ButtonModule,
    RouterModule,
    LayoutComponent,
    SpiderlyControlsModule,
    LayoutComponent,
    MenuModule,
    SpiderlyTextboxComponent,
    IndexCardComponent,
    SelectModule,
    PanelModule,
],
})
export class PlaygroundComponent {
  testControl = new SpiderlyFormControl({});
  ocb: string = '{';
  ccb: string = '}';

  entitiesFormArray: SpiderlyFormArray<SpiderlyClass>;

  lastEntitiesMenuIconIndexClicked = new LastMenuIconIndexClicked({});
  lastEntityAttributesMenuIconIndexClicked = new LastMenuIconIndexClicked({});
  lastPropertiesMenuIconIndexClicked = new LastMenuIconIndexClicked({});
  lastPropertyAttributesMenuIconIndexClicked = new LastMenuIconIndexClicked({});

  entities: SpiderlyClass[] = [];
  menu: SpiderlyMenuItem[] = [
    {
        label: 'Home', 
        icon: 'pi pi-fw pi-home', 
    },
    {
        separator: true,
    }
  ];

  entitiesCrudMenu: MenuItem[];

  entityAttributeOptions: PrimengOption[] = getEntityAttributeOptions();
  propertyAttributeOptions: PrimengOption[] = getPropertyAttributeOptions();
  cSharpDataTypeOptions: PrimengOption[] = getCSharpDataTypeOptions();

  constructor(
    private baseFormService: BaseFormService,
    private messageService: MessageService,
  ) {
        
  }

  ngOnInit(){
    const userEntity = new SpiderlyClass({
      name: 'User', 
      data: [
        {Id: 1, Name: 'Filip'}, 
        {Id: 2, Name: 'Aleksa'}, 
        {Id: 3, Name: 'Milica'}
      ],
      properties: [
          {name:'Id', dataType: 'string', attributes: []}, 
          {name: 'Name', dataType: 'string', attributes: []}, 
          {name: 'Logo', dataType: 'string', attributes: [{name: 'UIControlType', value: 'File'}]}
      ],
    });

    this.saveEntity(userEntity);

    this.entitiesFormArray = this.baseFormService.initFormArray(new SpiderlyClass({}), this.entities);
    this.entitiesCrudMenu = this.baseFormService.getCrudMenuForOrderedData(new SpiderlyClass({}), this.entitiesFormArray, this.lastEntitiesMenuIconIndexClicked);
  }

  saveEntityFormGroup(formGroup: SpiderlyFormGroup<SpiderlyClass>) {
    if (this.baseFormService.checkFormGroupValidity(formGroup) === false) {
      return;
    }

    this.saveEntity(formGroup.value);
  }

  saveEntity(entity: SpiderlyClass) {
    this.entities.push(entity);
    this.menu.push({
      label: `${entity.name}List`,
      icon: `pi pi-list`,
      entity: entity,
    });
  }

  getFormArrayGroups<T>(formArray: SpiderlyFormArray<T>): SpiderlyFormGroup<T>[]{
    return this.baseFormService.getFormArrayGroups<T>(formArray);
  }

  getEntityAttributesFormArrayGroups(formGroup: SpiderlyFormGroup<SpiderlyClass>){
    return this.baseFormService.getFormArrayGroups(formGroup.controls.attributes);
  }

  getPropertiesFormArrayGroups(formGroup: SpiderlyFormGroup<SpiderlyClass>){
    return this.baseFormService.getFormArrayGroups(formGroup.controls.properties);
  }

  getPropertyAttributesFormArrayGroups(formGroup: SpiderlyFormGroup<SpiderlyProperty>){
    return this.baseFormService.getFormArrayGroups(formGroup.controls.attributes);
  }

  getEntityAttributesCrudMenu = (formGroup: SpiderlyFormGroup<SpiderlyClass>) => {
    return this.baseFormService.getCrudMenuForOrderedData(new SpiderlyAttribute({}), formGroup.controls.attributes, this.lastEntityAttributesMenuIconIndexClicked);
  }

  getPropertiesCrudMenu = (formGroup: SpiderlyFormGroup<SpiderlyClass>) => {
    return this.baseFormService.getCrudMenuForOrderedData(new SpiderlyProperty({}), formGroup.controls.properties, this.lastPropertiesMenuIconIndexClicked);
  }

  getPropertyAttributesCrudMenu = (formGroup: SpiderlyFormGroup<SpiderlyProperty>) => {
    return this.baseFormService.getCrudMenuForOrderedData(new SpiderlyAttribute({}), formGroup.controls.attributes, this.lastPropertyAttributesMenuIconIndexClicked);
  }

  addNewEntity() {
    this.baseFormService.addNewFormGroupToFormArray(this.entitiesFormArray, new SpiderlyClass({}), null);
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

  onEntitiesItemRemove(index: number) {
    this.entities = this.entities.filter((_, i) => i !== index);
    this.menu = this.menu.filter((_, i) => i !== index + 2); // FT: Because we always have home and separator as default ones
  }

}
