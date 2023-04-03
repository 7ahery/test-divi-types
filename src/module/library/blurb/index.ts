import { FormatAttr } from '../../../format-attr';
import { IconFontGroupAttr } from '../../../icon';
import {
  AdminLabelGroupAttr,
  AnimationGroupAttr,
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
  CssAttr,
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


export interface BlurbCssAttr extends CssAttr {
  blurbImage?: string;
  blurbTitle?: string;
  blurbContent?: string;
}

export type BlurbCssGroupAttr = FormatAttr<BlurbCssAttr>;

export interface Image {
  src?: string;
  alt?: string;
}
export interface ImageIcon {

  // Mixed Tab
  image?: FormatAttr<Image>;
  icon?: IconFontGroupAttr;
  useIcon?: FormatAttr<string>;

  // Design tab.
  color?: FormatAttr<string>;
  background?: BackgroundGroupAttr;
  placement?: FormatAttr<string>;
  width?: FormatAttr<string>;
  alignment?: FormatAttr<string>;
  spacing?: SpacingGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
  animation?: FormatAttr<string>;
}

export interface Title extends LinkAttr {
  text?: string;
}

export interface BlurbAttrs extends InternalAttrs {

  // Content tab.
  title?: FormatAttr<Title>;
  content?: FormatAttr<string>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Mixed Tab.
  imageIcon?: ImageIcon;

  // Design tab.
  image?: {
    border: BorderGroupAttr,
  };
  contentSizing?: SizingGroupAttr;
  text?: TextGroupAttr;
  titleFont?: FontGroupAttr;
  bodyFont?: FontBodyGroupAttr;
  sizing?: SizingGroupAttr;
  spacing?: SpacingGroupAttr;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;
  animation?: AnimationGroupAttr;

  // Advanced tab.
  module?: IdClassesGroupAttr;
  css?: BlurbCssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  sticky?: StickyGroupAttr;
  scroll?: ScrollGroupAttr;
}
