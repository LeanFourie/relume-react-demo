'use client'

// Packages & Modules
import { toSnakeCase } from '@relume-demo/utils'
import styles from '../../loader.module.scss'
import {
  useEffect,
  useState
} from 'react'

// Defitions
import type {
  ILoaderChild,
  TLoaderProps
} from '../../loader.definitions'

// Component
/**
 * LoaderDots component renders a loader with three dots.
 *
 * @param { TLoaderProps & ILoaderChild } props - LoaderDots component props.
 * 
 * @returns { JSX.Element } - LoaderDots component JSX.
 */
export const LoaderDots = ( props: TLoaderProps & ILoaderChild ): JSX.Element => {
  // PROPS
  const {
    className,
    baseClass,
    baseHeight,
    color,
    shade,
    size,
    type
  } = props;
  
  // STATES
  const [
    _height,
    _setHeight
  ] = useState< number >();
  
  // METHODS
  /**
   * Calculate the size of the loader dots based on the provided size prop.
   *
   * @returns { number } - Size value in pixels.
   */
  const getSize = (): number => {
    // Check if `props.size` is `sm` and set the height as needed
    if ( props.size === 'sm' ) return baseHeight * 1;
    
    // Check if `props.size` is `md` and set the height as needed
    if ( props.size === 'md' ) return baseHeight * 2;
    
    // Set the default size
    return baseHeight * 3;
  }
  
  // EFFECTS
  useEffect(() => {
    _setHeight( getSize() );
  }, [ props.size ])
  
  // HTML
  return (
    <>
      {( _height ) &&
        <div className={`
          ${ styles[ baseClass ] }
          ${ styles[ `${ baseClass }--color-${ toSnakeCase( color! ) }` ] }
          ${ styles[ `${ baseClass }--shade-${ shade }` ] }
          ${ styles[ `${ baseClass }--size-${ size }` ] }
          ${ styles[ `${ baseClass }--type-${ type }` ] }
          ${ className ? className : '' }
        `}>
          { [ ...Array( 3 ) ].map(( _, index: number ) => (
            <span
              key={ index }
              className={ styles[ `${ baseClass }__dot` ] }
              style={{
                width: `${ baseHeight }px`,
                height: `${ baseHeight }px`
              }}
            ></span>
          ))}
        </div>
      }
    </>
  )
}
    