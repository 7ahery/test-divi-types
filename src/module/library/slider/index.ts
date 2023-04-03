import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';
import {
  AdminLabelGroupAttr,
  AnimationGroupAttr,
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
  ButtonGroupAttr,
  CssAttr,
  DisabledOnGroupAttr,
  FiltersGroupAttr,
  FontBodyGroupAttr,
  FontGroupAttr,
  IdClassesGroupAttr,
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


export interface SliderCssAttr extends CssAttr {
  slideDescription?: string;
  slideTitle?: string;
  slideButton?: string;
  slideControllers?: string;
  slideActiveController?: string;
  slideImage?: string;
  slideArrows?: string;
}

export type SliderCssGroupAttr = FormatAttr<SliderCssAttr>;

export interface SliderOverlay {
  useOverlay?: string;
  color?: string;
}
export interface SliderTextOverlay extends SliderOverlay {
  radius?: string;
}

export interface SliderAttrs extends InternalAttrs {

  // Content tab.
  showArrows?: FormatAttr<OnOff>;
  showPagination?: FormatAttr<OnOff>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design tab.
  backgroundOverlay?: FormatAttr<SliderOverlay>;
  textOverlay?: FormatAttr<SliderTextOverlay>;
  arrowsCustomColor?: FormatAttr<string>;
  dotNavCustomColor?: FormatAttr<string>;
  image?: {
    border?: BorderGroupAttr;
    boxShadow?: BoxShadowGroupAttr;
  };
  text?: TextGroupAttr;
  titleFont?: FontGroupAttr;
  bodyFont?: FontBodyGroupAttr;
  button?: ButtonGroupAttr;
  sizing?: SizingGroupAttr;
  contentWidth?: FormatAttr<string>;
  contentMaxWidth?: FormatAttr<string>;
  spacing?: SpacingGroupAttr;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;
  animation?: AnimationGroupAttr;
  auto?: FormatAttr<OnOff>;
  autoSpeed?: FormatAttr<string>;
  autoIgnoreHover?: FormatAttr<OnOff>;

  // Advanced tab.
  module?: IdClassesGroupAttr;
  css?: SliderCssGroupAttr;
  showContentOnMobile?: FormatAttr<OnOff>;
  showCtaOnMobile?: FormatAttr<OnOff>;
  showImageVideoMobile?: FormatAttr<OnOff>;
  disabledOn?: DisabledOnGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  sticky?: StickyGroupAttr;
  scroll?: ScrollGroupAttr;
}
