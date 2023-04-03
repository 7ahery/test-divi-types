/* eslint-disable @typescript-eslint/naming-convention */
export interface ShortcodeModuleAdvancedFieldDefinitionButton {
  border_width?: {
    default?: string;
  };
  box_shadow?: boolean | {
    css?: {
      important?: boolean;
      main?: string;
    }
  }
  css?: {
    alignment?: string;
    limited_main?: string;
    main?: string;
    show_if?: Record<string, string>;
  };
  hide_icon?: boolean;
  label?: string;
  margin_padding?: {
    css?: {
      important?: string;
    }
  };
  no_rel_attr?: boolean;
  option_category?: string;
  show_if?: Record<string, string>;
  tab_slug?: string;
  text_size?: {
    default?: string;
  };
  toggle_slug?: string;
  use_alignment?: boolean;
}
