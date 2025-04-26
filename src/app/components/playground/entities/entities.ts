import { BaseEntity } from "../web-app/entity-details/entities/base-entity";

export class SpiderlyClass extends BaseEntity
{
    name?: string;
    attributes?: SpiderlyAttribute[];
    properties?: SpiderlyProperty[];
    data?: any[];
    collapsed?: boolean; // FT HACK: Using only for the initialized classes User and Gender

  constructor(
  {
    name,
    attributes,
    properties,
    data,
    collapsed,
  }:{
    name?: string;
    attributes?: SpiderlyAttribute[];
    properties?: SpiderlyProperty[];
    data?: any[];
    collapsed?: boolean;
  } = {}
  ) {
    super('SpiderlyClass');

    this.name = name,
    this.attributes = attributes ?? [],
    this.properties = properties ?? [],
    this.data = data ?? [],
    this.collapsed = collapsed
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
