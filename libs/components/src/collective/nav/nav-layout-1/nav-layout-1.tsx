'use client'

// Packages & Modules
import { WindowContext } from '@relume-demo/providers';
import { toRem } from '@relume-demo/utils'
import styles from './nav-layout-1.module.scss';
import {
  useContext,
  useRef,
  useState
} from 'react';

// Components
import {
  Button,
  Image,
  MenuPopoverLayout1,
  MenuTrigger,
  NavLink
} from '../../../';

// Definitions
import type { TNavLayout1Props } from './nav-layout-1.definitions';
import type { MouseEvent } from 'react';

// Component
/**
 * NavLayout1 Component
 * 
 * The `NavLayout1` is a header navigational component.
 * It is composed of a logo element, links and buttons which can be arranged into different layouts.
 * 
 * @component
 * @example
 * <NavLayout1
 *   actions={[{
 *     onClick: () => {},
 *     accessibleLabel: '',
 *     label: 'Button',
 *     type: 'text'
 *   }]}
 *   links={[{
 *     label: 'Link',
 *     url: '#'
 *   }]}
 *   linksPosition={ 'right' }
 *   logoUri={ '/images/image-relume_demo-logo.svg' }
 * />
 * 
 * @param { TNavLayout1Props } props - The properties for configuring the NavLayout1 component.
 * 
 * @returns { JSX.Element } - The NavLayout1 component is being returned as a JSX element.
 */
