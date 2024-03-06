// Packages & Modules
import styles from './pricing-layout-1.module.scss';
import { useState } from 'react';

// Components
import {
  FeatureContentLayout1,
  PricingCard
} from '../../../';

// Definitions
import type { TPricingCardProps } from '../../../';
import type {
  TPricingLayout1Props,
  TPricingLayout1Recurrence
} from './pricing-layout-1.definitions';

// Component
/**
 * PricingLayout1 Component
 * 
 * The `PricingLayout1` component is a price listing component.
 * The component contains different price range cards rendered alongside a primary text content block.
 * 
 * @component
 * @example
 * <PricingLayout1
 *   content={{
 *     tagline: 'Tagline',
 *     title: 'Pricing plan',
 *     paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
 *   }+
 *   pricing={[{
 *     name: 'Basic Plan',
 *     price: {
 *       value: '$19',
 *       recurrence: '/mo',
 *       note: 'or $199 yearly'
 *     },
 *     cta: {
 *       accessibleLabel: '',
 *       label: 'Get started',
 *       onClick: () => {},
 *       type: 'text'
 *     },
 *     features: {
 *       items: [{
 *         included: true,
 *         value: 'Feature text goes here'
 *       }]
 *     },
 *     layout: 2
 *   }]}
 * />
 * 
 * @param { TPricingLayout1Props } props - The properties for configuring the PricingLayout1 component.
 * 
 * @returns { JSX.Element } - The PricingLayout1 component is being returned as a JSX element.
 */
export const PricingLayout1 = ( props: TPricingLayout1Props ): JSX.Element => {
  // #region - PROPS
  const {
    content,
    isCondensed = false,
    pricing
  } = props;
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'pricing';
  // #endregion

  // #region - STATES
  /**
   * Stores the active pricing content.
   */
  const [
    _activeTab,
    _setActiveType
  ] = useState< TPricingLayout1Recurrence >( 'monthly' );
  // #endregion

  // #region - METHODS
  /**
   * Creates the HTML to render for the price card items.
   * 
   * @param { TPricingCardProps[] } prices - The array of pricing items to render.
   * 
   * @returns { JSX.Element } - Pricing cards HTML elements.
   */
  const renderPricing = ( prices: TPricingCardProps[] ): JSX.Element => (
    <div className={ styles[ `${ baseClass }__pricing-inner` ] }>
      { prices.map(( item, index: number ) => (
        <div
          key={ `${ item.price.value } ${ index }` }
          className={ styles[ `${ baseClass }__price` ] }
        >
          <PricingCard { ...item } />
        </div>
      ))}
    </div>
  );

  /**
   * Get the column count based on the amount of pricing items.
   * 
   * @returns { number } - The column count as a number value.
   */
  const getColumnCount = (): number => {
    // Get the number of pricing items in the array
    const arrayItemsCount: number = Array.isArray( pricing )
      ? pricing.length
      : pricing.monthly.length;

    // Return the column count
    return arrayItemsCount >= 3 ? 3 : arrayItemsCount;
  }
  // #endregion

  // #region - HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ styles[ `${ baseClass }--columns-${ getColumnCount() }` ] }
      ${ isCondensed ? styles[ `${ baseClass }--is-condensed` ] : '' }
    `}>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Content */}
        <div className={ styles[ `${ baseClass }__content` ] }>
          <FeatureContentLayout1
            { ...content }
            textAlign={ 'center' }
          />
        </div>
        {/* ./Content */}

        {/* Pricing */}
        <div className={ styles[ `${ baseClass }__pricing` ] }>
          {( Array.isArray( pricing ) ) && (
            <>
              { renderPricing( pricing ) }
            </>
          )}

          {( !Array.isArray( pricing ) ) && (
            <>
              {/* Tabs */}
              <div className={ styles[ `${ baseClass }__pricing-tabs` ] } />
              {/* ./Tabs */}
              {/* Pricing Cards */}
              { renderPricing( pricing[ _activeTab ] ) }
              {/* ./Pricing Cards */}
            </>
          )}
        </div>
        {/* ./Pricing */}
      </div>
      {/* ./Inner */}
    </div>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - Pricing / 1
 * - Pricing / 2
 * - Pricing / 3
 * - Pricing / 4
 * - Pricing / 6
 * - Pricing / 7
 * - Pricing / 8
 * - Pricing / 9
 * - Pricing / 10
 * - Pricing / 11
 * - Pricing / 12
 * - Pricing / 13
 * - Pricing / 14
 * - Pricing / 15
 * - Pricing / 16
 * - Pricing / 17
 * - Pricing / 18
 * - Pricing / 19
 * - Pricing / 20
 * - Pricing / 23
 * - Pricing / 24
 * - Pricing / 25
 */
