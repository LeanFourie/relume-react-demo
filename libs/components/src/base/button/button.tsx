'use client'

// Packages & Modules
import {
  sizeNameToFriendlyName
} from '@relume-demo/utils';
import styles from './button.module.scss';

// Components
import {
  Host,
  Icon,
  Loader,
  Text
} from '../../';

// Definitions
import type { TIconProps } from '../../';
import type { TButtonProps } from './button.definitions';
import type { MouseEvent } from 'react';

// Component
/**
 * Button Component
 * 
 * A customizable button component with various options for styling,
 * icons, loading state, and accessibility features.
 *
 * @component
 * @example
 * <Button
 *   onClick={ () => console.log( 'clicked' ) }
 *   accessibleLabel={ 'Return the list of employees' }
 *   label={ 'Return list' }
 *   type={ 'text' }
 * />
 *
 * @param { TButtonProps } props - The properties for configuring the button.
 * 
 * @returns { JSX.Element } - The rendered Button component.
 */
export const Button = ( props: TButtonProps ): JSX.Element => {
  // PROPS
  const {
    accessibleLabel,
    className,
    color = 'primary',
    onClick,
    hostClassName,
    isDisabled = false,
    isFullWidth = false,
    isLoading = false,
    isSelected = false,
    isSkeleton = false,
    shade = 'dark',
    size = 'md',
    type,
    variant = 'filled'
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'button';

  // METHODS
  /**
   * Handles button click event and triggers the provided onClick callback.
   * Additionally, it removes the focus from the button to improve accessibility.
   * 
   * @param { MouseEvent< HTMLButtonElement > } event - The click event.
   */
  const handleClick = ( event: MouseEvent< HTMLButtonElement > ): void => {
    // Get the button component from the click event
    const target: HTMLButtonElement = event.currentTarget;

    // Trigger the provided onClick callback
    onClick();

    // Blur the button for improved accessibility
    target.blur();
  }

  /**
   * Renders an icon element with the specified properties.
   * 
   * @param { TIconProps } iconProps - The properties for the icon.
   * @param { string } identifier - Identifier for styling purposes.
   * 
   * @returns { JSX.Element } - The rendered icon element.
   */
  const renderIcon = (
    iconProps: TIconProps,
    identifier: string
  ): JSX.Element => (
    <span className={`
      ${ styles[ `${ baseClass }__icon` ] }
      ${ styles[ `${ baseClass }__icon--${ identifier }` ] }
    `}>
      <Icon
        { ...iconProps }
        className={ styles[ `${ baseClass }__icon-element` ] }
      />
    </span>
  );

  // HTML
  return (
    <Host
      className={ hostClassName }
      isDisabled={ isDisabled }
      isFullWidth={ isFullWidth }
      isLoading={ isLoading }
      isSkeleton={ isSkeleton }
    >
      <button
        onClick={ ( event ) => handleClick( event ) }
        aria-label={ accessibleLabel }
        className={`
          ${ styles[ baseClass ] }
          ${ styles[ `${ baseClass }--color-${ color }` ] }
          ${ styles[ `${ baseClass }--shade-${ shade }` ] }
          ${ styles[ `${ baseClass }--size-${ size }` ] }
          ${ styles[ `${ baseClass }--type-${ type }` ] }
          ${ styles[ `${ baseClass }--variant-${ variant }` ] }
          ${ isDisabled ? styles[ `${ baseClass }--is-disabled` ] : '' }
          ${ isFullWidth ? styles[ `${ baseClass }--is-full-width` ] : '' }
          ${ isLoading ? styles[ `${ baseClass }--is-loading` ] : '' }
          ${ isSelected ? styles[ `${ baseClass }--is-selected` ] : '' }
          ${ isSkeleton ? styles[ `${ baseClass }--is-skeleton` ] : '' }
          ${ className ? className : '' }
        `}
      >
        {/* Icon */}
        {( 'icon' in props ) && (
          renderIcon( props.icon, 'standalone' )
        )}
        {/* ./Icon */}

        {/* Leading Icon */}
        {( 'leadingIcon' in props && props.leadingIcon ) && (
          renderIcon( props.leadingIcon, 'leading' )
        )}
        {/* ./Leading Icon */}

        {/* Label */}
        {( 'label' in props ) && (
          <span className={ styles[ `${ baseClass }__label` ] }>
            <Text
              className={ styles[ `${ baseClass }__label-element` ] }
              fontWeight={ 'medium' }
              renderAs={ 'span' }
              variant={ `text ${ sizeNameToFriendlyName( size ) }` }
            >
              { props.label }
            </Text>
          </span>
        )}
        {/* ./Label */}

        {/* Trailing Icon */}
        {( 'trailingIcon' in props && props.trailingIcon ) && (
          renderIcon( props.trailingIcon, 'trailing' )
        )}
        {/* ./Trailing Icon */}

        {/* Loader */}
        {( isLoading ) && (
          <span className={ styles[ `${ baseClass }__loader` ] }>
            <Loader
              className={ styles[ `${ baseClass }__loader-element` ] }
              color={ shade === 'dark' ? 'white' : color }
              size={ size }
              type={ 'dots' }
            />
          </span>
        )}
        {/* ./Label */}
      </button>
    </Host>
  );
}
