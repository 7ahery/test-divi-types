/* eslint-disable @typescript-eslint/naming-convention */
export interface ShortcodeModuleAdvancedFieldDefinitionTransform {
  option_category?: string;
  tab_slug?: string;
  toggle_slug?: string;
  depends_on?: string;
  depends_show_if?: string;
  defaults?: {
    scale?: string;
    translate?: string;
    rotate?: string;
    skew?: string;
    origin?: string;
  };
}
