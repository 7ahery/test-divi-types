/**
 * This file contains generics that serves as utility type.
 *
 * IMPORTANT: DO NOT IMPORT ANY VARIABLE HERE. DOING SO MIGHT CAUSE DEPENDENCY CYCLE.
 */

/**
 * Get property type of given object type.
 */
export type PropertyTypeOf<T> = T[keyof T];

/**
 * Transform certain properties as required.
 *
 * @since ??
 */
export type TransformAsRequired<T, TK extends keyof T> = Omit<T, TK> & {
    [P in TK]: T[P];
}

/**
 * Transform certain properties as optional.
 *
 * @since ??
 */
export type TransformAsOptional<T, TK extends keyof T> = Omit<T, TK> & {
    [P in TK]?: T[P];
}
