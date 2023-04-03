/**
 * This file contains generics that is used to generate D5i attribute format type.
 *
 * IMPORTANT: DO NOT IMPORT ANY VARIABLE HERE. DOING SO MIGHT CAUSE DEPENDENCY CYCLE.
 */

/**
 * Official breakpoints.
 *
 * @since ??
 */
export type Breakpoint = 'desktop' | 'tablet' | 'phone';

/**
 * Official states.
 *
 * @since ??
 */
export type AttrState = 'value' | 'hover' | 'sticky';

/**
 * Generate formatted state-based attribute.
 *
 * @since ??
 */
export type FormatStateAttr<TAttr> = Partial<Record<AttrState, TAttr>>;

/**
 * Generate formatted breakpoint-based attribute.
 *
 * @since ??
 */
export type FormatBreakpointAttr<TStateAttr> = Partial<Record<Breakpoint, TStateAttr>>;

/**
 * Generate formatted attribute.
 *
 * @since ??
 */
export type FormatAttr<TAttr> = FormatBreakpointAttr<FormatStateAttr<TAttr>>;

/**
 * Generate formatted property selector property.
 *
 * @since ??
 */
export type FormatPropertySelectors<TCssProperties extends string> =
  FormatAttr<Partial<Record<TCssProperties, string>>>;
