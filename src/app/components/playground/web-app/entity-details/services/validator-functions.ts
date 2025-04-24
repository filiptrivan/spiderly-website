import { ValidationErrors } from "@angular/forms";
import { SpiderlyFormArray, SpiderlyFormControl, SpiderlyValidatorFn } from "../spiderly-form-control/spiderly-form-control";
import { nameof } from "./helper-functions";
import { SpiderlyAttribute, SpiderlyClass, SpiderlyProperty } from "../../../entities/entities";

export const setValidator = (formControl: SpiderlyFormControl | SpiderlyFormArray, className: string): SpiderlyValidatorFn => {
    switch(formControl.label + className){
        case `${nameof<SpiderlyClass>('name')}${new SpiderlyClass().typeName}`:
            return setValidators(formControl, [notEmptyValidator(formControl as SpiderlyFormControl)]);
        case `${nameof<SpiderlyClass>('properties')}${new SpiderlyClass().typeName}`:
            return setValidators(formControl, [isFormArrayEmpty(formControl as SpiderlyFormArray)]);
        case `${nameof<SpiderlyProperty>('name')}${new SpiderlyProperty().typeName}`:
            return setValidators(formControl, [notEmptyValidator(formControl as SpiderlyFormControl)]);
        case `${nameof<SpiderlyProperty>('dataType')}${new SpiderlyProperty().typeName}`:
            return setValidators(formControl, [notEmptyValidator(formControl as SpiderlyFormControl)]);
        case `${nameof<SpiderlyAttribute>('name')}${new SpiderlyAttribute().typeName}`:
            return setValidators(formControl, [notEmptyValidator(formControl as SpiderlyFormControl)]);
        default:
            return null;
    }
}

export const setValidators = (control, validators: SpiderlyValidatorFn[]): SpiderlyValidatorFn => {
    const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        let validationMessages: string[] = [];

        validators.forEach(validatorFn => {
            const validationMessage = validatorFn(control);
            
            if (validationMessage != null) {
                validationMessages.push(validationMessage['_']);
            }
        });

        const valid = validationMessages.length === 0

        return valid ? null : { _ : validationMessages.join(' ') };
    };
    
    if (validators.some(x => x.hasNotEmptyRule)) {
        validator.hasNotEmptyRule = true;
        control.required = true;
    }

    control.validator = validator;

    return validator;
}

export const notEmptyValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
    const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
        const value = control.value;
        
        const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
        
        const valid = notEmptyRule;

        return valid ? null : { _: 'The field can not be empty.' };
    };
    
    validator.hasNotEmptyRule = true;
    control.required = true;

    return validator;
}

export const isFormArrayEmpty = (control: SpiderlyFormArray): SpiderlyValidatorFn => {
    const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
        const value = control;

        const notEmptyRule = typeof value !== 'undefined' && value !== null && value.length !== 0;

        const valid = notEmptyRule;

        return valid ? null : { _: 'The field can not be empty.' };
    };

    validator.hasNotEmptyRule = true;
    control.required = true;

    return validator;
}