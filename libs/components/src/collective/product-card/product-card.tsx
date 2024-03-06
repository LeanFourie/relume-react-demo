// Packages & Modules
import styles from './product-card.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Components
import {
  Button,
  Image,
  ProductBadge,
  Text
} from '../../';

// Definitions
import type { TProductCardProps } from './product-card.definitions';

// Component
/**
 * ProductCard Component
 * 
 * The `ProductCard` component is a card component showcasing a product item.
 * It is composed of text elements, and visual elements to showcase the product properties.
 * 
 * @component
 * @example
 * <ProductCard
 *   id={ 'Card' }
 *   image={{
 *     alt: '',
 *     src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *   }}
 *   name={ 'Product 1' }
 *   onAddToCartClick={ () => {} }
 *   onWishlistClick={ () => {} }
 *   price={{
 *     default: 50.00,
 *     discount: 50,
 *     sale: 25.00
 *   }}
 *   badges={[{
 *     label: 'Free shipping'
 *   }]}
 *   controls={{
 *     addToCart: true,
 *     wishlist: false
 *   }}
 *   description={ 'Lorem ipsum dolor sit amet' }
 *   isWishListed={ false }
 *   textAlign={ 'left' }
 * />
 * 
 * @param { TProductCardProps } props - The properties for configuring the ProductCard component.
 * 
 * @returns { JSX.Element } - The ProductCard component is being returned as a JSX element.
 */
