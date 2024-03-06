'use client'

// Packages & Modules
import styles from './icon.module.scss';
import {
  useEffect,
  useRef
} from 'react'

// Definitions
import type { TIconProps } from './icon.definitions';

// Component
/**
 * Icon Component
 * 
 * Displays an icon based on the specified type. Supports both SVG and text icons.
 *
 * @component
 * @example
 * <Icon
 *   name={ 'home' }
 *   type={ 'text' }
 * />
 * 
 * @param { TIconProps } props - Icon component properties.
 * 
 * @returns { JSX.Element } - Rendered Icon component.
 */
export const Icon = ( props: TIconProps ): JSX.Element => {
  // PROPS
  const {
    className,
    type
  } = props;
  
  // VARIABLES
  /**
  * Sets the base class name of the component
  */
  const baseClass: string = 'icon';
  
  // REFS
  /**
  * Stores a reference to the img container
  */
  const containerRef = useRef< HTMLSpanElement >( null );
  /**
  * Stores a reference to the img element
  */
  const imageRef = useRef< HTMLImageElement >( null );
  
  // METHODS
  const imageToSVGConversion = async (): Promise<void> => {
    // Check if the imageRef is not available, THEN...
    // end the function
    if ( !imageRef.current ) return;
  
    // Get the image component from the image ref
    const img: HTMLImageElement = imageRef.current;
    // Get the image URL from the image component
    const imgURL: string | null = img.getAttribute( 'src' );
  
    // Check if the imgURL is not available, THEN...
    // end the function
    if ( !imgURL ) return;

    // Try to load the SVG...
    try {
      // Get the response from the fetch API
      const response = await fetch( imgURL );
      // Get the XML from the response
      const xml = await response.text();
  
      // Create a new DOM Parser to interperate the xml
      const dom = new DOMParser();
      // Get the SVG HTML element from the XML using the DOM Parser
      const svg = dom.parseFromString( xml, 'image/svg+xml' );

      // Check if the containerRef is available, THEN...
      if ( containerRef.current ) {
        // Clear the containerRef content AND...
        containerRef.current.innerHTML = '';
        // append the SVG HTML element to the containerRef
        containerRef.current.appendChild(svg.documentElement);
      }

      // Get the parent element of the image
      const parent = img.parentElement as HTMLElement;

      // Check if the parent element exists, THEN...
      if ( parent ) {
        // Get the SVG element
        const svgElement = parent.querySelector( 'svg' );
        // Check if the SVG element exists, THEN...
        // remove the `xmlns` attribute
        if (svgElement) svgElement.removeAttribute( 'xmlns:a' );
      }
    }
    // Catch any errors
    catch ( error ) {
      // Log the error
      console.error( 'Error fetching or parsing SVG:', error );
    }
  }

  // EFFECTS
  useEffect(() => {
    // Check if `type` is of `'svg'` and run the inline image to svg conversion
    if ( type === 'svg' ) imageToSVGConversion();
  }, []);
  
  // HTML
  return (
    <span className={`
      ${ styles[ baseClass ] }
      ${ styles[ `icon--type-${ type }` ] }
      ${ className ? className : '' }
    `}>
      {/* SVG Icon */}
      {( type === 'svg' ) &&
        <span
          ref={ containerRef }
          className={`
            ${ styles[ `${ baseClass }__element` ] }
            ${ styles[ `${ baseClass }__element--svg` ] }
          `}
        >
          <img
            ref={ imageRef }
            alt={ '' }
            src={ props.uri }
          />
        </span>
      }
      {/* ./SVG Icon */}

      {/* Text Icon */}
      {( type === 'text' ) &&
        <span className={`
          ${ styles[ `${ baseClass }__element` ] }
          ${ styles[ `${ baseClass }__element--text` ] }
          material-symbols-rounded
        `}>
          { props.name }
        </span>
      }
      {/* ./Text Icon */}
    </span>
  );
}
  