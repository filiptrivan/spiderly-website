import { Injectable } from '@angular/core';
import { SpiderlyFormArray, SpiderlyFormControl, SpiderlyFormGroup } from '../spiderly-form-control/spiderly-form-control';
import { BaseEntity } from '../entities/base-entity';
import { SpiderlyClass, SpiderlyProperty } from '../../../../entities';
import { MenuItem, MessageService } from 'primeng/api';
import { getWarningMessageOptions } from './helper-functions';

@Injectable({
  providedIn: 'root',
})
export class BaseFormService {
  constructor(
    private messageService: MessageService,
  ) {}

  addFormGroup = (
    parentFormGroup: SpiderlyFormGroup, 
    formGroup: SpiderlyFormGroup, 
    modelConstructor: any, 
    propertyNameInSaveBody: string,
    updateOnChangeControls?: string[]
  ) => {
    if (modelConstructor == null)
      return null;

    if (formGroup == null)
      console.error('FT: You need to instantiate the form group.')

    this.initFormGroup(formGroup, Object.keys(modelConstructor), modelConstructor, updateOnChangeControls);
    parentFormGroup.setControl(propertyNameInSaveBody, formGroup); // FT: Use setControl because it will update formGroup if it already exists

    return formGroup;
  }

  initFormGroup = (
    formGroup: SpiderlyFormGroup, 
    formControlNames: string[], 
    modelConstructor: any, 
    updateOnChangeControls?: string[]
  ) => {
    if (formGroup == null)
      console.error('FT: You need to instantiate the form group.')

    formControlNames.forEach(formControlName => {
      let formControl: SpiderlyFormControl;
      
      const formControlValue = modelConstructor[formControlName];
      
      if (updateOnChangeControls?.includes(formControlName)){
        formControl = new SpiderlyFormControl(formControlValue, { updateOn: 'change' });
      }
      else{
        formControl = new SpiderlyFormControl(formControlValue, { updateOn: 'blur' });
      }

      formControl.label = formControlName;
      formControl.labelForDisplay = formControlName;

      formGroup.setControl(formControlName, formControl); // FT: Use setControl because it will update formControl if it already exists

      // this.validatorService.setValidator(formControl, modelConstructor.typeName);
    });

    return formGroup;
  }

  getFormArrayGroups<T>(formArray: SpiderlyFormArray<T>): SpiderlyFormGroup<T>[]{
    return formArray.controls as SpiderlyFormGroup<T>[]
  }

  addNewFormGroupToFormArray<T>(
    formArray: SpiderlyFormArray<T>, 
    formGroup: SpiderlyFormGroup<T>,
    index: number,
  ) : SpiderlyFormGroup {
    if (index == null) {
      formArray.push(formGroup);
    }else{
      formArray.insert(index, formGroup);
    }

    return formGroup;
  }

  addFormArray<T>(
    parentFormGroup: SpiderlyFormGroup, 
    dataList: any[], 
    modelConstructor: T & BaseEntity, 
    formArraySaveBodyName: string, 
    required: boolean = false)
  {
    let formArray = new SpiderlyFormArray<T>([]);
    formArray.required = required;
    formArray.modelConstructor = modelConstructor;
    const formControlNames = Object.keys(modelConstructor);

    dataList?.forEach(data => {
      Object.assign(modelConstructor, data);
      let helperFormGroup: SpiderlyFormGroup = new SpiderlyFormGroup({});
      this.initFormGroup(helperFormGroup, formControlNames, formArray.modelConstructor);
      formArray.push(helperFormGroup);
    });

    parentFormGroup.setControl(formArraySaveBodyName, formArray); // FT: Use setControl because it will update formArray if it already exists

    return formArray;
  }

  disableAllFormControls<T>(formArray: SpiderlyFormArray<T>){
    formArray.controls.forEach((segmentationItemFormGroup: SpiderlyFormGroup) => {
        Object.keys(segmentationItemFormGroup.controls).forEach(key => {
            segmentationItemFormGroup.controls[key].disable();
        });
    });
  }

  enableAllFormControls<T>(formArray: SpiderlyFormArray<T>){
    formArray.controls.forEach((segmentationItemFormGroup: SpiderlyFormGroup) => {
        Object.keys(segmentationItemFormGroup.controls).forEach(key => {
            segmentationItemFormGroup.controls[key].enable();
        });
    });
  }

  getCrudMenuForOrderedData = (
    formArray: SpiderlyFormArray, 
    formGroup: SpiderlyFormGroup, 
    lastMenuIconIndexClicked: LastMenuIconIndexClicked, 
  ): MenuItem[] => {
    let crudMenuForOrderedData: MenuItem[] = [
      {label: 'Remove', icon: 'pi pi-minus', command: () => {
        formArray.removeAt(lastMenuIconIndexClicked.index);
      }},
      {label: 'Add above', icon: 'pi pi-arrow-up', command: () => {
        this.addNewFormGroupToFormArray(
          formArray, formGroup, lastMenuIconIndexClicked.index
        );
      }},
      {label: 'Add below', icon: 'pi pi-arrow-down', command: () => {
        this.addNewFormGroupToFormArray(
          formArray, formGroup, lastMenuIconIndexClicked.index + 1
        );
      }},
    ];

    return crudMenuForOrderedData;
  }

  //#region Helpers

  // FT: If you want to call single method
  checkFormGroupValidity = <T>(formGroup: SpiderlyFormGroup<T>): boolean => {
    if (formGroup.invalid) {
      Object.keys(formGroup.controls).forEach(key => {
        formGroup.controls[key].markAsDirty(); // this.formGroup.markAsDirty(); // FT: For some reason this doesnt work
      });

      this.showInvalidFieldsMessage();

      return false;
    }
    
    return true;
  }

  showInvalidFieldsMessage = () => {
    this.messageService.add(
      getWarningMessageOptions(
        'Some of the fields on the form are not valid, please check which ones and try again.',
        'You have some invalid fields'
      )
    );
  }

  generateNewNegativeId<T extends BaseEntity>(formArray: SpiderlyFormArray<T>){
    return -formArray.getRawValue().filter(x => x.id < 0).length - 1;
  }

  //#endregion

}

export class LastMenuIconIndexClicked extends BaseEntity
{
    index?: number;

    constructor(
    {
        index,
    }:{
        index?: number;
    } = {}
    ) {
        super('LastMenuIconIndexClicked'); 

        this.index = index;
    }
}
