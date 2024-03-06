// Packages & Modules
import styles from './helper-text.module.scss';

// Components
import {
  Icon,
  Text
} from '../../'

// Definitions
import type { THelperTextProps } from './helper-text.definitions'
import type { PropsWithChildren } from 'react';

// Component
/**
 * HelperText Component
 * 
 * Displays auxiliary text with optional icon and styling variations.
 *
 * @component
 * @example
 * <HelperText>
 *  Hello world
 * </HelperText>
 * 
 * @param { PropsWithChildren< THelperTextProps > } props - Component properties.
 * 
 * @returns { JSX.Element } - Rendered HelperText component.
 */
export const HelperText = ( props: PropsWithChildren< THelperTextProps > ): JSX.Element => {
  // PROPS
  const {
    children,
    className,
    icon,
    isSkeleton = false,
    state = 'default'
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'helper-text';

  // HTML
  return (
    <span className={`
      ${ styles[ baseClass ] }
      ${ styles[ `${ baseClass }--state-${ state }` ] }
      ${ isSkeleton ? styles[ `${ baseClass }--is-skeleton` ] : '' }
      ${ className ? className : '' }
    `}>
      {/* Icon */}
      {( icon ) && (
        <span className={ styles[ `${ baseClass }__icon` ] }>
          <Icon
            { ...icon }
            className={ styles[ `${ baseClass }__icon-element` ] }
          />
        </span>
      )}
      {/* ./Icon */}

      {/* Text */}
      <span className={ styles[ `${ baseClass }__text` ] }>
        <Text
          className={ styles[ `${ baseClass }__text-element` ] }
          isSkeleton={ isSkeleton }
          renderAs={ 'span' }
          variant={ 'text small' }
        >
          { children }
        </Text>
      </span>
      {/* ./Text */}
    </span>
  );
}
