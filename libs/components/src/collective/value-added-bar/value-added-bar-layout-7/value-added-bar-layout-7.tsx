// Packages & Modules
import { wrapNumberInRange } from '@relume-demo/utils';
import styles from './value-added-bar-layout-7.module.scss';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity
} from 'framer-motion';
import { useRef } from 'react';

// Components
import { Text } from '../../../';

// Definitions
import type { TValueAddedBarLayout7Props } from './value-added-bar-layout-7.definitions';
import type { MotionValue } from 'framer-motion';

// Component
/**
 * ValueAddedBarLayout7 Component
 * 
 * The `ValueAddedBarLayout7` component is an informational component used as a decorative section.
 * It consists of a text element horizontally scrolling across the screen.
 * 
 * @component
 * @example
 * <ValueAddedBarLayout7 text={ 'Medium length banner heading goes here' } />
 * 
 * @param { TValueAddedBarLayout7Props } props - The properties for configuring the ValueAddedBarLayout7 component.
 * 
 * @returns { JSX.Element } - The ValueAddedBarLayout7 component is being returned as a JSX element.
 */
export const ValueAddedBarLayout7 = ( props: TValueAddedBarLayout7Props ): JSX.Element => {
  // PROPS
  const { text } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'vab';
  /**
   * Stores the base velocity values for negative and positive transformations
   */
  const baseVelocity: {
    positive: number;
    negative: number;
  } = {
    positive: -1,
    negative: 1
  }

  // REFS
  /**
   * Stores a reference for the direction factor in which the images will move
   */
  const directionFactorRef = useRef< number >( 1 );

  // ANIMATION HOOKS
  /**
   * Stores the vertical scroll progress
   */
  const { scrollY } = useScroll();
  /**
   * Store motion values for the positive and negative transsform speeds
   */
  const baseSpeed: {
    positive: MotionValue< number >;
    negative: MotionValue< number >;
  } = {
    positive: useMotionValue( 0 ),
    negative: useMotionValue( 0 )
  }
  /**
   * Create the scroll velocity and store the value
   */
  const scrollVelocity: MotionValue< number > = useVelocity( scrollY );
  /**
   * Create a smooth velocity by generating a spring value
   */
  const smoothVelocity: MotionValue< number > = useSpring ( scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  /**
   * Transform the velocity smoothly
   */
  const velocityFactor: MotionValue< number > = useTransform( smoothVelocity, [ 0, 300 ], [ 0, 5 ], {
    clamp: false
  });
  /**
   * Store the translate values for the positive and negative transforms
   */
  const translateX: {
    positive: MotionValue< string >;
    negative: MotionValue< string >;
  } = {
    positive: useTransform( baseSpeed.positive, value => `${ wrapNumberInRange( 0, -50, value ) }%` ),
    negative: useTransform( baseSpeed.negative, value => `${ wrapNumberInRange( 0, -50, value ) }%` )
  }
  /**
   * Update the translate values using the animation frame
   */
  useAnimationFrame(( _, delta ) => {
    // Create a number value the positive transform should move to
    let moveByPos: number = directionFactorRef.current * baseVelocity.positive * ( delta / 700 );
    // Create a number value the negative transform should move to
    let moveByNeg: number = directionFactorRef.current * baseVelocity.negative * ( delta / 700 );

    // Check if the velocity value is less than 0, THEN...
    if (velocityFactor.get() < 0) {
      // Invert the scroll direction by updating the `directionFactorRef`
      directionFactorRef.current = -1;
    }
    // ELSE, check if the velocity value bigger than 0, THEN...
    else if (velocityFactor.get() > 0) {
      // Reset the scroll direction by updating the `directionFactorRef`
      directionFactorRef.current = 1;
    }

    // Increment the positive translate value
    moveByPos += directionFactorRef.current * moveByPos * velocityFactor.get();
    // Increment the negative translate value
    moveByNeg += directionFactorRef.current * moveByNeg * velocityFactor.get();

    // Update the positive translate value
    baseSpeed.positive.set( baseSpeed.positive.get() + moveByPos );
    // Update the begative translate value
    baseSpeed.negative.set( baseSpeed.negative.get() + moveByNeg );
  });

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Inner */}
      <div
        className={ styles[ `${ baseClass }__inner` ] }
      >
        { [ ...Array( 2 ) ].map(( _, index ) => (
          <motion.div
            key={ index }
            className={ styles[ `${ baseClass }__messages` ] }
            style={{ translateX: index === 0 ? translateX.negative : translateX.positive }}
          >
            { [ ...Array( 2 ) ].map(( _, idx: number ) => (
              <div
                key={ idx }
                className={ styles[ `${ baseClass }__message` ] }
              >
                <Text
                  className={ styles[ `${ baseClass }__message-element` ] }
                  fontWeight={ 'bold' }
                  variant={ 'heading extra-large' }
                >
                  { text }
                </Text>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      {/* ./Inner */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Banners / 13
 */
