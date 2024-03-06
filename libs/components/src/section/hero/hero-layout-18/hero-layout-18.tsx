// Packages & Modules
import styles from './hero-layout-18.module.scss';
import {
  AnimatePresence,
  motion
} from 'framer-motion';
import {
  useEffect,
  useState
} from 'react';

// Components
import {
  Button,
  Image,
  Text
} from '../../../';

// Definitions
import type { THeroLayout18Props } from './hero-layout-18.definitions';
import type { Variants } from 'framer-motion';

// Component
/**
 * HeroLayout18 Component
 * 
 * The `HeroLayout18` component is a page hero component useful to introduce pages.
 * The component contains primary text content blocks render as tabs on a background image.
 * 
 * @component
 * @example
 * <HeroLayout18
 *   slides={[{
 *     tagline: `'tab',
 *     title: 'Medium length hero headline goes here',
 *     paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
 *     image: {
 *       alt: '',
 *       src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *     },
 *     actions: [
 *       {
 *         accessibleLabel: '',
 *         label: 'Button',
 *         onClick: () => {},
 *         type: 'text'
 *       }
 *     ],
 *   }]}
 * />
 * 
 * @param { THeroLayout18Props } props - The properties for configuring the HeroLayout18 component.
 * 
 * @returns { JSX.Element } - The HeroLayout18 component is being returned as a JSX element.
 */
