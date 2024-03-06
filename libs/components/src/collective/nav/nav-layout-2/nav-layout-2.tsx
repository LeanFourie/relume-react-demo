// Packages & Modules
import { WindowContext } from '@relume-demo/providers';
import styles from './nav-layout-2.module.scss';
import {
  useContext,
  useState
} from 'react';

// Components
import {
  Button,
  Image,
  MenuTrigger
} from '../../../';

// Definitions
import type { TNavLayout2Props } from './nav-layout-2.definitions';

// Component
/**
 * NavLayout2 Component
 * 
 * The `NavLayout2` is a header navigational component.
 * It is composed of a logo element, buttons and a trigger action to trigger the render of a fill screen nav menu.
 * 
 * @component
 * @example
 * <NavLayout2
 *   actions={[{
 *     onClick: () => {},
 *     accessibleLabel: '',
 *     label: 'Button',
 *     type: 'text'
 *   }]}
 *   className={ '' }
 *   logoUri={ '/images/image-relume_demo-logo.svg' }
 * />
 * 
 * @param { TNavLayout2Props } props - The properties for configuring the NavLayout2 component.
 * 
 * @returns { JSX.Element } - The NavLayout2 component is being returned as a JSX element.
 */
export const NavLayout2 = ( props: TNavLayout2Props ): JSX.Element => {
  // PROPS
  const {
    actions,
    className,
    logoUri
  } = props;

  // PROVIDERS
  const {
    breakpoints,
    windowSize
  } = useContext( WindowContext )!;

  // VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'nav';

  // STATES
  /**
   * Stores the open / closed state of the menu.
   */
  const [
    _menuIsOpen,
    _setMenuIsOpen
  ] = useState< boolean >( false );

  // METHODS
  /**
   * Handle click events on the menu trigger component.
   * 
   * @param { boolean } state - The state value emitted from the menu trigger component.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleMenuTriggerClick = ( state: boolean ): void => {
    // Update the menu open / closed state based on the state from the menu trigger component
    _setMenuIsOpen( state );
  }

  // HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ className ? className : '' }
    `}>
      {/* Logo */}
      <div className={ styles[ `${ baseClass }__logo` ] }>
        {( logoUri.includes( '.svg' ) ) && (
          <Image
            alt={ 'Company Logo' }
            src={ logoUri }
          />
        )}
      </div>
      {/* ./Logo */}

      {/* Actions */}
      <div className={ styles[ `${ baseClass }__actions` ] }>
        { actions.map(( action, index: number ) => (
          <Button
            { ...action }
            key={ `${ action.accessibleLabel } ${ index }` }
            hostClassName={ styles[ `${ baseClass }__action` ] }
            leadingIcon={ ( windowSize > breakpoints.sm ) ? action.leadingIcon : undefined }
            size={ ( windowSize > breakpoints.sm ) ? 'md' : 'sm' }
            trailingIcon={ ( windowSize > breakpoints.sm ) ? action.trailingIcon : undefined }
          />
        ))}
      </div>
      {/* ./Actions */}

      {/* Menu Trigger */}
      <div className={ styles[ `${ baseClass }__trigger` ] }>
        <MenuTrigger
          onClick={ ( state ) => handleMenuTriggerClick( state ) }
        />
      </div>
      {/* ./Menu Trigger */}

      {/* Content */}
      <div className={`
        ${ styles[ `${ baseClass }__content` ] }
        ${ _menuIsOpen ? styles[ `${ baseClass }__content--is-open` ] : '' }
      `}>
        {/* TODO: ADD Mega Menu */}
      </div>
      {/* ./Content */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Navbar / 4
 */