export const ProductCard = ( props: TProductCardProps ): JSX.Element => {
  // PROPS
  const {
    badges,
    controls = { addToCart: true, wishlist: false },
    description,
    id,
    isWishListed = false,
    image,
    name,
    onAddToCartClick,
    onWishlistClick,
    price,
    textAlign = 'left'
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'card';
  /**
   * Stores the globally configured currency value as a local string variable.
   */
  const currency: string = import.meta.env.VITE_CURRENCY_SYMBOL;

  // STATES
  /**
   * Stores the index position of the currently active image item.
   */
  const [
    _activeImageIndex,
    _setActiveImageIndex
  ] = useState< number >( 0 );

  // METHODS
  /**
   * Handles click events on the wishlist button.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleWishlistClick = (): void => {
    // Emit the ID of the product when the button is clicked
    onWishlistClick( id );
  }

  /**
   * Handles click events on the add to cart button.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleAddToCartClick = (): void => {
    // Emit the ID of the product when the button is clicked
    onAddToCartClick( id );
  }

  /**
   * Handles click events on the image indicators.
   * 
   * @param { index } index - The index position of the indicator item clicked.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleImageIndicatorClick = ( index: number ): void => {
    // Update the active image index value based on the idex param
    _setActiveImageIndex( index );
  }

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Image */}
      <div className={`
        ${ styles[ `${ baseClass }__image` ] }
        ${ ( Array.isArray( image ) ) ? styles[ `${ baseClass }__image--is-array` ] : '' }
      `}>
        {( !Array.isArray( image ) ) &&
          <div className={ styles[ `${ baseClass }__image-inner` ] }>
            <Image
              { ...image }
              className={ styles[ `${ baseClass }__image-element` ] }
              fit={ 'cover' }
            />
          </div>
        }

        {( Array.isArray( image ) ) && (
          <>
            {/* Image Items */}
            { image.map(( img, index: number ) => (
              <motion.div
                key={ `${ img.src } ${ index }` }
                className={ styles[ `${ baseClass }__image-inner` ] }
                animate={{
                  translateX: `-${ _activeImageIndex * 100 }%`
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 28
                }}
              >
                <Image
                  { ...img }
                  className={ styles[ `${ baseClass }__image-element` ] }
                  fit={ 'cover' }
                />
              </motion.div>
            ))}
            {/* ./Image Items */}
            
            {/* Indicators */}
            <div className={ styles[ `${ baseClass }__image-indicators` ] }>
              { image.map(( img, index: number ) => (
                <button
                  onClick={() => handleImageIndicatorClick( index ) }
                  key={ `${ img.src } ${ index }` }
                  className={`
                    ${ styles[ `${ baseClass }__image-indicator` ] }
                    ${ ( _activeImageIndex === index ) ? styles[ `${ baseClass }__image-indicator--is-active` ] : '' }
                  `}
                />
              ))}
            </div>
            {/* ./Indicators */}
          </>
        )}
      </div>
      {/* ./Image */}

      {/* Wishlist & Badges */}
      {( ( badges && badges.length > 0 ) || ( controls?.wishlist && !controls?.addToCart ) ) && (
        <div className={`
          ${ styles[ `${ baseClass }__floating-items` ] }
          ${ ( controls?.wishlist && !controls?.addToCart ) ? styles[ `${ baseClass }__floating-items--has-wishlist` ] : '' }
        `}>
          {/* Badges */}
          {( badges && badges.length > 0 ) && (
            <div className={ styles[ `${ baseClass }__badges` ] }>
              { badges.map(( badge, index: number ) => (
                <div
                  key={ `${ badge } ${ index }` }
                  className={ styles[ `${ baseClass }__badge` ] }
                >
                  <ProductBadge
                    { ...badge }
                    className={ styles[ `${ baseClass }__badge-element` ] }
                    size={ 'sm' }
                  />
                </div>
              ))}
              {( price.discount ) && (
                <div className={ styles[ `${ baseClass }__badge` ] }>
                  <ProductBadge
                    className={ styles[ `${ baseClass }__badge-element` ] }
                    color={ 'danger' }
                    label={ `-${ price.discount }%` }
                    shade={ 'dark' }
                    size={ 'sm' }
                  />
                </div>
              )}
            </div>
          )}
          {/* ./Badges */}
          {/* Wishlist */}
          {( controls?.wishlist && !controls?.addToCart ) && (
            <div className={ styles[ `${ baseClass }__wishlist` ] }>
              <Button
                onClick={ handleWishlistClick }
                accessibleLabel={ 'Add product to your wishlist' }
                className={ styles[ `${ baseClass }__wishlist-element` ] }
                color={ isWishListed ? 'danger' : 'white' }
                icon={{
                  name: 'favorite',
                  type: 'text'
                }}
                type={ 'icon' }
                variant={ 'ghost' }
              />
            </div>
          )}
          {/* ./Wishlist */}
        </div>
      )}
      {/* ./Wishlits & Badges */}

      {/* Text */}
      <div className={ styles[ `${ baseClass }__text` ] }>
        {/* Name */}
        <div className={ styles[ `${ baseClass }__name` ] }>
          <Text
            className={ styles[ `${ baseClass }__name-element` ] }
            fontWeight={ 'semibold' }
            textAlign={ textAlign }
            variant={ 'text medium' }
          >
            { name }
          </Text>
        </div>
        {/* ./Name */}
        {/* Description */}
        {( description ) && (
          <div className={ styles[ `${ baseClass }__description` ] }>
            <Text
              className={ styles[ `${ baseClass }__description-element` ] }
              textAlign={ textAlign }
              variant={ 'text small' }
            >
              { description }
            </Text>
          </div>
        )}
        {/* ./Description */}
        {/* Price */}
        <div className={`
          ${ styles[ `${ baseClass }__price` ] }
          ${ styles[ `${ baseClass }__price--align-${ textAlign }` ] }
        `}>
          {( price.sale ) && (
            <Text
              className={`
                ${ styles[ `${ baseClass }__price-element` ] }
                ${ styles[ `${ baseClass }__price-element--sale` ] }
              `}
              fontWeight={ 'bold' }
              variant={ 'text large' }
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
            variant={ ( price.discount ) ? 'text medium' : 'text large' }
          >
            { currency } { price.default.toFixed( 2 ) }
          </Text>
        </div>
        {/* ./Price */}
      </div>
      {/* ./Text */}

      {/* Actions */}
      {( controls?.addToCart ) && (
        <div className={ styles[ `${ baseClass }__actions` ] }>
          {/* Add to Cart */}
            <div className={`
              ${ styles[ `${ baseClass }__action` ] }
              ${ styles[ `${ baseClass }__action--add-to-cart` ] }
            `}>
            <Button
              onClick={ handleAddToCartClick }
              accessibleLabel={ 'Add product to your cart' }
              className={ styles[ `${ baseClass }__action-element` ] }
              color={ 'primary' }
              isFullWidth={ true }
              label={ 'Add to Cart' }
              shade={ 'light' }
              type={ 'text' }
              variant={ 'filled' }
            />
          </div>
          {/* ./Add to Cart */}
          {/* Wishlist */}
          {( controls?.wishlist ) && (
            <div className={`
              ${ styles[ `${ baseClass }__action` ] }
              ${ styles[ `${ baseClass }__action--wishlist` ] }
            `}>
              <Button
                onClick={ handleWishlistClick }
                accessibleLabel={ 'Add product to your wishlist' }
                className={ styles[ `${ baseClass }__action-element` ] }
                color={ isWishListed ? 'danger' : 'invert' }
                icon={{
                  name: 'favorite',
                  type: 'text'
                }}
                type={ 'icon' }
                variant={ 'ghost' }
              />
            </div>
          )}
          {/* ./Wishlist */}
        </div>
      )}
      {/* ./Actions */}
    </div>
  );
}
