// TYPES
/**
* Sets the required props for the component
*/
type TPricingTableProps = IPricingTable;

// INTERFACES
/**
* Sets the default required props for the component
*/
interface IPricingTable {
  // Required
  /**
   * Sets the features items to render on the table
   */
  features: IPricingTableFeature[];
  /**
   * Handles click events on the get started actions
   * 
   * @param { IPricingTablePrice } option - The selected option
   * 
   * @returns { void } - Returns nothing
   */
  onOptionSelect: ( option: IPricingTablePrice ) => void;
  /**
   * Sets the pricing points on the table
   */
  pricing: IPricingTablePrice[];

  // Optional
  /**
   * If set to true, the table header will be sticky at the top of the table.
   * 
   * @default true
   */
  stickyHeader?: boolean;
}

/**
* Sets the required props for the pricing point items
*/
interface IPricingTablePrice {
  /**
   * Sets the name for the pricing point item
   */
  name: string;
  /**
   * Sets the price value of the pricing point
   */
  price: string;
  /**
   * Sets the recurrence message value of the pricing point
   */
  recurrence: string;
  /**
   * Sets the description for the pricing point
   */
  description: string;
}

/**
* Sets the required props for the feature items
*/
interface IPricingTableFeature {
  /**
   * Sets the category for the feature item
   */
  category: string;
  /**
   * Sets the feature pricing options to include
   */
  options: IPricingTableOption[];
}

/**
* Sets the required props for the feature options items
*/
interface IPricingTableOption {
  /**
   * Sets the description for the option item
   */
  description: string;
  /**
   * Sets the items included in the feature
   */
  includes: ( string | boolean )[];
}

// EXPORTS
export type {
  IPricingTableFeature,
  IPricingTablePrice,
  TPricingTableProps
};
