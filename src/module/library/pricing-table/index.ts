import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';
import {
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
  ButtonGroupAttr,
  CssAttr,
  DisabledOnGroupAttr,
  FiltersGroupAttr,
  FontBodyGroupAttr,
  FontGroupAttr,
  LinkGroupAttr,
  OverflowGroupAttr,
  PositionGroupAttr,
  ScrollGroupAttr,
  SpacingGroupAttr,
  TextGroupAttr,
  TransformGroupAttr,
  TransitionGroupAttr,
  ZIndexGroupAttr,
} from '../../options';
import { InternalAttrs } from '../internal';


export interface PricingTableCssAttr extends CssAttr {
  pricingHeading?: string;
  pricingTitle?: string;
  pricingSubtitle?: string;
  pricingTop?: string;
  price?: string;
  currency?: string;
  frequency?: string;
  pricingContent?: string;
  pricingItem?: string;
  pricingItemExcluded?: string;
  pricingButton?: string;
}

export type PricingTableCssGroupAttr = FormatAttr<PricingTableCssAttr>;

export interface PricingTableAttrs extends InternalAttrs {

  // Content tab.
  title?: FormatAttr<string>;
  subtitle?: FormatAttr<string>;
  currency?: FormatAttr<string>;
  per?: FormatAttr<string>;
  sum?: FormatAttr<string>;
  content?: FormatAttr<string>;
  button?: ButtonGroupAttr;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;

  // Design tab.
  featured?: FormatAttr<OnOff>;
  bulletColor?: FormatAttr<string>;
  text?: TextGroupAttr;
  headerBackgroundColor?: FormatAttr<string>;
  titleFont?: FontGroupAttr;
  bodyFont?: FontBodyGroupAttr;
  productTitle?: FontGroupAttr;
  priceBackgroundColor?: FormatAttr<string>;
  price?: FontGroupAttr;
  currencyFrequency?: FontGroupAttr;
  excluded?: FontGroupAttr;
  spacing?: Omit<SpacingGroupAttr, 'margin'>;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;

  // Advanced tab.
  css?: PricingTableCssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  scroll?: ScrollGroupAttr;
}
