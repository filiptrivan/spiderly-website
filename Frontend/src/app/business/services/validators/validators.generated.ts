import { ValidationErrors } from '@angular/forms';
import { TranslocoService } from '@jsverse/transloco';
import { Injectable } from '@angular/core';
import { SpiderlyFormControl, SpiderlyValidatorFn, validatePrecisionScale } from 'spiderly';

@Injectable({
    providedIn: 'root',
})
export class ValidatorServiceGenerated {

    constructor(
        protected translocoService: TranslocoService
    ) {
    }

    setValidator = (formControl: SpiderlyFormControl, className: string): SpiderlyValidatorFn => {
        switch(formControl.label + className){
            case 'emailLogin':
                return this.emailLoginValidator(formControl);

            case 'titleNotification':
                return this.titleNotificationValidator(formControl);
            case 'descriptionNotification':
                return this.descriptionNotificationValidator(formControl);
            case 'emailBodyNotification':
                return this.emailBodyNotificationValidator(formControl);
            case 'versionNotification':
                return this.versionNotificationValidator(formControl);
            case 'createdAtNotification':
                return this.createdAtNotificationValidator(formControl);
            case 'modifiedAtNotification':
                return this.modifiedAtNotificationValidator(formControl);

            case 'namePermission':
                return this.namePermissionValidator(formControl);
            case 'nameLatinPermission':
                return this.nameLatinPermissionValidator(formControl);
            case 'descriptionPermission':
                return this.descriptionPermissionValidator(formControl);
            case 'descriptionLatinPermission':
                return this.descriptionLatinPermissionValidator(formControl);
            case 'codePermission':
                return this.codePermissionValidator(formControl);

            case 'emailRegistration':
                return this.emailRegistrationValidator(formControl);

            case 'nameRole':
                return this.nameRoleValidator(formControl);
            case 'descriptionRole':
                return this.descriptionRoleValidator(formControl);
            case 'versionRole':
                return this.versionRoleValidator(formControl);
            case 'createdAtRole':
                return this.createdAtRoleValidator(formControl);
            case 'modifiedAtRole':
                return this.modifiedAtRoleValidator(formControl);

            case 'userEmailTransaction':
                return this.userEmailTransactionValidator(formControl);
            case 'amountPaidTransaction':
                return this.amountPaidTransactionValidator(formControl);
            case 'currencyTransaction':
                return this.currencyTransactionValidator(formControl);
            case 'userIdTransaction':
                return this.userIdTransactionValidator(formControl);
            case 'subscriptionIdTransaction':
                return this.subscriptionIdTransactionValidator(formControl);
            case 'versionTransaction':
                return this.versionTransactionValidator(formControl);
            case 'createdAtTransaction':
                return this.createdAtTransactionValidator(formControl);
            case 'modifiedAtTransaction':
                return this.modifiedAtTransactionValidator(formControl);

            case 'emailUser':
                return this.emailUserValidator(formControl);
            case 'versionUser':
                return this.versionUserValidator(formControl);
            case 'createdAtUser':
                return this.createdAtUserValidator(formControl);
            case 'modifiedAtUser':
                return this.modifiedAtUserValidator(formControl);

            case 'stripeProductNameUserSubscription':
                return this.stripeProductNameUserSubscriptionValidator(formControl);
            case 'stripeProductIdUserSubscription':
                return this.stripeProductIdUserSubscriptionValidator(formControl);
            case 'apiKeyValueUserSubscription':
                return this.apiKeyValueUserSubscriptionValidator(formControl);
            case 'validFromUserSubscription':
                return this.validFromUserSubscriptionValidator(formControl);
            case 'validToUserSubscription':
                return this.validToUserSubscriptionValidator(formControl);
            case 'userIdUserSubscription':
                return this.userIdUserSubscriptionValidator(formControl);
            case 'versionUserSubscription':
                return this.versionUserSubscriptionValidator(formControl);
            case 'createdAtUserSubscription':
                return this.createdAtUserSubscriptionValidator(formControl);
            case 'modifiedAtUserSubscription':
                return this.modifiedAtUserSubscriptionValidator(formControl);

            case 'verificationCodeVerificationTokenRequest':
                return this.verificationCodeVerificationTokenRequestValidator(formControl);
            case 'emailVerificationTokenRequest':
                return this.emailVerificationTokenRequestValidator(formControl);

            default:
                return null;
        }
    }

    emailLoginValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const min = 5;
            const max = 100;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');
            const emailAddressRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

            const valid = notEmptyRule && stringLengthRule && emailAddressRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyLengthEmailAddress', {min, max}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }


    titleNotificationValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const min = 1;
            const max = 100;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');

            const valid = notEmptyRule && stringLengthRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyLength', {min, max}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    descriptionNotificationValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const min = 1;
            const max = 400;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');

            const valid = notEmptyRule && stringLengthRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyLength', {min, max}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    emailBodyNotificationValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const min = 1;
            const max = 1000;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');

            const valid = stringLengthRule;

