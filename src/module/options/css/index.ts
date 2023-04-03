import { FormatAttr } from '../../../format-attr';


export interface CssAttr {
  before?: string;
  mainElement?: string;
  after?: string;
  [key: string]: string;
}

export type CssGroupAttr = FormatAttr<CssAttr>;
