/* eslint-disable @typescript-eslint/naming-convention */
export interface ShortcodeModuleAdvancedFieldDefinitionBoxShadow {
  css?: {
    important?: boolean;
    hover?: string;
    main?: string;
    overlay?: string;
    show_if?: Record<string, string>;
    show_if_not?: Record<string, string>;
  }
  default_on_fronts?: {
    color?: string;
    position?: string;
  }
  label?: string;
  name?: string;
  option_category?: string;
  show_if?: Record<string, string>;
  tab_slug?: string;
  toggle_slug?: string;
}

export interface ShortcodeModuleBoxShadowFieldPreset {
  value: string;
  icon?: string;
  content?: string;
  fields: Record<string, string>;
}

export type ShortcodeModuleBoxShadowFieldPresets = ShortcodeModuleBoxShadowFieldPreset[];

export interface ShortcodeModuleBoxShadowPreset {
  horizontal: string;
  vertical: string;
  blur: string;
  spread: string;
  position: string;
}

export type ShortcodeModuleBoxShadowPresetName = 'none' |
  'preset1' |
  'preset2' |
  'preset3' |
  'preset4' |
  'preset5' |
  'preset6' |
  'preset7';

export type ShortcodeModuleBoxShadowFieldDefault = [
  string,
  Record<ShortcodeModuleBoxShadowPresetName, string>
];
