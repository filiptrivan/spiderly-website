import { BaseFormService } from './helpers/layout/playground-details/helpers/services/base-form.service';
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
import { SpiderlyFormArray, SpiderlyFormGroup } from './helpers/layout/playground-details/helpers/spiderly-form-control/spiderly-form-control';
import { BaseEntity } from './helpers/layout/playground-details/helpers/entities/base-entity';

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
    SpiderlyTextboxComponent
  ],
})
export class PlaygroundComponent {
  ocb: string = '{';
  ccb: string = '}';

  formGroup = new SpiderlyFormGroup({});
  entitiesFormArray: SpiderlyFormArray<SpiderlyClass>;

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

    // this.baseFormService.addFormGroup(this.formGroup, new SpiderlyFormGroup({}), userEntity, null);
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
    const formControlNames = Object.keys(modelConstructor);

    dataList.forEach(dataItem => {
      let helperFormGroup: SpiderlyFormGroup = new SpiderlyFormGroup<SpiderlyClass>({});

      Object.keys(modelConstructor).forEach((key) => {
        if (key === 'attributes') {
          this.baseFormService.addFormArray(helperFormGroup, dataItem[key], new SpiderlyAttribute({}), 'entityAttributes');
        }
        else if (key === 'properties'){
          this.addPropertyFormArray(helperFormGroup, dataItem[key], new SpiderlyProperty({}), 'entityProperties')
        }
        else{
          modelConstructor[key] = dataItem[key];
        }
      });

      this.baseFormService.initFormGroup(helperFormGroup, formControlNames, formArray.modelConstructor);
      formArray.push(helperFormGroup);
    });

    parentFormGroup.setControl(formArrayIdentifierName, formArray); // FT: Use setControl because it will update formArray if it already exists

    return formArray;
  }

  addPropertyFormArray(
    parentFormGroup: SpiderlyFormGroup,
    dataList: SpiderlyClass[], 
    modelConstructor: SpiderlyClass, 
    formArrayIdentifierName: string, 
    required: boolean = false)
  {
    let formArray = new SpiderlyFormArray<SpiderlyClass>([]);
    formArray.required = required;
    formArray.modelConstructor = modelConstructor;
    const formControlNames = Object.keys(modelConstructor);

    dataList.forEach(dataItem => {
      let helperFormGroup: SpiderlyFormGroup = new SpiderlyFormGroup<SpiderlyClass>({});

      Object.keys(modelConstructor).forEach((key) => {
        if (key === 'attributes') {
          this.baseFormService.addFormArray(helperFormGroup, dataItem[key], new SpiderlyAttribute({}), 'propertyAttributes');
        }
        else{
          modelConstructor[key] = dataItem[key];
        }
      });

      this.baseFormService.initFormGroup(helperFormGroup, formControlNames, formArray.modelConstructor);
      formArray.push(helperFormGroup);
    });

    parentFormGroup.setControl(formArrayIdentifierName, formArray); // FT: Use setControl because it will update formArray if it already exists

    return formArray;
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
}
