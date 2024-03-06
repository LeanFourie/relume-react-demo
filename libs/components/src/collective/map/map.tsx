// Packages & Modules
import styles from './map.module.scss';
import mapboxgl from 'mapbox-gl';
import {
  useEffect,
  useRef
} from 'react';

// Definitions
import type { TMapProps } from './map.definitions';

// Component
/**
 * Map Component
 * 
 * The `Map` component renders a map using Mapbox GL JS.
 * 
 * @component
 * @example
 * <Map
 *   lat={ -25.752309 }
 *   long={ 28.191281 }
 * />
 * 
 * @param { TMapProps } props - The properties for configuring the Map component.
 * 
 * @returns { JSX.Element } - The Map component is being returned as a JSX element.
 */
export const Map = ( props: TMapProps ): JSX.Element => {
  // PROPS
  const {
    className,
    lat,
    long
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'map';

  // REFS
  /**
   * Stores a reference to the map container
   */
  const mapRef = useRef< HTMLDivElement >( null );

  // EFFECTS
  useEffect(() => {
    // Get the map API token
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

    // Check if the map container element is undefined, THEN...
    // end the function
    if ( !mapRef.current ) return;

    // Create a variable to store the map
    let map: mapboxgl.Map;

    // Wait half a second so that the HTML elements can complete loading
    setTimeout(() => {
      // Create the map
      map = new mapboxgl.Map({
        container: mapRef.current!,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [
          long,
          lat
        ],
        zoom: 12
      });
    }, 500 );

    // Run the cleanup phase
    return () => {
      // Remove the map from the DOM
      map?.remove();
    }
  }, [
    mapRef.current,
    lat,
    long
  ]);

  // HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ className ? className : '' }
    `}>
      <div
        ref={ mapRef }
        className={ styles[ `${ baseClass }__element` ] }
      />
    </div>
  );
}
