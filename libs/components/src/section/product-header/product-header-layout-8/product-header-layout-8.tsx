// Packages & Modules
import { toSnakeCase } from '@relume-demo/utils';
import styles from './product-header-layout-8.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Components
import {
  ProductBadge,
  Breadcrumbs,
  Button,
  Icon,
  Image,
  Input,
  Tabs,
  Text,
  VariantOptions
} from '../../../';

// Definitions
import type { IProductVariantOption } from '@relume-demo/utils';
import type { TTabsProps } from '../../../';
import type { TProductHeaderLayout8Props } from './product-header-layout-8.definitions';

// Component
/**
 * ProductHeaderLayout8 Component
 * 
 * The `ProductHeaderLayout8` component description...
 * Composition...
 * 
 * @component
 * @example
 * <ProductHeaderLayout8
 *   description={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' }
 *   details={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.' }
 *   images={[{
 *     alt: '',
 *     src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *   }]}
 *   name={ 'Product name' }
 *   onAddToCartClick={ () => {} }
 *   onBuyNowClick={ () => {} }
 *   price={{
 *     default: 50.00,
 *     discount: 50,
 *     sale: 25.00
 *   }}
 *   returns={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.' }
 *   shipping={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.' }
 * />
 * 
 * @param { TProductHeaderLayout8Props } props - The properties for configuring the ProductHeaderLayout8 component.
 * 
 * @returns { JSX.Element } - The ProductHeaderLayout8 component is being returned as a JSX element.
 */
