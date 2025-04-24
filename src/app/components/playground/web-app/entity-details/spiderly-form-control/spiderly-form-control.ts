import { FormArray, FormControl, FormControlOptions, FormGroup, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { BaseEntity } from '../entities/base-entity';

export interface SpiderlyValidatorFn extends ValidatorFn {
    hasNotEmptyRule?: boolean;
}

// FT: It's made like generic type because of <number>, <string> etc. not to put class like User.
export class SpiderlyFormControl<T = any> extends FormControl<T> {
    public label: string;
    public labelForDisplay: string;
    public required: boolean;
    private _spiderlyValidator: SpiderlyValidatorFn | null;

    constructor(value: any, opts: FormControlOptions=null, required:boolean=false) {
        opts = opts ?? {updateOn: 'blur'};
        super(value, opts);
        this.required = required;
     }

    override getRawValue(): T { // FT: Doing this because .value gets only not disabled values
        return super.getRawValue() as T;
    }

    public override get validator(): SpiderlyValidatorFn | null {
        return this._spiderlyValidator;
    }

    public override set validator(validator: SpiderlyValidatorFn | null) {
        this._spiderlyValidator = validator;
        this.setValidators(validator); 
    }
}

type ControlOf<T> =
  T extends (infer U)[]
    ? SpiderlyFormArray<U>
    : T extends object
      ? SpiderlyFormGroup<T>
      : SpiderlyFormControl<T>;

export class SpiderlyFormGroup<TValue = any> extends FormGroup {
    declare controls: { [K in keyof TValue]: ControlOf<TValue[K]> };

    constructor(controls: { [K in keyof TValue]: ControlOf<TValue[K]> }) {
        super(controls);
    }

    override getRawValue(): TValue { // FT: Doing this because .value gets only not disabled values
        return super.getRawValue() as TValue;
    }

    getFormControl(name: string): SpiderlyFormControl {
        return super.get(name as string) as SpiderlyFormControl;
    }

    public name?: string; // FT: Using for nested form groups
    public mainDTOName?: string;
    public saveObservableMethod?: (saveBody: any) => Observable<any>;
    public initSaveBody?: () => BaseEntity = () => null;
    public controlNamesFromHtml?: string[] = [];
}

export class SpiderlyFormArray<TValue = any> extends FormArray {
    override value: TValue[] = []; // FT: There is no getRawValue in FormArray
    public label: string;
    public labelForDisplay: string;
    public required: boolean;
    public controlNamesFromHtml?: string[] = [];
}