// Packages & Modules
import { wrapNumberInRange } from '@relume-demo/utils';
import styles from './hero-layout-11.module.scss';
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
import {
  ContentGroup,
  Image
} from '../../../';

// Definitions
import type { IImage } from '@relume-demo/utils';
import type { THeroLayout11Props } from './hero-layout-11.definitions';
import type { MotionValue } from 'framer-motion';

// Component
/**
 * HeroLayout11 Component
 * 
 * The `HeroLayout11` component is a page hero component useful to introduce pages.
 * The component contains a primary text content block rendered alongside a collection of images.
 * 
 * @component
 * @example
 * <HeroLayout11
 *   actions={[
 *     {
 *       accessibleLabel: '',
 *       label: 'Button',
 *       onClick: () => {},
 *       type: 'text'
 *     }
 *   ]}
 *   images={[{
 *     alt: '',
 *     src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *   }]}
 *   paragraph={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' }
 *   title={ 'Medium length hero headline goes here' }
 * />
 * 
 * @param { THeroLayout11Props } props - The properties for configuring the HeroLayout11 component.
 * 
 * @returns { JSX.Element } - The HeroLayout11 component is being returned as a JSX element.
 */
export const HeroLayout11 = ( props: THeroLayout11Props ): JSX.Element => {
  // #region - PROPS
  const {
    actions,
    images,
    imageStackDirection = 'vertical',
    paragraph,
    title
  } = props;
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'section';
  /**
   * Stores the list of images that have an index position with an odd number.
   */
  const oddImages: IImage[] = images.filter(( _, index: number) => (
    !( index % 2 )
  ));
  /**
   * Stores the list of images that have an index position with an even number.
   */
  const evenImages: IImage[] = images.filter(( _, index: number) => (
    index % 2
  ));
  /**
   * Stores the base velocity values for negative and positive transformations.
   */
  const baseVelocity: {
    positive: number;
    negative: number;
  } = {
    positive: -2,
    negative: 2
  };
  // #endregion

  // #region - REFS
  /**
   * Stores a reference for the direction factor in which the images will move
   */
  const directionFactorRef = useRef< number >( 1 );
  // #endregion

  // #region - ANIMATION HOOKS
  /**
   * Stores the vertical scroll progress.
   */
  const { scrollY } = useScroll();
  /**
   * Store motion values for the positive and negative transform speeds.
   */
  const baseSpeed: {
    positive: MotionValue< number >;
    negative: MotionValue< number >;
  } = {
    positive: useMotionValue( 0 ),
    negative: useMotionValue( 0 )
  };
  /**
   * Create the scroll velocity and store the value.
   */
  const scrollVelocity: MotionValue< number > = useVelocity( scrollY );
  /**
   * Create a smooth velocity by generating a spring value.
   */
  const smoothVelocity: MotionValue< number > = useSpring ( scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  /**
   * Transform the velocity smoothly.
   */
  const velocityFactor: MotionValue< number > = useTransform(
    smoothVelocity,
    [ 0, 1000 ],
    [ 0, 5 ],
    {
      clamp: false
    }
  );
  /**
   * Store the translate values for the positive and negative transforms
   */
  const translate: {
    positive: MotionValue< string >;
    negative: MotionValue< string >;
  } = {
    positive: useTransform( baseSpeed.positive, value => (
      `${ wrapNumberInRange( 0, -50.3, value ) }%`
    )),
    negative: useTransform( baseSpeed.negative, value => (
      `${ wrapNumberInRange( 0, -50.3, value ) }%`
    ))
  };
  /**
   * Update the translate values using the animation frame.
   */
  useAnimationFrame(( _, delta ) => {
    // Create a number value the positive transform should move to
    let moveByPos: number = directionFactorRef.current * baseVelocity.positive * ( delta / 1000 );
    // Create a number value the negative transform should move to
    let moveByNeg: number = directionFactorRef.current * baseVelocity.negative * ( delta / 1000 );

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
    // Update the negative translate value
    baseSpeed.negative.set( baseSpeed.negative.get() + moveByNeg );
  });
  // #endregion

  // #region - METHODS
  /**
   * Generate the image components to render.
   * 
   * @param { IImage } image - The image properties.
   * @param { number } idx - The image index position in the images group.
   * 
   * @returns { JSX.Element } - The image JSX Element.
   */
  const generateImages = (
    image: IImage,
    idx: number
  ): JSX.Element => (
    <div
      key={ `${ image.src } ${ idx }` }
      className={ styles[ `${ baseClass }__image` ] }
    >
      <div className={ styles[ `${ baseClass }__image-inner` ] }>
        <Image
          { ...image }
          className={ styles[ `${ baseClass }__image-element` ] }
          fit={ 'cover' }
        />
      </div>
    </div>
  );
  /**
   * Generate the image groups to render.
   * 
   * @param { 'odd' | 'even' } type - The images array it should map through to generate the image elements.
   * 
   * @returns { JSX.Element } - The image group JSX Element
   */
  const generateImageGroup = ( type: 'odd' | 'even' ): JSX.Element => (
    <motion.div
      style={{
        translateX: imageStackDirection === 'horizontal'
                      ? type === 'even' ? translate.negative : translate.positive
                      : undefined,
        translateY: imageStackDirection === 'vertical'
                      ? type === 'even' ? translate.negative : translate.positive
                      : undefined
      }}
      className={`
        ${ styles[ `${ baseClass }__images-group` ] }
        ${ styles[ `${ baseClass }__images-group--is-${ type }` ] }
      `}
    >
      { [ ...Array( type === 'even' ? 2 : 3 ) ].map(( _, index: number ) => (
        <div
          key={ `group odd inner ${ index }` }
          className={ styles[ `${ baseClass }__images-group-inner` ] }
        >
          { ( type === 'even' ? evenImages : oddImages ).map(( image, idx: number ) => generateImages( image, idx ) )}
        </div>
      ))}
    </motion.div>
  );
  // #endregion

  // #region - HTML
  return (
    <section className={`
      ${ styles[ baseClass ] }
      ${ styles[ `${ baseClass }--stack-${ imageStackDirection }` ] }
    `}>
      {/* Content */}
      <div className={ styles[ `${ baseClass }__content` ] }>
        <ContentGroup
          actions={ actions }
          paragraph={ paragraph }
          title={ title }
          type={ 'actions' }
        />
      </div>
      {/* ./Content */}

      {/* Images */}
      <div className={ styles[ `${ baseClass }__images` ] }>
        {/* Odd Images */}
        { generateImageGroup( 'odd' ) }
        {/* ./Odd Images */}
        {/* Even Images */}
        { generateImageGroup( 'even' ) }
        {/* ./Even Images */}
      </div>
      {/* ./Images */}
    </section>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - Header / 76
 * - Header / 77
 * 
 * Reference Framer Motion scroll animations for reference to image transforms
 * https://www.framer.com/motion/scroll-animations
 * https://www.framer.com/motion/scroll-animations/##scroll-velocity
 */
