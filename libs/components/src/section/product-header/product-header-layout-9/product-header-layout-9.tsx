// Packages & Modules
import { useAccordion } from '@relume-demo/hooks';
import {
  generateAccordionIds,
  handleAccordionPanelClick
} from '@relume-demo/utils';
import styles from './product-header-layout-9.module.scss';
import { motion } from 'framer-motion';

// Components
import {
  Breadcrumbs,
  Button,
  Icon,
  Text,
  Video
} from '../../../';

// Definitions
import type { TProductHeaderLayout9Props } from './product-header-layout-9.definitions';

// Component
/**
 * ProductHeaderLayout9 Component
 * 
 * The `ProductHeaderLayout9` component description...
 * Composition...
 * 
 * @component
 * @example
 * <ProductHeaderLayout9
 *   description={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.' }
 *   details={[{
 *     heading: 'Details',
 *     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
 *   }]}
 *   includes={[ 'Feature text goes here' ]},
 *   name={ 'Digital product name' }
 *   note={ '30-Day Money-Back Guarantee' }
 *   onAddToCartClick={ () => {} }
 *   onBuyNowClick={ () => {} }
 *   price={{
 *     default: 50,
 *     discount: 50,
 *     sale: 25
 *   }}
 *   rating={ 3.5 }
 *   reviews={ 10 }
 *   video={{
 *     autoPlay: false,
 *     className: '',
 *     fit: 'contain',
 *     videoUri: '/videos/video_placeholder-ocean.mp4'
 *   }}
 * />
 * 
 * @param { TProductHeaderLayout9Props } props - The properties for configuring the ProductHeaderLayout9 component.
 * 
 * @returns { JSX.Element } - The ProductHeaderLayout9 component is being returned as a JSX element.
 */
