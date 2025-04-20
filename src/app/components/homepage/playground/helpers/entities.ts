import { BaseEntity } from "./layout/playground-details/helpers/entities/base-entity";

export class SpiderlyClass extends BaseEntity
{
    name?: string;
    attributes?: SpiderlyAttribute[];
    properties?: SpiderlyProperty[];
    data?: any[];

  constructor(
  {
    name,
    attributes,
    properties,
    data,
  }:{
    name?: string;
    attributes?: SpiderlyAttribute[];
    properties?: SpiderlyProperty[];
    data?: any[];
  } = {}
  ) {
    super('SpiderlyClass');

    this.name = name,
    this.attributes = attributes ?? [],
    this.properties = properties ?? [],
    this.data = data ?? []
  }
}

export class SpiderlyAttribute extends BaseEntity
{
  name?: string;
  value?: string;

  constructor(
  {
    name,
    value,
  }:{
    name?: string;
    value?: string;
  } = {}
  ) {
    super('SpiderlyAttribute');

    this.name = name,
    this.value = value
  }
}

export class SpiderlyProperty extends BaseEntity
{
  name?: string;
  dataType?: string;
  attributes?: SpiderlyAttribute[];

  constructor(
  {
    name,
    dataType,
    attributes,
  }:{
    name?: string;
    dataType?: string;
    attributes?: SpiderlyAttribute[];
  } = {}
  ) {
    super('SpiderlyProperty');

    this.name = name,
    this.dataType = dataType,
    this.attributes = attributes ?? []
  }
}
