// IMPORTS
import {
  IImage,
  IProductBadgeBase,
  IProductPrice,
  IProductVariant
} from '@relume-demo/utils';

// INTERFACES
interface IProductHeader {
  // Required
  /**
   * Renders the product description string value.
   */
  description: string;
  /**
   * Renders additional information about the product a tab / an accordion.
   */
  details: string;
  /**
   * Renders a list to images to showcase the product.
   */
  images: IImage[];
  /**
   * Renders the name string value of the product.
   */
  name: string;
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
   * Renders product return information in a tab / an accordion.
   */
  returns: string;
  /**
   * Renders product shipping information in a tab / an accordion.
   */
  shipping: string;

  // Optional
  /**
   * Renders a list of product badges on the product image.
   */
  badges?: IProductBadgeBase[];
  /**
   * Determines the maximum quantity a user can select of this product.
   */
  maxQtySelect?: number;
  /**
   * Renders a small note value below the product call to actions.
   */
  note?: string;
  /**
   * Renders a 5 star rating value on the product.
   */
  rating?: number;
  /**
   * Sets a count for the amount of reviews on the product.
   */
  reviews?: number;
  /**
   * Renders product variant controls to select different variant options.
   */
  variants?: IProductVariant[];
}

// EXPORTS
export type { IProductHeader }
