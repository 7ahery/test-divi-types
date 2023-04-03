import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';
import { IconFontAttr } from '../../../icon';
import {
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
  CssAttr,
  FiltersGroupAttr,
  FontBodyGroupAttr,
  FontGroupAttr,
  LinkGroupAttr,
  OverflowGroupAttr,
  PositionGroupAttr,
  ScrollGroupAttr,
  SizingGroupAttr,
  SpacingGroupAttr,
  TextGroupAttr,
  TransformGroupAttr,
  TransitionGroupAttr,
  ZIndexGroupAttr,
} from '../../options';
import { InternalAttrs } from '../internal';


export interface AccordionItemIcon extends IconFontAttr {
  color?: string;
  useSize?: OnOff;
  size?: string;
}
export interface AccordionItemGroupAttr {
  background?: BackgroundGroupAttr;
  icon?: FormatAttr<AccordionItemIcon>;
}

export interface AccordionItemCssAttr extends CssAttr {
  openToggle?: string;
  toggleTitle?: string;
  toggleIcon?: string;
  toggleContent?: string;
}

export type AccordionItemCssGroupAttr = FormatAttr<AccordionItemCssAttr>;

export interface AccordionItemAttrs extends InternalAttrs {

  // Content tab.
  title?: FormatAttr<string>;
  content?: FormatAttr<string>;
  open?: FormatAttr<string>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;

  // Design tab.
  openToggle?: {
    background?: BackgroundGroupAttr;
    textColor?: FormatAttr<string>;
  };
  closedToggle?: AccordionItemGroupAttr;
  text?: TextGroupAttr;
  titleFont?: FontGroupAttr;
  closedTitleFont?: FontGroupAttr;
  bodyFont?: FontBodyGroupAttr;
  sizing?: SizingGroupAttr;
  spacing?: SpacingGroupAttr;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;

  // Advanced tab.
  css?: AccordionItemCssGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  scroll?: ScrollGroupAttr;
}
