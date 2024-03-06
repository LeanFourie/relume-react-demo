// Packages & Modules
import styles from './image.module.scss';

// Definitions
import type { TImageProps } from './image.definitions';

// Component
/**
 * Image Component
 * 
 * Displays an image with optional customization for fitting within its parent container.
 *
 * @component
 * @example
 * <Image
 *   alt={ 'An ocean view of the sun setting' }
 *   src={ 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
 * />
 * 
 * @param { TImageProps } props - Image component properties.
 * 
 * @returns { JSX.Element } - Rendered Image component.
 */
export const Image = ( props: TImageProps ): JSX.Element => {
  // PROPS
  const {
    alt,
    className,
    fit = 'contain',
    src
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'image';

  // HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ styles[ `${ baseClass }--fit-${ fit }` ] }
      ${ className ? className : '' }
    `}>
      <img
        alt={ alt }
        className={ styles[ `${ baseClass }__element` ] }
        src={ src }
      />
    </div>
  )
}
