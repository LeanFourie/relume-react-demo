// Packages & Modules
import { wrapNumberInRange } from '@relume-demo/utils';
import styles from './value-added-bar-layout-6.module.scss';
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
import type { TValueAddedBarLayout6Props } from './value-added-bar-layout-6.definitions';
import type { MotionValue } from 'framer-motion';

// Component
/**
 * ValueAddedBarLayout6 Component
 * 
 * The `ValueAddedBarLayout6` component is an informational component placed at the top of the screen.
 * It consists of a text element horizontally scrolling across the screen.
 * 
 * @component
 * @example
 * <ValueAddedBarLayout6 text={ 'Relume Demo' } />
 * 
 * @param { TValueAddedBarLayout6Props } props - The properties for configuring the ValueAddedBarLayout6 component.
 * 
 * @returns { JSX.Element } - The ValueAddedBarLayout6 component is being returned as a JSX element.
 */
export const ValueAddedBarLayout6 = ( props: TValueAddedBarLayout6Props ): JSX.Element => {
  // PROPS
  const {
    autoScroll = true,
    scrollDirection = 'default',
    text,
    textRepeat = 5
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'vab';
  /**
   * Stores the base velocity values for the transformations
   */
  const baseVelocity: number = scrollDirection === 'reverse' ? 1 : -1;

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
  const baseSpeed: MotionValue< number > = useMotionValue( 0 );
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
  const velocityFactor: MotionValue< number > = useTransform( smoothVelocity, [ 0, 100 ], [ 0, 1 ], {
    clamp: false
  });
  /**
   * Store the translate values for the positive and negative transforms
   */
  const translateX: MotionValue< string > = useTransform( baseSpeed, value => (
    `${ wrapNumberInRange(
      ( scrollDirection === 'reverse' ? -50 : 0 ),
      ( scrollDirection === 'reverse' ? 0 : -50 ),
      value
    ) }%`
  ));
  /**
   * Update the translate values using the animation frame
   */
  useAnimationFrame(( _, delta ) => {
    if ( !autoScroll && scrollVelocity.get() === 0 ) return;

    // Create a number value the positive transform should move to
    let moveBy: number = directionFactorRef.current * baseVelocity * ( delta / 300 );

    // Increment the positive translate value
    moveBy += directionFactorRef.current * moveBy * Math.abs(velocityFactor.get());

    // Update the positive translate value
    baseSpeed.set( baseSpeed.get() + moveBy );
  });

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Inner */}
      <motion.div
        className={ styles[ `${ baseClass }__inner` ] }
        style={{ translateX }}
      >
        { [ ...Array( 2 ) ].map(( _, index ) => (
          <div
            key={ index }
            className={ styles[ `${ baseClass }__messages` ] }
          >
            { [ ...Array( textRepeat ) ].map(( _, idx: number ) => (
              <div
                key={ idx }
                className={ styles[ `${ baseClass }__message` ] }
              >
                <Text
                  className={ styles[ `${ baseClass }__message-element` ] }
                  fontWeight={ 'bold' }
                  variant={ 'heading tiny' }
                >
                  { text }
                </Text>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
      {/* ./Inner */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Banners / 11
 * - Banners / 12
 * - Banners / 14
 */
