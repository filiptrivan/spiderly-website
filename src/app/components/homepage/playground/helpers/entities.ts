export class SpiderlyClass
{
    name?: string;
    attributes?: SpiderlyAttribute[] = [];
    properties?: SpiderlyProperty[] = [];
    data?: any[] = [];

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
    this.name = name,
    this.attributes = attributes,
    this.properties = properties,
    this.data = data
  }
}

export class SpiderlyAttribute{
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
    this.name = name,
    this.value = value
  }
}

export class SpiderlyProperty{
  name?: string;
  type?: string;
  attributes?: SpiderlyAttribute[] = [];

  constructor(
  {
    name,
    type,
    attributes,
  }:{
    name?: string;
    type?: string;
    attributes?: SpiderlyAttribute[];
  } = {}
  ) {
    this.name = name,
    this.type = type,
    this.attributes = attributes
  }
}
