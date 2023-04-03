import { FormatAttr } from '../../../format-attr';
import {
  AdminLabelGroupAttr,
  AnimationGroupAttr,
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
  CssGroupAttr,
  DisabledOnGroupAttr,
  FiltersGroupAttr,
  FontGroupAttr,
  IdClassesGroupAttr,
  LinkGroupAttr,
  OverflowGroupAttr,
  PositionGroupAttr,
  ScrollGroupAttr, SizingGroupAttr, SpacingGroupAttr,
  StickyGroupAttr, TextGroupAttr, TransformGroupAttr,
  TransitionGroupAttr,
  ZIndexGroupAttr,
} from '../../options';
import { InternalAttrs } from '../internal';


interface ImageAttr {
  src?: string;
  alt?: string;
  titleText?: string
}

export interface AudioHTML {
  html?: string;
}

export interface AudioAttrs extends InternalAttrs {

  // Content tab.
  title?: FormatAttr<string>;
  artistName?: FormatAttr<string>;
  albumName?: FormatAttr<string>;
  audio?: FormatAttr<string>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design tab.
  image?: {
    html?: FormatAttr<ImageAttr>;
    border?: BorderGroupAttr;
    boxShadow?: BoxShadowGroupAttr;
    filter?: FiltersGroupAttr;
  };
  text?: TextGroupAttr;
  titleFont?: FontGroupAttr;
  captionFont?: FontGroupAttr;
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
