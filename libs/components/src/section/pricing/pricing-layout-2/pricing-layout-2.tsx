// Packages & Modules
import styles from './pricing-layout-2.module.scss';

// Components
import {
  FeatureContentLayout1,
  Icon,
  PricingCard,
  Text
} from '../../../';

// Definitions
import type { TPricingLayout2Props } from './pricing-layout-2.definitions';

// Component
/**
 * PricingLayout2 Component
 * 
 * The `PricingLayout2` component is a price listing component.
 * The component renders a single price card, alongside a list of features and a primary text content block.
 * 
 * @component
 * @example
 * <PricingLayout2
 *   content={{
 *     tagline: 'Tagline',
 *     title: 'Pricing plan',
 *     paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
 *   }}
 *   pricing={
 *     name: 'Basic Plan',
 *     price: {
 *       value: '$19',
 *       recurrence: '/mo'
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
 *     description: 'Lorem ipsum dolor sit amet',
 *     layout: 7
 *   }
 *   features={[{
 *     icon: {
 *       name: 'home',
 *       type: 'text'
 *     },
 *     title: 'Key feature heading',
 *     paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
 *   }]}
 * />
 * 
 * @param { TPricingLayout2Props } props - The properties for configuring the PricingLayout2 component.
 * 
 * @returns { JSX.Element } - The PricingLayout2 component is being returned as a JSX element.
 */
export const PricingLayout2 = ( props: TPricingLayout2Props ): JSX.Element => {
  // #region - PROPS
  const {
    content,
    features,
    pricing
  } = props;
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'pricing';
  // #endregion

  // #region - HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Content */}
        <div className={ styles[ `${ baseClass }__content` ] }>
          <FeatureContentLayout1 { ...content } />
        </div>
        {/* ./Content */}

        {/* Features */}
        <div className={ styles[ `${ baseClass }__features` ] }>
          { features.map(( feature, index: number ) => (
            <div
              key={ `${ feature.title } ${ index }` }
              className={ styles[ `${ baseClass }__feature` ] }
            >
              {/* Icon */}
              <div className={ styles[ `${ baseClass }__feature-icon` ] }>
                <Icon
                  { ...feature.icon }
                  className={ styles[ `${ baseClass }__feature-icon-element` ] }
                />
              </div>
              {/* ./Icon */}
              {/* Text */}
              <div className={ styles[ `${ baseClass }__feature-text` ] }>
                {/* Title */}
                <div className={ styles[ `${ baseClass }__feature-title` ] }>
                  <Text
                    className={ styles[ `${ baseClass }__feature-title-element` ] }
                    fontWeight={ 'bold' }
                    variant={ 'heading tiny' }
                  >
                    { feature.title }
                  </Text>
                </div>
                {/* ./Title */}
                {/* Paragraph */}
                <div className={ styles[ `${ baseClass }__feature-paragraph` ] }>
                  <Text
                    className={ styles[ `${ baseClass }__feature-paragraph-element` ] }
                    variant={ 'text regular' }
                  >
                    { feature.paragraph }
                  </Text>
                </div>
                {/* /Paragraph */}
              </div>
              {/* ./Text */}
            </div>
          ))}
        </div>
        {/* ./Features */}

        {/* Pricing */}
        <div className={ styles[ `${ baseClass }__pricing` ] }>
          <PricingCard { ...pricing } />
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
 * - Pricing / 5
 */
