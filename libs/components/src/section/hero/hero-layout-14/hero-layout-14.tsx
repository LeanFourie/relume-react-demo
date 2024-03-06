// Packages & Modules
import { WindowContext } from '@relume-demo/providers';
import { useParallax } from '@relume-demo/utils';
import styles from './hero-layout-14.module.scss';
import {
  motion,
  useScroll
} from 'framer-motion';
import {
  useContext,
  useRef
} from 'react';

// Components
import {
  ContentGroup,
  Image
} from '../../../';

// Definitions
import type { IImage } from '@relume-demo/utils';
import type { THeroLayout14Props } from './hero-layout-14.definitions';
import type { MotionValue } from 'framer-motion';

// Component
/**
 * HeroLayout14 Component
 * 
 * The `HeroLayout14` component is a page hero component useful to introduce pages.
 * The component contains a primary text content block rendered alongside a collection of images.
 * 
 * @component
 * @example
 * <HeroLayout14
 *   actions={[
 *     {
 *       accessibleLabel: '',
 *       label: 'Button',
 *       onClick: () => {},
 *       type: 'text'
 *     }
 *   ]}
 *   images={[
 *     {
 *       alt: '',
 *       src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *     },
 *     {
 *       alt: '',
 *       src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *     },
 *     {
 *       alt: '',
 *       src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *     },
 *     {
 *       alt: '',
 *       src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *     },
 *     {
 *       alt: '',
 *       src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *     },
 *     {
 *       alt: '',
 *       src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *     }
 *   ]}
 *   paragraph={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' }
 *   title={ 'Medium length hero headline goes here' }
 * />
 * 
 * @param { THeroLayout14Props } props - The properties for configuring the HeroLayout14 component.
 * 
 * @returns { JSX.Element } - The HeroLayout14 component is being returned as a JSX element.
 */
export const HeroLayout14 = ( props: THeroLayout14Props ): JSX.Element => {
  // #region - PROPS
  const {
    actions,
    images,
    paragraph,
    title
  } = props;
  // #endregion

  // #region - PROVIDERS
  const {
    breakpoints,
    windowSize
  } = useContext( WindowContext )!;
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'section';
  // #endregion

  // #region - REFS
  /**
   * Stores a reference to the container HTML Element.
   */
  const containerRef = useRef< HTMLElement >( null );
  // #endregion

  // #region - ANIMATION HOOKS
  /**
   * Stores the vertical scroll progress relative to the container HTML element.
   */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [
      ( windowSize >= breakpoints.sm ) ? 'start start' : '-60% -60%',
      ( windowSize >= breakpoints.sm ) ? '150% 150%' : '180% 180%'
    ]
  });
  /**
   * Stores a transform motion value based on the `scrollYProgress`.
   */
  const translateY: {
    top: MotionValue< string >;
    bottom: MotionValue< string >;
  } = {
    top: useParallax( scrollYProgress, 85 ),
    bottom: useParallax( scrollYProgress, 60 )
  };
  // #endregion

  // #region - METHODS
  /**
   * Generates the images to render.
   * 
   * @param { 'top' | 'bottom' } stackPosition - Indicates whether the images should be stacked at the top or the bottom.
   * 
   * @returns { JSX.Element } - The images to be rendered.
   */
  const generateImages = ( stackPosition: 'top' | 'bottom' ): JSX.Element => {
    // Filter the images by stack position
    const filteredImages: IImage[] = stackPosition === 'top'
      ? images.filter(( _, index ) => index <= 3 )
      : images.filter(( _, index ) => index > 3 )

    // Return the images to render
    return (
      <motion.div
        className={ styles[ `${ baseClass }__images-list` ] }
        style={{ translateY: translateY[ stackPosition ] }}
      >
        { filteredImages.map(( image, index ) => (
          <div
            key={ `${ image.src } ${ index }` }
            className={`
              ${ styles[ `${ baseClass }__image` ] }
              ${ styles[ `${ baseClass }__image--position-${ index + ( stackPosition === 'top' ? 1 : 5 ) }` ] }
            `}
          >
            <div className={ styles[ `${ baseClass }__image-inner` ] }>
              <Image
                { ...image }
                className={ styles[ `${ baseClass }__image-element` ] }
                fit={ 'cover' }
              />
            </div>
          </div>
        ))}
      </motion.div>
    )
  }
  // #endregion

  // #region - HTML
  return (
    <section
      ref={ containerRef }
      className={ styles[ baseClass ] }
    >
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Images */}
        <div className={`
          ${ styles[ `${ baseClass }__images` ] }
          ${ styles[ `${ baseClass }__images--stack-top` ] }
        `}>
          { generateImages( 'top' ) }
        </div>
        <div className={`
          ${ styles[ `${ baseClass }__images` ] }
          ${ styles[ `${ baseClass }__images--stack-bottom` ] }
        `}>
          { generateImages( 'bottom' ) }
        </div>
        {/* ./Images */}

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
      </div>
    </section>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - Header / 80
 */
