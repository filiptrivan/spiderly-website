import { PrimengOption } from "./layout/playground-details/helpers/entities/primeng-option"

export const getEntityAttributeOptions = (): PrimengOption[] => {
    return [
        {label: 'Authorize', value: 0},
        {label: 'TranslatePluralEn', value: 1},
        {label: 'TranslatePluralSr', value: 2},
    ];
}

export const getPropertyAttributeOptions = (): PrimengOption[] => {
    return [
        {label: 'BlobName', value: 0},
        {label: 'CascadeDelete', value: 1},
        {label: 'DisplayName', value: 2},
    ];
}
export const getCSharpDataTypeOptions = (): PrimengOption[] => {
    return [
        {label: 'string', value: 0},
        {label: 'DateTime', value: 1},
        {label: 'bool', value: 2},
        {label: 'long', value: 3},
        {label: 'int', value: 4},
        {label: 'byte', value: 5},
    ];
}