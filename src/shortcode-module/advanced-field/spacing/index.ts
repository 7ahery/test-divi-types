/* eslint-disable @typescript-eslint/naming-convention */
import { ShortcodeModuleField } from '../../field';


export interface ShortcodeModuleAdvancedFieldDefinitionSpacing {
  css?: {
    important?: string | string[];
    main?: string;
    padding?: string;
    ['padding-bottom']?: string;
    ['padding-left']?: string;
    ['padding-right']?: string;
  }
  draggable_margin?: boolean;
  draggable_padding?: boolean;
  use_margin?: boolean;
  use_padding?: boolean;
  tab_slug?: string;
  toggle_slug?: string;
  sub_toggle?: string;
  custom_margin?: ShortcodeModuleField;
  custom_padding?: ShortcodeModuleField;
}
