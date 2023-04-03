import { PropertyTypeOf } from '../../utils';
import { AccordionAttrs } from './accordion';
import { AccordionItemAttrs } from './accordion-item';
import { AudioAttrs } from './audio';
import { BlurbAttrs } from './blurb';
import { ButtonAttrs } from './button';
import { CircleCounterAttrs } from './circle-counter';
import { CodeAttrs } from './code';
import { ColumnAttrs } from './column';
import { CountdownTimerAttrs } from './countdown-timer';
import { BarCounterAttrs } from './counter';
import { BarCountersAttrs } from './counters';
import { CtaAttrs } from './cta';
import { DividerAttrs } from './divider';
import { FullwidthCodeAttrs } from './fullwidth-code';
import { FullwidthHeaderAttrs } from './fullwidth-header';
import { FullwidthImageAttrs } from './fullwidth-image';
import { FullwidthMapAttrs } from './fullwidth-map';
import { FullwidthSliderAttrs } from './fullwidth-slider';
import { IconAttrs } from './icon';
import { ImageAttrs } from './image';
import { LoginAttrs } from './login';
import { MapAttrs } from './map';
import { MapPinAttrs } from './map-pin';
import { NumberCounterAttrs } from './number-counter';
import { PortfolioAttrs } from './portfolio';
import { PricingTableAttrs } from './pricing-table';
import { PricingTablesAttrs } from './pricing-tables';
import { RowAttrs } from './row';
import { SearchAttrs } from './search';
import { SectionAttrs } from './section';
import { SidebarAttrs } from './sidebar';
import { SlideAttrs } from './slide';
import { SliderAttrs } from './slider';
import { SocialMediaFollowAttrs } from './social-media-follow';
import { SocialMediaFollowItemAttrs } from './social-media-follow-item';
import { TabAttrs } from './tab';
import { TabsAttrs } from './tabs';
import { TeamMemberAttrs } from './team-member';
import { TestimonialAttrs } from './testimonial';
import { TextAttrs } from './text';
import { ToggleAttrs } from './toggle';
import { UnsupportedAttrs } from './unsupported';
import { VideoAttrs } from './video';


export type ModuleAttrs =
  AccordionAttrs |
  AccordionItemAttrs |
  AudioAttrs |
  BarCounterAttrs |
  BarCountersAttrs |
  BlurbAttrs |
  ButtonAttrs |
  CodeAttrs |
  CountdownTimerAttrs |
  CircleCounterAttrs |
  CtaAttrs |
  ColumnAttrs |
  DividerAttrs |
  FullwidthCodeAttrs |
  FullwidthHeaderAttrs |
  FullwidthImageAttrs |
  FullwidthMapAttrs |
  FullwidthSliderAttrs |
  IconAttrs |
  ImageAttrs |
  LoginAttrs |
  MapAttrs |
  MapPinAttrs |
  NumberCounterAttrs |
  PricingTableAttrs |
  PricingTablesAttrs |
  RowAttrs |
  SearchAttrs |
  SectionAttrs |
  SidebarAttrs |
  SlideAttrs |
  SliderAttrs |
  SocialMediaFollowAttrs |
  SocialMediaFollowItemAttrs |
  TabAttrs |
  TabsAttrs |
  TeamMemberAttrs |
  TestimonialAttrs |
  UnsupportedAttrs |
  TextAttrs |
  PortfolioAttrs |
  ToggleAttrs |
  VideoAttrs;

/**
 * `ModuleAttrAll` needs to be extracted by getting individual attribute using `PropertyTypeOf` of
 * each module attributes then combine them using union types. Attribute can't be retrieved by using
 * `PropertyTypeOf` because it'll return `unknown` or `string` (this somehow happens if there are
 * n amount of child modules' module attributes combined into `ModuleAttrs`).
 *
 * Attribute of `UnsupportedAttrs` is intentionally excluded because including it will cause
 * `ModuleAttrAll` type to be `unknown`. On top of it all of its attributes are `string` and
 * `string` isn't even expected for `ModuleAttr` (that's the reason why `ModuleAttr` omits `string`
 * from `ModuleAttrAll`).
 *
 * @since ??
 */
export type ModuleAttrAll =
  PropertyTypeOf<AccordionAttrs> |
  PropertyTypeOf<AccordionItemAttrs> |
  PropertyTypeOf<AudioAttrs> |
  PropertyTypeOf<BarCounterAttrs> |
  PropertyTypeOf<BarCountersAttrs> |
  PropertyTypeOf<BlurbAttrs> |
  PropertyTypeOf<ButtonAttrs> |
  PropertyTypeOf<CodeAttrs> |
  PropertyTypeOf<CountdownTimerAttrs> |
  PropertyTypeOf<CircleCounterAttrs> |
  PropertyTypeOf<CtaAttrs> |
  PropertyTypeOf<ColumnAttrs> |
  PropertyTypeOf<DividerAttrs> |
  PropertyTypeOf<FullwidthCodeAttrs> |
  PropertyTypeOf<FullwidthHeaderAttrs> |
  PropertyTypeOf<FullwidthImageAttrs> |
  PropertyTypeOf<FullwidthMapAttrs> |
  PropertyTypeOf<FullwidthSliderAttrs> |
  PropertyTypeOf<IconAttrs> |
  PropertyTypeOf<ImageAttrs> |
  PropertyTypeOf<LoginAttrs> |
  PropertyTypeOf<MapAttrs> |
  PropertyTypeOf<MapPinAttrs> |
  PropertyTypeOf<NumberCounterAttrs> |
  PropertyTypeOf<PricingTableAttrs> |
  PropertyTypeOf<PricingTablesAttrs> |
  PropertyTypeOf<RowAttrs> |
  PropertyTypeOf<SearchAttrs> |
  PropertyTypeOf<SectionAttrs> |
  PropertyTypeOf<SidebarAttrs> |
  PropertyTypeOf<SlideAttrs> |
  PropertyTypeOf<SliderAttrs> |
  PropertyTypeOf<SocialMediaFollowAttrs> |
  PropertyTypeOf<SocialMediaFollowItemAttrs> |
  PropertyTypeOf<TabAttrs> |
  PropertyTypeOf<TabsAttrs> |
  PropertyTypeOf<TeamMemberAttrs> |
  PropertyTypeOf<TestimonialAttrs> |
  PropertyTypeOf<TextAttrs> |
  PropertyTypeOf<PortfolioAttrs> |
  PropertyTypeOf<ToggleAttrs> |
  PropertyTypeOf<VideoAttrs>;

