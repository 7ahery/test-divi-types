// TODO feat(D5) There might be more property out there.
/* eslint-disable @typescript-eslint/naming-convention */
import { ShortcodeModuleAdvancedFieldDefinition } from './advanced-field';
import { ShortcodeModuleField } from './field';


export * from './advanced-field';
export * from './d4';
export * from './field';

export type ShortcodeModuleGroupedModuleFields = Record<string, Record<string, ShortcodeModuleField>>;

export interface ShortcodeModuleCssField {
  label: string;
  no_space_before_selector?: boolean;
  option_category?: string;
  selector?: string;
  toggle_slug: string;
}

export interface ShortcodeModuleHelpVideo {
  id: string;
  name: string;
}

export type ShortcodeModulePanelName = 'general' | 'advanced' | 'custom_css';

export interface ShortcodeModuleFieldGroupSetting {
  bb_icons_support?: boolean;
  priority?: number;
  sub_toggles?: Record<string, string | {name?: string; icon?: string}>
  tabbed_subtoggles?: boolean;
  title?: string;
}

export interface ShortcodeModuleDefinition {
  name: string;
  plural: string;
  slug: string;
  selector: string;
  helpVideos?: ShortcodeModuleHelpVideo[];
  folder?: null | string;
  icon?: {
    name?: null | string;
    path?: null | string;
  };
  fields?: {
    module?: Record<string, ShortcodeModuleField>;
    advanced?: ShortcodeModuleAdvancedFieldDefinition;
    css?: Record<string, ShortcodeModuleCssField>;
  };
  is: {
    child: boolean;
    parent: boolean;
    official: boolean;
    vbSupport: boolean;
    fullwidth: boolean;
    uniqueId: boolean;
    rawContent: boolean;
  };
  child?: {
    slug?: null | string;
    itemText?: null | string;
    titleText?: null | string;
    titleVar?: null | string;
    titleFallbackVar?: null | string;
  };
  settings?: {
    group?: Partial<Record<ShortcodeModulePanelName, {
      toggles?: Record<string, string | ShortcodeModuleFieldGroupSetting>
    }>>;
  };
  render?: {
    wrapper?: [] | Record<string, boolean>;
  }
}
