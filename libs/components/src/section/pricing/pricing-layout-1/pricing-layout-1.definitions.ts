// IMPORTS
import type { TPricingCardProps } from '../../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TPricingLayout1Props = IPricingLayout1;
/**
 * Sets the pricing recurrence types.
 */
type TPricingLayout1Recurrence =
  | 'monthly'
  | 'yearly';

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IPricingLayout1 {
  // Required
  /**
   * Sets the main content to render on the component.
   */
  content: {
    /**
     * Sets the paragraph value for the main content.
     */
    paragraph: string;
    /**
     * Sets the tagline value for the main content.
     */
    tagline: string;
    /**
     * Sets the title value for the main content.
     */
    title: string;
  };
  /**
   * Sets the pricing card items to render in the component.
   */
  pricing:
    | TPricingCardProps[]
    | { [ key in TPricingLayout1Recurrence ]: TPricingCardProps[] };

  // Optional
  /**
   * Condenses the pricing content to a maximum width.
   * 
   * @default false
   */
  isCondensed?: boolean;
}

// EXPORTS
export type {
  TPricingLayout1Props,
  TPricingLayout1Recurrence
};
