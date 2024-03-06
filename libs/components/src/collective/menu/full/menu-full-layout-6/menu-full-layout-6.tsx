'use client'

// Packages & Modules
import styles from './menu-full-layout-6.module.scss';
import {
  useRef,
  useState
} from 'react';

// Components
import {
  Image,
  Link,
  SocialLinks,
  Text
} from '../../../../';

// Definitions
import type { TMenuFullLayout6Props } from './menu-full-layout-6.definitions';

// Component
/**
 * MenuFullLayout6 Component
 * 
 * The `MenuFullLayout6` component is a full page  navigation component.
 * It is composed of anchor tags to direct users to their desired destination.
 * The component also includes links to two blog items and a link to the blog listing page.
 * 
 * @component
 * @example
 * <MenuFullLayout6
 *   blogPosts={[
 *     {
 *       excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
 *       image: {
 *         alt: '',
 *         src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *       },
 *       title: 'Article Title',
 *       url: '#'
 *     },
 *     {
 *       excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
 *       image: {
 *         alt: '',
 *         src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *       },
 *       title: 'Article Title',
 *       url: '#'
 *     }
 *   ]}
 *   blogTitle={ 'Featured from Blog' }
 *   blogUrl={ '#' }
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
 * @param { TMenuFullLayout6Props } props - The properties for configuring the MenuFullLayout6 component.
 * 
 * @returns { JSX.Element } - The MenuFullLayout6 component is being returned as a JSX element.
 */
export const MenuFullLayout6 = ( props: TMenuFullLayout6Props ): JSX.Element => {
  // PROPS
  const {
    blogPosts,
    blogTitle,
    blogUrl,
    contactUrl,
    links,
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
      {/* Links */}
      {( links && links.length > 0 ) &&
        <div
          ref={ primaryLinksRef }
          className={ styles[ `${ baseClass }__links` ] }
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
                <div
                  className={ styles[ `${ baseClass }__link-label` ] }
                  data-label={ link.label }
                >
                  <Text
                    className={ styles[ `${ baseClass }__link-label-element` ] }
                    fontWeight={ 'bold' }
                    variant={ 'heading large' }
                  >
                    { link.label }
                  </Text>
                </div>
              </a>
            </div>
          )))}
        </div>
      }
      {/* ./Links */}

      {/* Blog Posts */}
      <div className={ styles[ `${ baseClass }__posts` ] }>
        {/* Title */}
        <div className={ styles[ `${ baseClass }__posts-title` ] }>
          <Text
            fontWeight={ 'semibold' }
            variant={ 'text regular' }
          >
            { blogTitle }
          </Text>
        </div>
        {/* ./Title */}
        {/* Posts */}
        <div className={ styles[ `${ baseClass }__posts-items` ] }>
          { blogPosts.map(( post, index: number ) => (
            <div
              key={ `${ post.title } ${ index }` }
              className={ styles[ `${ baseClass }__post` ] }
            >
              {/* Image */}
              <div className={ styles[ `${ baseClass }__post-image` ] }>
                <Image
                  { ...post.image }
                  className={ styles[ `${ baseClass }__post-image-element` ] }
                  fit={ 'cover' }
                />
              </div>
              {/* ./Image */}
              {/* Text */}
              <div className={ styles[ `${ baseClass }__post-text` ] }>
                <Text
                  className={ styles[ `${ baseClass }__post-title` ] }
                  fontWeight={ 'semibold' }
                  variant={ 'text regular' }
                >
                  { post.title }
                </Text>
                <Text
                  className={ styles[ `${ baseClass }__post-excerpt` ] }
                  variant={ 'text small' }
                >
                  { post.excerpt }
                </Text>
                <Link
                  hostClassName={ styles[ `${ baseClass }__post-link` ] }
                  href={ post.url }
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
            href={ blogUrl }
            icon={ 'arrow' }
            label={ 'See all articles' }
            type={ 'a' }
          />
        </div>
        {/* ./Link */}
      </div>
      {/* ./Blog Posts */}

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
 * - Navbar / 21
 */
