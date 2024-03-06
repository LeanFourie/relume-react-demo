// Packages & Modules
import styles from './menu-mega-layout-4.module.scss';

// Components
import {
  Icon,
  Text
} from '../../../../';

// Definitions
import type { IMenuMegaLinkGroup } from '../menu-mega.definitions';
import type { TMenuMegaLayout4Props } from './menu-mega-layout-4.definitions';

// Component
/**
 * MenuMegaLayout4 Component
 * 
 * The `MenuMegaLayout4` is a large navigational component triggered when hovering over header menu items.
 * It is composed navigational links.
 * 
 * @component
 * @example
 * <MenuMegaLayout4
    linkGroups: [ ...Array( 4 ) ].map(( _, index: number ) => ({
      title: 'Title',
      links: [ ...Array( 4 ) ].map(( _, idx: number ) => ({
        label: 'Label',
        description: 'Lorem ipsum dolor sit amet consectetur elit',
        url: '#',
        icon: {
          name: 'home',
          type: 'text'
        }
      }))
    }))
 * />
 * 
 * @param { TMenuMegaLayout4Props } props - The properties for configuring the MenuMegaLayout4 component.
 * 
 * @returns { JSX.Element } - The MenuMegaLayout4 component is being returned as a JSX element.
 */
export const MenuMegaLayout4 = ( props: TMenuMegaLayout4Props ): JSX.Element => {
  // PROPS
  const { linkGroups } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'menu';
  /**
   * Stores a list of all the link groups, filtering out the last group
   */
  const defaultGroups: TMenuMegaLayout4Props[ 'linkGroups' ] = linkGroups.filter(( _, index: number ) => (
    index < linkGroups.length - 1
  ));
  /**
   * Stores only the last group in the link groups to render separately
   */
  const featuredGroup: IMenuMegaLinkGroup = linkGroups[ linkGroups.length - 1 ];

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Link Groups */}
      {( defaultGroups && defaultGroups.length > 0 ) && (
        <div className={ styles[ `${ baseClass }__groups` ] }>
          { defaultGroups.map(( group, index: number ) => (
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

      {/* Featured Group */}
      <div className={ styles[ `${ baseClass }__groups` ] }>
        <div className={ styles[ `${ baseClass }__group` ] }>
          {/* Title */}
          {( featuredGroup.title ) && (
            <div className={ styles[ `${ baseClass }__group-title` ] }>
              <Text
                fontWeight={ 'semibold' }
                variant={ 'text small' }
              >
                { featuredGroup.title }
              </Text>
            </div>
          )}
          {/* ./Title */}

          {/* Links */}
          {( featuredGroup.links && featuredGroup.links.length > 0 ) && (
            <div className={ styles[ `${ baseClass }__group-links` ] }>
              { featuredGroup.links.map(( link, index: number ) => (
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
      </div>
      {/* ./Featured Group */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Navbar / 8
 */
