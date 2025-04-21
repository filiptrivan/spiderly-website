import { PrimengOption } from "./layout/playground-details/helpers/entities/primeng-option"

export const getEntityAttributeOptions = (): PrimengOption[] => {
    return [
        {label: 'Authorize', value: 'Authorize'},
        {label: 'Translate Plural En', value: 'TranslatePluralEn'},
        {label: 'TranslatePluralSr', value: 'TranslatePluralSr'},
    ];
}

export const getPropertyAttributeOptions = (): PrimengOption[] => {
    return [
        {label: 'BlobName', value: 'BlobName'},
        {label: 'CascadeDelete', value: 'CascadeDelete'},
        {label: 'DisplayName', value: 'DisplayName'},
    ];
}
export const getCSharpDataTypeOptions = (): PrimengOption[] => {
    return [
        {label: 'string', value: 'string'},
        {label: 'DateTime', value: 'DateTime'},
        {label: 'bool', value: 'bool'},
        {label: 'long', value: 'long'},
        {label: 'int', value: 'int'},
        {label: 'byte', value: 'byte'},
    ];
}