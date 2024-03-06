// Packages & Modules
import styles from './pricing-layout-3.module.scss';
import { useEffect, useState } from 'react';

// Components
import {
  FeatureContentLayout1,
  PricingTable,
  Text
} from '../../../';

// Definitions
import type { TPricingTableProps } from '../../../';
import type {
  TPricingLayout3Props,
  TPricingLayout3Recurrence
} from './pricing-layout-3.definitions';

// Component
/**
 * PricingLayout3 Component
 * 
 * The `PricingLayout3` component is a pricing table component.
 * The component renders a pricing table alongside a primary text content block.
 * 
 * @component
 * @example
 * <PricingLayout3
 *   content={{
 *     tagline: 'Tagline',
 *     title: 'Pricing plan',
 *     paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
 *   }}
 *   pricing={{
 *     stickyHeader: true,
 *     pricing: [{
 *       name: 'Option',
 *       price: '$20',
 *       recurrence: 'Per month',
 *       description: 'Lorem ipsum dolor sit amet'
 *     }],
 *     features: [{
 *       category: 'Category',
 *       options: [{
 *         description: 'Feature text goes here',
 *         includes: '10'
 *       }]
 *     }]
 *   }}
 * />
 * 
 * @param { PROPS } props - The properties for configuring the PricingLayout3 component.
 * 
 * @returns { JSX.Element } - The PricingLayout3 component is being returned as a JSX element.
 */
export const PricingLayout3 = ( props: TPricingLayout3Props ): JSX.Element => {
  // #region - PROPS
  const {
    content,
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
  ] = useState< TPricingLayout3Recurrence >( 'monthly' );
  /**
   * Stores rge relevant pricing table props.
   */
  const [
    _tableProps,
    _setTableProps
  ] = useState< TPricingTableProps >(
    ('monthly' in pricing)
      ? pricing.monthly
      : pricing
  );
  // #endregion

  // #region - METHODS
  /**
   * Handles click events on the tab items.
   * 
   * @param { TPricingLayout3Recurrence } type - The type of pricing to view, monthly or yearly.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleTabClick = ( type: TPricingLayout3Recurrence ): void => {
    _setActiveType( type );
  }
  // #endregion

  // #region - EFFECTS
  useEffect(() => {
    _setTableProps(
      ('monthly' in pricing)
        ? pricing[ _activeTab ]
        : pricing
    )
  }, [
    _activeTab,
    pricing
  ]);
  // #endregion

  // #region - HTML
  return (
    <div className={ styles[ baseClass ] }>
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
          {/* Tabs */}
          {( 'monthly' in pricing ) && (
            <div className={`
              ${ styles[ `${ baseClass }__pricing-tabs` ] }
              ${
                ( _activeTab === 'monthly' )
                  ? styles[ `${ baseClass }__pricing-tabs--current-1` ]
                  : styles[ `${ baseClass }__pricing-tabs--current-2` ]
              }
            `}>
              {/* Inner */}
              <div className={ styles[ `${ baseClass }__pricing-tabs-inner` ] }>
                <div
                  onClick={ () => handleTabClick( 'monthly' ) }
                  className={`
                    ${ styles[ `${ baseClass }__pricing-tab` ] }
                    ${ _activeTab === 'monthly' ? styles[ `${ baseClass }__pricing-tab--is-active` ] : '' }
                  `}
                >
                  <Text
                    className={ styles[ `${ baseClass }__pricing-tab-element` ] }
                    fontWeight={ 'medium' }
                    textAlign={ 'center' }
                    variant={ 'text regular' }
                  >
                    Monthly
                  </Text>
                </div>
                <div
                  onClick={ () => handleTabClick( 'yearly' ) }
                  className={`
                    ${ styles[ `${ baseClass }__pricing-tab` ] }
                    ${ _activeTab === 'yearly' ? styles[ `${ baseClass }__pricing-tab--is-active` ] : '' }
                  `}
                  >
                  <Text
                    className={ styles[ `${ baseClass }__pricing-tab-element` ] }
                    fontWeight={ 'medium' }
                    textAlign={ 'center' }
                    variant={ 'text regular' }
                  >
                    Yearly
                  </Text>
                </div>
              </div>
              {/* ./Inner */}
            </div>
          )}
          {/* ./Tabs */}

          {/* Table */}
          <PricingTable { ..._tableProps } />
          {/* ./Table */}
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
 * - Pricing / 21
 * - Pricing / 22
 * - Pricing / 26
 * - Pricing / 27
 */
