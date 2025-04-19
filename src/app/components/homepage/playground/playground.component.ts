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
import { SpiderlyFormArray, SpiderlyFormControl, SpiderlyFormGroup } from './helpers/layout/playground-details/helpers/spiderly-form-control/spiderly-form-control';
import { BaseEntity } from './helpers/layout/playground-details/helpers/entities/base-entity';
import { Menu, MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

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

  formGroup = new SpiderlyFormGroup({});
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
  entityAttributesCrudMenu: MenuItem[];
  propertiesCrudMenu: MenuItem[];
  propertyAttributesCrudMenu: MenuItem[];

  constructor(
    private baseFormService: BaseFormService,
  ) {
        
  }

  ngOnInit(){
    const userEntity = {
      name: 'User', 
      data: [
        {Id: 1, Name: 'Filip'}, 
        {Id: 2, Name: 'Aleksa'}, 
        {Id: 3, Name: 'Milica'}
      ],
      properties: [
          {name:'Id', type: 'string', attributes: []}, 
          {name: 'Name', type: 'string', attributes: []}, 
          {name: 'Logo', type: 'string', attributes: [{name: 'UIControlType', value: 'File'}]}
      ],
      attributes: []
    };

    this.entities.push(userEntity);
    this.menu.push({
      label: `${userEntity.name}List`,
      icon: `pi pi-list`,
      entity: userEntity,
    });

    this.entitiesFormArray = this.addEntityFormArray(this.formGroup, this.entities, new SpiderlyClass({}), null);
    const entityFormGroup = this.initEntityFormGroup(new SpiderlyClass({}), new SpiderlyClass({}));
    this.entitiesCrudMenu = this.baseFormService.getCrudMenuForOrderedData(this.entitiesFormArray, entityFormGroup, this.lastEntitiesMenuIconIndexClicked);
  }

  addEntityFormArray(
    parentFormGroup: SpiderlyFormGroup,
    dataList: SpiderlyClass[], 
    modelConstructor: SpiderlyClass, 
    formArrayIdentifierName: string, 
    required: boolean = false)
  {
    let formArray = new SpiderlyFormArray<SpiderlyClass>([]);
    formArray.required = required;
    formArray.modelConstructor = modelConstructor;

    dataList.forEach(dataItem => {
      const helperFormGroup = this.initEntityFormGroup(dataItem, modelConstructor);
      formArray.push(helperFormGroup);
    });

    parentFormGroup.setControl(formArrayIdentifierName, formArray); // FT: Use setControl because it will update formArray if it already exists

    return formArray;
  }

  initEntityFormGroup = (dataItem: any, modelConstructor: BaseEntity) => {
    let formGroup: SpiderlyFormGroup = new SpiderlyFormGroup<SpiderlyClass>({});

    Object.keys(modelConstructor).forEach((key) => {
      if (key === 'attributes') {
        const entityAttributesFormArray = this.baseFormService.addFormArray(formGroup, dataItem[key], new SpiderlyAttribute({}), 'entityAttributes');
        const entityAttributesFormGroup = this.baseFormService.initFormGroup(new SpiderlyFormGroup({}), Object.keys(new SpiderlyAttribute({})), new SpiderlyAttribute({}));
        this.entityAttributesCrudMenu = this.baseFormService.getCrudMenuForOrderedData(entityAttributesFormArray, entityAttributesFormGroup, this.lastEntityAttributesMenuIconIndexClicked);
      }
      else if (key === 'properties'){
        const propertiesFormArray = this.addPropertyFormArray(formGroup, dataItem[key], new SpiderlyProperty({}), 'entityProperties');
        const propertyFormGroup = this.initPropertyFormGroup(new SpiderlyProperty({}), new SpiderlyProperty({}));
        this.propertiesCrudMenu = this.baseFormService.getCrudMenuForOrderedData(propertiesFormArray, propertyFormGroup, this.lastPropertiesMenuIconIndexClicked);
      }
      else{
        let formControl: SpiderlyFormControl;
        const formControlValue = dataItem[key];
        formControl = new SpiderlyFormControl(formControlValue, { updateOn: 'blur' });
        formControl.label = key;
        formControl.labelForDisplay = key;
  
        formGroup.setControl(key, formControl); // FT: Use setControl because it will update formControl if it already exists
      }
    });

    return formGroup;
  }

  addPropertyFormArray(
    parentFormGroup: SpiderlyFormGroup,
    dataList: SpiderlyProperty[], 
    modelConstructor: SpiderlyProperty, 
    formArrayIdentifierName: string, 
    required: boolean = false)
  {
    let formArray = new SpiderlyFormArray<SpiderlyProperty>([]);
    formArray.required = required;
    formArray.modelConstructor = modelConstructor;

    dataList?.forEach(dataItem => {
      const helperFormGroup = this.initPropertyFormGroup(dataItem, modelConstructor);
      formArray.push(helperFormGroup);
    });

    parentFormGroup.setControl(formArrayIdentifierName, formArray); // FT: Use setControl because it will update formArray if it already exists

    return formArray;
  }

  initPropertyFormGroup = (dataItem: any, modelConstructor: BaseEntity) => {
    let formGroup = new SpiderlyFormGroup<SpiderlyProperty>({});

    Object.keys(modelConstructor).forEach((key) => {
      if (key === 'attributes') {
        const propertyAttributesFormArray = this.baseFormService.addFormArray(formGroup, dataItem[key], new SpiderlyAttribute({}), 'propertyAttributes');
        const propertyAttributesFormGroup = this.baseFormService.initFormGroup(new SpiderlyFormGroup({}), Object.keys(new SpiderlyAttribute({})), new SpiderlyAttribute({}));
        this.propertyAttributesCrudMenu = this.baseFormService.getCrudMenuForOrderedData(propertyAttributesFormArray, propertyAttributesFormGroup, this.lastPropertyAttributesMenuIconIndexClicked);
      }
      else {
        let formControl: SpiderlyFormControl;
        const formControlValue = dataItem[key];
        formControl = new SpiderlyFormControl(formControlValue, { updateOn: 'blur' });
        formControl.label = key;
        formControl.labelForDisplay = key;
  
        formGroup.setControl(key, formControl); // FT: Use setControl because it will update formControl if it already exists
      }
    });

    return formGroup;
  }

  getFormArrayGroups<T>(formArray: SpiderlyFormArray<T>): SpiderlyFormGroup<T>[]{
    return this.baseFormService.getFormArrayGroups<T>(formArray);
  }

  getEntityAttributesFormArrayGroups(formGroup: SpiderlyFormGroup<SpiderlyClass>): SpiderlyFormGroup<SpiderlyAttribute>[]{
    return this.baseFormService.getFormArrayGroups<SpiderlyAttribute>(formGroup.controls['entityAttributes']);
  }

  getPropertiesFormArrayGroups(formGroup: SpiderlyFormGroup<SpiderlyClass>): SpiderlyFormGroup<SpiderlyProperty>[]{
    return this.baseFormService.getFormArrayGroups<SpiderlyProperty>(formGroup.controls['entityProperties']);
  }

  getPropertyAttributesFormArrayGroups(formGroup: SpiderlyFormGroup<SpiderlyProperty>): SpiderlyFormGroup<SpiderlyAttribute>[]{
    return this.baseFormService.getFormArrayGroups<SpiderlyAttribute>(formGroup.controls['propertyAttributes']);
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


}
