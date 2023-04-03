/**
 * These types are declared at @divi/types instead of @divi/module because doing so
 * will cause circular dependency because these types usage are so wide. Placing
 * this on @divi/types avoids such problem because @divi/types has no internal dependencies.
 */

/**
 * All kind of module types.
 *
 * @since ??
 */
export type ModuleType = 'root' |
  'section' |
  'fullwidth-section' |
  'specialty-section' |
  'row' |
  'row-inner' |
  'column' |
  'specialty-column' |
  'column-inner' |
  'module' |
  'fullwidth-module' |
  'child-module' |
  'unsupported';


/**
 * Basic module types.
 *
 * @since ??
 */
export type BasicModuleType = 'root' |
  'section' |
  'row' |
  'column' |
  'module' |
  'unsupported';

/**
 * Module type relationships.
 *
 * @since ??
 */
export interface ModuleTypeRelationship {
  child: '' | ModuleType | ModuleType[];
  parent: '' | ModuleType | ModuleType[];
}

export type ModuleTypeRelationships = Record<ModuleType, ModuleTypeRelationship>;


/**
 * Module attribute value type.
 *
 * @since ??
 */
export type ModuleDefinitionAttributeType = 'array' | 'boolean' | 'object' | 'null' | 'number' | 'string';

/**
 * Module drop zone position.
 *
 * @since ??
 */
export type DropZonePosition = 'top' | 'bottom' | 'inside';

/**
 * All module option's attributes.
 */
export * from './options';

/**
 * All module library's attributes.
 */
export * from './library';

/**
 * All module state related types.
 */
export * from './state';
