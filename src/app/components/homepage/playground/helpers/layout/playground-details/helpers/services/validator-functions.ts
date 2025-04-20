import { ValidationErrors } from "@angular/forms";
import { SpiderlyFormControl, SpiderlyValidatorFn } from "../spiderly-form-control/spiderly-form-control";
import { nameof } from "./helper-functions";
import { SpiderlyProperty } from "../../../../entities";

export const setValidator = (formControl: SpiderlyFormControl, className: string): SpiderlyValidatorFn => {
    switch(formControl.label + className){
        case `${nameof<SpiderlyProperty>('name')}${new SpiderlyProperty().typeName}`:
            return isArrayEmpty(formControl);
        default:
            return null;
    }
}

export const isArrayEmpty = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
    const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
        const value = control.value;

        const notEmptyRule = typeof value !== 'undefined' && value !== null && value.length !== 0;

        const arrayValid = notEmptyRule;

        return arrayValid ? null : { _ : 'The field can not be empty'};
    };
    
    validator.hasNotEmptyRule = true;
    control.required = true;
    control.validator = validator;

    return validator;
}