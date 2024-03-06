// Packages & Modules
import styles from './hero-layout-3.module.scss';

// Components
import {
  ContentGroup,
  Image,
  Video
} from '../../../';

// Definitions
import type { THeroLayout3Props } from './hero-layout-3.definitions';

// Component
/**
 * HeroLayout3 Component
 * 
 * The `HeroLayout3` component is a page hero component useful to introduce pages.
 * The component contains a primary text content block rendered on a background an image, -video or custom -JSX component.
 * 
 * @component
 * @example
 * <HeroLayout3
 *   actions={[
 *     {
 *       accessibleLabel: '',
 *       label: 'Button',
 *       onClick: () => {},
 *       type: 'text'
 *     }
 *   ]}
 *   paragraph={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' }
 *   title={ 'Medium length hero headline goes here' }
 *   image={{
 *     alt: '',
 *     src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *   }}
 * />
 * 
 * @param { THeroLayout3Props } props - The properties for configuring the HeroLayout3 component.
 * 
 * @returns { JSX.Element } - The HeroLayout3 component is being returned as a JSX element.
 */
export const HeroLayout3 = ( props: THeroLayout3Props ): JSX.Element => {
  // #region - PROPS
  const {
    actions,
    isCondensed = false,
    paragraph,
    textAlign = 'left',
    title
  } = props;
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'section';
  /**
  * Get and store the image prop values.
  */
  const image = 'image' in props ? props.image : undefined;
  /**
  * Get and store the video prop values.
  */
  const videoUri = 'videoUri' in props ? props.videoUri : undefined;
  const coverImageUri = 'coverImageUri' in props ? props.coverImageUri : undefined;
  /**
  * Get and store the custom background prop values.
  */
  const background = 'background' in props ? props.background : undefined;
  // #endregion

  // #region - HTML
  return (
    <section className={`
      ${ styles[ baseClass ] }
      ${ styles[ `${ baseClass }--text-align-${ textAlign }` ] }
      ${ isCondensed ? styles[ `${ baseClass }--is-condensed` ] : '' }
    `}>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Background */}
        <div className={ styles[ `${ baseClass }__background` ] }>
          {/* Image */}
          {( image ) && (
            <div className={ styles[ `${ baseClass }__image` ] }>
              <Image
                { ...image }
                className={ styles[ `${ baseClass }__image-element` ] }
                fit={ 'cover' }
              />
            </div>
          )}
          {/* ./Image */}
          {/* Video */}
          {( videoUri ) && (
            <div className={ styles[ `${ baseClass }__video` ] }>
              <Video
                autoPlay={ true }
                coverImageUri={ coverImageUri }
                fit={ 'cover' }
                videoUri={ videoUri }
              />
            </div>
          )}
          {/* ./Video */}
          {/* Custom Background */}
          {( background ) && (
            <div className={ styles[ `${ baseClass }__custom-bg` ] }>
              { background }
            </div>
          )}
          {/* ./Custom Background */}
        </div>
        {/* ./Background */}

        {/* Content */}
        <div className={ styles[ `${ baseClass }__content` ] }>
          <div className={ styles[ `${ baseClass }__content-inner` ] }>
            <ContentGroup
              actions={ actions }
              paragraph={ paragraph }
              textAlign={ textAlign }
              title={ title }
              type={ 'actions' }
            />
          </div>
        </div>
        {/* ./Content */}
      </div>
      {/* ./Inner */}
    </section>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - Header / 5
 * - Header / 7
 * - Header / 30
 * - Header / 33
 * - Header / 83
 * - Header / 88
 * - Header / 90
 * - Header / 98
 * - Header / 100
 */
