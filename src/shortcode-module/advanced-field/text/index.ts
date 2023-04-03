/* eslint-disable @typescript-eslint/naming-convention */
export interface ShortcodeModuleGroupFieldText {
  text_orientation?: {
    advanced_fields: boolean;
    default: string;
    default_on_front?: string;
    depends_on?: string[];
    depends_show_if?: string;
    description: string;
    label: string;
    mobile_options: boolean;
    name: string;
    option_category: string;
    options: Record<string, string>;
    sub_toggle?: string;
    tab_slug: string;
    toggle_slug: string;
    type: string;
  };
  background_layout?: {
    default?: string;
    default_on_child?: boolean;
    default_on_front?: string;
    depends_show_if?: string;
    description: string;
    hover: string;
    label: string;
    name: string;
    mobile_options: boolean;
    option_category: string;
    options: Record<string, string>;
    sticky: boolean;
    sub_toggle?: string;
    tab_slug: string;
    toggle_slug: string;
    type: string;
  }
}


export interface ShortcodeModuleAdvancedFieldDefinitionText {
  css?: Record<string, string>;
  options?: {
    text_orientation?: Partial<ShortcodeModuleGroupFieldText['text_orientation']>;
    background_layout?: Partial<ShortcodeModuleGroupFieldText['background_layout']>;
  };
  sub_toggle?: string;
  tab_slug?: string;
  text_orientation?: {
    exclude_options?: Record<number, string>;
  };
  toggle_slug?: string;
  use_background_layout?: boolean;
}
