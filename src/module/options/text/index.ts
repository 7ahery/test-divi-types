import { FormatAttr } from '../../../format-attr';
import { TextShadowGroupAttr } from '../text-shadow';


export interface TextAttr {
  color?: 'dark' | 'light';
  orientation?: 'left' | 'center' | 'right' | 'justify';
}

export interface TextGroupAttr {
  text?: FormatAttr<TextAttr>;
  textShadow?: TextShadowGroupAttr;
}