export const NavLayout1 = ( props: TNavLayout1Props ): JSX.Element => {
  // PROPS
  const {
    actions,
    className,
    floatType = 'none',
    links,
    linksPosition = 'right',
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

  // REFS
  /**
   * Stores a reference to the links container element.
   */
  const linksRef = useRef< HTMLDivElement >( null );

  // STATES
  /**
   * Stores the open / closed state of the menu.
   */
  const [
    _menuIsOpen,
    _setMenuIsOpen
  ] = useState< boolean >( false );
  /**
   * Stores the index position of the active link.
   */
  const [
    _activeLinkIndex,
    _setActiveLinkIndex
  ] = useState< number[] | undefined >( undefined );

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

  /**
   * Handle mouse enter events on the link HTML elements.
   * 
   * @param { number } index - The current link index position.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleLinkMouseEnter = ( index: number ): void => {
    // Check if the current window size is smaller OR equal to the md media query breakpoint, THEN...
    // end the function
    if ( windowSize <= breakpoints.md ) return;

    // Update the active link state to the index position of the current link
    _setActiveLinkIndex([ index ]);
  }

  /**
   * Handle mouse leave events on the link HTML elements.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleLinkMouseLeave = (): void => {
    // Check if the current window size is smaller OR equal to the md media query breakpoint, THEN...
    // end the function
    if ( windowSize <= breakpoints.md ) return;

    // Update the active link state to undefined
    _setActiveLinkIndex( undefined );
  }

  /**
   * Handle click events on the menu link trigger element.
   * 
   * @param { MouseEvent } event - The click mouse event.
   * @param { number } index - The index position of the current link.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleLinkTriggerClick = (
    event: MouseEvent,
    index: number
  ): void => {
    // Get the sub-links container element ( sits next to the link trigger element )
    const subLinksContainer = event.currentTarget.nextElementSibling as HTMLElement;

    // Check id the `_activeLinkIndex` state includes the current link index, THEN...
    if ( _activeLinkIndex?.includes( index ) ) {
      // Update the `_activeLinkIndex` state by filtering out the current link index from the state
      _setActiveLinkIndex( prevState => prevState?.filter( item => item !== index ) );
      // Set the sub-links container height to 0
      subLinksContainer.style.height = toRem( 0 );
    }
    // ELSE...
    else {
      // Add the current link index to the `_activeLinkIndex` state
      _setActiveLinkIndex( prevState => ([
        ...prevState || [],
        index
      ]));

      // Get the sub-links inner element ( aka its first child )
      const subLinks = subLinksContainer.children[ 0 ] as HTMLElement;
      // Update the height of the sub-links container to the height of its inner element
      subLinksContainer.style.height = toRem( subLinks.offsetHeight );
    }
  }

  /**
   * Generates the HTML required for the links and actions.
   * 
   * @returns { JSX.Element } - A JSX element containing the links and actions to render
   */
  const returnLinksAndActions = (): JSX.Element => {
    return (
      <>
        {/* Links */}
        {( links && links.length > 0 ) && (
          <div
            ref={ linksRef }
            className={ styles[ `${ baseClass }__links` ] }
          >
            { links.map(( link, index: number ) => (
              <div
                onMouseEnter={ () => handleLinkMouseEnter( index ) }
                onMouseLeave={ handleLinkMouseLeave }
                key={ `${ link.label } ${ index }` }
                className={ styles[ `${ baseClass }__links-item` ] }
              >
                {/* Link */}
                <NavLink
                  { ...link }
                  isHovering={ _activeLinkIndex?.includes( index ) }
                />
                {/* ./Link */}
                {/* Menu Trigger */}
                {(( windowSize <= breakpoints.md ) && ( link.links )) && (
                  <div
                    onClick={ ( event ) => handleLinkTriggerClick( event, index ) }
                    className={ styles[ `${ baseClass }__links-trigger` ] }
                  />
                )}
                {/* ./Menu Trigger */}
                {/* Sub Links */}
                {( link.links ) && (
                  <div className={ styles[ `${ baseClass }__links-sub-links` ] }>
                    <MenuPopoverLayout1
                      linkGroups={[{ links: link.links }]}
                    />
                  </div>
                )}
                {/* ./Sub Links */}
              </div>
            ))}
          </div>
        )}
        {/* ./Links */}

        {/* Actions */}
        {( actions && actions.length > 0 ) && (
          <div className={ styles[ `${ baseClass }__actions` ] }>
            { actions.map(( action, index: number ) => (
              <Button
                { ...action }
                key={ `${ action.accessibleLabel } ${ index }` }
                className={ styles[ `${ baseClass }__action` ] }
                isFullWidth={ windowSize <= breakpoints.sm }
              />
            ))}
          </div>
        )}
        {/* ./Actions */}
      </>
    )
  }

  // HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ styles[ `${ baseClass }--float-${ floatType }` ] }
      ${ styles[ `${ baseClass }--links-position-${ linksPosition }` ] }
      ${ className ? className : '' }
    `}>
      {/* Logo */}
      <a
        className={ styles[ `${ baseClass }__logo` ] }
        href={ '/' }
      >
        {( logoUri.includes( '.svg' ) ) && (
          <Image
            alt={ 'Company Logo' }
            src={ logoUri }
          />
        )}
      </a>
      {/* ./Logo */}

      {/* Desktop Content */}
      {( windowSize >= breakpoints.md ) && (
        <>
          { returnLinksAndActions() }
        </>
      )}
      {/* ./Desktop Content */}

      {/* Menu Trigger */}
      {( windowSize <= breakpoints.md ) && (
        <div className={ styles[ `${ baseClass }__trigger` ] }>
          <MenuTrigger
            onClick={ ( state ) => handleMenuTriggerClick( state ) }
          />
        </div>
      )}
      {/* ./Menu Trigger */}

      {/* Mobile Content */}
      {( windowSize <= breakpoints.md ) && (
        <div className={`
          ${ styles[ `${ baseClass }__content` ] }
          ${ _menuIsOpen ? styles[ `${ baseClass }__content--is-open` ] : '' }
        `}>
          <div className={ styles[ `${ baseClass }__content-inner` ] }>
            { returnLinksAndActions() }
          </div>
        </div>
      )}
      {/* ./Mobile Content */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Navbar / 1
 * - Navbar / 2
 * - Navbar / 3
 */
