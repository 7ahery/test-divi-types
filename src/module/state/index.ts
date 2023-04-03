import {
  ModuleAttrs,
  ModuleAttrsByName,
} from '../library';


export interface ModuleFlatObjectNamed<TName extends string> {
  children: string[];
  id: string;
  name: TName;
  parent?: string;
  props: {
    attrs?: ModuleAttrsByName<TName>;
    innerHTML?: string;
  },
}

/**
 * Module's flat object interface which its state is managed at divi/edit-post store.
 *
 * @since ??
 */
export interface ModuleFlatObject<TAttrs = ModuleAttrs> {
  children: string[];
  id: string;
  name: string;
  parent?: string;
  props: {
    attrs?: TAttrs;
    innerHTML?: string;
  },
}

export type ModuleFlatObjectItems = (
  ModuleFlatObjectNamed<'divi/root'> |
  ModuleFlatObjectNamed<'divi/column'> |
  ModuleFlatObjectNamed<'divi/column-inner'> |
  ModuleFlatObjectNamed<'divi/accordion'> |
  ModuleFlatObjectNamed<'divi/accordion-item'> |
  ModuleFlatObjectNamed<'divi/audio'> |
  ModuleFlatObjectNamed<'divi/button'> |
  ModuleFlatObjectNamed<'divi/circle-counter'> |
  ModuleFlatObjectNamed<'divi/code'> |
  ModuleFlatObjectNamed<'divi/counter'> |
  ModuleFlatObjectNamed<'divi/counters'> |
  ModuleFlatObjectNamed<'divi/countdown-timer'> |
  ModuleFlatObjectNamed<'divi/cta'> |
  ModuleFlatObjectNamed<'divi/divider'> |
  ModuleFlatObjectNamed<'divi/fullwidth-code'> |
  ModuleFlatObjectNamed<'divi/fullwidth-header'> |
  ModuleFlatObjectNamed<'divi/fullwidth-image'> |
  ModuleFlatObjectNamed<'divi/fullwidth-map'> |
  ModuleFlatObjectNamed<'divi/fullwidth-slider'> |
  ModuleFlatObjectNamed<'divi/icon'> |
  ModuleFlatObjectNamed<'divi/image'> |
  ModuleFlatObjectNamed<'divi/login'> |
  ModuleFlatObjectNamed<'divi/portfolio'> |
  ModuleFlatObjectNamed<'divi/pricing-table'> |
  ModuleFlatObjectNamed<'divi/pricing-tables'> |
  ModuleFlatObjectNamed<'divi/row'> |
  ModuleFlatObjectNamed<'divi/row-inner'> |
  ModuleFlatObjectNamed<'divi/section'> |
  ModuleFlatObjectNamed<'divi/team-member'> |
  ModuleFlatObjectNamed<'divi/testimonial'> |
  ModuleFlatObjectNamed<'divi/text'> |
  ModuleFlatObjectNamed<'divi/unsupported'> |
  ModuleFlatObjectNamed<'divi/blurb'> |
  ModuleFlatObjectNamed<'divi/map'> |
  ModuleFlatObjectNamed<'divi/map-pin'> |
  ModuleFlatObjectNamed<'divi/number-counter'> |
  ModuleFlatObjectNamed<'divi/sidebar'> |
  ModuleFlatObjectNamed<'divi/search'> |
  ModuleFlatObjectNamed<'divi/slide'> |
  ModuleFlatObjectNamed<'divi/slider'> |
  ModuleFlatObjectNamed<'divi/social-media-follow-network'> |
  ModuleFlatObjectNamed<'divi/social-media-follow'> |
  ModuleFlatObjectNamed<'divi/toggle'> |
  ModuleFlatObjectNamed<'divi/tab'> |
  ModuleFlatObjectNamed<'divi/tabs'> |
  ModuleFlatObjectNamed<'unknown'> |
  ModuleFlatObjectNamed<'divi/video'>
)

/**
 * Module flat objects; collection of module flat object.
 *
 * @since ??
 */
export type ModuleFlatObjects<TOtherModuleFlatObjectItems = null> = Record<
  string,
  ModuleFlatObjectItems | TOtherModuleFlatObjectItems
>;
