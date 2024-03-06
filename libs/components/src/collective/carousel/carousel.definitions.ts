// TYPES
/**
 * Defines the props required for the Carousel component.
 */
type TCarouselProps = ICarousel;

// INTERFACES
/**
 * Represents the required and optional props for the Carousel component.
 */
interface ICarousel {
  // Required
  /**
   * The total number of slides inside the carousel.
   */
  slidesCount: number;

  // Optional
  /**
   * Additional classes for styling nested components inside the main carousel.
   */
  classNames?: {
    /**
     * Class for the arrows container.
     */
    arrows?: string;
    /**
     * Class for the main container.
     */
    container?: string;
    /**
     * Class for the inner container element.
     */
    containerInner?: string;
    /**
     * Class for the controls.
     */
    controls?: string;
    /**
     * Class for the dots container.
     */
    dots?: string;
    /**
     * Class for the slides list.
     */
    slides?: string;
  };
  /**
   * Hides the carousel arrow navigation if set to true.
   * 
   * @default false
   */
  hideArrows?: boolean;
  /**
   * Hides the carousel controls if set to true.
   * 
   * @default false
   */
  hideControls?: boolean;
  /**
   * Hides the carousel dots if set to true.
   * 
   * @default false
   */
  hideDots?: boolean;
  /**
   * Enables infinite looping through the slides if set to true.
   * 
   * @default false
   */
  infiniteSlides?: boolean;
  /**
   * Determines the number of slide items visible in the view at a time.
   * 
   * @default 1
   */
  perView?: number;
}

// EXPORTS
export type { TCarouselProps };