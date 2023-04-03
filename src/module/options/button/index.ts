import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';
import { IconFontAttr } from '../../../icon';
import { AttributesGroupAttr } from '../attributes';
import { BackgroundGroupAttr } from '../background';
import { BorderGroupAttr } from '../border';
import { BoxShadowGroupAttr } from '../box-shadow';
import { FontGroupAttr } from '../font';
import { LinkGroupAttr } from '../link';
import { SpacingGroupAttr } from '../spacing';


export interface ButtonAttr {
  enable?: OnOff;
  alignment?: 'left' | 'center' | 'right';
}

export interface ButtonIconAttr {
  enable?: OnOff;
  icon?: IconFontAttr;
  color?: string;
  placement?: 'right' | 'left';
  onHover?: OnOff;
}

export type ButtonIconGroupAttr = FormatAttr<ButtonIconAttr>;

export interface ButtonGroupAttr {
  background?: BackgroundGroupAttr;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  button?: FormatAttr<ButtonAttr>;
  font?: FontGroupAttr;
  icon?: ButtonIconGroupAttr;
  link?: LinkGroupAttr;
  rel?: AttributesGroupAttr;
  spacing?: SpacingGroupAttr;
  text?: FormatAttr<string>;
}
