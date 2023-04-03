/* eslint-disable @typescript-eslint/naming-convention */
import { ShortcodeModuleAdvancedFieldDefinitionBorder } from './border';
import { ShortcodeModuleAdvancedFieldDefinitionBoxShadow } from './box-shadow';
import { ShortcodeModuleAdvancedFieldDefinitionButton } from './button';
import { ShortcodeModuleAdvancedFieldDefinitionFilters } from './filters';
import { ShortcodeModuleAdvancedFieldDefinitionFont } from './font';
import { ShortcodeModuleAdvancedFieldDefinitionFormField } from './form-field';
import { ShortcodeModuleAdvancedFieldDefinitionPosition } from './position';
import { ShortcodeModuleAdvancedFieldDefinitionScroll } from './scroll';
import { ShortcodeModuleAdvancedFieldDefinitionMaxWidth } from './sizing';
import { ShortcodeModuleAdvancedFieldDefinitionSpacing } from './spacing';
import { ShortcodeModuleAdvancedFieldDefinitionSticky } from './sticky';
import { ShortcodeModuleAdvancedFieldDefinitionText } from './text';
import { ShortcodeModuleAdvancedFieldDefinitionTransform } from './transform';
import { ShortcodeModuleAdvancedFieldDefinitionZIndex } from './z-index';


export * from './border';
export * from './box-shadow';
export * from './button';
export * from './filters';
export * from './font';
export * from './position';
export * from './scroll';
export * from './sizing';
export * from './spacing';
export * from './sticky';
export * from './text';
export * from './text-shadow';
export * from './transform';
export * from './z-index';

export interface ShortcodeModuleAdvancedFieldDefinition {
  animation?: [];
  background?: {
    css?: {
      important?: string | boolean;
      main?: string;
    };
    has_background_color_toggle?: boolean;
    options?: Record<string, boolean | string | Record<string, string | boolean | Record<string, string>>>;
    settings?: {
      color?: string;
      tab_slug?: string;
      toggle_slug?: string;
    };
    use_background_color?: boolean | string;
    use_background_color_gradient?: boolean | string;
    use_background_color_reset?: boolean | string;
    use_background_image?: boolean | string;
    use_background_image_parallax?: boolean;
    use_background_mask?: boolean;
    use_background_pattern?: boolean;
    use_background_video?: boolean;
  };
  border?: ShortcodeModuleAdvancedFieldDefinitionBorder;
  border_fields?: ShortcodeModuleAdvancedFieldDefinitionBorder;
  border_fields_focus?: ShortcodeModuleAdvancedFieldDefinitionBorder;
  border_fullwidth?: ShortcodeModuleAdvancedFieldDefinitionBorder;
  border_image?: ShortcodeModuleAdvancedFieldDefinitionBorder;
  border_price?: ShortcodeModuleAdvancedFieldDefinitionBorder;
  borders?: Record<string, [] | boolean | ShortcodeModuleAdvancedFieldDefinitionBorder>;
  box_shadow?: Record<string, [] | boolean | ShortcodeModuleAdvancedFieldDefinitionBoxShadow>;
  button?: boolean | Record<string, ShortcodeModuleAdvancedFieldDefinitionButton>;
  dividers?: [];
  filters?: [] | ShortcodeModuleAdvancedFieldDefinitionFilters;
  fonts?: boolean | Record<string, ShortcodeModuleAdvancedFieldDefinitionFont>;
  form_field?: Record<string, ShortcodeModuleAdvancedFieldDefinitionFormField>;
  height?: [] | boolean | {
    css?: {
      main?: string;
    }
  };
  icon_settings?: {
    css?: {
      main?: string;
    }
  };
  image?: {
    css?: {
      main?: string | string[];
    }
  };
  image_icon?: Record<string, {
    margin_padding?: {
      css?: Record<string, string>;
    };
    option_category?: string;
    tab_slug?: string;
    toggle_slug?: string;
    label?: string;
    css?: Record<string, string>;
    disable_toggle?: boolean;
  }>;
  link_options?: boolean | [];
  margin_padding?: ShortcodeModuleAdvancedFieldDefinitionSpacing;
  max_width?: boolean | [] | ShortcodeModuleAdvancedFieldDefinitionMaxWidth;
  overflow?: boolean | {
    default?: string;
  };
  position_fields?: [] | boolean | ShortcodeModuleAdvancedFieldDefinitionPosition;
  scroll_effects?: boolean | ShortcodeModuleAdvancedFieldDefinitionScroll;
  sticky?: boolean | ShortcodeModuleAdvancedFieldDefinitionSticky;
  text?: boolean | ShortcodeModuleAdvancedFieldDefinitionText;
  text_shadow?: {
    default?: boolean | [];
  };
  transform?: [] | ShortcodeModuleAdvancedFieldDefinitionTransform;
  z_index?: [] | boolean | ShortcodeModuleAdvancedFieldDefinitionZIndex;
}