export const HeroLayout18 = ( props: THeroLayout18Props ): JSX.Element => {
  // #region - PROPS
  const { slides } = props;
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'section';
  /**
   * Stores the default duration a slide is active for in milliseconds.
   */
  const interval: number = 5000;
  // #endregion

  // #region - STATES
  /**
   * Stores the current active slide by its index position.
   */
  const [
    _currentSlide,
    _setCurrentSlide
  ] = useState< number >( 0 );
  /**
   * Stores a boolean flag on whether the slides are playing or not.
   */
  const [
    _isPlaying,
    _setIsPlaying
  ] = useState< boolean >( false );
  // #endregion

  // #region - METHODS
  /**
   * Sets a new active slide.
   * 
   * @param { number } slide - The index position of the slide.
   * 
   * @returns { void } - Returns nothing.
   */
  const goToSlide = ( slide: number ): void => {
    // Store the new slide index position
    _setCurrentSlide( slide );
  }
  /**
   * Checks whether a slide is active or not.
   * 
   * @param { number } index - The index position of the slide.
   * 
   * @returns { boolean } - A boolean prop.
   */
  const checkIfSlideIsActive = ( index: number ): boolean => {
    // Check if the slides are playing AND...
    // if the slide index param matches the current active slide index, THEN...
    // return the result 
    return _isPlaying && _currentSlide === index;
  }
  /**
   * Generates the animation variants for the animated presence.
   * 
   * @param {{ enter: number; exit: number; }} distance - The in and out transformation distance.
   * 
   * @returns { Variants } - The animation variants.
   */
  const generateAnimationVariants = ( distance: {
    enter: number;
    exit: number;
  }): Variants => {
    return {
      enter: {
        display: 'none',
        opacity: 0,
        translateY: `${ distance.enter }rem`
      },
      center: {
        display: 'grid',
        opacity: 1,
        translateY: '0rem',
        transition: {
          type: 'spring',
          stiffness: 260,
          damping: 24,
          delay: .5
        }
      },
      exit: {
        display: 'grid',
        opacity: 0,
        translateY: `-${ distance.exit }rem`
      }
    };
  }
  // #endregion

  // #region - EFFECTS
  useEffect(() => {
    // Wait half a second, THEN...
    // start playing the slides
    setTimeout( () => _setIsPlaying( true ), 500 );
  }, []);

  useEffect(() => {
    // Check if the slides are NOT playing, THEN...
    // end the function
    if ( !_isPlaying ) return;

    // Create a new NodeJS interval timer
    const intervalId: NodeJS.Timer = setInterval(() => {
      // Create the new active slide index
      const newSlide: number = _currentSlide !== slides.length - 1
                                ? _currentSlide + 1
                                : 0;

      // Update the new active slide index
      _setCurrentSlide( newSlide );
    }, interval );

    // Run the cleanup
    return () => {
      // Clear the interval timer
      clearInterval( intervalId );
    }
  }, [
    _currentSlide,
    _isPlaying
  ]);
  // #endregion

  // #region - HTML
  return (
    <section className={ styles[ baseClass ] }>
      {/* Image */}
      <div className={ styles[ `${ baseClass }__image` ] }>
        <Image
          { ...slides[ _currentSlide ].image }
          className={ styles[ `${ baseClass }__image-element` ] }
          fit={ 'cover' }
        />
      </div>
      {/* ./Image */}

      {/* Content */}
      <div className={ styles[ `${ baseClass }__content` ] }>
        {/* Text */}
        <div className={ styles[ `${ baseClass }__text` ] }>
          {/* Title */}
          <AnimatePresence>
            <motion.div
              key={ slides[ _currentSlide ].title }
              className={ styles[ `${ baseClass }__title` ] }
              // Animations
              variants={
                generateAnimationVariants({
                  enter: 2,
                  exit: 6
                })
              }
              initial={ 'enter' }
              animate={ 'center' }
              exit={ 'exit' }
            >
              <Text
                className={ styles[ `${ baseClass }__title-element` ] }
                fontWeight={ 'bold' }
                variant={ 'heading extra-large' }
              >
                { slides[ _currentSlide ].title }
              </Text>
            </motion.div>
          </AnimatePresence>
          {/* ./Title */}
          {/* Paragraph */}
          <AnimatePresence>
            <motion.div
              key={ slides[ _currentSlide ].title }
              className={ styles[ `${ baseClass }__paragraph` ] }
              // Animations
              variants={
                generateAnimationVariants({
                  enter: 4,
                  exit: 4
                })
              }
              initial={ 'enter' }
              animate={ 'center' }
              exit={ 'exit' }
            >
              <Text
                className={ styles[ `${ baseClass }__paragraph-element` ] }
                variant={ 'text medium' }
              >
                { slides[ _currentSlide ].paragraph }
              </Text>
            </motion.div>
          </AnimatePresence>
          {/* ./Paragraph */}
          {/* Actions */}
          <AnimatePresence>
            <motion.div
              key={ slides[ _currentSlide ].title }
              className={ styles[ `${ baseClass }__actions` ] }
              // Animations
              variants={
                generateAnimationVariants({
                  enter: 6,
                  exit: 2
                })
              }
              initial={ 'enter' }
              animate={ 'center' }
              exit={ 'exit' }
            >
              { slides[ _currentSlide ].actions.map(( action, index: number ) => (
                <div
                  key={ `${ action.accessibleLabel } ${ index }` }
                  className={ styles[ `${ baseClass }__actions-item` ] }
                >
                  <Button { ...action } />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          {/* ./Actions */}
        </div>
        {/* ./Text */}
        {/* Tabs */}
        <div className={ styles[ `${ baseClass }__tabs` ] }>
          { slides.map(( slide, index: number ) => (
            <button
              onClick={ () => goToSlide( index ) }
              key={ `${ slide.tagline } ${ index }` }
              className={`
                ${ styles[ `${ baseClass }__tab` ] }
                ${ checkIfSlideIsActive( index ) ? styles[ `${ baseClass }__tab--is-active` ] : '' }
              `}
            >
              <div className={ styles[ `${ baseClass }__tab-tagline` ] }>
                <Text
                  className={ styles[ `${ baseClass }__tab-tagline-element` ] }
                  renderAs={ 'span' }
                  variant={ 'text regular' }
                >
                  { slide.tagline }
                </Text>
              </div>
              <span className={ styles[ `${ baseClass }__tab-progress` ] }>
                <motion.span
                  className={ styles[ `${ baseClass }__tab-progress-bar` ] }
                  animate={{
                    display: _isPlaying ? 'block' : 'none',
                    scaleX: checkIfSlideIsActive( index ) ? 1 : 0,
                    transformOrigin: checkIfSlideIsActive( index ) ? 'bottom left' : 'bottom right'
                  }}
                  transition={{
                    duration: checkIfSlideIsActive( index ) ? ( interval / 1000 ) : .4
                  }}
                />
              </span>
            </button>
          ))}
        </div>
        {/* ./Tabs */}
      </div>
      {/* ./Content */}
    </section>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - Header / 103
 */
