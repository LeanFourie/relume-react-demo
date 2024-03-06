// Packages & Modules
import styles from './host.module.scss';

// Definitions
import type { THostProps } from './host.definitions';
import type { PropsWithChildren } from 'react';

// Component
/**
 * Host Component
 * 
 * A versatile container component that can be customized with optional features
 * such as disabled state, full-width, loading state, and skeleton state.
 * 
 * @component
 * @example
 * <Host>
 *   <div>Hello World</div>
 * </Host>
 * 
 * @param { PropsWithChildren< THostProps > } props - Component properties.
 * 
 * @returns { JSX.Element } - Rendered Host component.
 */
export const Host = ( props: PropsWithChildren< THostProps > ): JSX.Element => {
  // PROPS
  const {
    children,
    className,
    isDisabled = false,
    isFullWidth = false,
    isLoading = false,
    isSkeleton = false
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'host';

  // HTML
  return (
    <span className={`
      ${ styles[ baseClass ] }
      ${ isDisabled ? styles[ `${ baseClass }--is-disabled` ] : '' }
      ${ isFullWidth ? styles[ `${ baseClass }--is-full-width` ] : '' }
      ${ isLoading ? styles[ `${ baseClass }--is-loading` ] : '' }
      ${ isSkeleton ? styles[ `${ baseClass }--is-skeleton` ] : '' }
      ${ className ? className : '' }
    `}>
      { children }
    </span>
  );
}
