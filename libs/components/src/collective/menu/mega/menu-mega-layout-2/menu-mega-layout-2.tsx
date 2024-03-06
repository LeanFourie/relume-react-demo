// Packages & Modules
import styles from './menu-mega-layout-2.module.scss';

// Components
import {
  Icon,
  Image,
  Link,
  Text
} from '../../../../';

// Definitions
import type { TMenuMegaLayout2Props } from './menu-mega-layout-2.definitions';

// Components
/**
 * MenuMegaLayout2 Component
 * 
 * The `MenuMegaLayout2` is a large navigational component triggered when hovering over header menu items.
 * It is composed navigational links and a featured link of choice.
 * 
 * @component
 * @example
 * <MenuMegaLayout2
 *   featuredLink={{
 *     description: 'Lorem ipsum dolor sit amet consectetur elit',
 *     image: {
 *       alt: '',
 *       src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *     },
 *     title: 'Page 1',
 *     url: '#'
 *   }}
 *   featuredLinkTitle={ 'Featured' }
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
 *       }]
 *     }]}
 *   }))
 * />
 * 
 * @param { TMenuMegaLayout2Props } props - The properties for configuring the MenuMegaLayout2 component.
 * 
 * @returns { JSX.Element } - The MenuMegaLayout2 component is being returned as a JSX element.
 */
export const MenuMegaLayout2 = ( props: TMenuMegaLayout2Props ): JSX.Element => {
  // PROPS
  const {
    featuredLink,
    featuredLinkTitle,
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
      <div className={ styles[ `${ baseClass }__features` ] }>
        {/* Title */}
        <div className={ styles[ `${ baseClass }__features-title` ] }>
          <Text
            fontWeight={ 'semibold' }
            variant={ 'text regular' }
          >
            { featuredLinkTitle }
          </Text>
        </div>
        {/* ./Title */}
        {/* Posts */}
        <div className={ styles[ `${ baseClass }__features-items` ] }>
          <div className={ styles[ `${ baseClass }__feature` ] }>
            {/* Image */}
            <div className={ styles[ `${ baseClass }__feature-image` ] }>
              <Image
                { ...featuredLink.image }
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
                { featuredLink.title }
              </Text>
              <Text
                className={ styles[ `${ baseClass }__feature-description` ] }
                variant={ 'text small' }
              >
                { featuredLink.description }
              </Text>
              <Link
                hostClassName={ styles[ `${ baseClass }__feature-link` ] }
                href={ featuredLink.url }
                label={ 'Read more' }
                type={ 'a' }
              />
            </div>
            {/* ./Text */}
          </div>
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
      {/* ./Featured Links */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Navbar / 6
 */
