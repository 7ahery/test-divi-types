import { FormatAttr } from '../../../format-attr';
import { BorderAttr } from '../border';
import { TextShadowGroupAttr } from '../text-shadow';


export type FontStyle = 'italic' | 'uppercase' | 'capitalize' | 'underline' | 'strikethrough';

export interface FontAttr {
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  family?: string;
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  style?: FontStyle[];
  lineColor?: string;
  lineStyle?: '' | 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy';
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  color?: string;
  size?: string;
  letterSpacing?: string;
  lineHeight?: string;
}

export type FontListStyleUnordered = 'disc' | 'circle' | 'square' | 'none';

export type FontListStyleOrdered = 'decimal' |
  'armenian' |
  'cjk-ideographic' |
  'decimal-leading-zero' |
  'georgian' |
  'hebrew' |
  'hiragana' |
  'hiragana-iroha' |
  'katakana' |
  'katakana-iroha' |
  'lower-alpha' |
  'lower-greek' |
  'lower-latin' |
  'lower-roman' |
  'upper-alpha' |
  'upper-greek' |
  'upper-latin' |
  'upper-roman' |
  'none';

export interface FontListAttr {
  type?: FontListStyleUnordered | FontListStyleOrdered;
  position?: 'outside' | 'inside';
  itemIndent?: string;
}

export interface FontBorderAttr {
  styles?: {
    left?: {
      width?: string;
      color?: string;
    }
  }
}

export interface FontGroupAttr {
  font?: FormatAttr<FontAttr>;
  textShadow?: TextShadowGroupAttr;
  list?: FormatAttr<FontListAttr>;
  border?: FormatAttr<BorderAttr>;
}
