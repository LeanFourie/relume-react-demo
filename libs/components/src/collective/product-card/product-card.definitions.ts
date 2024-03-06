// IMPORTS
import {
  IImage,
  IProductBadgeBase,
  IProductPrice,
  THorizontalAlignment
} from '@relume-demo/utils';


// TYPES
/**
* Sets the required props for the component.
*/
type TProductCardProps = IProductCard;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IProductCard {
  // Required
  /**
   * The unique identifier of the product used for navigating to the product page.
   */
  id: string;
  /**
   * The props required to render the image on the card.
   */
  image: IImage | IImage[];
  /**
   * The name string value of the product.
   */
  name: string;
  /**
   * A callback function when the user clicks the add to cart button on the card.
   * 
   * @param { IProductCard[ 'id' ] } productId - The ID of the product.
   * 
   * @returns  { void } - Returns nothing.
   */
  onAddToCartClick: ( productId: IProductCard[ 'id' ] ) => void;
  /**
   * A callback function when the user clicks the wishlist button on the card.
   * 
   * @param { IProductCard[ 'id' ] } productId - The ID of the product.
   * 
   * @returns  { void } - Returns nothing.
   */
  onWishlistClick: ( productId: IProductCard[ 'id' ] ) => void;
  /**
   * The default, and optionally the sale, numeric price value of the product.
   */
  price: IProductPrice;

  // Optional
  /**
   * Renders a list of product badges on the card.
   */
  badges?: IProductBadgeBase[];
  /**
   * Determines which actions should be visible on the card.
   */
  controls?: {
    /**
     * Renders an add to card button pn the card.
     * 
     * @default true
     */
    addToCart?: boolean;
    /**
     * Renders a wishlist button pn the card.
     * 
     * @default false
     */
    wishlist?: boolean;
  };
  /**
   * If this string value is set, it renders a product description below the product name.
   */
  description?: string;
  /**
   * A boolean flag checking whether the product is already added to the user's wishlist.
   * 
   * @default false
   */
  isWishListed?: boolean;
  /**
   * Determines the alignment of the text on the card.
   * 
   * @default 'left'
   */
  textAlign?: Exclude< THorizontalAlignment, 'right' >;
}

// EXPORTS
export type { TProductCardProps };
