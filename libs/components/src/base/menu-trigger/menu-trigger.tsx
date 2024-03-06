'use client'

// Packages & Modules
import styles from './menu-trigger.module.scss';
import {
  useEffect,
  useState
} from 'react';

// Definitions
import type { TMenuTriggerProps } from './menu-trigger.definitions';

// Component
/**
 * MenuTrigger Component
 * 
 * Handles click events and manages the open/closed state.
 * 
 * @component
 * @example
 * <MenuTrigger onClick={ ( state ) => console.log( state ) } />
 *
 * @param { TMenuTriggerProps } props - Component properties.
 * 
 * @returns { JSX.Element } JSX Element.
 */
export const MenuTrigger = ( props: TMenuTriggerProps ): JSX.Element => {
  // PROPS
  const { onClick } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'trigger';

  // STATES
  /**
   * Stores the open / closed state of the component
   */
  const [
    _isOpen,
    _setIsOpen
  ] = useState< boolean >( false );

  // METHODS
  /**
   * Handles click events on the component.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleClick = (): void => {
    // Toggle the open / close state of the component
    _setIsOpen( state => !state );
  }

  // EFFECTS
  useEffect(() => {
    onClick( _isOpen );
  }, [ _isOpen ]);

  // HTML
  return (
    <button
      onClick={ handleClick }
      className={`
        ${ styles[ baseClass ] }
        ${ _isOpen ? styles[ `${ baseClass }--is-open` ] : '' }
      `}
    >
      {/* Handles */}
      { [ ...Array( 3 ) ].map(( _, index: number ) => (
        <span
          key={ `trigger handle ${ index }` }
          className={`
            ${ styles[ `${ baseClass }__handle` ] }
            ${ styles[ `${ baseClass }__handle--position-${ index + 1 }` ] }
          `}
        >
          <span className={ styles[ `${ baseClass }__handle-inner` ] }></span>
        </span>
      ))}
      {/* ./Handles */}
    </button>
  );
}
