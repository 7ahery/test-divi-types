import { FormatAttr } from '../../../format-attr';
import {
  AdminLabelGroupAttr,
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
  ButtonGroupAttr,
  CssAttr,
  FiltersGroupAttr,
  FontBodyGroupAttr,
  FontGroupAttr,
  LinkGroupAttr,
  OverflowGroupAttr,
  SizingGroupAttr,
  SpacingGroupAttr,
  TextGroupAttr,
  TransformGroupAttr,
  TransitionGroupAttr,
  ZIndexGroupAttr,
} from '../../options';
import { InternalAttrs } from '../internal';


export interface SlideCssAttr extends CssAttr {
  slideTitle?: string;
  slideContainer?: string;
  slideDescription?: string;
  slideButton?: string;
  slideImage?: string;
}

export type SlideCssGroupAttr = FormatAttr<SlideCssAttr>;

export interface ImageValue {
  src?: string;
  alt?: string;
}

export interface SlideOverlay {
  useOverlay?: string;
  color?: string;
}
export interface SlideTextOverlay extends SlideOverlay {
  radius?: string;
}

export interface SlideAttrs extends InternalAttrs {

  // Mix tab.
  button?: ButtonGroupAttr;
  image?: {

    // Content tab.
    value?: FormatAttr<ImageValue>;

    // Design tab.
    alignment?: FormatAttr<string>;
    border?: BorderGroupAttr;
    boxShadow?: BoxShadowGroupAttr;
    filter?: FiltersGroupAttr;
  };

  // Content tab.
  heading?: FormatAttr<string>;
  content?: FormatAttr<string>;
  videoUrl?: FormatAttr<string>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminTitle?: AdminLabelGroupAttr;

  // Design tab.
  backgroundOverlay?: FormatAttr<SlideOverlay>;
  textOverlay?: FormatAttr<SlideTextOverlay>;
  arrowsCustomColor?: FormatAttr<string>;
  dotNavCustomColor?: FormatAttr<string>;
  text?: TextGroupAttr;
  titleFont?: FontGroupAttr;
  bodyFont?: FontBodyGroupAttr;
  sizing?: SizingGroupAttr;
  spacing?: SpacingGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;

  // Advanced tab.
  css?: SlideCssGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  zIndex?: ZIndexGroupAttr;
}
