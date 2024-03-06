// Packages & Modules
import styles from './value-added-bar-layout-4.module.scss';
import {
  useEffect,
  useState
} from 'react';

// Components
import {
  Button,
  Link,
  Text
} from '../../../';

// Definitions
import type { TValueAddedBarLayout4Props } from './value-added-bar-layout-4.definitions';

// Component
/**
 * ValueAddedBarLayout4 Component
 * 
 * The `ValueAddedBarLayout4` component is an informational component placed at the top of the screen.
 * It consists of a text- and a link element.
 * 
 * @component
 * @example
 * <ValueAddedBarLayout4
 *   message={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
 *   link={{
 *     url: '#',
 *     label: 'Read more',
 *     openInNewTab: false
 *   }}
 * />
 * 
 * @param { TValueAddedBarLayout4Props } props - The properties for configuring the ValueAddedBarLayout4 component.
 * 
 * @returns { JSX.Element } - The ValueAddedBarLayout4 component is being returned as a JSX element.
 */
export const ValueAddedBarLayout4 = ( props: TValueAddedBarLayout4Props ): JSX.Element => {
  // PROPS
  const {
    link,
    isCondensed = false,
    message
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'vab';

  // STATES
  /**
   * Stores the show / hide state of the value added bar.
   */
  const [
    _showValueAddedBar,
    _setShowValueAddedBar
  ] = useState< boolean >( true );

  // METHODS
  /**
   * Handles click events on the close button.
   * 
   * @returns { void } = Returns nothing.
   */
  const handleCloseClick = (): void => {
    _setShowValueAddedBar( false );
  }

  // EFFECTS
  useEffect(() => {
    // Check if the local storage item `showValueAddedBar` is set to false, THEN...
    if ( window.localStorage.getItem( 'showValueAddedBar' ) === 'false' ) {
      // Hide the value added bar by setting the `_setShowValueAddedBar` state to false
      _setShowValueAddedBar( false );
    }
  }, []);

  useEffect(() => {
    // Check if the local storage item `showValueAddedBar` is NOT set, THEN...
    if ( !window.localStorage.getItem( 'showValueAddedBar' ) ) {
      // Set the value of the local store item ( `showValueAddedBar` ) to the value of the `_showValueAddedBar` state
      window.localStorage.setItem( 'showValueAddedBar', `${ _showValueAddedBar }` );
    }
  }, [ _showValueAddedBar ]);

  // HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ !_showValueAddedBar ? styles[ `${ baseClass }--is-hidden` ] : '' }
      ${ isCondensed ? styles[ `${ baseClass }--is-condensed` ] : '' }
    `}>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Content */}
        <div className={ styles[ `${ baseClass }__content` ] }>
          {/* Message */}
          <div className={ styles[ `${ baseClass }__message` ] }>
            <Text
              className={ styles[ `${ baseClass }__message-element` ] }
              variant={ 'text small' }
            >
              { message }
            </Text>
          </div>
          {/* ./Message */}
          {/* Link */}
          <div className={ styles[ `${ baseClass }__link` ] }>
            <Link
              className={ styles[ `${ baseClass }__link-element` ] }
              hostClassName={ styles[ `${ baseClass }__link-host` ] }
              href={ link.url }
              label={ link.label }
              target={ link.openInNewTab ? '_blank' : '_self' }
              type={ 'a' }
            />
          </div>
          {/* ./Link */}
        </div>
        {/* ./Content */}

        {/* Close */}
        <div className={ styles[ `${ baseClass }__close` ] }>
          <Button
            onClick={ handleCloseClick }
            accessibleLabel={ 'Close value added bar' }
            icon={{
              name: 'close',
              type: 'text'
            }}
            size={ 'sm' }
            type={ 'icon' }
            variant={ 'ghost' }
          />
        </div>
        {/* ./Close */}
      </div>
      {/* ./Inner */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Banners / 5
 * - Banners / 10
 */
