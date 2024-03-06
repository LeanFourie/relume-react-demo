// Components
import {
  LoaderCircle,
  LoaderDots
} from './children';

// Definitions
import type { TLoaderProps } from './loader.definitions';

// Component
/**
 * Loader component that renders different types of loaders based on the specified type prop.
 *
 * @component
 * @example
 * <Loader type={ 'circle' } />
 *
 * @param { TLoaderProps } props - Loader component props, including type, color, size, and shade.
 * 
 * @returns { JSX.Element } - Loader component JSX.
 */
export const Loader = ( props: TLoaderProps ): JSX.Element => {
  // PROPS
  const {
    className,
    color = 'primary',
    shade = 'dark',
    size = 'md',
    type
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'loader';
  /**
   * Base height used as a reference for different loader sizes.
   */
  const baseHeight: number = 4;

  // HTML
  return (
    <>
      {/* Dots */}
      {( props.type === 'dots' ) && (
        <LoaderDots
          baseClass={ baseClass }
          baseHeight={ baseHeight }
          className={ className }
          color={ color }
          shade={ shade }
          size={ size }
          type={ type }
        />
      )}
      {/* ./Dots */}

      {/* Circle */}
      {( props.type === 'circle' ) && (
        <LoaderCircle
          baseClass={ baseClass }
          baseHeight={ baseHeight }
          className={ className }
          color={ color }
          shade={ shade }
          size={ size }
          type={ type }
        />
      )}
      {/* ./Circle */}
    </>
  );
}