export const ProductHeaderLayout8 = ( props: TProductHeaderLayout8Props ): JSX.Element => {
  // #region - PROPS
  const {
    badges,
    description,
    details,
    images,
    maxQtySelect,
    name,
    note,
    onAddToCartClick,
    onBuyNowClick,
    price,
    rating,
    returns,
    reviews,
    shipping,
    variants
  } = props;
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
  /**
   * Stores an array of available tab items.
   */
  const tabs: TTabsProps[ 'tabs' ] = [
    {
      label: 'Details',
      content: (
        <Text
          className={ styles[ `${ baseClass }__accordion-body-element` ] }
          variant={ 'text regular' }
        >
          { details }
        </Text>
      )
    },
    {
      label: 'Shipping',
      content: (
        <Text
          className={ styles[ `${ baseClass }__accordion-body-element` ] }
          variant={ 'text regular' }
        >
          { shipping }
        </Text>
      )
    },
    {
      label: 'Returns',
      content: (
        <Text
          className={ styles[ `${ baseClass }__accordion-body-element` ] }
          variant={ 'text regular' }
        >
          { returns }
        </Text>
      )
    }
  ];
  // #endregion

  // #region - STATES
  /**
   * Gets and sets the index position of the active image item.
   */
  const [
    _activeImageIndex,
    _setActiveImageIndex
  ] = useState< number >( 0 );
  /**
   * Gets and sets the quantity form field value.
   */
  const [
    _quantity,
    _setQuantity
  ] = useState< number >( 1 );
  /**
   * Gets and sets the user selected variant options.
   */
  const [
    _variantOptions,
    _setVariantOptions
  ] = useState<{ [ key: string ]: IProductVariantOption }>( {} );
  // #endregion

  // METHODS
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
   * Handles value changes on the quantity form field.
   * 
   * @param { string } value - The new value emitted from the form field.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleQtyChange = ( value: string ): void => {
    _setQuantity(
      parseInt( value )
    );
  }
  /**
   * Handles the selection of product variant options.
   * 
   * @param { IProductVariantOption } option - The chosen variant option value
   * @param { string } title - The title value of the selected variant options group.
   * 
   * @returns { void } - Returns nothing.
   */
  const setVariantOptions = (
    option: IProductVariantOption,
    title: string
  ): void => {
    // Get the selected variant options
    const options: {
      [ key: string ]: IProductVariantOption
    } = _variantOptions;
    // Create an object key name using the variant group title value
    const key: string = toSnakeCase( title );

    // Add the selected variant option to the select options...
    // as a value under the newly created object key
    options[ key ] = option;

    // Update the selected variant options
    _setVariantOptions({ ...options });
  }
  /**
   * Handles click events on the component image items.
   * 
   * @param { number } index - The index position of the clicked image item.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleImageClick = ( index: number ): void => {
    _setActiveImageIndex( index );
  }
  // #endregion

  // #region - HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Product */}
        <div className={ styles[ `${ baseClass }__product` ] }>
          {/* Details */}
          <div className={ styles[ `${ baseClass }__details` ] }>
            {/* Breadcrumbs */}
            <div className={ styles[ `${ baseClass }__breadcrumbs` ] }>
              <Breadcrumbs />
            </div>
            {/* ./Breadcrumbs */}
            {/* Info */}
            <div className={ styles[ `${ baseClass }__info` ] }>
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
                    { currency } { price.sale }
                  </Text>
                )}
                <Text
                  className={`
                    ${ styles[ `${ baseClass }__price-element` ] }
                    ${ styles[ `${ baseClass }__price-element--default` ] }
                    ${ price.sale ? styles[ `${ baseClass }__price-element--is-disabled` ] : '' }
                  `}
                  fontWeight={ 'bold' }
                  variant={ 'heading small' }
                >
                  { currency } { price.default }
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
                      className={ styles[ `${ baseClass }__rating-text-element` ] }
                      variant={ 'text small' }
                    >
                      { rating && `(${ rating } stars)` } <span>{ reviews } reviews</span>
                    </Text>
                  </div>
                  {/* ./Text */}
                </div>
              )}
              {/* ./Rating */}
              {/* Description */}
              <div className={ styles[ `${ baseClass }__description` ] }>
                <Text
                  className={ styles[ `${ baseClass }__description-element` ] }
                  variant={ 'text regular' }
                >
                  { description }
                </Text>
              </div>
              {/* ./Description */}
            </div>
            {/* ./Info */}
            
            {/* Tabs */}
            <div className={ styles[ `${ baseClass }__tabs` ] }>
              <Tabs tabs={ tabs } />
            </div>
            {/* ./Tabs */}
          </div>
          {/* ./Details */}

          {/* Image */}
          <div className={ styles[ `${ baseClass }__images` ] }>
            {/* Active */}
            <div className={ styles[ `${ baseClass }__images-active` ] }>
              {/* Inner */}
              <motion.div
                className={ styles[ `${ baseClass }__images-active-inner` ] }
                animate={{
                  translateX: `${ _activeImageIndex * -100 }%`
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 28
                }}
              >
                { images.map(( image, index: number ) => (
                  <div
                    key={ `${ image.src } ${ index }` }
                    className={`
                      ${ styles[ `${ baseClass }__images-item` ] }
                      ${ styles[ `${ baseClass }__images-item--main` ] }
                    `}
                  >
                    <Image
                      { ...image }
                      className={ styles[ `${ baseClass }__images-element` ] }
                      fit={ 'cover' }
                    />
                  </div>
                ))}
              </motion.div>
              {/* ./Inner */}
              {/* Discount */}
              {( price.discount || ( badges && badges.length > 0 ) ) && (
                <div className={ styles[ `${ baseClass }__images-badges` ] }>
                  {( badges && badges.length > 0 ) && (
                    <>
                      { badges.map(( badge, index: number ) => (
                        <div
                          key={ `${ badge.label } ${ index }` }
                          className={ styles[ `${ baseClass }__images-badge` ] }
                        >
                          <ProductBadge
                            className={ styles[ `${ baseClass }__images-badge-element` ] }
                            color={ badge.color || 'primary' }
                            label={ badge.label }
                            shade={ badge.shade || 'dark' }
                          />
                        </div>
                      ))}
                    </>
                  )}
                  {( price.discount ) && (
                    <div className={ styles[ `${ baseClass }__images-badge` ] }>
                      <ProductBadge
                        className={ styles[ `${ baseClass }__images-badge-element` ] }
                        color={ 'danger' }
                        label={ `-${ price.discount }%` }
                        shade={ 'dark' }
                      />
                    </div>
                  )}
                </div>
              )}
              {/* ./Discount */}
            </div>
            {/* ./Active */}
            {/* Listing */}
            <div className={ styles[ `${ baseClass }__images-listing` ] }>
              { images.map(( image, index: number ) => (
                <div
                  onClick={ () => handleImageClick( index ) }
                  key={ `${ image.src } ${ index }` }
                  className={`
                    ${ styles[ `${ baseClass }__images-item` ] }
                    ${ styles[ `${ baseClass }__images-item--thumbnail` ] }
                    ${ _activeImageIndex === index ? styles[ `${ baseClass }__images-item--is-active` ] : '' }
                  `}
                >
                  <Image
                    { ...image }
                    className={ styles[ `${ baseClass }__images-element` ] }
                    fit={ 'cover' }
                  />
                </div>
              ))}
            </div>
            {/* ./Listing */}
          </div>
          {/* ./Image */}

          {/* Config */}
          <div className={ styles[ `${ baseClass }__config` ] }>
            {/* Variants */}
            {( variants && variants.length > 0 ) && (
              <div className={ styles[ `${ baseClass }__variants` ] }>
                { variants.map(( variant, index: number ) => (
                  <div
                    key={ `${ index }` }
                    className={ styles[ `${ baseClass }__variant` ] }
                  >
                    <VariantOptions
                      { ...variant }
                      returnSelectedOption={ ( option ) => setVariantOptions( option, variant.title ) }
                    />
                  </div>
                ))}
              </div>
            )}
            {/* ./Variants */}
            {/* Quantity */}
            <div className={ styles[ `${ baseClass }__quantity` ] }>
              <Input
                onChange={ handleQtyChange }
                className={ styles[ `${ baseClass }__quantity-element` ] }
                hideLabel={ false }
                label={ 'Quantity' }
                max={ maxQtySelect}
                min={ 1 }
                placeholder={ '1' }
                type={ 'number' }
                value={ _quantity.toString() }
                variant={ 'outlined' }
              />
            </div>
            {/* ./Quantity */}
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
          {/* ./Config */}
        </div>
        {/* ./Product */}
      </div>
      {/* ./Inner */}
    </div>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - Product Header / 1
 */
