// Packages & Imports
import styles from '../../pricing-table.module.scss';

// Components
import {
  Button,
  Icon,
  Text
} from '../../../../';

// Definitions
import type {
  IPricingTableFeature,
  IPricingTablePrice,
  TPricingTableProps
} from '../../pricing-table.definitions';

// Component
/**
 * PricingTableDesktop Component
 * 
 * The `PricingTableDesktop` component is a child component of the PricingTable Component.
 * This is a table component listing different features for different price points.
 * This component renders on desktop devices.
 * 
 * @param { TPricingTableProps } props - The properties for configuring the PricingTableDesktop component.
 * 
 * @returns { JSX.Element } - The PricingTableDesktop component is being returned as a JSX element.
 */
export const PricingTableDesktop = ( props: TPricingTableProps & {
  baseClass: string
}): JSX.Element => {
  // PROPS
  const {
    baseClass,
    features,
    onOptionSelect,
    pricing,
    stickyHeader = true
  } = props;

  // VARIABLES
  /**
   * Stores the table row feature items to render grouped by category.
   */
  const splitFeatures = features.reduce(( result, feature ) => {
    // Get the category value from the feature
    const category: string = feature.category;

    // Check if the result ( main group ) does not yet have the category listed as an object group, THEN...
    // create the category as an object with an empty array value
    if ( !result[ category ] ) result[ category ] = [];

    // Add the feature to the category object array
    result[ category ].push( feature );

    // Return the main group
    return result;
  }, {} as Record< string, IPricingTableFeature[] >);

  // METHODS
  /**
   * Handles click events on the `Get started` buttons.
   * 
   * @param { IPricingTablePrice } price - The selected price point.
   * 
   * @returns { void } - Returns nothing
   */
  const handleClick = ( price: IPricingTablePrice ): void => {
    // Emit the selected option
    onOptionSelect( price );
  }

  // HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ stickyHeader ? styles[ `${ baseClass }--has-sticky-header` ] : '' }
    `}>
      {/* Prices */}
      <div className={`
        ${ styles[ `${ baseClass }__prices` ] }
        ${ stickyHeader ? styles[ `${ baseClass }__prices--is-sticky` ] : '' }
      `}>
        { pricing.map(( price, index: number ) => (
          <div
            key={ `${ price.name } ${ index }` }
            className={ styles[ `${ baseClass }__price` ] }
          >
            {/* Name */}
            <div className={ styles[ `${ baseClass }__price-name` ] }>
              <Text
                className={ styles[ `${ baseClass }__price-name-element` ] }
                fontWeight={ 'bold' }
                textAlign={ !stickyHeader ? 'center' : 'left' }
                variant={ 'heading tiny' }
              >
                { price.name }
              </Text>
            </div>
            {/* ./Name */}
            {/* Value */}
            <div className={ styles[ `${ baseClass }__price-value` ] }>
              <Text
                className={ styles[ `${ baseClass }__price-value-element` ] }
                fontWeight={ 'bold' }
                textAlign={ !stickyHeader ? 'right' : 'left' }
                variant={ 'heading extra-large' }
              >
                { price.price }
                {( !stickyHeader ) && (
                  <Text
                    className={ styles[ `${ baseClass }__price-value-element-span` ] }
                    renderAs={ 'span' }
                    variant={ 'heading regular' }
                  >
                    { price.recurrence }
                  </Text>
                )}
              </Text>
            </div>
            {/* ./Value */}
            {/* Recurrence */}
            {( stickyHeader ) && (
              <div className={ styles[ `${ baseClass }__price-recurrence` ] }>
                <Text
                  className={ styles[ `${ baseClass }__price-recurrence-element` ] }
                  fontWeight={ 'bold' }
                  textAlign={ !stickyHeader ? 'center' : 'left' }
                  variant={ 'text regular' }
                >
                  { price.recurrence }
                </Text>
              </div>
            )}
            {/* ./Recurrence */}
            {/* Description */}
            <div className={ styles[ `${ baseClass }__price-description` ] }>
              <Text
                className={ styles[ `${ baseClass }__price-description-element` ] }
                textAlign={ !stickyHeader ? 'center' : 'left' }
                variant={ 'text regular' }
              >
                { price.description }
              </Text>
            </div>
            {/* ./Description */}
            {/* Action */}
            <div className={ styles[ `${ baseClass }__price-action` ] }>
              <Button
                onClick={ () => handleClick( price ) }
                className={ styles[ `${ baseClass }__price-action-element` ] }
                accessibleLabel={ 'Get started' }
                isFullWidth={ true }
                label={ 'Get started' }
                type={ 'text' }
              />
            </div>
            {/* ./Action */}
          </div>
        ))}
      </div>
      {/* ./Prices */}

      {/* Features */}
      <div className={ styles[ `${ baseClass }__features` ] }>
        { Object.entries( splitFeatures ).map(([ category, featuresInCategory ], index: number ) => (
          <div
            key={ `${ category } ${ index }` }
            className={ styles[ `${ baseClass }__category` ] }
          >
            {/* Category Name */}
            <div className={ styles[ `${ baseClass }__category-name` ] }>
              <Text
                className={ styles[ `${ baseClass }__category-name-element` ] }
                fontWeight={ 'bold' }
                variant={ 'heading tiny' }
              >
                { category }
              </Text>
            </div>
            {/* ./Description */}
            {/* Feature Items */}
            { featuresInCategory.map(( feature, idx: number ) => (
              <div
                key={ `${ feature.category } ${ idx }` }
                className={ styles[ `${ baseClass }__category-item` ] }
              >
                {/* Options */}
                { feature.options.map(( option, i: number ) => (
                  <div
                    key={ `${ option.description } ${ i }` }
                    className={ styles[ `${ baseClass }__option` ] }
                  >
                    {/* Description */}
                    <div className={ styles[ `${ baseClass }__option-description` ] }>
                      <Text
                        className={ styles[ `${ baseClass }__option-description-element` ] }
                        variant={ 'text regular' }
                      >
                        { option.description }
                      </Text>
                    </div>
                    {/* ./Description */}

                    {/* Includes */}
                    { option.includes.map(( include, j: number ) => (
                      <div
                        key={ j }
                        className={ styles[ `${ baseClass }__option-include` ] }
                      >
                        {/* Text */}
                        {( typeof include === 'string' ) && (
                          <Text
                            className={`
                              ${ styles[ `${ baseClass }__option-include-element` ] }
                              ${ styles[ `${ baseClass }__option-include-element--text` ] }
                            `}
                            fontWeight={ 'semibold' }
                            textAlign={ 'center' }
                            variant={ 'text regular' }
                          >
                            { include }
                          </Text>
                        )}
                        {/* ./Text */}
                        {/* Icon */}
                        {( typeof include !== 'string' ) && (
                          <Icon
                            className={`
                              ${ styles[ `${ baseClass }__option-include-element` ] }
                              ${ styles[ `${ baseClass }__option-include-element--icon` ] }
                              ${
                                include
                                  ? styles[ `${ baseClass }__option-include-element--icon-include` ]
                                  : styles[ `${ baseClass }__option-include-element--icon-exclude` ]
                              }
                            `}
                            name={ include ? 'done' : 'close' }
                            type={ 'text' }
                          />
                        )}
                        {/* ./Icon */}
                      </div>
                    ))}
                    {/* ./Includes */}
                  </div>
                ))}
                {/* ./Options */}
              </div>
            ))}
            {/* ./Feature Items */}
          </div>
        ))}
      </div>
      {/* ./Features */}

      {/* CTAs */}
      {( !stickyHeader ) && (
        <div className={ styles[ `${ baseClass }__ctas` ] }>
          { pricing.map(( price, index: number ) => (
            <div
              key={ `${ price.name } ${ index }` }
              className={ styles[ `${ baseClass }__cta` ] }
            >
              <Button
                onClick={ () => handleClick( price ) }
                accessibleLabel={ 'Get started' }
                className={ styles[ `${ baseClass }__cta-element` ] }
                isFullWidth={ true }
                label={ 'Get started' }
                type={ 'text' }
              />
            </div>
          ))}
        </div>
      )}
      {/* ./CTAs */}
    </div>
  );
}
