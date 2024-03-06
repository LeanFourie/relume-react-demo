// Packages & Modules
import styles from './value-added-bar-layout-3.module.scss';
import {
  useEffect,
  useState
} from 'react';

// Components
import {
  Button,
  Icon,
  SocialLinks,
  Text
} from '../../../';

// Definitions
import type { TValueAddedBarLayout3Props } from './value-added-bar-layout-3.definitions';

// Component
/**
 * ValueAddedBarLayout3 Component
 * 
 * The `ValueAddedBarLayout3` component is an informational component placed at the top of the screen.
 * It consists of text elements, visual elements and social media links.
 * 
 * @component
 * @example
 * <ValueAddedBarLayout3
 *   icon={{
 *     name: 'home',
 *     type: 'text'
 *   }}
 *   message={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
 *   title={ 'Medium length banner heading goes here' }
 *   socialLinks={[
 *     {
 *       icon: '/icons/icon-facebook.svg',
 *       name: 'Facebook',
 *       url: '#',
 *       type: 'facebook'
 *     },
 *     {
 *       icon: '/icons/icon-instagram.svg',
 *       name: 'Instagram',
 *       url: '#',
 *       type: 'instagram'
 *     },
 *     {
 *       icon: '/icons/icon-x.svg',
 *       name: 'X',
 *       url: '#',
 *       type: 'x'
 *     }
 *   ]}
 * />
 * 
 * @param { TValueAddedBarLayout3Props } props - The properties for configuring the ValueAddedBarLayout3 component.
 * 
 * @returns { JSX.Element } - The ValueAddedBarLayout3 component is being returned as a JSX element.
 */
export const ValueAddedBarLayout3 = ( props: TValueAddedBarLayout3Props ): JSX.Element => {
  // PROPS
  const {
    icon,
    isCondensed = false,
    message,
    socialLinks,
    title
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
          {/* Icon */}
          <div className={ styles[ `${ baseClass }__icon` ] }>
            <Icon
              { ...icon }
              className={ styles[ `${ baseClass }__icon-element` ] }
            />
          </div>
          {/* ./Icon */}
          {/* Text */}
          <div className={ styles[ `${ baseClass }__text` ] }>
            {/* Title */}
            <div className={ styles[ `${ baseClass }__title` ] }>
              <Text
                className={ styles[ `${ baseClass }__title` ] }
                fontWeight={ 'semibold' }
                variant={ 'text regular' }
              >
                { title }
              </Text>
            </div>
            {/* ./Title */}
            {/* Message */}
            <div className={ styles[ `${ baseClass }__message` ] }>
              <Text
                className={ styles[ `${ baseClass }__message` ] }
                variant={ 'text small' }
              >
                { message }
              </Text>
            </div>
            {/* ./Message */}
          </div>
          {/* ./Text */}
        </div>
        {/* ./Content */}

        {/* Socials */}
        <div className={ styles[ `${ baseClass }__socials` ] }>
          {/* Buttons */}
          <SocialLinks links={ socialLinks } />
          {/* ./Buttons */}

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
        {/* ./Socials */}
      </div>
      {/* ./Inner */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Banners / 4
 * - Banners / 9
 */
