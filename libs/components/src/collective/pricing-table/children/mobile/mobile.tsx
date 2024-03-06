// Packages & Imports
import { useAccordion } from '@relume-demo/hooks';
import {
  generateAccordionIds,
  handleAccordionPanelClick
} from '@relume-demo/utils';
import styles from '../../pricing-table.module.scss';
import { motion } from 'framer-motion';

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
 * PricingTableMobile Component
 * 
 * The `PricingTableMobile` component is a child component of the PricingTable Component.
 * This is an accordion list component listing different features for different price points.
 * This component renders on mobile and tablet devices.
 * 
 * @param { TPricingTableProps } props - The properties for configuring the PricingTableMobile component.
 * 
 * @returns { JSX.Element } - The PricingTableMobile component is being returned as a JSX element.
 */
export const PricingTableMobile = ( props: TPricingTableProps & {
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

  // HOOKS
  const {
    activePanel,
    panels,
    handlePanelClick
  } = useAccordion(
    [ ...Array( pricing.length ) ].map(( _, index: number ) => ({
      index,
      categories: generateAccordionIds( features, 'category' )
    })).flatMap( item => (
      item.categories.map( category => `${ category } ${ item.index }` )
    ))
  );

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

  /**
   * Handles click events on the accordion panel
   * 
   * @param { React.MouseEvent< HTMLDivElement, MouseEvent > } event - The click event from the accordion trigger
   * @param { string } panelId - The panel id from the clicked accordion
   */
  const handleAccordionItemClick = (
    event: React.MouseEvent< HTMLDivElement, MouseEvent >,
    panelId: string
  ): void => {
    handleAccordionPanelClick(
      event,
      panelId,
      handlePanelClick
    );
  }

  // HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ stickyHeader ? styles[ `${ baseClass }--has-sticky-header` ] : '' }
    `}>
      {/* Groups */}
      <div className={ styles[ `${ baseClass }__groups` ] }>
        { pricing.map(( group, index: number ) => (
          <div
            key={ `${ group.name } ${ index }` }
            className={ styles[ `${ baseClass }__group` ] }
          >
            {/* Header */}
            <div className={ styles[ `${ baseClass }__group-header` ] }>
              {/* Name */}
              <div className={ styles[ `${ baseClass }__group-name` ] }>
                <Text
                  className={ styles[ `${ baseClass }__group-name-element` ] }
                  fontWeight={ 'bold' }
                  textAlign={ !stickyHeader ? 'center' : 'left' }
                  variant={ 'heading tiny' }
                >
                  { group.name }
                </Text>
              </div>
              {/* ./Name */}
              {/* Value */}
              <div className={ styles[ `${ baseClass }__group-value` ] }>
                <Text
                  className={ styles[ `${ baseClass }__group-value-element` ] }
                  fontWeight={ 'bold' }
                  textAlign={ !stickyHeader ? 'right' : 'left' }
                  variant={ 'heading extra-large' }
                >
                  { group.price }
                  {( !stickyHeader ) && (
                    <Text
                      className={ styles[ `${ baseClass }__group-value-element-span` ] }
                      renderAs={ 'span' }
                      variant={ 'heading regular' }
                    >
                      { group.recurrence }
                    </Text>
                  )}
                </Text>
              </div>
              {/* ./Value */}
              {/* Recurrence */}
              {( stickyHeader ) && (
                <div className={ styles[ `${ baseClass }__group-recurrence` ] }>
                  <Text
                    className={ styles[ `${ baseClass }__group-recurrence-element` ] }
                    fontWeight={ 'bold' }
                    textAlign={ !stickyHeader ? 'center' : 'left' }
                    variant={ 'text regular' }
                  >
                    { group.recurrence }
                  </Text>
                </div>
              )}
              {/* ./Recurrence */}
              {/* Description */}
              <div className={ styles[ `${ baseClass }__group-description` ] }>
                <Text
                  className={ styles[ `${ baseClass }__group-description-element` ] }
                  textAlign={ !stickyHeader ? 'center' : 'left' }
                  variant={ 'text regular' }
                >
                  { group.description }
                </Text>
              </div>
              {/* ./Description */}
              {/* Action */}
              {( stickyHeader ) && (
                <div className={ styles[ `${ baseClass }__group-action` ] }>
                  <Button
                    onClick={ () => handleClick( group ) }
                    className={ styles[ `${ baseClass }__group-action-element` ] }
                    accessibleLabel={ 'Get started' }
                    isFullWidth={ true }
                    label={ 'Get started' }
                    type={ 'text' }
                  />
                </div>
              )}
              {/* ./Action */}
            </div>
            {/* ./Header */}

            {/* Body */}
            <div className={ styles[ `${ baseClass }__group-body` ] }>
              { Object.entries( splitFeatures ).map(([ category, featuresInCategory ], idx: number ) => (
                <div
                  key={ `${ category } ${ idx }` }
                  className={ styles[ `${ baseClass }__group-row` ] }
                >
                  <div
                    onClick={ ( event ) => handleAccordionItemClick( event, `${ category } ${ index }` ) }
                    className={ styles[ `${ baseClass }__group-category` ] }
                  >
                    <div className={ styles[ `${ baseClass }__group-category-title` ] }>
                      <Text
                        className={ styles[ `${ baseClass }__group-category-title-element` ] }
                        fontWeight={ 'bold' }
                        variant={ 'heading tiny' }
                      >
                        { category }
                      </Text>
                    </div>
                    <div className={ styles[ `${ baseClass }__group-category-icon` ] }>
                      { [ ...Array( 2 ) ].map(( _, i: number ) => (
                        <div
                          key={ i }
                          className={`
                            ${ styles[ `${ baseClass }__group-category-icon-handle` ] }
                            ${ styles[ `${ baseClass }__group-category-icon-handle--${ i + 1 }` ] }
                            ${ activePanel === `${ category } ${ index }` ? styles[ `${ baseClass }__group-category-icon-handle--${ i + 1 }-is-active` ] : '' }
                          `}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    className={ styles[ `${ baseClass }__group-features` ] }
                    animate={ panels?.[ `${ category } ${ index }` ]?.animation || {} }
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30
                    }}
                  >
                    <div className={ styles[ `${ baseClass }__group-features-inner` ] }>
                      { featuresInCategory.map(( feature, i: number ) => (
                        <div
                          key={ `${ feature.category } ${ i }` } 
                          className={ styles[ `${ baseClass }__group-feature` ] }
                        >
                          { feature.options.map(( option, j: number ) => (
                            <div
                              key={ `${ option.description } ${ j }` } 
                              className={ styles[ `${ baseClass }__group-option` ] }
                            >
                              <div className={ styles[ `${ baseClass }__group-option-name` ] }>
                                <Text
                                  className={ styles[ `${ baseClass }__option-option-name-element` ] }
                                  variant={ 'text regular' }
                                >
                                  { option.description }
                                </Text>
                              </div>
                              <div className={ styles[ `${ baseClass }__group-option-include` ] }>
                                {/* Text */}
                                {( typeof option.includes[ index ] === 'string' ) && (
                                  <Text
                                    className={`
                                      ${ styles[ `${ baseClass }__group-option-include-element` ] }
                                      ${ styles[ `${ baseClass }__group-option-include-element--text` ] }
                                    `}
                                    fontWeight={ 'semibold' }
                                    textAlign={ 'center' }
                                    variant={ 'text regular' }
                                  >
                                    { option.includes[ index ] }
                                  </Text>
                                )}
                                {/* ./Text */}
                                {/* Icon */}
                                {( typeof option.includes[ index ] !== 'string' ) && (
                                  <Icon
                                    className={`
                                      ${ styles[ `${ baseClass }__group-option-include-element` ] }
                                      ${ styles[ `${ baseClass }__group-option-include-element--icon` ] }
                                      ${
                                        option.includes[ index ]
                                          ? styles[ `${ baseClass }__group-option-include-element--icon-include` ]
                                          : styles[ `${ baseClass }__group-option-include-element--icon-exclude` ]
                                      }
                                    `}
                                    name={ option.includes[ index ] ? 'done' : 'close' }
                                    type={ 'text' }
                                  />
                                )}
                                {/* ./Icon */}
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            {/* ./Body */}

            {/* Get Started */}
            {( !stickyHeader ) && (
              <div className={ styles[ `${ baseClass }__group-cta` ] }>
                <Button
                  onClick={ () => handleClick( group ) }
                  className={ styles[ `${ baseClass }__group-cta-element` ] }
                  accessibleLabel={ 'Get started' }
                  isFullWidth={ true }
                  label={ 'Get started' }
                  type={ 'text' }
                />
              </div>
            )}
            {/* ./Get Started */}
          </div>
        ))}
      </div>
      {/* ./Groups */}
    </div>
  );
}
