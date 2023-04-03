import { FormatAttr } from '../../../format-attr';


export interface ScaleValue {
  x?: string;
  y?: string;
  linked?: string;
}

export interface TranslateValue {
  x?: string;
  y?: string;
  linked?: string;
}

export interface RotateValue {
  x?: string;
  y?: string;
  z?: string;
}

export interface SkewValue {
  x?: string;
  y?: string;
  linked?: string;
}

export interface OriginValue {
  x: string;
  y: string;
}

export interface TransformAttr {
  scale?: ScaleValue;
  translate?: TranslateValue;
  rotate?: RotateValue;
  skew?: SkewValue;
  origin?: OriginValue;
}

export type TransformGroupAttr = FormatAttr<TransformAttr>;
