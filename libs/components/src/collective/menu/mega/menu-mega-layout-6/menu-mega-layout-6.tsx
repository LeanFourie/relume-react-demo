// Packages & Modules
import styles from './menu-mega-layout-6.module.scss';

// Definitions
import type { TMenuMegaLayout6Props } from './menu-mega-layout-6.definitions';

// Components
import {
  Image,
  Link,
  Text
} from '../../../../';

// Component
/**
 * MenuMegaLayout6 Component
 * 
 * The `MenuMegaLayout6` is a large navigational component triggered when hovering over header menu items.
 * It is composed navigational links that can be combined with images.
 * 
 * @component
 * @example
 * <MenuMegaLayout6
 *   featuredLinks={[{
 *     description: 'Lorem ipsum dolor sit amet consectetur elit',
 *     image: {
 *       alt: '',
 *       src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *     },
 *     title: 'Title',
 *     url: '#'
 *   }]}
 *   linkGroups={[
 *     {
 *       title: 'Pages',
 *       links: [{
 *         label: 'Label',
 *         description: 'Lorem ipsum dolor sit amet consectetur elit',
 *         url: '#',
 *         icon: {
 *           name: 'home',
 *           type: 'text'
 *         }
 *       }]
 *     }
 *   ]}
 * />
 * 
 * @param { TMenuMegaLayout6Props } props - The properties for configuring the MenuMegaLayout6 component.
 * 
 * @returns { JSX.Element } - The MenuMegaLayout6 component is being returned as a JSX element.
 */
export const MenuMegaLayout6 = ( props: TMenuMegaLayout6Props ): JSX.Element => {
  // PROPS
  const {
    featuredLinks,
    linkGroups
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'menu';

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
                      <div className={ styles[ `${ baseClass }__link-text` ] }>
                        <Text variant={ 'text regular' }>
                          { link.label }
                        </Text>
                      </div>
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

      {/* Featured Links */}
      {( featuredLinks && featuredLinks.length > 0 ) && (
        <div className={ styles[ `${ baseClass }__features` ] }>
          { featuredLinks.map(( link, index: number ) => (
            <div
              key={ `${ link.title } ${ index }` }
              className={ styles[ `${ baseClass }__feature` ] }
            >
              {/* Image */}
              <div className={ styles[ `${ baseClass }__feature-image` ] }>
                <Image
                  { ...link.image }
                  className={ styles[ `${ baseClass }__feature-image-element` ] }
                  fit={ 'cover' }
                />
              </div>
              {/* ./Image */}
              {/* Text */}
              <div className={ styles[ `${ baseClass }__feature-text` ] }>
                <Text
                  className={ styles[ `${ baseClass }__feature-title` ] } 
                  fontWeight={ 'semibold' }
                  variant={ 'text regular' }
                >
                  { link.title }
                </Text>
                <Text
                  className={ styles[ `${ baseClass }__feature-description` ] }
                  variant={ 'text small' }
                >
                  { link.description }
                </Text>
                <Link
                  hostClassName={ styles[ `${ baseClass }__feature-link` ] } 
                  href={ link.url }
                  label={ 'Read more' }
                  type={ 'a' }
                />
              </div>
              {/*./ Text */}
            </div>
          ))}
        </div>
      )}
      {/* ./Featured Links */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Navbar / 10
 */
