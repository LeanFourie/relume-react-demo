// Packages & Modules
import styles from './menu-mega-layout-5.module.scss';

// Components
import {
  Icon,
  Link,
  Text
} from '../../../../';

// Definitions
import type { TLinkProps } from '../../../../';
import type { TMenuMegaLayout5Props } from './menu-mega-layout-5.definitions';

// Component
/**
 * MenuMegaLayout5 Component
 * 
 * The `MenuMegaLayout5` is a large navigational component triggered when hovering over header menu items.
 * It is composed navigational links.
 * 
 * @component
 * @example
 * <MenuMegaLayout5
 *   cta={{
 *     label: 'Sign up for free',
 *     text: 'Ready to get started?',
 *     url: '#'
 *   }}
 *   linkGroups={[{
 *     links: [{
 *       label: 'Label',
 *       description: 'Lorem ipsum dolor sit amet consectetur elit',
 *       url: '#',
 *       icon: {
 *         name: 'home',
 *         type: 'text'
 *       }
 *     }]
 *   }]}
 * />
 * 
 * @param { TMenuMegaLayout5Props } props - The properties for configuring the MenuMegaLayout5 component.
 * 
 * @returns { JSX.Element } - The MenuMegaLayout5 component is being returned as a JSX element.
 */
export const MenuMegaLayout5 = ( props: TMenuMegaLayout5Props ): JSX.Element => {
  // PROPS
  const {
    cta,
    linkGroups
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'menu';
  /**
   * Stores the props to set on the link component
  */
  const ctaLinkProps: TLinkProps = {
    href: cta.url,
    label: cta.label,
    type: 'a'
  }

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Link Groups */}
      {( linkGroups && linkGroups.length > 0 ) && (
        <div className={ styles[ `${ baseClass }__groups` ] }>
          { linkGroups.map(( group, index: number ) => (
            <div
              key={ `group ${ index }` }
              className={ styles[ `${ baseClass }__group` ] }
            >
              {/* Title */}
              {( group.title ) && (
                <div className={ styles[ `${ baseClass }__group-title` ] }>
                  <Text
                    fontWeight={ 'semibold' }
                    variant={ 'text small' }
                  >
                    { group.title }
                  </Text>
                </div>
              )}
              {/* ./Title */}

              {/* Links */}
              {( group.links && group.links.length > 0 ) && (
                <div className={ styles[ `${ baseClass }__group-links` ] }>
                  { group.links.map(( link, index: number ) => (
                    <a
                      key={ `${ link.label } ${ index }` }
                      className={ styles[ `${ baseClass }__link` ] }
                      href={ link.url }
                    >
                      {/* Icon */}
                      <div className={ styles[ `${ baseClass }__link-icon` ] }>
                        <Icon
                          { ...link.icon }
                          className={ styles[ `${ baseClass }__link-icon-element` ] }
                        />
                      </div>
                      {/* ./Icon */}
                      {/* Text */}
                      <div className={ styles[ `${ baseClass }__link-text` ] }>
                        <Text
                          fontWeight={ 'semibold' }
                          variant={ 'text regular' }
                        >
                          { link.label }
                        </Text>
                        <Text variant={ 'text small' }>
                          { link.description }
                        </Text>
                      </div>
                      {/* ./Text */}
                    </a>
                  ))}
                </div>
              )}
              {/* ./Links */}
            </div>
          ))}
        </div>
      )}
      {/* ./Link Groups */}

      {/* Footer */}
      <div className={ styles[ `${ baseClass }__footer` ] }>
        {/* CTA Link */}
        <div className={ styles[ `${ baseClass }__footer-cta` ] }>
          <Text variant={ 'text regular' }>
            { cta.text } <Link { ...ctaLinkProps } />
          </Text>
        </div>
        {/* ./CTA Link */}
      </div>
      {/* ./Footer */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Navbar / 9
 */
