import { SpiderlyAttribute } from "../../entities/entities";
import { PrimengOption } from "../../web-app/entity-details/entities/primeng-option";
import { SpiderlyFormGroup } from "../../web-app/entity-details/spiderly-form-control/spiderly-form-control";

export const getEntityAttributeOptions = (): PrimengOption[] => 
    enumToPrimengOptions(EntityAttributeCodes);

export const getPropertyAttributeOptions = (): PrimengOption[] => 
    enumToPrimengOptions(PropertyAttributeCodes);

export const getPropertyAttributeUIControlTypeOptions = (): PrimengOption[] => 
    enumToPrimengOptions(UIControlTypeCodes);

export const getPropertyAttributeUIControlWidthOptions = (): PrimengOption[] => 
    enumToPrimengOptions(UIControlWidthCodes);

export const getCSharpDataTypeOptions = (): PrimengOption[] => 
    enumToPrimengOptions(CSharpDataTypeCodes);

const enumToPrimengOptions = <T extends Record<string, string>>(enumObj: T): PrimengOption[] => {
    return Object.values(enumObj).map(value => ({
        label: value,
        value: value
    }));
};

export enum EntityAttributeCodes {
    TranslatePluralEn = 'TranslatePluralEn',
    TranslateEn = 'TranslateEn',
}

export enum PropertyAttributeCodes {
    Required = 'Required',
    DisplayName = 'DisplayName',
    TranslateEn = 'TranslateEn',
    UIControlType = 'UIControlType',
    UIControlWidth = 'UIControlWidth'
}

export enum CSharpDataTypeCodes {
    String = 'string',
    DateTime = 'DateTime',
    Bool = 'bool',
    Decimal = 'decimal',
    Long = 'long',
    Int = 'int',
    Byte = 'byte',
}

export enum UIControlTypeCodes
{
    Decimal = 'Decimal',
    File = 'File',
    Dropdown = 'Dropdown',
    TextArea = 'TextArea',
    Autocomplete = 'Autocomplete',
    TextBox = 'TextBox',
    CheckBox = 'CheckBox',
    Calendar = 'Calendar',
    Number = 'Number',
    ColorPick = 'ColorPick',
    Editor = 'Editor',
    Password = 'Password',
    TextBlock = 'TextBlock',
    TODO = 'TODO',
}

export enum UIControlWidthCodes
{
    _12 = 'col-12',
    _12_6 = 'col-12 md:col-6',
    _6 = 'col-6',
    _12_4 = 'col-12 md:col-4',
}

export const showEntityAttributeValueTextbox = (formGroup: SpiderlyFormGroup<SpiderlyAttribute>): boolean => {
    const attributeName = formGroup.controls.name.value;

    if (attributeName === EntityAttributeCodes.TranslatePluralEn) {
        return true;
    }
    if (attributeName === EntityAttributeCodes.TranslateEn) {
        return true;
    }

    return false;
}

export const showEntityAttributeValueDropdown = (formGroup: SpiderlyFormGroup<SpiderlyAttribute>): boolean => {
    return false;
}

export const showPropertyAttributeValueTextbox = (formGroup: SpiderlyFormGroup<SpiderlyAttribute>): boolean => {
    const attributeName = formGroup.controls.name.value;
    
    if (attributeName === EntityAttributeCodes.TranslateEn) {
        return true;
    }

    return false;
}

export const showPropertyAttributeValueDropdown = (formGroup: SpiderlyFormGroup<SpiderlyAttribute>): boolean => {
    const attributeName = formGroup.controls.name.value;
    
    if (attributeName === PropertyAttributeCodes.UIControlType) {
        return true;
    }
    if (attributeName === PropertyAttributeCodes.UIControlWidth) {
        return true;
    }

    return false;
}