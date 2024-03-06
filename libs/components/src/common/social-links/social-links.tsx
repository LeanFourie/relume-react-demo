// Packages & Modules
import styles from './social-links.module.scss';

// Components
import { Icon } from '../../';

// Definitions
import type { TSocialLinksProps } from './social-links.definitions';

// Component
/**
 * SocialLinks Component
 * 
 * The `SocialLinks` component is a navigational component used to direct users to external social media platforms.
 * The component is composed of icon based links.
 *
 * @component
 * @example
 * <SocialLinks
 *   links={[
 *     {
 *       icon: '/icons/icon-facebook.svg',
 *       name: 'Facebook',
 *       url: '#',
 *       type: 'facebook'
 *     }
 *   ]}
 * />
 * 
 * @param { TSocialLinksProps } props - The properties for configuring the SocialLinks component.
 * 
 * @returns { JSX.Element } - The SocialLinks component is being returned as a JSX element.
 */
export const SocialLinks = ( props: TSocialLinksProps ): JSX.Element => {
  // PROPS
  const { links } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'socials';

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      { links.map(( link, index: number ) => (
        <a
          key={ `${ link.name } ${ index }` }
          className={`
            ${ styles[ `${ baseClass }__item` ] }
            ${ styles[ `${ baseClass }__item--type-${ link.type }` ] }
          `}
          href={ link.url }
          target={ '_blank' }
        >
          <Icon
            className={ styles[ `${ baseClass }__item-icon` ] }
            type={ 'svg' }
            uri={ link.icon }
          />
        </a>
      ))}
    </div>
  );
}
