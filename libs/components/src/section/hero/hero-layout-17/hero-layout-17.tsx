// Packages & Modules
import { generateSlidesForCarousel } from '@relume-demo/utils';
import styles from './hero-layout-17.module.scss';
import { useState } from 'react';

// Components
import {
  Carousel,
  ContentGroup,
  Image,
  Text
} from '../../../';

// Definitions
import type { THeroLayout17Props } from './hero-layout-17.definitions';

// Component
/**
 * HeroLayout17 Component
 * 
 * The `HeroLayout17` component is a page hero component useful to introduce pages.
 * The component contains a primary text content block rendered alongside a carousel with text and images.
 * 
 * @component
 * @example
 * <HeroLayout17
 *   actions={[
 *     {
 *       accessibleLabel: '',
 *       label: 'Button',
 *       onClick: () => {},
 *       type: 'text'
 *     }
 *   ]}
 *   paragraph={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' }
 *   slides={[{
 *     title: 'Short heading goes here',
 *     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
 *     image: {
 *       alt: '',
 *       src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *     }
 *   }]}
 *   title={ 'Medium length hero headline goes here' }
 * />
 * 
 * @param { THeroLayout17Props } props - The properties for configuring the HeroLayout17 component.
 * 
 * @returns { JSX.Element } - The HeroLayout17 component is being returned as a JSX element.
 */
export const HeroLayout17 = ( props: THeroLayout17Props ): JSX.Element => {
  // #region - PROPS
  const {
    actions,
    paragraph,
    slides,
    title
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
   * Stores the slides to render.
   */
  const [
    _slides,
    _setSlides
  ] = useState< THeroLayout17Props[ 'slides' ] >(
    generateSlidesForCarousel( slides )
  );
  // #endregion

  // #region - HTML
  return (
    <section className={ styles[ baseClass ] }>
      {/* Content */}
      <div className={ styles[ `${ baseClass }__content` ] }>
        <ContentGroup
          actions={ actions }
          paragraph={ paragraph }
          stackDirection={ 'vertical' }
          title={ title }
          type={ 'actions' }
        />
      </div>
      {/* ./Content */}

      {/* Slides */}
      <Carousel slidesCount={ _slides.length } >
        { _slides.map(( slide, index: number ) => (
          <div
            key={ `${ slide.title } ${ index }` }
            className={ styles[ `${ baseClass }__slide` ] }
          >
            {/* Image */}
            <div className={ styles[ `${ baseClass }__slide-image` ] }>
              <Image
                { ...slide.image }
                className={ styles[ `${ baseClass }__slide-image-element` ] }
                fit={ 'cover' }
              />
            </div>
            {/* ./Image */}
            {/* Content */}
            <div className={ styles[ `${ baseClass }__slide-text` ] }>
              <div className={ styles[ `${ baseClass }__slide-title` ] }>
                <Text
                  className={ styles[ `${ baseClass }__slide-title-element` ] }
                  fontWeight={ 'bold' }
                  variant={ 'heading tiny' }
                >
                  { slide.title }
                </Text>
              </div>
              <div className={ styles[ `${ baseClass }__slide-paragraph` ] }>
                <Text
                  className={ styles[ `${ baseClass }__slide-paragraph-element` ] }
                  variant={ 'text regular' }
                >
                  { slide.description }
                </Text>
              </div>
            </div>
            {/* ./Content */}
          </div>
        ))}
      </Carousel>
      {/* ./Slides */}
    </section>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - Header / 102
 */