            return valid ? null : { _ : this.translocoService.translate('Length', {min, max}) };
        };

        control.validator = validator;

        return validator;
    }

    versionNotificationValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    createdAtNotificationValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;
        control.updateValueAndValidity(); // It's necessary only for Date Angular type
        return validator;
    }

    modifiedAtNotificationValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;
        control.updateValueAndValidity(); // It's necessary only for Date Angular type
        return validator;
    }


    namePermissionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const min = 1;
            const max = 100;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');

            const valid = notEmptyRule && stringLengthRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyLength', {min, max}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    nameLatinPermissionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const min = 1;
            const max = 100;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');

            const valid = notEmptyRule && stringLengthRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyLength', {min, max}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    descriptionPermissionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const min = 1;
            const max = 400;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');

            const valid = stringLengthRule;

            return valid ? null : { _ : this.translocoService.translate('Length', {min, max}) };
        };

        control.validator = validator;

        return validator;
    }

    descriptionLatinPermissionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const min = 1;
            const max = 400;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');

            const valid = stringLengthRule;

            return valid ? null : { _ : this.translocoService.translate('Length', {min, max}) };
        };

        control.validator = validator;

        return validator;
    }

    codePermissionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const min = 1;
            const max = 100;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');

            const valid = notEmptyRule && stringLengthRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyLength', {min, max}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }


    emailRegistrationValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const min = 5;
            const max = 100;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');
            const emailAddressRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

            const valid = notEmptyRule && stringLengthRule && emailAddressRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyLengthEmailAddress', {min, max}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }


    nameRoleValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const min = 1;
            const max = 255;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');

            const valid = notEmptyRule && stringLengthRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyLength', {min, max}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    descriptionRoleValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const min = 1;
            const max = 400;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');

            const valid = stringLengthRule;

            return valid ? null : { _ : this.translocoService.translate('Length', {min, max}) };
        };

        control.validator = validator;

        return validator;
    }

    versionRoleValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    createdAtRoleValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;
        control.updateValueAndValidity(); // It's necessary only for Date Angular type
        return validator;
    }

    modifiedAtRoleValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;
        control.updateValueAndValidity(); // It's necessary only for Date Angular type
        return validator;
    }


    userEmailTransactionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const min = 5;
            const max = 70;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');

            const valid = notEmptyRule && stringLengthRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyLength', {min, max}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    amountPaidTransactionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const precision = 18;
            const scale = 2;
            const ignoreTrailingZeros = false;
            const precisionScaleRule = validatePrecisionScale(value, precision, scale, ignoreTrailingZeros) || (typeof value === 'undefined' || value === null || value === '');

            const valid = notEmptyRule && precisionScaleRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyPrecisionScale', {precision, scale}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    currencyTransactionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const min = 1;
            const max = 20;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');

            const valid = notEmptyRule && stringLengthRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyLength', {min, max}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    userIdTransactionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    subscriptionIdTransactionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    versionTransactionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    createdAtTransactionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;
        control.updateValueAndValidity(); // It's necessary only for Date Angular type
        return validator;
    }

    modifiedAtTransactionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;
        control.updateValueAndValidity(); // It's necessary only for Date Angular type
        return validator;
    }


    emailUserValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const min = 5;
            const max = 70;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');
            const emailAddressRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

            const valid = notEmptyRule && stringLengthRule && emailAddressRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyLengthEmailAddress', {min, max}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    versionUserValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    createdAtUserValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;
        control.updateValueAndValidity(); // It's necessary only for Date Angular type
        return validator;
    }

    modifiedAtUserValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;
        control.updateValueAndValidity(); // It's necessary only for Date Angular type
        return validator;
    }


    stripeProductNameUserSubscriptionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const min = 1;
            const max = 500;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');

            const valid = notEmptyRule && stringLengthRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyLength', {min, max}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    stripeProductIdUserSubscriptionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const min = 1;
            const max = 100;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');

            const valid = notEmptyRule && stringLengthRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyLength', {min, max}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    apiKeyValueUserSubscriptionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const min = 10;
            const max = 200;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');

            const valid = notEmptyRule && stringLengthRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyLength', {min, max}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    validFromUserSubscriptionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;
        control.updateValueAndValidity(); // It's necessary only for Date Angular type
        return validator;
    }

    validToUserSubscriptionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;
        control.updateValueAndValidity(); // It's necessary only for Date Angular type
        return validator;
    }

    userIdUserSubscriptionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    versionUserSubscriptionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    createdAtUserSubscriptionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;
        control.updateValueAndValidity(); // It's necessary only for Date Angular type
        return validator;
    }

    modifiedAtUserSubscriptionValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';

            const valid = notEmptyRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmpty', {}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;
        control.updateValueAndValidity(); // It's necessary only for Date Angular type
        return validator;
    }


    verificationCodeVerificationTokenRequestValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const length = 6;
            const stringSingleLengthRule = (value?.length == length) || (typeof value === 'undefined' || value === null || value === '');

            const valid = notEmptyRule && stringSingleLengthRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptySingleLength', {length}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }

    emailVerificationTokenRequestValidator = (control: SpiderlyFormControl): SpiderlyValidatorFn => {
        const validator: SpiderlyValidatorFn = (): ValidationErrors | null => {
            const value = control.value;

            const notEmptyRule = typeof value !== 'undefined' && value !== null && value !== '';
            const min = 5;
            const max = 100;
            const stringLengthRule = (value?.length >= min && value?.length <= max) || (typeof value === 'undefined' || value === null || value === '');
            const emailAddressRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

            const valid = notEmptyRule && stringLengthRule && emailAddressRule;

            return valid ? null : { _ : this.translocoService.translate('NotEmptyLengthEmailAddress', {min, max}) };
        };
        validator.hasNotEmptyRule = true;
        control.required = true;
        control.validator = validator;

        return validator;
    }



}
