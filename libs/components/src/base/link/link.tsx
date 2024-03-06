// Packages & Modules
import { toSnakeCase } from '@relume-demo/utils';
import styles from './link.module.scss';

// Conponents
import {
  Host,
  Icon,
  Text
} from '../../';

// Definitions
import type { TLinkProps } from './link.definitions';

// Component
/**
 * Link Component
 * 
 * Represents a clickable link with optional icon and text.
 *
 * @component
 * @example
 * <Link
 *   href={ '#' }
 *   label={ 'Read more about our employees' }
 *   type={ 'a' }
 * />
 *
 * @param { TLinkProps } props - The props for the Link component.
 * @returns { JSX.Element } - Rendered Link component.
 */
export const Link = ( props: TLinkProps ): JSX.Element => {
  // PROPS
  const {
    className,
    hostClassName,
    icon,
    isDisabled = false,
    isSkeleton = false,
    label,
    color = 'primary',
    type: Type
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'link';

  // METHODS
  /**
   * Handles click events on the link component
   * 
   * @returns { void } - Returns nothing.
   */
  const handleClick = (): void => {
      // Check if the onClick prop is undefined THEN...
      // end the function
      if ( Type === 'a' || !props.onClick ) return;

      // Fire the onClick event prop
      props.onClick();
  }

  // HTML
  return (
    <Host
      className={ hostClassName }
      isDisabled={ isDisabled }
      isSkeleton={ isSkeleton }
    >
      <Type
        onClick={ Type !== 'a' ? handleClick : undefined }
        className={`
          ${ styles[ baseClass ] }
          ${ styles[ `${ baseClass }--color-${ color }` ] }
          ${ isDisabled ? styles[ `${ baseClass }--is-disabled` ] : '' }
          ${ isSkeleton ? styles[ `${ baseClass }--is-skeleton` ] : '' }
          ${ icon ? styles[ `${ baseClass }--icon-${ toSnakeCase( icon ) }` ] : '' }
          ${ className ? className : '' }
        `}
        href={ Type === 'a' ? props.href : undefined }
        target={ Type === 'a' ? props.target : undefined }
      >
          {/* Text */}
          <span className={ styles[ `${ baseClass }__text` ] }>
            <Text
              className={ styles[ `${ baseClass }__text-element` ] }
              fontWeight={ 'medium' }
              isSkeleton={ isSkeleton }
              renderAs={ 'span' }
              variant={ 'text regular' }
            >
              { label }
            </Text>
          </span>
          {/* ./Text */}

        {/* Icon */}
        {( icon ) && (
          <span
            className={ styles[ `${ baseClass }__icon` ] }
            data-icon
          >
            <Icon
              className={ styles[ `${ baseClass }__icon-element` ] }
              name={ icon === 'arrow' ? 'arrow_right_alt' : 'open_in_new' }
              type={ 'text' }
            />
          </span>
        )}
        {/* ./Icon */}
      </Type>
    </Host>
  );
}
