// TYPES
/**
* Sets the required props for the component.
*/
type TMapProps = IMap;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IMap {
  // Required
  /**
   * Sets the latitude of the map pin location.
   */
  lat: number;
  /**
   * Sets the longitude of the map pin location.
   */
  long: number;

  // Optional
  /**
  * Adds optional classes to the component.
  */
  className?: string;
}

// EXPORTS
export type { TMapProps };