export const ProductHeaderLayout9 = ( props: TProductHeaderLayout9Props ): JSX.Element => {
  // #region - PROPS
  const {
    description,
    details,
    includes,
    name,
    note,
    onAddToCartClick,
    onBuyNowClick,
    price,
    rating,
    reviews,
    video
  } = props;
  // #endregion

  // #region - HOOKS
  const {
    activePanel,
    panels,
    handlePanelClick
  } = useAccordion( generateAccordionIds( details, 'heading' ) );
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'section';
  /**
   * Gets and stores the currency symbol value stored globally.
   */
  const currency: string = import.meta.env.VITE_CURRENCY_SYMBOL;

  // #region - METHODS
  /**
   * Handles click events on the `Add to cart` button.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleAddToCartClick = (): void => {
    onAddToCartClick();
  }
  /**
   * Handles click events on the `Buy now` button.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleBuyNowClick = (): void => {
    onBuyNowClick();
  }
  /**
   * Handles click events on the accordion panel.
   * 
   * @param { React.MouseEvent< HTMLDivElement, MouseEvent > } event - The click event from the accordion trigger.
   * @param { string } panelId - The panel id from the clicked accordion.
   * 
   * @returns { void } - Returns nothing.
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
  // #endregion

  // #region - HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Details */}
        <div className={ styles[ `${ baseClass }__details` ] }>
          {/* Text */}
          <div className={ styles[ `${ baseClass }__text` ] }>
            {/* Breadcrumbs */}
            <div className={ styles[ `${ baseClass }__breadcrumbs` ] }>
              <Breadcrumbs />
            </div>
            {/* ./Breadcrumbs */}
            {/* Name */}
            <div className={ styles[ `${ baseClass }__name` ] }>
              <Text
                className={ styles[ `${ baseClass }__name-element` ] }
                fontWeight={ 'bold' }
                variant={ 'heading medium' }
              >
                { name }
              </Text>
            </div>
            {/* ./Name */}
            {/* Description */}
            <div className={ styles[ `${ baseClass }__description` ] }>
              <Text
                className={ styles[ `${ baseClass }__description-element` ] }
                renderAs={ 'span' }
                variant={ 'text regular' }
              >
                <span dangerouslySetInnerHTML={{ __html: description }} />
              </Text>
            </div>
            {/* ./Description */}
            {/* Includes */}
            <div className={ styles[ `${ baseClass }__includes` ] }>
              {/* Title */}
              <div className={ styles[ `${ baseClass }__includes-title` ] }>
                <Text
                  className={ styles[ `${ baseClass }__includes-title-element` ] }
                  fontWeight={ 'semibold' }
                  variant={ 'text medium' }
                >
                  Includes:
                </Text>
              </div>
              {/* ./Title */}
              {/* List */}
              <div className={ styles[ `${ baseClass }__includes-list` ] }>
                { includes.map(( include, index: number ) => (
                  <div
                    key={ `${ include } ${ index }` }
                    className={ styles[ `${ baseClass }__include` ] }
                  >
                    {/* Icon */}
                    <div className={ styles[ `${ baseClass }__include-icon` ] }>
                      <Icon
                        className={ styles[ `${ baseClass }__include-icon-element` ] }
                        name={ 'check' }
                        type={ 'text' }
                      />
                    </div>
                    {/* ./Icon */}
                    {/* Text */}
                    <div className={ styles[ `${ baseClass }__include-text` ] }>
                      <Text
                        className={ styles[ `${ baseClass }__include-text-element` ] }
                        variant={ 'text regular' }
                      >
                        { include }
                      </Text>
                    </div>
                    {/* ./Text */}
                  </div>
                ))}
              </div>
              {/* ./List */}
            </div>
            {/* Includes */}
          </div>
          {/* ./Text */}

          {/* Controls */}
          <div className={ styles[ `${ baseClass }__controls` ] }>
            {/* Video */}
            <div className={ styles[ `${ baseClass }__video` ] }>
              <Video
                { ...video }
                className={ styles[ `${ baseClass }__video-element` ] }
                fit={ 'cover' }
              />
            </div>
            {/* ./Video */}
            {/* Price */}
            <div className={ styles[ `${ baseClass }__price` ] }>
              {( price.sale ) && (
                <Text
                  className={`
                    ${ styles[ `${ baseClass }__price-element` ] }
                    ${ styles[ `${ baseClass }__price-element--sale` ] }
                  `}
                  fontWeight={ 'bold' }
                  variant={ 'heading small' }
                >
                  { currency } { price.sale.toFixed( 2 ) }
                </Text>
              )}
              <Text
                className={`
                  ${ styles[ `${ baseClass }__price-element` ] }
                  ${ styles[ `${ baseClass }__price-element--default` ] }
                  ${ price.sale ? styles[ `${ baseClass }__price-element--is-disabled` ] : '' }
                `}
                fontWeight={ 'bold' }
                variant={ ( price.discount ) ? 'heading tiny' : 'heading regular' }
              >
                { currency } { price.default.toFixed( 2 ) }
              </Text>
            </div>
            {/* ./Price */}
            {/* Rating */}
            {( rating || reviews ) && (
              <div className={ styles[ `${ baseClass }__rating` ] }>
                {/* Stars */}
                {( rating ) && (
                  <div className={ styles[ `${ baseClass }__rating-stars` ] }>
                    { [ ...Array( 5 ) ].map(( _, index: number ) => (
                      <div
                        key={ `${ index }` }
                        className={`
                          ${ styles[ `${ baseClass }__rating-star` ] }
                          ${ ( index + 1 <= Math.floor( rating ) ) ? styles[ `${ baseClass }__rating-star--is-filled` ] : '' }
                        `}
                      >
                        <Icon
                          className={ styles[ `${ baseClass }__rating-star-element` ] }
                          name={ ( index + 0.5 === rating ) ? 'star_half' : 'star' }
                          type={ 'text' }
                        />
                      </div>
                    ))}
                  </div>
                )}
                {/* ./Stars */}
                {/* Text */}
                <div className={ styles[ `${ baseClass }__rating-text` ] }>
                  <Text
                    className={`
                      ${ styles[ `${ baseClass }__rating-text-element` ] }
                      ${ rating ? styles[ `${ baseClass }__rating-text-element--has-rating` ] : '' }
                    `}
                    variant={ 'text small' }
                  >
                    { rating && `(${ rating } stars)` } <span>{ reviews } reviews</span>
                  </Text>
                </div>
                {/* ./Text */}
              </div>
            )}
            {/* ./Rating */}
            {/* Actions */}
            <div className={ styles[ `${ baseClass }__actions` ] }>
              {/* Add to Cart */}
              <div className={ styles[ `${ baseClass }__action` ] }>
                <Button
                  onClick={ handleAddToCartClick }
                  accessibleLabel={ 'Add product to cart' }
                  className={ styles[ `${ baseClass }__action-element` ] }
                  isFullWidth={ true }
                  label={ 'Add to cart' }
                  size={ 'lg' }
                  type={ 'text' }
                />
              </div>
              {/* ./Add to Cart */}
              {/* Buy Now */}
              <div className={ styles[ `${ baseClass }__action` ] }>
                <Button
                  onClick={ handleBuyNowClick }
                  accessibleLabel={ 'Buy product now' }
                  className={ styles[ `${ baseClass }__action-element` ] }
                  isFullWidth={ true }
                  label={ 'Buy now' }
                  size={ 'lg' }
                  type={ 'text' }
                  variant={ 'outlined' }
                />
              </div>
              {/* ./Buy Now */}
            </div>
            {/* ./Actions */}
            {/* Note */}
            {( note ) && (
              <div className={ styles[ `${ baseClass }__note` ] }>
                <Text
                  className={ styles[ `${ baseClass }__note-element` ] }
                  textAlign={ 'center' }
                  variant={ 'text tiny' }
                >
                  { note }
                </Text>
              </div>
            )}
            {/* ./Note */}
          </div>
          {/* ./Controls */}
        </div>
        {/* ./Details */}

        {/* Information */}
        <div className={ styles[ `${ baseClass }__information` ] }>
          {/* Title */}
          <div className={ styles[ `${ baseClass }__information-title` ] }>
            <Text
              className={ styles[ `${ baseClass }__information-title-element` ] }
              fontWeight={ 'bold' }
              variant={ 'heading small' }
            >
              More information
            </Text>
          </div>
          {/* ./Title */}
          {/* Accordions */}
          <div className={ styles[ `${ baseClass }__accordions` ] }>
            { details.map(( detail, index: number ) => (
              <div
                key={ `${ detail.heading } ${ index }` }
                className={`
                  ${ styles[ `${ baseClass }__accordion` ] }
                  ${ activePanel === detail.heading ? styles[ `${ baseClass }__accordion--is-active` ] : '' }
                `}
              >
                {/* Header */}
                <div
                  onClick={ ( event ) => handleAccordionItemClick( event, detail.heading ) }
                  className={ styles[ `${ baseClass }__accordion-header` ] }
                >
                  {/* Title */}
                  <div className={ styles[ `${ baseClass }__accordion-title` ] }>
                    <Text
                      className={ styles[ `${ baseClass }__accordion-title-element` ] }
                      fontWeight={ 'bold' }
                      variant={ 'text medium' }
                    >
                      { detail.heading }
                    </Text>
                  </div>
                  {/* ./Title */}
                  {/* Icon */}
                  <div className={ styles[ `${ baseClass }__accordion-icon` ] }>
                    { [ ...Array( 2 ) ].map(( _, idx: number ) => (
                      <div
                        key={ idx }
                        className={`
                          ${ styles[ `${ baseClass }__accordion-icon-handle` ] }
                          ${ styles[ `${ baseClass }__accordion-icon-handle--${ idx + 1 }` ] }
                        `}
                      />
                    ))}
                  </div>
                  {/* ./Icon */}
                </div>
                {/* ./Header */}
                {/* Body */}
                <motion.div
                  className={ styles[ `${ baseClass }__accordion-body` ] }
                  animate={ panels?.[ detail.heading ]?.animation || {} }
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  {/* Inner */}
                  <div className={ styles[ `${ baseClass }__accordion-body-inner` ] }>
                    <Text
                      className={ styles[ `${ baseClass }__accordion-body-element` ] }
                      variant={ 'text regular' }
                    >
                      { detail.description }
                    </Text>
                  </div>
                  {/* ./Inner */}
                </motion.div>
                {/* ./Body */}
              </div>
            ))}
          </div>
          {/* ./Accordions */}
        </div>
        {/* ./Information */}
      </div>
      {/* ./Inner */}
    </div>
  );
  // #endregion
}
