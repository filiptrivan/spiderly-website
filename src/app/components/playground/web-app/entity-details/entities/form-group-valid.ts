import { BaseEntity } from "./base-entity";

export class FormGroupValid extends BaseEntity
{
    invalid?: boolean;
    arrayInvalid?: boolean;
    arrayValidationMessages?: string[];
  
    constructor(
    {
        invalid,
        arrayInvalid,
        arrayValidationMessages,
    }:{
        invalid?: boolean;
        arrayInvalid?: boolean;
        arrayValidationMessages?: string[];
    } = {}
    ) {
        super('FormGroupValid');

        this.invalid = invalid;
        this.arrayInvalid = arrayInvalid;
        this.arrayValidationMessages = arrayValidationMessages ?? [];
    }

}