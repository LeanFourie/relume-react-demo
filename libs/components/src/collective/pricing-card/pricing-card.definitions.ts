// IMPORTS
import type {
  TButtonProps,
  TIconProps
} from '../../';

// TYPES
/**
* Sets the required props for the component
*/
type TPricingCardProps =
  | IPricingCardLayout1
  | IPricingCardLayout2
  | IPricingCardLayout3
  | IPricingCardLayout4
  | IPricingCardLayout5
  | IPricingCardLayout6
  | IPricingCardLayout7
  | IPricingCardLayout8;
/**
 * Determines the layout to render for the card component
 */
type TPricingCardLayout =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8;

// INTERFACES
/**
* Sets the default required props for the component
*/
interface IPricingCard {
  /**
   * Sets the prop values on the card CTA
   */
  cta: TButtonProps;
  /**
   * Sets the feature items on the card component
   */
  features: {
    /**
     * Sets the feature items to render
     */
    items: IPricingCardFeature[];
    /**
     * Adds an optional title above the feature items
     */
    title?: string;
  };
  /**
   * Sets the name value of the price point on the card
   */
  name: string;
  /**
   * Sets the pricing value on the card
   */
  price: {
    /**
     * Sets the recurrence type of the price
     */
    recurrence: string;
    /**
     * Sets the value of the price
     */
    value: string;
  };
}

interface IPricingCardLayout1 extends IPricingCard {
  /**
   * Determines the props required for the component
   */
  layout: Extract< TPricingCardLayout, 1 >;
}
interface IPricingCardLayout2 extends IPricingCard {
  /**
   * Determines the props required for the component
   */
  layout: Extract< TPricingCardLayout, 2 >;
  price: IPricingCard['price'] & {
    /**
     * Adds a note to the price element
     */
    note: string;
  };
}
interface IPricingCardLayout3 extends IPricingCard {
  /**
   * Sets the icon prop values on the card CTA
   */
  icon: Exclude< TIconProps, 'className' >;
  /**
   * Determines the props required for the component
   */
  layout: Extract< TPricingCardLayout, 3 >;
}
interface IPricingCardLayout4 extends Omit< IPricingCardLayout2, 'layout' > {
  /**
   * Sets the icon prop values on the card CTA
   */
  icon: Exclude< TIconProps, 'className' >;
  /**
   * Determines the props required for the component
   */
  layout: Extract< TPricingCardLayout, 4 >;
}
interface IPricingCardLayout5 extends Omit< IPricingCardLayout1, 'layout' > {
  /**
   * Adds a description to the card
   */
  description: string;
  /**
   * Determines the props required for the component
   */
  layout: Extract< TPricingCardLayout, 5 >;
}
interface IPricingCardLayout6 extends Omit< IPricingCardLayout2, 'layout' > {
  /**
   * Adds a description to the card
   */
  description: string;
  /**
   * Determines the props required for the component
   */
  layout: Extract< TPricingCardLayout, 6 >;
}
interface IPricingCardLayout7 extends IPricingCard {
  /**
   * Adds a description to the card
   */
  description: string;
  /**
   * Determines the props required for the component
   */
  layout: Extract< TPricingCardLayout, 7 >;
}
interface IPricingCardLayout8 extends Omit< IPricingCardLayout7, 'layout' > {
  /**
   * Sets the icon prop values on the card CTA
   */
  icon: Exclude< TIconProps, 'className' >;
  /**
   * Determines the props required for the component
   */
  layout: Extract< TPricingCardLayout, 8 >;
}

/**
* Sets the required props for the card feature item
*/
interface IPricingCardFeature {
  /**
   * Determines whether the item is included in the price point or not
   * 
   */
  included: boolean;
  /**
   * Sets the text value to render for the feature
   */
  value: string;
}

// EXPORTS
export type {
  IPricingCardLayout1,
  IPricingCardLayout2,
  IPricingCardLayout3,
  IPricingCardLayout4,
  IPricingCardLayout5,
  IPricingCardLayout6,
  IPricingCardLayout7,
  TPricingCardProps
};
