// Packages & Modules
import { WindowContext } from '@relume-demo/providers';
import { toRem } from '@relume-demo/utils'
import styles from './nav-layout-3.module.scss';
import {
  useContext,
  useRef,
  useState
} from 'react';

// Components
import {
  Button,
  MenuPopoverLayout1,
  MenuTrigger,
  NavLink
} from '../../../';

// Definitions
import type { TNavLayout3Props } from './nav-layout-3.definitions';
import type { MouseEvent } from 'react';

// Component
/**
 * NavLayout3 Component
 * 
 * The `NavLayout3` is a navigational component render at the bottom of the screen as a fixed element.
 * It is composed of a logo element, links and buttons which can be arranged into different layouts.
 * 
 * @component
 * @example
 * <NavLayout3
 *   actions={[{
 *     onClick: () => {},
 *     accessibleLabel: '',
 *     label: 'Button',
 *     type: 'text'
 *   }]}
 *   className={ '' }
 *   links={[{
 *     label: 'Label',
 *     url: '#'
 *   }]}
 * />
 * 
 * @param { TNavLayout3Props } props - The properties for configuring the NavLayout3 component.
 * 
 * @returns { JSX.Element } - The NavLayout3 component is being returned as a JSX element.
 */
export const NavLayout3 = ( props: TNavLayout3Props ): JSX.Element => {
  // PROPS
  const {
    actions,
    className,
    links
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
   * Stores a reference to the links container.
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
   * Handle click events on the menu trigger component≥
   * 
   * @param { boolean } state - The state value emitted from the menu trigger component
   * 
   * @returns { void } - Returns nothing.
   */
  const handleMenuTriggerClick = ( state: boolean ): void => {
    // Update the menu open / closed state based on the state from the menu trigger component
    _setMenuIsOpen( state );
  }

  /**
   * Handles click events on the scroll to top button.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleScrollClick = (): void => {
    // Smooth scroll the user to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
   * @returns { JSX.Element } - A JSX element containing the links and actions to render.
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
      </>
    )
  }

  // HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ className ? className : '' }
    `}>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Scroll Up */}
        {( windowSize > breakpoints.md ) && (
          <div className={ styles[ `${ baseClass }__scroll` ] }>
            <Button
              onClick={ handleScrollClick }
              accessibleLabel={ 'Scroll to top' }
              icon={{
                name: 'expand_less',
                type: 'text'
              }}
              size={ 'lg' }
              type={ 'icon' }
              variant={ 'ghost' }
            />
          </div>
        )}
        {/* ./Scroll Up */}

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

        {/* Actions */}
        {( actions && actions.length > 0 ) && (
          <div className={ styles[ `${ baseClass }__actions` ] }>
            { actions.map(( action, index: number ) => (
              <Button
                { ...action }
                key={ `${ action.accessibleLabel } ${ index }` }
                className={ styles[ `${ baseClass }__action` ] }
              />
            ))}
          </div>
        )}
        {/* ./Actions */}
      </div>
      {/* ./Inner */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Navbar / 15
 */
