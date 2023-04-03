import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';
import { IconFontAttr } from '../../../icon';
import {
  AdminLabelGroupAttr,
  AnimationGroupAttr,
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
  CssGroupAttr,
  DisabledOnGroupAttr,
  FiltersGroupAttr,
  FontBodyGroupAttr,
  FontGroupAttr,
  IdClassesGroupAttr,
  LinkAttr,
  LinkGroupAttr,
  OverflowGroupAttr,
  PositionGroupAttr,
  ScrollGroupAttr,
  SizingGroupAttr,
  SpacingGroupAttr,
  StickyGroupAttr,
  TextGroupAttr,
  TransformGroupAttr,
  TransitionGroupAttr,
  ZIndexGroupAttr,
} from '../../options';
import { InternalAttrs } from '../internal';


export interface Icon {
  show?: OnOff;
  useSize?: string;
  size?: string;
  color?: string;
  backgroundColor?: string;
  icon?: IconFontAttr;
}

export interface PortraitAttr {
  url?: string;
  width?: string;
  height?: string;
}

export interface CompanyInfo extends LinkAttr {
  name?: string;
}

export interface PortraitGroupAttr {

  // Content tab.
  image?: FormatAttr<PortraitAttr>;

  // Design tab.
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
}

export interface Company extends FontGroupAttr {
  info?: FormatAttr<CompanyInfo>;
}

export interface TestimonialAttrs extends InternalAttrs {

  // Mixed tab.
  portrait?: PortraitGroupAttr;
  company?: Company;

  // Content tab.
  author?: FormatAttr<string>
  jobTitle?: FormatAttr<string>;
  content?: FormatAttr<string>;
  quoteIcon?: FormatAttr<Icon>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design tab.
  text?: TextGroupAttr;
  bodyFont?: FontBodyGroupAttr;
  productTitle?: FontGroupAttr;
  excluded?: FontGroupAttr;
  sizing?: SizingGroupAttr;
  spacing?: SpacingGroupAttr;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;
  animation?: AnimationGroupAttr;

  // Advanced tab.
  module?: IdClassesGroupAttr;
  css?: CssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  sticky?: StickyGroupAttr;
  scroll?: ScrollGroupAttr;
}
