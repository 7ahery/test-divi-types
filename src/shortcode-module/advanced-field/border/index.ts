/* eslint-disable @typescript-eslint/naming-convention */
import { ShortcodeModuleField } from '../../field';


export interface ShortcodeModuleAdvancedFieldDefinitionBorder {
  additional_elements?: Record<number, Record<string, string[]>>
  color_type?: string;
  css?: {
    main?: {
      border_radii?: string;
      border_radii_hover?: string;
      border_styles?: string;
      border_styles_hover?: string;
    }
  };
  defaults?: {
    border_radii?: string;
    border_styles?: {
      color?: string;
      style?: string;
      width?: string;
    }
    composite?: Record<string, Record<string, string>>;
  };
  depends_on?: ShortcodeModuleField['depends_on'];
  depends_show_if_not?: ShortcodeModuleField['depends_show_if_not'];
  depends_show_if?: ShortcodeModuleField['depends_show_if'];
  fields_after?: Record<string, ShortcodeModuleField>;
  label_prefix?: string;
  name?: string;
  option_category?: ShortcodeModuleField['option_category'];
  sub_toggle?: ShortcodeModuleField['sub_toggle'];
  suffix?: string;
  tab_slug?: ShortcodeModuleField['tab_slug'];
  toggle_slug?: ShortcodeModuleField['toggle_slug'];
  use_radius?: boolean;
  use_focus_borders?: boolean;
}
