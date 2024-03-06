// IMPORTS
import type {
  IPricingCardLayout7,
  TIconProps
} from '../../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TPricingLayout2Props = IPricingLayout2;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IPricingLayout2 {
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
   * Sets the key features to render on the component.
   */
  features: IPricingLayout2Feature[];
  /**
   * Sets the pricing card item to render in the component.
   */
  pricing: IPricingCardLayout7;
}

/**
* Sets the required props for the feature items.
*/
interface IPricingLayout2Feature {
  /**
   * Sets the icon prop values to render on the feature.
   */
  icon: Exclude< TIconProps, 'className' >;
  /**
   * Sets the feature paragraph value to render.
   */
  paragraph: string;
  /**
   * Sets the feature title value to render.
   */
  title: string;
}

// EXPORTS
export type { TPricingLayout2Props };
