'use client'

// Packages & Modules
import styles from './menu-full-layout-2.module.scss';
import{
  useEffect,
  useState
} from 'react';

// Components
import {
  Image,
  Link,
  SocialLinks,
  Text
} from '../../../../';

// Definitions
import type { IPosition } from '@relume-demo/utils';
import type { TMenuFullLayout2Props } from './menu-full-layout-2.definitions';

// Component
/**
 * MenuFullLayout2 Component
 * 
 * The `MenuFullLayout2` component is a full page  navigation component.
 * It is composed of anchor tags to direct users to their desired destination.
 * 
 * @component
 * @example
 * <MenuFullLayout2
 *   contactUrl={ '#' }
 *   links={[
 *     {
 *       label: 'Link,
 *       url: '#'
 *     }
 *   ]}
 *   socials={[
 *     {
 *       icon: '/icons/icon-facebook.svg',
 *       name: 'Facebook',
 *       url: '#',
 *       type: 'facebook'
 *     }
 *   ]}
 * />
 * 
 * @param { TMenuFullLayout2Props } props - The properties for configuring the MenuFullLayout2 component.
 * 
 * @returns { JSX.Element } - The MenuFullLayout2 component is being returned as a JSX element.
 */
export const MenuFullLayout2 = ( props: TMenuFullLayout2Props ): JSX.Element => {
  // PROPS
  const {
    contactUrl,
    links,
    socials
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'menu';

  // STATES
  /**
   * Stores the cursor coordinates
   */
  const [
    _mousePosition,
    _setMousePosition
  ] = useState< IPosition >({
    x: 0,
    y: 0
  });

  // METHODS
  /**
   * Captures the cursor coordinates on mouse move
   * 
   * @param event - The mouse move event
   */
  const captureMousePosition = ( event: MouseEvent ): void => {
    // Store the update cursor coordinates
    _setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  }

  // EFFECTS
  useEffect(() => {
    // Check if the window exists, THEN...
    if ( typeof window !== undefined ) {
      // Attach a mouse move event listener to the window
      window.addEventListener( 'mousemove', captureMousePosition );
    }

    return () => {
      // Check if the window exists, THEN...
      if ( typeof window !== undefined ) {
        // Remove the attached mouse move event listener
        window.removeEventListener( 'mousemove', captureMousePosition );
      }
    }
  }, []);

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Links */}
      {( links && links.length > 0 ) &&
        <div className={ styles[ `${ baseClass }__links` ] }>
          {( links.map(( link, index: number ) => (
            <a
              key={ `${ link.label } ${ index }` }
              className={ styles[ `${ baseClass }__link` ] }
              href={ link.url }
            >
              {/* Text */}
              <Text
                className={ styles[ `${ baseClass }__link-label` ] }
                fontWeight={ 'bold' }
                textAlign={ 'right' }
                variant={ 'heading medium' }
              >
                { link.label }
              </Text>
              {/* ./Text */}
              {/* Image */}
              <div 
                className={ styles[ `${ baseClass }__link-image` ] }
                style={{
                  left: `${ _mousePosition.x }px`,
                  top: `${ _mousePosition.y }px`
                }}
              >
                <Image
                  alt={ link.label }
                  fit={ 'cover' }
                  src={ link.image }
                />
              </div>
              {/* ./Image */}
            </a>
          )))}
        </div>
      }
      {/* ./Links */}

      {/* Footer */}
      <div className={ styles[ `${ baseClass }__footer` ] }>
        {/* Contact */}
        <Link
          className={ styles[ `${ baseClass }__footer-contact` ] }
          href={ contactUrl }
          label={ 'Contact' }
          type={ 'a' }
        />
        {/* ./Contact */}
        {/* Socials */}
        <SocialLinks links={ socials } />
        {/* ./Socials */}
      </div>
      {/* ./Footer */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Navbar / 17
 */
