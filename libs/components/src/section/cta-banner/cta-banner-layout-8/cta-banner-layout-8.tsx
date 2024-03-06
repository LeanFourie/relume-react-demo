// Packages & Modules
import styles from './cta-banner-layout-8.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Components
import {
  Image,
  Text
} from '../../../';

// Definitions
import type {
  IImage,
  IPosition
} from '@relume-demo/utils';
import type { TCtaBannerLayout8Props } from './cta-banner-layout-8.definitions';
import type { MouseEvent } from 'react';

// Component
/**
 * CtaBannerLayout8 Component
 * 
 * The `CtaBannerLayout8` component is a banner section prompting users to navigate though the site.
 * The component renders a list of links with a link label and an image.
 * 
 * @component
 * @example
 * <CtaBannerLayout8
 *   links={[{
 *     label: 'Link label',
 *     href: '#',
 *     image: {
 *       src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 *       alt: ''
 *     }
 *   }]}
 *   tagline={ 'Tagline' }
 * />
 * 
 * @param { TCtaBannerLayout8Props } props - The properties for configuring the CtaBannerLayout8 component.
 * 
 * @returns { JSX.Element } - The CtaBannerLayout8 component is being returned as a JSX element.
 */
export const CtaBannerLayout8 = ( props: TCtaBannerLayout8Props ): JSX.Element => {
  // #region - PROPS
  const {
    links,
    tagline
  } = props;
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'section';
  // #endregion

  // #region - STATES
  /**
   * Stores the x and y position of the cursor.
   */
  const [
    _mousePosition,
    _setMousePosition
  ] = useState< IPosition >({
    x: 0,
    y: 0
  });
  /**
   * Stores the props to render for the selected image item.
   */
  const [
    _selectedImage,
    _setSelectedImage
  ] = useState< IImage >({ ...links[ 0 ].image });
  /**
   * Stores the index position of the active image item.
   */
  const [
    _activeImageIndex,
    _setActiveImageIndex
  ] = useState< number | undefined >( undefined );
  // #endregion

  // #region - METHODS
  /**
   * Captures the mouse position and updates the selected images whenever the cursor enters a link item.
   * 
   * @param { IImage } image - The image props of the current link being hovered over.
   * @param { number } index - The index position of the link being hovered over.
   * @param { MouseEvent } event - The mouse event emitted
   * 
   * @returns { void } - Returns nothing.
   */
  const handleMouseEnter = (
    image: IImage,
    index: number,
    event: MouseEvent
  ): void => {
    _setSelectedImage( image );
    _setActiveImageIndex( index + 1 );
    handleMouseMove( event );
  }

  /**
   * Resets the selected image state whenever the cursor leaves a link item.
   */
  const handleMouseLeave = (): void => {
    // Reset the `_setActiveImageIndex` state.
    _setActiveImageIndex( undefined );
  }

  /**
   * Captures the cursor position whenever the curser enters the component.
   * 
   * @param { MouseEvent } event - The mouse move event emitted.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleMouseMove = ( event: MouseEvent ): void => {
    // Update the saved moused position state
    _setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  }
  // #endregion

  // #region - HTML
  return (
    <div
      onMouseMove={ handleMouseMove }
      className={ styles[ baseClass ] }
    >
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Tagline */}
        <div className={ styles[ `${ baseClass }__tagline` ] }>
          <Text
            className={ styles[ `${ baseClass }__tagline-element` ] }
            fontWeight={ 'semibold' }
            textAlign={ 'center' }
            variant={ 'text regular' }
          >
            { tagline }
          </Text>
        </div>
        {/* ./Tagline */}

        {/* Links */}
        <div className={ styles[ `${ baseClass }__links` ] }>
          {/* Image */}
          <motion.div
            className={ styles[ `${ baseClass }__image` ] }
            style={{
              left: _mousePosition.x,
              top: _mousePosition.y
            }}
            animate={{
              translateX: '-50%',
              translateY: '-50%',
              scale: _activeImageIndex ? 1 : .9,
              opacity: _activeImageIndex ? 1 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 16
            }}
          >
            {( _selectedImage ) &&
              <Image
                { ..._selectedImage }
                className={ styles[ `${ baseClass }__image-element` ] }
                fit={ 'cover' }
              />
            }
          </motion.div>
          {/* ./Image */}
          {/* Links */}
          { links.map( ( link, index: number ) => (
            <motion.a
              onMouseEnter={ ( event ) => handleMouseEnter( link.image, index, event ) }
              onMouseLeave={ handleMouseLeave }
              key={ `${ link.label } ${ index }` }
              className={ styles[ `${ baseClass }__link` ] }
              href={ link.href }

              animate={{
                opacity: _activeImageIndex
                  ? _activeImageIndex ===  index + 1 ? 1 : .5
                  : 1
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 16
              }}
            >
              {/* Label */}
              <div className={ styles[ `${ baseClass }__link-label` ] }>
                <Text
                  className={ styles[ `${ baseClass }__link-label-element` ] }
                  fontWeight={ 'bold' }
                  textAlign={ 'center' }
                  variant={ 'heading extra-large' }
                >
                  { link.label }
                </Text>
              </div>
              {/* ./Label */}
            </motion.a>
          ))}
          {/* ./Links */}
        </div>
        {/* ./Links */}
      </div>
      {/* ./Inner */}
    </div>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - CTA / 37
 */
