'use client'

// Packages & Modules
import styles from './menu-full-layout-4.module.scss';
import {
  useRef,
  useState
} from 'react';

// Components
import {
  Icon,
  Link,
  SocialLinks,
  Text
} from '../../../../';

// Definitions
import type { TMenuFullLayout4Props } from './menu-full-layout-4.definitions';

// Component
/**
 * MenuFullLayout4 Component
 * 
 * The `MenuFullLayout4` component is a full page  navigation component.
 * It is composed of anchor tags to direct users to their desired destination alongside quick access contact information.
 * 
 * @component
 * @example
 * <MenuFullLayout4
 *   address={ '123 Some Street, ZA, 0081' }
 *   contactNumber={ '012 345 6789' }
 *   email={ 'hello@relumedemo.co.za' }
 *   links={[
 *     {
 *       label: 'Link,
 *       url: '#'
 *     }
 *   ]}
 *   secondaryLinks={[
 *     {
 *       title: 'Column',
 *       links: [
 *         {
 *           label: 'Link',
 *           url: '#'
 *         }
 *       ]
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
 * @param { TMenuFullLayout4Props } props - The properties for configuring the MenuFullLayout4 component.
 * 
 * @returns { JSX.Element } - The MenuFullLayout4 component is being returned as a JSX element.
 */
export const MenuFullLayout4 = ( props: TMenuFullLayout4Props ): JSX.Element => {
  // PROPS
  const {
    address,
    contactNumber,
    email,
    links,
    secondaryLinks,
    socials
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'menu';

  // REFS
  /**
   * Stores a reference to the primary links container HTML Element
   */
  const primaryLinksRef = useRef< HTMLDivElement >( null );

  // STATES
  /**
   * Stores the list of primary link HTML elements
   */
  const [
    _primaryLinksItems,
    _setPrimaryLinksItems
  ] = useState< HTMLElement[] >();

  // METHODS
  /**
   * Handles mouse enter events on the primary link items
   * 
   * @param index - The index position of the current link item
   */
  const handleMouseEnter = ( index: number ): void => {
    // Loop through the link items
    getPrimaryLinks().forEach(( link, idx: number ) => {
      // Check if the link index does NOT match the index of the current link, THEN...
      // set the link HTML element opacity to .3
      if ( idx !== index ) link.style.opacity = '.3';
    });
  }

  /**
   * Handles mouse leave events on the primary link items
   */
  const handleMouseLeave = (): void => {
    // Loop through the link items
    getPrimaryLinks().forEach( link => {
      // Set the opacity of the link HTML Elements to 1
      link.style.opacity = '1';
    });
  }

  /**
   * Gets and sets the primary link items from / to the state
   * 
   * @returns - The list of primary link HTML elements
   */
  const getPrimaryLinks = (): HTMLElement[] => {
    // Check if there are no primary link items in the state, THEN...
    if ( !_primaryLinksItems ) {
        // Get the links container from the ref
      const primaryLinksContainer: HTMLDivElement = primaryLinksRef.current!;
      // Get the list of link HTML elements from the links container
      const primaryLinkItems = Array.from( primaryLinksContainer.children ) as HTMLElement[];

      // Store the primary link items to the state
      _setPrimaryLinksItems( primaryLinkItems );

      // Return the new primary link items
      return primaryLinkItems;
    }

    // Return the primary link items from the state
    return _primaryLinksItems;
  }

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Primary Links */}
        {( links && links.length > 0 ) &&
          <div
            ref={ primaryLinksRef }
            className={`
              ${ styles[ `${ baseClass }__links` ] }
              ${ styles[ `${ baseClass }__links--primary` ] }
            `}
          >
              {( links.map(( link, index: number ) => (
                <div
                  key={ `${ link.label } ${ index }` }
                  className={ styles[ `${ baseClass }__link` ] }
                >
                  <a
                    onMouseEnter={ () => handleMouseEnter( index ) }
                    onMouseLeave={ handleMouseLeave }
                    className={ styles[ `${ baseClass }__link-inner` ] }
                    href={ link.url }
                  >
                    {/* Icon */}
                    <div className={ styles[ `${ baseClass }__link-icon` ] }>
                      <Icon
                        className={ styles[ `${ baseClass }__link-icon-element` ] }
                        type={ 'svg' }
                        uri={ '/icons/icon-star.svg' }
                      />
                    </div>
                    {/* ./Icon */}
                    {/* Text */}
                    <div className={ styles[ `${ baseClass }__link-label` ] }>
                      <Text
                        className={ styles[ `${ baseClass }__link-label-element` ] }
                        fontWeight={ 'bold' }
                        variant={ 'heading medium' }
                      >
                        { link.label }
                      </Text>
                    </div>
                    {/* ./Text */}
                  </a>
                </div>
              )))}
          </div>
        }
        {/* ./Primary Links */}

        {/* Secondary Links */}
        {( secondaryLinks && secondaryLinks.length > 0 ) &&
          <div className={`
            ${ styles[ `${ baseClass }__links` ] }
            ${ styles[ `${ baseClass }__links--secondary` ] }
          `}>
            { secondaryLinks.map(( group, index: number ) => (
              <div
                key={ `${ group.title } ${ index }` }
                className={ styles[ `${ baseClass }__group` ] }
              >
                {/* Title */}
                <div className={ styles[ `${ baseClass }__group-title` ] }>
                  <Text
                    className={ styles[ `${ baseClass }__group-title-element` ] }
                    fontWeight={ 'semibold' }
                    variant={ 'text regular' }
                  >
                    { group.title }
                  </Text>
                </div>
                {/* ./Title */}
                {/* Links */}
                {( group.links && group.links.length > 0 ) &&
                  <div className={ styles[ `${ baseClass }__group-links` ] }>
                    { group.links.map(( link, idx: number ) => (
                      <Link
                        key={ `${ link.label } ${ idx }` }
                        className={ styles[ `${ baseClass }__group-link` ] }
                        href={ link.url }
                        label={ link.label }
                        type={ 'a' }
                      />
                    ))}
                  </div>
                }
                {/* ./Links */}
              </div>
            ))}
          </div>
        }
        {/* ./Secondary Links */}

        {/* Tertiary Links */}
        <div className={`
          ${ styles[ `${ baseClass }__links` ] }
          ${ styles[ `${ baseClass }__links--tertiary` ] }
        `}>
          {/* Company Details */}
          <div className={ styles[ `${ baseClass }__details` ] }>
            {/* Contact Number */}
            <a
              className={ styles[ `${ baseClass }__details-item` ] }
              href={ `tel:${ contactNumber.replace( /\s/g,'' ) }` }
              target={ '_blank' }
            >
              <Text variant={ 'text small' }>
                { contactNumber }
              </Text>
            </a>
            {/* ./Contact Number */}
            {/* Email Address */}
            <a
              className={ styles[ `${ baseClass }__details-item` ] }
              href={ `mailto:${ email }` }
              target={ '_blank' }
            >
              <Text variant={ 'text small' }>
                { email }
              </Text>
            </a>
            {/* ./Email Address */}
            {/* Location */}
            <div  className={ styles[ `${ baseClass }__details-item` ] }>
              <Text variant={ 'text small' }>
                { address }
              </Text>
            </div>
            {/* ./Location */}
          </div>
          {/* ./Company Details */}
          {/* Socials */}
          <SocialLinks links={ socials } />
          {/* ./Socials */}
        </div>
        {/* ./Tertiary Links */}
      </div>
      {/* ./Inner */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Navbar / 19
 */
