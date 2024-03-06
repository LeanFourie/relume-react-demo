// Packages & Modules
import styles from './hero-layout-7.module.scss';

// Components
import {
  ContentGroup,
  Image,
  Video
} from '../../../';

// Definitions
import type { THeroLayout7Props } from './hero-layout-7.definitions';

// Component
/**
 * HeroLayout7 Component
 * 
 * The `HeroLayout7` component is a page hero component useful to introduce pages.
 * The component contains a primary text content block rendered alongside an image, video or custom JSX component.
 * 
 * @component
 * @example
 * <HeroLayout7
 *   actions={[
 *     {
 *       accessibleLabel: '',
 *       label: 'Button',
 *       onClick: () => {},
 *       type: 'text'
 *     }
 *   ]}
 *   paragraph={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' }
 *   title={ 'Medium length hero headline goes here'
 *   image={{
 *     alt: '',
 *     src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *   }}
 * />
 * 
 * @param { THeroLayout7Props } props - The properties for configuring the HeroLayout7 component.
 * 
 * @returns { JSX.Element } - The HeroLayout7 component is being returned as a JSX element.
 */
export const HeroLayout7 = ( props: THeroLayout7Props ): JSX.Element => {
  // #region - PROPS
  const {
    actions,
    paragraph,
    textAlign = 'left',
    textStackDirection = 'horizontal',
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
      ${ styles[ `${ baseClass }--text-stack-direction-${ textStackDirection }` ] }
    `}>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Content */}
        <div className={ styles[ `${ baseClass }__content` ] }>
          <ContentGroup
            actions={ actions }
            paragraph={ paragraph }
            stackDirection={ textStackDirection }
            textAlign={ textAlign }
            title={ title }
            type={ 'actions' }
          />
        </div>
        {/* ./Content */}

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
              className={ styles[ `${ baseClass }__video-element` ] }
              coverImageUri={ coverImageUri }
              fit={ 'cover' }
              videoUri={ videoUri }
            />
          </div>
        )}
        {/* ./Video */}

        {/* Background */}
        {( background ) && (
          <div className={ styles[ `${ baseClass }__background` ] }>
            { background }
          </div>
        )}
        {/* ./Background */}
      </div>
      {/* ./Inner */}
    </section>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - Header / 15
 * - Header / 17
 * - Header / 26
 * - Header / 28
 * - Header / 71
 * - Header / 72
 * - Header / 75
 * - Header / 82
 */