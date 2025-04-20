import { BaseFormService, LastMenuIconIndexClicked } from './helpers/layout/playground-details/helpers/services/base-form.service';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWrapperComponent } from "../../section-wrapper/section-wrapper.component";
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './helpers/layout/layout.component';
import { SpiderlyAttribute, SpiderlyClass, SpiderlyProperty } from './helpers/entities';
import { SpiderlyMenuItem } from './helpers/layout/sidebar/sidebar-menu.component';
import { SpiderlyControlsModule } from "./helpers/layout/playground-details/helpers/controls/spiderly-controls.module";
import { SpiderlyTextboxComponent } from "./helpers/layout/playground-details/helpers/controls/spiderly-textbox/spiderly-textbox.component";
import { SpiderlyFormArray, SpiderlyFormGroup } from './helpers/layout/playground-details/helpers/spiderly-form-control/spiderly-form-control';
import { Menu, MenuModule } from 'primeng/menu';
import { MenuItem, MessageService } from 'primeng/api';
import { getWarningMessageOptions } from './helpers/layout/playground-details/helpers/services/helper-functions';
import { PrimengOption } from './helpers/layout/playground-details/helpers/entities/primeng-option';
import { getCSharpDataTypeOptions, getEntityAttributeOptions, getPropertyAttributeOptions } from './helpers/get-options-functions';

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
    SpiderlyTextboxComponent
  ],
})
export class PlaygroundComponent {
  ocb: string = '{';
  ccb: string = '}';

  // formGroup = new SpiderlyFormGroup({});
  entitiesFormArray: SpiderlyFormArray<SpiderlyClass>;

  lastEntitiesMenuIconIndexClicked = new LastMenuIconIndexClicked({});
  lastEntityAttributesMenuIconIndexClicked = new LastMenuIconIndexClicked({});
  lastPropertiesMenuIconIndexClicked = new LastMenuIconIndexClicked({});
  lastPropertyAttributesMenuIconIndexClicked = new LastMenuIconIndexClicked({});
  
  @ViewChild('entityMenu') entityMenu: Menu;
  @ViewChild('entityAttributeMenu') entityAttributeMenu: Menu;
  @ViewChild('propertyMenu') propertyMenu: Menu;
  @ViewChild('propertyAttributeMenu') propertyAttributeMenu: Menu;

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
    // const userEntity = new SpiderlyClass({
    //   name: 'User', 
    //   data: [
    //     {Id: 1, Name: 'Filip'}, 
    //     {Id: 2, Name: 'Aleksa'}, 
    //     {Id: 3, Name: 'Milica'}
    //   ],
    //   properties: [
    //       {name:'Id', dataType: 'string', attributes: []}, 
    //       {name: 'Name', dataType: 'string', attributes: []}, 
    //       {name: 'Logo', dataType: 'string', attributes: [{name: 'UIControlType', value: 'File'}]}
    //   ],
    // });

    // this.saveEntity(userEntity);

    this.entitiesFormArray = this.baseFormService.initFormArray(new SpiderlyClass({}), this.entities);
    this.entitiesCrudMenu = this.baseFormService.getCrudMenuForOrderedData(new SpiderlyClass({}), this.entitiesFormArray, this.lastEntitiesMenuIconIndexClicked);
  }

  saveEntityFormGroup(formGroup: SpiderlyFormGroup<SpiderlyClass>) {
    if (formGroup.invalid) {
      this.messageService.add(getWarningMessageOptions('Some fields on the form are invalid.'));
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

  entityMenuItemClick = (index: number, event) => {
    this.entityMenu.toggle(event);
    this.lastEntitiesMenuIconIndexClicked.index = index;
  }

  entityAttributeMenuItemClick = (index: number, event) => {
    this.entityAttributeMenu.toggle(event);
    this.lastEntityAttributesMenuIconIndexClicked.index = index;
  }

  propertyMenuItemClick = (index: number, event) => {
    this.propertyMenu.toggle(event);
    this.lastPropertiesMenuIconIndexClicked.index = index;
  }
  
  propertyAttributeMenuItemClick = (index: number, event) => {
    this.propertyAttributeMenu.toggle(event);
    this.lastPropertyAttributesMenuIconIndexClicked.index = index;
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

}
