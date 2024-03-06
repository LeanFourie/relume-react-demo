// IMPORTS
import type { TPricingTableProps } from '../../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TPricingLayout3Props = IPricingLayout3;
/**
 * Sets the pricing recurrence types.
 */
type TPricingLayout3Recurrence =
  | 'monthly'
  | 'yearly';

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IPricingLayout3 {
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
   * Sets the pricing table data to render in the component.
   */
  pricing:
    | TPricingTableProps
    | { [ key in TPricingLayout3Recurrence ]: TPricingTableProps };
}

// EXPORTS
export type {
  TPricingLayout3Props,
  TPricingLayout3Recurrence
};
