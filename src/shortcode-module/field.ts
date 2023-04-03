/* eslint-disable @typescript-eslint/naming-convention */
import {
  ShortcodeModuleBoxShadowFieldDefault,
  ShortcodeModuleBoxShadowFieldPresets,
} from './advanced-field/box-shadow';
import {
  ShortcodeModuleTextShadowFieldDefault,
  ShortcodeModuleTextShadowFieldPresets,
} from './advanced-field/text-shadow';


export type ShortcodeModuleFieldCompositeStructure = {
  controls?: Record<string, ShortcodeModuleField>;
  icon?: string;
  tooltip?: string;
  label?: string;
}

export interface ShortcodeModuleField {
  additional_att?: string;
  advanced_fields?: boolean;
  affects?: string[];
  affects_mobile?: boolean;
  allow_empty?: boolean;
  allowed_units?: string[];
  allowed_values?: string[] | Record<string, string[]>;
  attributes?: Record<string, string>;
  attr_suffix?: string;
  background_fields?: Record<string, ShortcodeModuleField>;
  background_tab?: string;
  base_name?: string;
  bb_support?: boolean;
  class?: string[];
  className?: string;
  composite_structure?: Record<string, ShortcodeModuleFieldCompositeStructure>;
  composite_type?: string;
  computed_affects?: string[];
  computed_callback?: string[];
  computed_depends_on?: string[];
  computed_minimum?: string[];
  computed_variables?: Record<string, string>;
  choose_text?: string;
  context?: string;
  copy_with?: string[];
  custom_color?: boolean;
  data_type?: string;
  default?:
    boolean |
    string |
    number |
    Record<number, string |
    Record<string, string>> |
    ShortcodeModuleBoxShadowFieldDefault;
  default_from?: string;
  default_tablet?: string | Record<number, string | Record<string, string>>;
  default_phone?: string | Record<number, string | Record<string, string>>;
  default_on_child?: boolean;
  default_on_front?: string;
  default_value_depends?: string | string[];
  default_values_mapping?: Record<string, string>;
  depends_default?: null | string; // TODO (D5) Need to be double checked.
  depends_on?: string | string[];
  depends_on_responsive?: string[];
  depends_show_if?: string | string[];
  depends_show_if_not?: string | string[];
  default_unit?: string;
  description?: string;
  displayRecent?: boolean;
  dynamic_content?: string;
  fixed_range?: boolean;
  field_template?: string;
  fixed_unit?: string;
  flip?: string;
  group_label?: string;
  hover?: string;
  hide_sync?: boolean;
  i10n?: Record<string, string>;
  is_global_default?: boolean;
  label?: string;
  last_edited?: string;
  linked_responsive?: string[];
  main_tab_setting?: string;
  meta_categories?: Record<string, string>;
  multi_selection?: boolean;
  mobile_options?: boolean;
  name?: string;
  no_space_before_selector?: boolean;
  option_category?: string;
  option_class?: string;
  options?: Record<string, string | Record<string, string>> | string[];
  presets?:
    ShortcodeModuleBoxShadowFieldPresets |
    ShortcodeModuleTextShadowFieldPresets;
  priority?: number;
  renderer_options?: Record<string, boolean>;
  range_settings?: Record<string, number> | Record<string, string>;
  reset_animation?: boolean;
  resolver?: string;
  responsive?: boolean;
  responsive_affects?: string[];
  searchable?: boolean;
  selector?: string;
  shortcut_index?: string;
  show_if?: string | Record<string, string | string[]>;
  show_if_not?: string | Record<string, string | string[]>;
  specialty_only?: boolean | string;
  sticky?: boolean;
  sub_toggle?: null | string | boolean; // TODO (D5) Need to be double checked.
  sync_affects?: string[];
  tab_filler?: boolean;
  tab_slug?: string;
  toggleable?: boolean;
  toggle_slug?: string;
  tooltip?: string;
  type?: string;
  unitless?: boolean;
  upload_button_text?: string;
  update_text?: string;
  validate_input?: boolean;
  validate_unit?: boolean;
}

export type ShortcodeModuleFieldValuePreset = Record<number, string | Record<string, string>>;

export type ShortcodeModuleFieldAdvancedDefaults = Record<string,
  string |
  number |
  boolean |
  ShortcodeModuleBoxShadowFieldDefault |
  ShortcodeModuleTextShadowFieldDefault
>;
