import { ShortcodeModuleField } from '../../field';

/* eslint-disable @typescript-eslint/naming-convention */
export interface ShortcodeModuleAdvancedFieldDefinitionFilters {
  css?: {
    main?: string;
  };
  child_filters_target?: {
    css?: {
      main?: string;
      hover?: string;
    };
    depends_show_if?: ShortcodeModuleField['depends_show_if'];
    tab_slug?: string;
    toggle_slug?: string;
    label?: string;
    sub_toggle?: string;
  };
  sub_toggle?: string;
  tab_slug?: string;
  toggle_slug?: string;
  toggle_name?: string;
}
