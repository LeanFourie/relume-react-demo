// IMPORTS
// Packages & Modules
import { useTransform } from 'framer-motion';

// Definitions
import {
  TSizeExtended,
  TSizeFriendlyNames
} from '../';
import type { MotionValue } from 'framer-motion';

// METHODS
/**
 * Transforms sentence case strings to snake-case strings
 * 
 * @param value - The initial sentence case string to transform
 * 
 * @returns A transformed snake-case string
 */
const toSnakeCase = ( value: string ): string => (
  value.toLowerCase().split( ' ' ).join( '-' )
);

/**
 * Transforms pixel values to rem values in JS
 * 
 * @param value - The pixel value to be transformed
 * 
 * @returns - A string rem value calculated from the pixel value
 */
const toRem = ( value: number ): string => (
  `${ value / 16 }rem`
);

/**
 * Converts friendly names used for sizes to industry names
 * Friendly names are used by the relume lib, e.g. small, medium, large
 * Industry names are used by the component lib, e.g. sm, md, lg
 * 
 * @param size - The industry name for the size
 * 
 * @returns - The friendly name for the size
 */
const sizeFriendlyNameToName = ( size: TSizeFriendlyNames ): TSizeExtended => {
  // Create a variable to store the size industry name
  let sizevalue: TSizeExtended;

  // Use the size friendly name to find and set the size industry name
  switch ( size ) {
    case 'tiny':
      sizevalue =  'xs';
      break;
    case 'small':
      sizevalue = 'sm';
      break;
    case 'regular':
      sizevalue = 'md';
      break;
    case 'medium':
      sizevalue = 'md';
      break;
    case 'large':
      sizevalue = 'lg';
      break;
    case 'extra-large':
      sizevalue = 'xl';
      break;
    default:
      break;
  };

  // Return the size industry name
  return sizevalue!;
}

/**
 * Converts industry names used for sizes to friendly names
 * Friendly names are used by the relume lib, e.g. small, medium, large
 * Industry names are used by the component lib, e.g. sm, md, lg
 * 
 * @param size - The friendly name for the size
 * 
 * @returns - The industry name for the size
 */
const sizeNameToFriendlyName = (size: TSizeExtended): TSizeFriendlyNames => {
  // Create a variable to store the size friendly name
  let sizevalue: TSizeFriendlyNames;

  // Use the size industry name to find and set the size friendly name
  switch (size) {
    case 'xs':
      sizevalue =  'tiny';
      break;
    case 'sm':
      sizevalue = 'small';
      break;
    case 'md':
      sizevalue = 'regular';
      break;
    case 'lg':
      sizevalue = 'large';
      break;
    case 'xl':
      sizevalue = 'extra-large';
      break;
    default:
      break;
  };

  // Return the size friendly name
  return sizevalue!;
}

/**
 * Gets the numeric value of the current year
 * 
 * @returns - The year numeric value
 */
const getCurrentYear = (): string => (
  ( new Date() ).toLocaleDateString( undefined, {
    year: 'numeric'
  })
);

/**
 * Wraps a number in a range
 * 
 * @param min - The minimum value that can be reached
 * @param max  - The maximum value that can be reached
 * @param value - The value to wrap
 * 
 * @returns - The wraped number value
 */
const wrapNumberInRange = (
  min: number,
  max: number,
  value: number
): number => {
  // Calculate the range
  const range = max - min;

  /**
   * Normalize the input value to the range by subtracting the minimum value: value - min.
   * Take the modulo of the normalized value with the range to ensure it wraps within the range: (value - min) % range.
   * Add the range to the result to handle cases where the normalized value is negative: ((value - min) % range + range).
   * Take the final result modulo the range again to ensure it stays within the range: ((value - min) % range + range) % range.
   * Add the minimum value back to the result to get the wrapped value within the specified range: ((value - min) % range + range) % range + min.
   */
  return ( ( value - min ) % range + range ) % range + min;
};

/**
 * Creates a custom parallax scroll hook for Framer Motion
 * 
 * @param value - The motion value to transform
 * @param distance - The distance the element should travel
 * 
 * @returns - A new motion value
 */
const useParallax = (
  value: MotionValue<number>,
  distance: number
): MotionValue< string > => (
  useTransform(
    value,
    [ 0, 1 ],
    [ `${ 0 }%`, `-${ distance }%` ]
  )
);

/**
 * Generates the required slides for carousels to ensure they render correctly
 * 
 * @param items - The initial slide items to be rendered in the carousel
 * 
 * @returns - The modified slide items to rendered in the carousel
 */
const generateSlidesForCarousel = < T >( items: T[] ): T[] => ([
  items[ items.length - 1 ],
  ...items,
  items[ 0 ]
]);

/**
 * Handles click events on the accordion panel
 * 
 * @param event - The click event from the accordion trigger
 * @param panelId - The panel id from the clicked accordion
 */
const handleAccordionPanelClick = (
  event: React.MouseEvent< HTMLDivElement, MouseEvent >,
  panelId: string,
  panelClickHook: ( panelId: string, contentHeight: number ) => void
): void => {
  // Get the clicked element
  const currentElement: HTMLElement = event.currentTarget;
  // Get the sibling element
  const siblingElement = currentElement.nextElementSibling as HTMLElement;
  // Get the sibling content element
  const siblingContent = siblingElement.children[ 0 ] as HTMLElement;
  // Get the height from the sibling element content
  const siblingHeight: number = siblingContent.offsetHeight;

  // Run the click event method in the accordion hook
  panelClickHook(
    panelId,
    siblingHeight
  );
}

/**
 * Generates a list of IDs for accordion items
 * 
 * @param items - The array of items the IDs should be generated from and to
 * @param identifier - The unique identifier to be used
 * 
 * @returns - A list of uniquely generated IDs
 */
const generateAccordionIds = < T >(
  items: T[],
  identifier: keyof T & string
): string[] => (
  items.map( item => item[ identifier ] as string ).filter(( value, index, self ) => (
    self.indexOf( value ) === index
  ))
);

/**
 * Formats date ites accordion to the Relume standard, e.g. `02 Jan 2024`
 * 
 * @param date - The date to be formatted
 * 
 * @returns - A string with the newly formatted date
 */
const formatDate = ( date: Date ): string => (
  date.toLocaleDateString( undefined, {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
);

/**
 * Generates random numbers within a range
 * 
 * @param min - The minimum number in the range
 * @param max - The maximum number in the range
 * 
 * @returns The randomised number
 */
const getRandomNumberInRange = (
  min: number,
  max: number
): number => {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

// EXPORTS
export {
  formatDate,
  generateAccordionIds,
  generateSlidesForCarousel,
  getCurrentYear,
  getRandomNumberInRange,
  handleAccordionPanelClick,
  sizeFriendlyNameToName,
  sizeNameToFriendlyName,
  toRem,
  toSnakeCase,
  useParallax,
  wrapNumberInRange
}