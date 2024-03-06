import styles from './pricing-card.module.scss';

// Components
import {
  Button,
  Icon,
  Text
} from '../../';

// Definitions
import type { TPricingCardProps } from './pricing-card.definitions';

// Component
/**
 * PricingCard Component
 * 
 * The `PricingCard` component is a text based component that indicates a price point.
 * It is composed of text elements combined with a call to action to indicate the features for the price point with a quick sign up.
 * 
 * @component
 * @example
 * <TPricingCardProps
 *   name={ 'Basic Plan' }
 *   price={{
 *     value: '$19',
 *     recurrence: '/mo'
 *   }}
 *   cta={{
 *     accessibleLabel: '',
 *     label: 'Get started',
 *     onClick: () => {},
 *     type: 'text'
 *   }}
 *   features={{
 *     items: [{
 *       included: true,
 *       value: 'Feature text`
 *     }]
 *   }}
 *   layout={ 1 }
 * />
 * 
 * @param { TFeatureContentLayout1Props } props - The properties for configuring the PricingCard component.
 * 
 * @returns { JSX.Element } - The PricingCard component is being returned as a JSX element.
 */
export const PricingCard = ( props: TPricingCardProps ): JSX.Element => {
  // PROPS
  const {
    cta,
    features,
    layout,
    name,
    price
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'card';

  // METHODS
  /**
   * Creates the HTML to render for the component call to action.
   * 
   * @returns { JSX.Element } - The call to action component to render
   */
  const renderCTA = (): JSX.Element => (
    <div className={ styles[ `${ baseClass }__cta` ] }>
      <Button
        { ...cta }
        className={ styles[ `${ baseClass }__cta-element` ] }
        isFullWidth={ true }
      />
    </div>
  );

  // HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ styles[ `${ baseClass }--layout-${ layout }` ] }
    `}>
      {/* Details */}
      <div className={ styles[ `${ baseClass }__details` ] }>
        {/* Info */}
        <div className={ styles[ `${ baseClass }__info` ] }>
          {/* Icon */}
          {( 'icon' in props ) &&
            <div className={ styles[ `${ baseClass }__info-icon` ] }>
              <Icon
                { ...props.icon }
                className={ styles[ `${ baseClass }__info-icon-element` ] }
              />
            </div>
          }
          {/* ./Icon */}
          {/* Name */}
          <div className={ styles[ `${ baseClass }__info-name` ] }>
            <Text
              className={ styles[ `${ baseClass }__info-name-element` ] }
              fontWeight={ 'bold' }
              textAlign={
                  ( layout === 1 || layout === 2 )
                    ? 'center'
                    : 'left'
              }
              variant={ 'heading tiny' }
            >
              { name }
            </Text>
          </div>
          {/* ./Name */}
          {/* Description */}
          {( 'description' in props ) &&
            <div className={ styles[ `${ baseClass }__info-description` ] }>
              <Text
                className={ styles[ `${ baseClass }__info-description-element` ] }
                textAlign={
                    ( layout === 1 || layout === 2 )
                      ? 'center'
                      : 'left'
                }
                variant={ 'text regular' }
              >
                { props.description }
              </Text>
            </div>
          }
          {/* ./Description */}
        </div>
        {/* ./Info */}
        {/* Price */}
        <div className={ styles[ `${ baseClass }__price` ] }>
          {/* Value */}
          <div className={ styles[ `${ baseClass }__price-value` ] }>
            <Text
              className={ styles[ `${ baseClass }__price-value-element` ] }
              fontWeight={ 'bold' }
              textAlign={
                  ( layout === 1 || layout === 2 )
                    ? 'right'
                    : 'left'
              }
              variant={ 'heading extra-large' }
            >
              { price.value }
              <Text
                className={ styles[ `${ baseClass }__price-value-element-span` ] }
                renderAs={ 'span' }
                variant={ 'heading regular' }
              >
                { price.recurrence }
              </Text>
            </Text>
          </div>
          {/* ./Value */}
          {/* Note */}
          {( 'note' in price ) && (
            <div className={ styles[ `${ baseClass }__price-note` ] }>
              <Text
                className={ styles[ `${ baseClass }__price-note-element` ] }
                textAlign={
                    ( layout === 1 || layout === 2 )
                      ? 'center'
                      : 'left'
                }
                variant={ 'text regular' }
              >
                { price.note }
              </Text>
            </div>
          )}
          {/* ./Note */}
        </div>
        {/* ./Price */}
        {/* CTA ( Top ) */}
        {( layout === 5 ) && renderCTA() }
        {/* ./CTA ( Top ) */}
      </div>
      {/* ./Details */}

      {/* Features */}
      <div className={ styles[ `${ baseClass }__features` ] }>
        {/* Title */}
        {( features.title ) &&
          <div className={ styles[ `${ baseClass }__features-title` ] }>
            <Text
              className={ styles[ `${ baseClass }__features-title-element` ] }
              variant={ 'text regular' }
            >
              { features.title }
            </Text>
          </div>
        }
        {/* ./Title */}
        {/* Feature Items */}
        { features.items.map( ( feature, index: number ) => (
          <div
            key={ `${ feature.value } ${ index }` }
            className={ styles[ `${ baseClass }__feature` ] }
          >
            {/* Icon */}
            <div className={ styles[ `${ baseClass }__feature-icon` ] }>
              <Icon
                key={ `${ feature.included }` }
                className={`
                  ${ styles[ `${ baseClass }__feature-icon-element` ] }
                  ${
                    feature.included
                      ? styles[ `${ baseClass }__feature-icon-element--is-included` ]
                      : styles[ `${ baseClass }__feature-icon-element--is-excluded` ]
                  }
                `}
                name={ feature.included ? 'done' : 'close' }
                type={ 'text' }
              />
            </div>
            {/* ./Icon */}
            {/* Value */}
            <div className={ styles[ `${ baseClass }__feature-value` ] }>
              <Text
                className={ styles[ `${ baseClass }__feature-value-element` ] }
                variant={ 'text regular' }
              >
                { feature.value }
              </Text>
            </div>
            {/* ./Value */}
          </div>
        ))}
        {/* ./Feature Items */}
      </div>
      {/* ./Features */}

      {/* CTA ( Bottom ) */}
      {( layout !== 5 ) && renderCTA() }
      {/* ./CTA ( Bottom ) */}
    </div>
  );
}
