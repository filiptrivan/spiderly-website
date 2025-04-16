export class SpiderlyClass
{
    name?: string;
    attributes?: SpiderAttribute[] = [];
    properties?: SpiderProperty[] = [];
    data?: any[] = [];

  constructor(
  {
    name,
    attributes,
    properties,
    data,
  }:{
    name?: string;
    attributes?: SpiderAttribute[];
    properties?: SpiderProperty[];
    data?: any[];
  } = {}
  ) {
    this.name = name,
    this.attributes = attributes,
    this.properties = properties,
    this.data = properties
  }
}

export class SpiderAttribute{
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

export class SpiderProperty{
  name?: string;
  type?: string;
  attributes?: SpiderAttribute[] = [];

  constructor(
  {
    name,
    type,
    attributes,
  }:{
    name?: string;
    type?: string;
    attributes?: SpiderAttribute[];
  } = {}
  ) {
    this.name = name,
    this.type = type,
    this.attributes = attributes
  }
}
