// Packages & Modules
import styles from './menu-full-layout-3.module.scss';

// Components
import {
  Icon,
  Link,
  SocialLinks,
  Text
} from '../../../../';

// Definitions
import type { TMenuFullLayout3Props } from './menu-full-layout-3.definitions';

// Component
/**
 * MenuFullLayout3 Component
 * 
 * The `MenuFullLayout3` component is a full page  navigation component.
 * It is composed of anchor tags to direct users to their desired destination.
 * 
 * @component
 * @example
 * <MenuFullLayout3
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
 * @param { TMenuFullLayout3Props } props - The properties for configuring the MenuFullLayout3 component.
 * 
 * @returns { JSX.Element } - The MenuFullLayout3 component is being returned as a JSX element.
 */
export const MenuFullLayout3 = ( props: TMenuFullLayout3Props ): JSX.Element => {
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
      {( links && links.length > 0 ) &&
        <div className={ styles[ `${ baseClass }__links` ] }>
          {( links.map(( link, index: number ) => (
            <div
              key={ `${ link.label } ${ index }` }
              className={ styles[ `${ baseClass }__link` ] }
            >
              <a
                className={ styles[ `${ baseClass }__link-inner` ] }
                href={ link.url }
              >
                {/* Text */}
                <Text
                  className={ styles[ `${ baseClass }__link-label` ] }
                  fontWeight={ 'bold' }
                  variant={ 'heading large' }
                >
                  { link.label }
                </Text>
                {/* ./Text */}
                {/* Icon */}
                <div className={ styles[ `${ baseClass }__link-icon` ] }>
                  <Icon
                    className={ styles[ `${ baseClass }__link-icon-element` ] }
                    name={ 'north_east' }
                    type={ 'text' }
                  />
                </div>
                {/* ./Icon */}
              </a>
            </div>
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
 * - Navbar / 18
 */
