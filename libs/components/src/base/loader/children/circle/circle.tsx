'use client'

// Packages & Modules
import { toSnakeCase } from '@relume-demo/utils';
import styles from '../../loader.module.scss';
import { motion } from 'framer-motion';
import {
  useEffect,
  useState
} from 'react';

// Defitions
import type {
  ILoaderChild,
  TLoaderProps
} from '../../loader.definitions';

// Component
/**
 * LoaderCircle component renders a circular loader with motion effects.
 *
 * @param { TLoaderProps & ILoaderChild } props - LoaderCircle component props.
 * 
 * @returns { JSX.Element } - LoaderCircle component JSX.
 */
export const LoaderCircle = ( props: TLoaderProps & ILoaderChild ): JSX.Element => {
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
   * Calculate the size of the loader circle based on the provided size prop.
   *
   * @returns { number } - Size value in pixels.
   */
  const getSize = (): number => {
    // Check if `props.size` is `sm` and set the height as needed
    if ( props.size === 'sm' ) return baseHeight * 3;
    
    // Check if `props.size` is `md` and set the height as needed
    if ( props.size === 'md' ) return baseHeight * 6;
    
    // Set the default size
    return baseHeight * 9;
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
          <span
            className={ styles[ `${ baseClass }__circle` ] }
            style={{
              width: `${ _height }px`,
              height: `${ _height }px`
            }}
          >
            <motion.svg
              className={ styles[ `${ baseClass }__circle-svg` ] }
              viewBox={ '25 25 50 50' }
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              <motion.circle
                className={ styles[ `${ baseClass }__circle-line` ] }
                cx={ '50' }
                cy={ '50' }
                r={ '20' }
                strokeWidth={ '4' }
                animate={{
                  strokeDasharray: [ '1, 200', '89, 200', '89, 200' ],
                  strokeDashoffset: [ 0, -35, -124 ]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              />
            </motion.svg>
          </span>
        </div>
      }
    </>
  )
}
  