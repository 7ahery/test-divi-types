/* eslint-disable @typescript-eslint/naming-convention */
export interface ShortcodeModuleAdvancedFieldDefinitionFont {
  block_elements?: boolean | {
    tabbed_subtoggles?: boolean;
    bb_icons_support?: boolean;
    css?: Record<string, string>;
  };
  css?: {
    color?: string;
    color_hover?: string;
    font?: string;
    font_size?: string;
    font_size_tablet?: string;
    font_size_phone?: string;
    hover?: string;
    important?: string | string[];
    item_indent?: string;
    line_height?: string;
    line_height_tablet?: string;
    line_height_phone?: string;
    limited_main?: string;
    main?: string;
    text_align?: string;
    text_shadow?: string;
  };
  defaults?: Record<string, string>;
  depends_show_if?: string | string[];
  disable_toggle?: boolean;
  fields_default_on_child?: boolean;
  font?: {
    default?: string;
  };
  font_size?: {
    default?: string;
    range_settings?: Record<string, string>;
  };
  header_level?: {
    default?: string;
    computed_affects?: string[];
  };
  hide_font?: boolean;
  hide_font_size?: boolean;
  hide_letter_spacing?: boolean;
  hide_line_height?: boolean;
  hide_text_align?: boolean;
  hide_text_color?: boolean;
  hide_text_shadow?: boolean;
  label?: string;
  letter_spacing?: {
    default?: string;
    range_settings?: Record<string, string>;
  };
  line_height?: {
    default?: string;
    range_settings?: Record<string, string>;
  };
  options_priority?: Record<string, number>;
  option_priority?: Record<string, number>;
  sub_toggle?: string;
  text_color?: {
    default?: string;
    label?: string;
    old_option_ref?: string;
  };
  text_align?: {
    options: Record<string, string>;
  }
  tab_slug?: string;
  toggle_slug?: string;
  use_all_caps?: boolean;
}
