import { SpiderlyClass, SpiderlyProperty, SpiderlyAttribute } from "../../../entities/entities";
import { nameof } from "./helper-functions";

export const instance = (className: string, propertyName: string) => {
    switch (className + propertyName){
        case `${new SpiderlyClass().typeName}${nameof<SpiderlyClass>('properties')}`:
            return new SpiderlyProperty({});
        case `${new SpiderlyClass().typeName}${nameof<SpiderlyClass>('attributes')}`:
            return new SpiderlyAttribute({});
        case `${new SpiderlyProperty().typeName}${nameof<SpiderlyProperty>('attributes')}`:
            return new SpiderlyAttribute({});
        default:
            return null;
    }
}