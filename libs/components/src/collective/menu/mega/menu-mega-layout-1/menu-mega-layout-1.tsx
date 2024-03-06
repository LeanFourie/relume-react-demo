// Packages & Modules
import styles from './menu-mega-layout-1.module.scss';

// Components
import {
  Icon,
  Image,
  Link,
  Text
} from '../../../../';

// Definitions
import type { TMenuMegaLayout1Props } from './menu-mega-layout-1.definitions';

// Components
/**
 * MenuMegaLayout1 Component
 * 
 * The `MenuMegaLayout1` is a large navigational component triggered when hovering over header menu items.
 * It is composed navigational links and features two blog post items.
 * 
 * @component
 * @example
 * <MenuMegaLayout1
 *   featuredLinks={[
 *     {
 *       description: 'Lorem ipsum dolor sit amet consectetur elit',
 *       image: {
 *         alt: '',
 *         src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *       },
 *       title: 'Page 1',
 *       url: '#'
 *     },
 *     {
 *       description: 'Lorem ipsum dolor sit amet consectetur elit',
 *       image: {
 *         alt: '',
 *         src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *       },
 *       title: 'Page 2',
 *       url: '#'
 *     }
 *   ]}
 *   featuredLinksTitle={ 'Featured' }
 *   featuresCTA={{
 *     label: 'See all',
 *     url: '#'
 *   }}
 *   linkGroups={[{
 *     title: 'Title',
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
 * @param { TMenuMegaLayout1Props } props - The properties for configuring the MenuMegaLayout1 component.
 * 
 * @returns { JSX.Element } - The MenuMegaLayout1 component is being returned as a JSX element.
 */
export const MenuMegaLayout1 = ( props: TMenuMegaLayout1Props ): JSX.Element => {
  // PROPS
  const {
    featuredLinks,
    featuredLinksTitle,
    featuresCTA,
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
                          className={ styles[ `${ baseClass }__link-title` ] }
                          fontWeight={ 'semibold' }
                          variant={ 'text regular' }
                        >
                          { link.label }
                        </Text>
                        <Text
                          className={ styles[ `${ baseClass }__link-description` ] }
                          variant={ 'text small' }
                        >
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

      {/* Featured Links */}
      {( featuredLinks && featuredLinks.length > 0 ) && (
        <div className={ styles[ `${ baseClass }__features` ] }>
          {/* Title */}
          <div className={ styles[ `${ baseClass }__features-title` ] }>
            <Text
              fontWeight={ 'semibold' }
              variant={ 'text regular' }
            >
              { featuredLinksTitle }
            </Text>
          </div>
          {/* ./Title */}
          {/* Posts */}
          <div className={ styles[ `${ baseClass }__features-items` ] }>
            { featuredLinks.map(( feature, index: number ) => (
              <div
                key={ `${ feature.title } ${ index }` }
                className={ styles[ `${ baseClass }__feature` ] }
              >
                {/* Image */}
                <div className={ styles[ `${ baseClass }__feature-image` ] }>
                  <Image
                    { ...feature.image }
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
                    { feature.title }
                  </Text>
                  <Text
                    className={ styles[ `${ baseClass }__feature-description` ] }
                    variant={ 'text small' }
                  >
                    { feature.description }
                  </Text>
                  <Link
                    hostClassName={ styles[ `${ baseClass }__feature-link` ] }
                    href={ feature.url }
                    label={ 'Read more' }
                    type={ 'a' }
                  />
                </div>
                {/* ./Text */}
              </div>
            ))}
          </div>
          {/* ./Posts */}
          {/* Link */}
          <div className={ styles[ `${ baseClass }__posts-link` ] }>
            <Link
              href={ featuresCTA.url }
              icon={ 'arrow' }
              label={ featuresCTA.label }
              type={ 'a' }
            />
          </div>
          {/* ./Link */}
        </div>
      )}
      {/* ./Featured Links */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Navbar / 5
 */
