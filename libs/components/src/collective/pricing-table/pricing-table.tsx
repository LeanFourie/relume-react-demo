// Packages & Imports
import { WindowContext } from '@relume-demo/providers';
import { useContext } from 'react';

// Components
import {
  PricingTableDesktop,
  PricingTableMobile
} from './children';

// Definitions
import type {
  IPricingTablePrice,
  TPricingTableProps
} from './pricing-table.definitions';

// Component
/**
 * PricingTable Component
 * 
 * The `PricingTable` component is a table component listing prices and features.
 * It is composed of text elements, and quick get started call to action elements.
 * 
 * @component
 * @example
 * <PricingTable
 *   pricing={[{
 *     name: 'Option',
 *     price: '$20',
 *     recurrence: 'Per month',
 *     description: 'Lorem ipsum dolor sit amet'
 *   }]}
 *   features=[{
 *     category: 'Category',
 *     options: [{
 *       description: 'Feature text goes here',
 *       includes: '10'
 *     }]
 *   }]}
 * />
 * 
 * @param { TPricingTableProps } props - The properties for configuring the PricingTable component.
 * 
 * @returns { JSX.Element } - The PricingTable component is being returned as a JSX element.
 */
export const PricingTable = ( props: TPricingTableProps ): JSX.Element => {
  // PROPS
  const {
    features,
    pricing,
    onOptionSelect,
    stickyHeader = true
  } = props;

  // PROVIDERS
  const {
    breakpoints,
    windowSize
  } = useContext( WindowContext )!;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'table';

  // METHODS
  /**
   * Handles click events on the `Get started` buttons.
   * 
   * @param { IPricingTablePrice } price - The selected price point.
   * 
   * @returns { void } - Returns nothing
   */
  const handleOptionSelect = ( price: IPricingTablePrice ): void => {
    // Emit the selected option
    onOptionSelect( price );
  }

  // HTML
  return (
    <>
      {/* Desktop */}
      {( windowSize >= breakpoints.md ) && (
        <PricingTableDesktop
          onOptionSelect={ handleOptionSelect }
          baseClass={ baseClass }
          features={ features }
          pricing={ pricing }
          stickyHeader={ stickyHeader }
        />
      )}
      {/* ./Desktop */}

      {/* Mobile */}
      {( windowSize < breakpoints.md ) && (
        <PricingTableMobile
          onOptionSelect={ handleOptionSelect }
          baseClass={ baseClass }
          features={ features }
          pricing={ pricing }
          stickyHeader={ stickyHeader }
        />
      )}
      {/* ./Mobile */}
    </>
  );
}
