import { TranslocoService } from '@jsverse/transloco';
import { Injectable } from '@angular/core';
import { ValidatorServiceGenerated } from "./validators.generated";
import { ValidatorAbstractService, SpiderlyFormControl, SpiderlyValidatorFn } from 'spiderly';

@Injectable({
    providedIn: 'root',
})
export class ValidatorService extends ValidatorAbstractService {

    constructor(
        protected override translocoService: TranslocoService,
        private validatorServiceGenerated: ValidatorServiceGenerated,
    ) {
        super(translocoService);
    }

    override setValidator = (formControl: SpiderlyFormControl, className: string): SpiderlyValidatorFn => {
        return this.validatorServiceGenerated.setValidator(formControl, className);
    }

}
