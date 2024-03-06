// Packages & Modules
import styles from './menu-popover-layout-1.module.scss';

// Components
import {
  Icon,
  Text
} from '../../../../';

// Definitions
import type { TMenuPopoverLayout1Props } from './menu-popover-layout-1.definitions';

// Component
/**
 * MenuPopoverLayout1 Component
 * 
 * The `MenuPopoverLayout1` is navigational component that appears when hovering hover header link items.
 * It is composed of navigational links that are segmented into groups.
 * 
 * @component
 * @example
 * <MenuPopoverLayout1
 *   linkGroups={[{
 *     links: [{
 *       label: 'Label'
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
 * @param { TMenuPopoverLayout1Props } props - The properties for configuring the MenuPopoverLayout1 component.
 * 
 * @returns { JSX.Element } - The MenuPopoverLayout1 component is being returned as a JSX element.
 */
export const MenuPopoverLayout1 = ( props: TMenuPopoverLayout1Props ): JSX.Element => {
  // PROPS
  const { linkGroups } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'menu';

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Groups */}
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
      {/* ./Groups */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Navbar / 11
 * - Navbar / 12
 */
