// Packages & Modules
import styles from './breadcrumbs.module.scss';
import {
  useEffect,
  useState
} from 'react';

// Components
import { Link } from '../../';

// Definitions
import type {
  IBreadcrumb,
  TBreadcrumbsProps
} from './breadcrumbs.definitions';

// Component
/**
 * Breadcrumbs Component
 * 
 * The `Breadcrumbs` component is an in page navigational component.
 * The component is composed of a sequence of links that directs a user to their desired destination.
 *
 * @component
 * @example
 * <Breadcrumbs />
 * 
 * @param { TBreadcrumbsProps } props - The properties for configuring the Breadcrumbs component.
 * 
 * @returns { JSX.Element } - The Breadcrumbs component is being returned as a JSX element.
 */
export const Breadcrumbs = ( props: TBreadcrumbsProps ): JSX.Element => {
  // PROPS
  const {} = props;

  // VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'breadcrumbs';

  // STATES
  /**
   * Stores the list of link items to render inside the breadcrumbs.
   */
  const [
    _links,
    _setLinks
  ] = useState< IBreadcrumb[] >( [] );

  // METHODS
  /**
   * Creates a list of sequential link items.
   * 
   * @returns { void } - Returns nothing.
   */
  const setLinks = (): void => {
    // Get the URL value from the window href
    const url: string = window.location.href;
    // Create a new URL object from the window href
    const newUrl: URL = new URL( url );
    // Split the new URL into different path parts
    const pathParts: string[] = newUrl.pathname.split( '/' ).filter( part => part !== '' );
    // Get the query params from the new URL
    const queryParams: string = newUrl.search;

    // Create the list of link items from the URL parts
    const links: IBreadcrumb[] = pathParts.map(( part, index: number ) => {
      // Create the link label
      const label: string = ( part.charAt( 0 ).toUpperCase() + part.slice( 1 ) ).split( '-' ).join( ' ' );
      // Create tge link destination
      let route: string = `/${ pathParts.slice( 0, index + 1 ).join( '/' ) }`;

      // Check if the link is the last one in the list, AND...
      // whether we have any query params, THEN...
      // Add the query params to the route of the last link
      if ( index === pathParts.length - 1 && queryParams ) {
        route += queryParams;
      }

      // Return the link object
      return {
        label,
        route
      }
    });
  
    _setLinks( links );
  }

  // EFFECTS
  useEffect(() => {
    // Check if the window href exists, THEN...
    // create the breadcrumb links.
    if ( window?.location?.href ) setLinks();
  }, [ window?.location?.href ]);

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      { _links.map(( link, index: number ) => (
        <div
          key={ `${ link.route } ${ index }` }
          className={ styles[ `${ baseClass }__link` ] }
        >
          <Link
            className={ styles[ `${ baseClass }__link-element` ] }
            href={ link.route }
            isDisabled={ index === _links.length - 1 }
            label={ link.label }
            type={ 'a' }
          />
        </div>
      ))}
    </div>
  );
}
