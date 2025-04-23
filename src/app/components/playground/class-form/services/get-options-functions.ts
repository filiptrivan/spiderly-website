import { PrimengOption } from "../../web-app/entity-details/entities/primeng-option";

export const getEntityAttributeOptions = (): PrimengOption[] => 
    enumToPrimengOptions(EntityAttributeCodes);

export const getPropertyAttributeOptions = (): PrimengOption[] => 
    enumToPrimengOptions(PropertyAttributeCodes);

export const getPropertyAttributeUIControlTypeOptions = (): PrimengOption[] => 
    enumToPrimengOptions(UIControlTypeCodes);

export const getCSharpDataTypeOptions = (): PrimengOption[] => 
    enumToPrimengOptions(CSharpDataTypeCodes);

const enumToPrimengOptions = <T extends Record<string, string>>(enumObj: T): PrimengOption[] => {
    return Object.values(enumObj).map(value => ({
        label: value,
        value: value
    }));
};

export enum EntityAttributeCodes {
    Authorize = 'Authorize',
    TranslatePluralEn = 'TranslatePluralEn',
    TranslatePluralSr = 'TranslatePluralSr',
}

export enum PropertyAttributeCodes {
    BlobName = 'BlobName',
    CascadeDelete = 'CascadeDelete',
    DisplayName = 'DisplayName',
    TranslatePluralEn = 'TranslatePluralEn',
    TranslatePluralSr = 'TranslatePluralSr',
    UIControlType = 'UIControlType'
}

export enum CSharpDataTypeCodes {
    String = 'string',
    DateTime = 'DateTime',
    Bool = 'bool',
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
    Integer = 'Integer',
    ColorPick = 'ColorPick',
    Editor = 'Editor',
    MultiAutocomplete = 'MultiAutocomplete',
    MultiSelect = 'MultiSelect',
    Password = 'Password',
    TextBlock = 'TextBlock',
    TODO = 'TODO',
}