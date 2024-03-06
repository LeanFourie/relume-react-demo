// Packages & Modules
import styles from './carousel.module.scss';
import {
  motion,
  useDragControls,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform
} from 'framer-motion'
import {
  useEffect,
  useRef,
  useState
} from 'react';

// Components
import { Button } from '../../';

// Definitions
import type { TCarouselProps } from './carousel.definitions';
import type { PanInfo } from 'framer-motion';
import type { PropsWithChildren } from 'react';

// Component
/**
 * Carousel Component
 * 
 * Represents a customizable carousel component.
 *
 * @component
 * @example
 * <Carousel slidesCount={ 3 }>
 *   <div>Slide 1</div>
 *   <div>Slide 2</div>
 *   <div>Slide 3</div>
 * </Carousel>
 *
 * @param { PropsWithChildren< TCarouselProps > } props - The properties for configuring the Carousel component.
 * 
 * @returns { JSX.Element } - The rendered component.
 */
export const Carousel = ( props: PropsWithChildren< TCarouselProps > ): JSX.Element => {
  // PROPS
  const {
    children,
    classNames,
    hideArrows = false,
    hideControls = false,
    hideDots = false,
    infiniteSlides = true,
    perView = 1,
    slidesCount
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'carousel';

  // REFS
  /**
   * Stores a reference to the slider track element
   */
  const sliderTrackRef = useRef< HTMLDivElement >( null );

  // STATES
  /**
   * Stores the current slide index number
   */
  const [
    _currentSlide,
    _setCurrentSlide
  ] = useState< number >( infiniteSlides ? 1 : 0 );
  /**
   * Stores the previous active slide index number
   */
  const [
    _previousSlide,
    _setPreviousSlide
  ] = useState< number >( infiniteSlides ? 1 : 0 );
  /**
   * Stores a boolean flag checking wheter the carousel is sliding or not
   */
  const [
    _isSliding,
    _setIsSliding
  ] = useState< boolean >( false );

  // METHODS
  /**
   * Updates the current slide index and transitions to the newly set slide.
   *
   * @param { number } slide - The index position of the newly chosen slide.
   */
  const goToSlide = ( slide: number ): void => {
    // Check if the carousel is sliding, THEN...
    // end the function
    if ( _isSliding ) return;

    // Update the previous slide to the value of the current slide
    _setPreviousSlide( _currentSlide );

    // Update the current slide to the new slide index
    _setCurrentSlide( slide );
  }

  /**
   * Moves the carousel one slide to the left or right.
   *
   * @param { number } direction - The direction in which the slide should move (-1 for left, 1 for right).
   */
  const paginate = ( direction: -1 | 1 ): void => {
    // Check if the carousel is sliding, THEN...
    // end the function
    if ( _isSliding ) return;

    // Get the last slide index number
    const slidesCountMinusOne: number = slidesCount - 1;

    // Store a new slide index number
    const newSlide: number = 
      infiniteSlides ? (
        // If slide is -1 and current slide is 0...
        // THEN set newSlide to the slides count, ELSE...
        ( direction === -1 && _currentSlide === 0 ) ? slidesCountMinusOne :
        // If slide is 1 and cuurent slide is the last slide...
        // THEN set newSlide to 0, ELSE...
        ( direction === 1 && _currentSlide === slidesCountMinusOne ) ? 0 :
        // Set newSlide to the current slide plus ( or minus ) the slide
        _currentSlide + direction
      )
      : (
        ( _currentSlide === 0 && direction === -1 ) ? _currentSlide :
        ( _currentSlide === slidesCountMinusOne && direction === 1 ) ? _currentSlide :
        _currentSlide + direction
      );

    // Run the `goToSlide` method to update the new and previous slides
    goToSlide( newSlide );
  }

  /**
   * Calculates the transform percentage value the carousel should scroll to based on the slide index.
   *
   * @param { number } slide - The slide index position.
   * 
   * @returns { number } A number value as a percentage.
   */
  const calculateSlidePercentage = ( slide?: number ): number => {
    return ( ( slide ? slide : _currentSlide ) / slidesCount ) * 100;
  }

  /**
   * Handles drag end events on the carousel track.
   *
   * @param { Event } event - The mouse, touch, or pointer event.
   * @param { PanInfo } info - The pan info from the drag event.
   */
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    // Get the x offset from the pan info
    const offset = info.offset.x;
    // Set a drag threshold determining when the slide should be eligible to update
    const dragThreshold = 50;

    // Check if the offset is bigger than the drag threshold, THEN...
    if ( offset > dragThreshold ) {
      // Paginate one slide left
      paginate( -1 );
    }
    // ELSE, check if the offset is smaller than the nagative drag threshold, THEN...
    else if ( offset < -dragThreshold ) {
      // Paginate one slide right
      paginate( 1 );
    }
  };

  // ANIMATION HOOKS
  /**
   * Stores the carousel transform percentage as a motion value
   */
  const translatePosition = useMotionValue( calculateSlidePercentage() );
  /**
   * Stores a spring valye for the transform percentage
   * Updates whenever the `translatePosition` updates
   * Creates a spring animation between the previous transform percentage and the new transform percentage
   */
  const translateValue = useSpring( translatePosition, {
    stiffness: 200,
    damping: 30
  });
  /**
   * Creates a spring animation updating the slide track position
   * 
   * IMPORTANT NOTE:
   * The second slide and the second to last slide is seen as the first and last slides resspectively
   * The first slide is a duplicate of the second to last slide and will rarely be seen
   * The last slide is a duplicate of the second slide and will rareluy be seen
   */
  const translateX = useTransform( translateValue, value => {
    // Check if the current slide is the last slide, THEN...
    if ( infiniteSlides && _currentSlide === slidesCount - 1 ) {
      // Wait a bit, THEN...
      // go to the second ( index = 1 ) slide immediately without a transition
      setTimeout( () => goToSlide( 1 ), 800 );
    }

    // Check of the current slide is the second slide ( index = 1 ), AND...
    // the previous slide is the last slide, THEN...
    if ( infiniteSlides && ( _currentSlide === 1 && _previousSlide === slidesCount - 1 ) ) {
      // Recalculate the transform percentage using the second slide index position
      return `-${ calculateSlidePercentage( 1 ) }%`;
    }

    // Check if the current slide is the first slide ( index = 0 ), THEN...
    if ( infiniteSlides && _currentSlide === 0 ) {
      // Wait a bit, THEN...
      // go to the second last slide immediately without a transition
      setTimeout( () => goToSlide( slidesCount - 2 ), 800 );
    }

    // Check of the current slide is the second to last slide, AND...
    // the previous slide is the first slide, THEN.
    if ( infiniteSlides && ( _currentSlide === slidesCount - 2 && _previousSlide === 0 ) ) {
      // Recalculate the transform percentage using the fist slide index position
      return `-${ calculateSlidePercentage( 0 ) }%`;
    }

    // Return the new transform value
    return `-${ value }%`;
  });
  /**
   * Track the `translatePosition` change event
   */
  useMotionValueEvent( translatePosition, 'change', () => {
    // Check if sliding is falsse, THEN...
    // set the `_isSliding` state to true
    if ( !_isSliding ) _setIsSliding( true );

    // Wait a bit, THEN...
    // set the `_isSliding` state to false
    setTimeout( () => _setIsSliding( false ), 800 )
  });

  // EFFECTS
  useEffect(() => {
    // Recalculate the `translatePosition` value whenever the current slide is updated
    translatePosition.set( calculateSlidePercentage() );
  }, [ _currentSlide ]);

  // HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ ( classNames?.container ) ? classNames.container : '' }
    `}>
      {/* Inner */}
      <div className={`
        ${ styles[ `${ baseClass }__inner` ] }
        ${ ( classNames?.containerInner ) ? classNames.containerInner : '' }
      `}>
        {/* Track */}
        <motion.div
          onDragEnd={ handleDragEnd }
          ref={ sliderTrackRef }
          className={ styles[ `${ baseClass }__track` ] }
          drag={ 'x' }
          dragConstraints={{
            left: -100 * ( slidesCount - 1 ),
            right: 0,
          }}
          dragControls={ useDragControls() }
          dragElastic={ 0.8 }
          dragSnapToOrigin={ true }
          style={{
            width: `${ ( slidesCount / perView ) * 100 }%`,
            translateX
          }}
        >
          <div className={`
            ${ styles[ `${ baseClass }__list` ] }
            ${ ( classNames?.slides ) ? classNames.slides : '' }
          `}>
            { children }
          </div>
          {( perView > 1 && infiniteSlides ) &&
            <div className={`
              ${ styles[ `${ baseClass }__list` ] }
              ${ styles[ `${ baseClass }__list--sudo` ] }
            `}>
              { children }
            </div>
          }
        </motion.div>
        {/* ./Track */}
      </div>
      {/* ./Inner */}

      {/* Controls */}
      {( !hideControls ) && (
        <div className={`
          ${ styles[ `${ baseClass }__controls` ] }
          ${ ( classNames?.controls ) ? classNames.controls : '' }
        `}>
          {/* Dots */}
          {( !hideDots ) && (
            <div className={`
              ${ styles[ `${ baseClass }__controls-dots` ] }
              ${ ( classNames?.dots ) ? classNames.dots : '' }
            `}>
              { [ ...Array( infiniteSlides ? slidesCount - 2 : ( slidesCount - ( perView - 1 ) ) ) ].map(( _, index: number ) => (
                <button
                  onClick={ () => goToSlide( infiniteSlides ? index + 1 : index ) }
                  key={ `dot ${ index }` }
                  className={`
                    ${ styles[ `${ baseClass }__controls-dot` ] }
                    ${ _currentSlide === ( infiniteSlides ? index + 1 : index ) ? styles[ `${ baseClass }__controls-dot--is-active` ] : '' }
                  `}
                ></button>
              ))}
            </div>
          )}
          {/* ./Dots */}
          {/* Navigation */}
          {( !hideArrows ) && (
            <div className={`
              ${ styles[ `${ baseClass }__controls-navigation` ] }
              ${ ( classNames?.arrows ) ? classNames.arrows : '' }
            `}>
              <Button
                onClick={ () => paginate( -1 ) }
                accessibleLabel={ 'To previous slide' }
                icon={{
                  name: 'arrow_back',
                  type: 'text'
                }}
                isDisabled={ !infiniteSlides && _currentSlide === 0 }
                type={ 'icon' }
                variant={ 'outlined' }
              />
              <Button
                onClick={ () => paginate( 1 ) }
                accessibleLabel={ 'To next slide' }
                icon={{
                  name: 'arrow_forward',
                  type: 'text'
                }}
                isDisabled={ !infiniteSlides && _currentSlide === slidesCount - perView }
                type={ 'icon' }
                variant={ 'outlined' }
              />
            </div>
          )}
          {/* ./Navigation */}
        </div>
      )}
      {/* ./Controls */}
    </div>
  );
}

export default Carousel;
