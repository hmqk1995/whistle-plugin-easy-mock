export const enum MockType {
  IDL = 'idl',
  HTTP = 'http',
}

export interface MockItem {
  type: MockType;
  pattern: string;
  data: string[];
  enabled: boolean;
  delay: number;
  idx: number;
}

type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;

export interface Rules {
  idl: MockItem[];
  http: MockItem[];
}

export interface CollectionBrief {
  title: string;
  id: string;
}

export interface Collection extends CollectionBrief {
  rules: Rules;
  zap: boolean;
}
