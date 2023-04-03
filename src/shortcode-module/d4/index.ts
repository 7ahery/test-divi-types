/* eslint-disable @typescript-eslint/naming-convention */
import { ShortcodeModuleAdvancedFieldDefinition } from '../advanced-field';
import {
  ShortcodeModuleField,
  ShortcodeModuleFieldAdvancedDefaults,
} from '../field';

/**
 * Type for D4 general definition used at `ETBuilderBackend.componentDefinitions.generalFields.*`.
 *
 * @since ??
 */
export type D4GeneralFieldDefinition = Record<string, ShortcodeModuleField>;


/**
 * Type for D4 advanced definition used at `ETBuilderBackend.componentDefinitions.advancedFields.*`.
 *
 * NOTE: `advanced_common` and `advanced_defaults` are byproduct of D4 field definition which
 * is not really used by D5 but it's there so the type needs to handle it anyway. These dynamic
 * type is sort of hackish solution in a sense that what the following tried to achieve is
 * use x and y type for these two but use z for the rest. The rest ends up need to declare
 * union type for x and y as well.
 *
 * @since ??
 */
export interface D4AdvancedFieldDefinition {
  [key: string]: ShortcodeModuleField | ShortcodeModuleAdvancedFieldDefinition | ShortcodeModuleFieldAdvancedDefaults;
  advanced_common?: ShortcodeModuleAdvancedFieldDefinition;
  advanced_defaults?: ShortcodeModuleFieldAdvancedDefaults;
}


/**
 * Type for D4 advanced definition used at `ETBuilderBackend.componentDefinitions.customCssFields.*`.
 *
 * @since ??
 */
export type D4CustomCssFieldDefinition = Record<string, ShortcodeModuleField>;
