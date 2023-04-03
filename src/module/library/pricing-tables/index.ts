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


export interface PricingTablesCssAttr extends CssAttr {
  pricingHeading: string;
  pricingTitle: string;
  pricingSubtitle: string;
  pricingTop: string;
  price: string;
  currency: string;
  frequency: string;
  pricingContent: string;
  pricingItem: string;
  pricingItemExcluded: string;
  pricingButton: string;
  featuredTable: string;
}

export type PricingTablesCssGroupAttr = FormatAttr<PricingTablesCssAttr>;

export interface PricingTablesAttrs extends InternalAttrs {
  adminLabel?: AdminLabelGroupAttr;
  animation?: AnimationGroupAttr;
  background?: BackgroundGroupAttr;
  bulletColor?: FormatAttr<string>;
  button?: ButtonGroupAttr;
  bodyFont?: FontBodyGroupAttr;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  currencyFrequency?: FontGroupAttr;
  css?: PricingTablesCssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  excluded?: FontGroupAttr;
  featuredTableBackgroundColor?: FormatAttr<string>;
  featuredTableBulletColor?: FormatAttr<string>;
  featuredTableHeaderBackgroundColor?: FormatAttr<string>;
  featuredTableHeaderTextColor?: FormatAttr<string>;
  featuredTableTextColor?: FormatAttr<string>;
  featuredTableSubheaderTextColor?: FormatAttr<string>;
  featuredTablePriceBackgroundColor?: FormatAttr<string>;
  featuredTablePriceColor?: FormatAttr<string>;
  featuredTableCurrencyFrequencyTextColor?: FormatAttr<string>;
  featuredTableExcludedTextColor?: FormatAttr<string>;
  filter?: FiltersGroupAttr;
  headerBackgroundColor?: FormatAttr<string>;
  titleFont?: FontGroupAttr;
  link?: LinkGroupAttr;
  module?: IdClassesGroupAttr;
  overflow?: OverflowGroupAttr;
  position?: PositionGroupAttr;
  productTitle?: FontGroupAttr;
  priceBackgroundColor?: FormatAttr<string>;
  price?: FontGroupAttr;
  scroll?: ScrollGroupAttr;
  showBullet?: FormatAttr<OnOff>;
  showFeaturedDropShadow?: FormatAttr<OnOff>;
  sticky?: StickyGroupAttr;
  sizing?: SizingGroupAttr;
  spacing?: SpacingGroupAttr;
  text?: TextGroupAttr;
  transform?: TransformGroupAttr;
  transition?: TransitionGroupAttr;
  zIndex?: ZIndexGroupAttr;
}
