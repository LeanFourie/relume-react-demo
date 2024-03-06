// Packages & Modules
import styles from './nav-link.module.scss';

// Components
import {
  Icon,
  Text
} from '../../';

// Definitions
import type { TNavLinkProps } from './nav-link.definitions';

// Component
/**
 * NavLink Component
 * 
 * The `NavLink` component is a navigational component used within header navigation components.
 * The component is a simple text link component with an arrow icon IF the link has nested links.
 *
 * @component
 * @example
 * <NavLink
 *   label={ 'Nav link' }
 *   url={ '#' }
 * />
 * 
 * @param { TNavLinkProps } props - The properties for configuring the NavLink component.
 * 
 * @returns { JSX.Element } - The NavLink component is being returned as a JSX element.
 */
export const NavLink = ( props: TNavLinkProps ): JSX.Element => {
  // PROPS
  const {
    isHovering = false,
    label,
    links,
    url
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'nav-link';

  // HTML
  return (
    <a
      className={`
        ${ styles[ baseClass ] }
        ${ isHovering ? styles[ `${ baseClass }--is-hovering` ] : '' }
        ${ ( links && links.length > 0 ) ? styles[ `${ baseClass }--has-sub-links` ] : '' }
      `}
      href={ url }
    >
      {/* Label */}
      <span className={ styles[ `${ baseClass }__label` ] }>
        <Text
          className={ styles[ `${ baseClass }__label-element` ] }
          variant={ 'text regular' }
        >
          { label }
        </Text>
      </span>
      {/* ./Label */}

      {/* Arrow */}
      {( links && links.length > 0 ) && (
        <span className={ styles[ `${ baseClass }__icon` ] }>
          <Icon
            className={ styles[ `${ baseClass }__icon-element` ] }
            name={ 'expand_more' }
            type={ 'text' }
          />
        </span>
      )}
      {/* ./Arrow */}
    </a>
  );
}
