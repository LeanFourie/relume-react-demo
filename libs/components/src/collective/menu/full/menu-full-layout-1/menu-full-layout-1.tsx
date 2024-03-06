// Packages & Modules
import styles from './menu-full-layout-1.module.scss';

// Components
import {
  Link,
  SocialLinks,
  Text
} from '../../../../';

// Definitions
import type { TMenuFullLayout1Props } from './menu-full-layout-1.definitions';

// Component
/**
 * MenuFullLayout1 Component
 * 
 * The `MenuFullLayout1` component is a full page  navigation component.
 * It is composed of anchor tags to direct users to their desired destination.
 * 
 * @component
 * @example
 * <MenuFullLayout1
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
 * @param { TMenuFullLayout1Props } props - The properties for configuring the MenuFullLayout1 component.
 * 
 * @returns { JSX.Element } - The MenuFullLayout1 component is being returned as a JSX element.
 */
export const MenuFullLayout1 = ( props: TMenuFullLayout1Props ): JSX.Element => {
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

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Links */}
      {( links && links.length > 0 ) && (
        <div className={ styles[ `${ baseClass }__links` ] }>
          {( links.map(( link, index: number ) => (
            <a
              key={ `${ link.label } ${ index }` }
              className={ styles[ `${ baseClass }__link` ] }
              href={ link.url }
            >
              <Text
                className={ styles[ `${ baseClass }__link-label` ] }
                fontWeight={ 'bold' }
                variant={ 'heading large' }
              >
                { link.label.split('').map(( char, index: number ) => (
                  <span
                    key={ `${ char } ${ index }` }
                    className={ styles[ `${ baseClass }__link-label-char` ] }
                    data-char={ char }
                  >
                    { char }
                  </span>
                ))}
              </Text>
            </a>
          )))}
        </div>
      )}
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
 * - Navbar / 16
 */
