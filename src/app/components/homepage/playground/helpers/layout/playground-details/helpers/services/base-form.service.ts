import { Injectable } from '@angular/core';
import { SpiderlyFormArray, SpiderlyFormControl, SpiderlyFormGroup } from '../spiderly-form-control/spiderly-form-control';
import { BaseEntity } from '../entities/base-entity';
import { MenuItem, MessageService } from 'primeng/api';
import { Ctor, getWarningMessageOptions } from './helper-functions';
import { SpiderlyAttribute } from '../../../../entities';

@Injectable({
  providedIn: 'root',
})
export class BaseFormService {
  constructor(
    private messageService: MessageService,
  ) {}

  addFormGroup = <T extends BaseEntity>(
    parentFormGroup: SpiderlyFormGroup, 
    formGroup: SpiderlyFormGroup<T>, 
    ctor: T, 
    propertyNameInSaveBody: string,
    updateOnChangeControls?: string[]
  ) => {
    if (ctor == null)
      return null;

    if (formGroup == null)
      console.error('FT: You need to instantiate the form group.')

    this.initFormGroup(formGroup, ctor, updateOnChangeControls);
    parentFormGroup.setControl(propertyNameInSaveBody, formGroup); // FT: Use setControl because it will update formGroup if it already exists

    return formGroup;
  }

  initFormGroup = <T extends BaseEntity>(
    formGroup: SpiderlyFormGroup<T>, 
    ctor: T,
    formControlNames?: string[],
    updateOnChangeControls?: string[]
  ) => {
    if (formGroup == null)
      console.error('FT: You need to instantiate the form group.')

    formControlNames = formControlNames ?? Object.keys(ctor);

    formControlNames.forEach(formControlName => {
      let formControl: SpiderlyFormControl | SpiderlyFormArray;
      
      const initialValue = ctor[formControlName];

      if (Array.isArray(initialValue)) {
        const childCtor = new (initialValue.constructor as new ({}) => any)({});
        formControl = this.initFormArray(childCtor, initialValue);
      }
      else {
        if (updateOnChangeControls?.includes(formControlName)){
          formControl = new SpiderlyFormControl(initialValue, { updateOn: 'change' });
        }
        else{
          formControl = new SpiderlyFormControl(initialValue, { updateOn: 'blur' });
        }

        formControl.label = formControlName;
        formControl.labelForDisplay = formControlName;
      }

      formGroup.setControl(formControlName, formControl); // FT: Use setControl because it will update formControl if it already exists

      // this.validatorService.setValidator(formControl, modelConstructor.typeName);
    });

    return formGroup;
  }

  getFormArrayGroups = <T>(formArray: SpiderlyFormArray<T>): SpiderlyFormGroup<T>[] => {
    return formArray.controls as SpiderlyFormGroup<T>[]
  }

  addNewFormGroupToFormArray<T extends BaseEntity>(
    formArray: SpiderlyFormArray<T>, 
    ctor: T,
    index: number,
  ) : SpiderlyFormGroup {
    let helperFormGroup = new SpiderlyFormGroup({});
    this.initFormGroup<T>(helperFormGroup, ctor);
    
    if (index == null) {
      formArray.push(helperFormGroup);
    }else{
      formArray.insert(index, helperFormGroup);
    }

    return helperFormGroup;
  }

  initFormArray<T extends BaseEntity>(
    ctor: T, 
    dataList: T[], 
    required: boolean = false)
  {
    if (dataList == null)
      throw new Error('You need to pass dataList.');

    let formArray = new SpiderlyFormArray<T>([]);
    formArray.required = required;

    dataList.forEach(dataItem => {
      Object.assign(ctor, dataItem);
      let helperFormGroup = new SpiderlyFormGroup({});
      this.initFormGroup(helperFormGroup, ctor);
      formArray.push(helperFormGroup);
    });

    return formArray;
  }

  addFormArray<T extends BaseEntity>(
    parentFormGroup: SpiderlyFormGroup, 
    ctor: T,
    dataList: T[], 
    formArrayIdentifierName: string, 
    required: boolean = false)
  {
    if (dataList == null) {
      throw new Error('You need to pass dataList.');
    }

    const formArray = this.initFormArray(ctor, dataList, required);

    parentFormGroup.setControl(formArrayIdentifierName, formArray); // FT: Use setControl because it will update formArray if it already exists

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

  getCrudMenuForOrderedData = <T extends BaseEntity>(
    ctor: T, 
    formArray: SpiderlyFormArray<T>, 
    lastMenuIconIndexClicked: LastMenuIconIndexClicked, 
  ): MenuItem[] => {
    let crudMenuForOrderedData: MenuItem[] = [
      {label: 'Remove', icon: 'pi pi-minus', command: () => {
        formArray.removeAt(lastMenuIconIndexClicked.index);
      }},
      {label: 'Add above', icon: 'pi pi-arrow-up', command: () => {
        this.addNewFormGroupToFormArray(
          formArray, ctor, lastMenuIconIndexClicked.index
        );
      }},
      {label: 'Add below', icon: 'pi pi-arrow-down', command: () => {
        this.addNewFormGroupToFormArray(
          formArray, ctor, lastMenuIconIndexClicked.index + 1
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
