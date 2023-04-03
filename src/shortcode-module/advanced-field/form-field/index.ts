/* eslint-disable @typescript-eslint/naming-convention */
import { ShortcodeModuleAdvancedFieldDefinitionBorder } from '../border';
import { ShortcodeModuleAdvancedFieldDefinitionBoxShadow } from '../box-shadow';
import { ShortcodeModuleAdvancedFieldDefinitionFont } from '../font';


export interface ShortcodeModuleAdvancedFieldDefinitionFormField {
  alternating_background_color?: boolean | Record<string, string>;
  background_color?: boolean | Record<string, string>;
  label?: string;
  main?: string;
  css?: {
    hover?: string;
    focus?: string;
    focus_hover?: string;
    placeholder_focus?: string;
    padding?: string;
    main?: string;
    margin?: string;
    important?: string[];
  }
  box_shadow?: ShortcodeModuleAdvancedFieldDefinitionBoxShadow;
  border_styles?: Record<string, ShortcodeModuleAdvancedFieldDefinitionBorder>;
  focus_background_color?: boolean;
  focus_text_color?: boolean;
  font_field?: ShortcodeModuleAdvancedFieldDefinitionFont;
  margin_padding?: boolean | Record<string, string>;
  toggle_slug?: string;
  tab_slug?: string;
  text_color?: boolean | Record<string, string>;
}