export type ModuleAttr = Omit<ModuleAttrAll, 'string'>;

export type ModuleAttrsByName<TModuleName> =
  TModuleName extends 'divi/accordion' ? AccordionAttrs :
  TModuleName extends 'divi/accordion-item' ? AccordionItemAttrs :
  TModuleName extends 'divi/audio' ? AudioAttrs :
  TModuleName extends 'divi/blurb' ? BlurbAttrs :
  TModuleName extends 'divi/button' ? ButtonAttrs :
  TModuleName extends 'divi/code' ? CodeAttrs :
  TModuleName extends 'divi/counter' ? BarCounterAttrs :
  TModuleName extends 'divi/counters' ? BarCountersAttrs :
  TModuleName extends 'divi/countdown-timer' ? CountdownTimerAttrs :
  TModuleName extends 'divi/column' ? ColumnAttrs :
  TModuleName extends 'divi/column-inner' ? ColumnAttrs :
  TModuleName extends 'divi/circle-counter' ? CircleCounterAttrs :
  TModuleName extends 'divi/cta' ? CtaAttrs :
  TModuleName extends 'divi/divider' ? DividerAttrs :
  TModuleName extends 'divi/fullwidth-code' ? FullwidthCodeAttrs :
  TModuleName extends 'divi/fullwidth-header' ? FullwidthHeaderAttrs :
  TModuleName extends 'divi/fullwidth-image' ? FullwidthImageAttrs :
  TModuleName extends 'divi/fullwidth-map' ? FullwidthMapAttrs :
  TModuleName extends 'divi/fullwidth-slider' ? FullwidthSliderAttrs :
  TModuleName extends 'divi/icon' ? IconAttrs :
  TModuleName extends 'divi/image' ? ImageAttrs :
  TModuleName extends 'divi/login' ? LoginAttrs :
  TModuleName extends 'divi/map' ? MapAttrs :
  TModuleName extends 'divi/map-pin' ? MapPinAttrs :
  TModuleName extends 'divi/number-counter' ? NumberCounterAttrs :
  TModuleName extends 'divi/pricing-table' ? PricingTableAttrs :
  TModuleName extends 'divi/pricing-tables' ? PricingTablesAttrs :
  TModuleName extends 'divi/row' ? RowAttrs :
  TModuleName extends 'divi/row-inner' ? RowAttrs :
  TModuleName extends 'divi/search' ? SearchAttrs :
  TModuleName extends 'divi/section' ? SectionAttrs :
  TModuleName extends 'divi/sidebar' ? SidebarAttrs :
  TModuleName extends 'divi/slide' ? SlideAttrs :
  TModuleName extends 'divi/slider' ? SliderAttrs :
  TModuleName extends 'divi/social-media-follow' ? SocialMediaFollowAttrs :
  TModuleName extends 'divi/social-media-follow-item' ? SocialMediaFollowItemAttrs :
  TModuleName extends 'divi/tab' ? TabAttrs :
  TModuleName extends 'divi/tabs' ? TabsAttrs :
  TModuleName extends 'divi/team-member' ? TeamMemberAttrs :
  TModuleName extends 'divi/testimonial' ? TestimonialAttrs :
  TModuleName extends 'divi/text' ? TextAttrs :
  TModuleName extends 'divi/toggle' ? ToggleAttrs :
  TModuleName extends 'divi/portfolio' ? PortfolioAttrs :
  TModuleName extends 'divi/unsupported' ? UnsupportedAttrs :
  TModuleName extends 'divi/video' ? VideoAttrs :
  ModuleAttrs;

export * from './accordion';
export * from './accordion-item';
export * from './audio';
export * from './blurb';
export * from './button';
export * from './internal';
export * from './code';
export * from './circle-counter';
export * from './column';
export * from './countdown-timer';
export * from './counter';
export * from './counters';
export * from './cta';
export * from './divider';
export * from './fullwidth-code';
export * from './fullwidth-header';
export * from './fullwidth-image';
export * from './fullwidth-map';
export * from './fullwidth-slider';
export * from './icon';
export * from './image';
export * from './login';
export * from './map';
export * from './map-pin';
export * from './number-counter';
export * from './pricing-table';
export * from './pricing-tables';
export * from './row';
export * from './search';
export * from './section';
export * from './sidebar';
export * from './slide';
export * from './slider';
export * from './social-media-follow';
export * from './social-media-follow-item';
export * from './tab';
export * from './tabs';
export * from './team-member';
export * from './testimonial';
export * from './text';
export * from './toggle';
export * from './portfolio';
export * from './unsupported';
export * from './video';
