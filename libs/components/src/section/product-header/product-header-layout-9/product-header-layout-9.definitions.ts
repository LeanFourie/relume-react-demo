// IMPORTS
import type { IProductPrice } from '@relume-demo/utils';
import type { TVideoProps } from '../../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TProductHeaderLayout9Props = IProductHeaderLayout9;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IProductHeaderLayout9 {
  /**
   * Renders the product description string value.
   */
  description: string;
  /**
   * The required props to render informational accordion items on the component.
   */
  details: {
    /**
     * The accordion content to be rendered.
     */
    description: string;
    /**
     * The accordion title to be rendered.
     */
    heading: string;
  }[];
  /**
   * Renders a list fo features included in the product.
   */
  includes: string[];
  /**
   * Renders the name string value of the product.
   */
  name: string;
  /**
   * Renders a small note value below the product call to actions.
   */
  note: string;
  /**
   * A callback function when the add to cart call to action is clicked
   * 
   * @returns { void } - Returns nothing.
   */
  onAddToCartClick: () => void;
  /**
   * A callback function when the buy now call to action is clicked
   * 
   * @returns { void } - Returns nothing.
   */
  onBuyNowClick: () => void;
  /**
   * Renders the price values for the product.
   */
  price: IProductPrice;
  /**
   * Renders a 5 star rating value on the product.
   */
  rating: number;
  /**
   * Sets a count for the amount of reviews on the product.
   */
  reviews: number;
  /**
   * Sets the prop values required to render the video on the product.
   */
  video: TVideoProps;
}

// EXPORTS
export type { TProductHeaderLayout9Props };
