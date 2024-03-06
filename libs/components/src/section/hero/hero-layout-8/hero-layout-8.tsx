// Packages & Modules
import styles from './hero-layout-8.module.scss';

// Components
import {
  ContentGroup,
  Image,
  Video
} from '../../../';

// Definitions
import type { THeroLayout8Props } from './hero-layout-8.definitions';

// Component
/**
 * HeroLayout8 Component
 * 
 * The `HeroLayout8` component is a page hero component useful to introduce pages.
 * The component contains a primary text content block rendered alongside an image, video or custom JSX component.
 * 
 * @component
 * @example
 * <HeroLayout8
 *   action={{
 *     accessibleLabel: '',
 *     label: 'Sign up',
 *     onClick: () => {},
 *     type: 'text'
 *   }}
 *   input={{
 *     hideLabel: true,
 *     placeholder: 'Enter your email',
 *     type: 'text',
 *     value: ''
 *   }}
 *   message={(
 *     <Text variant={ 'text tiny' }>
 *       By clicking Sign Up you're confirming that you agree with our <Link { ...linkProps } />.
 *     </Text>
 *   )}
 *   onSubmit={ () => {} }
 *   paragraph={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' }
 *   textAlign={ 'left' }
 *   textStackDirection={ 'horizontal' }
 *   title={ 'Medium length hero headline goes here' }
 * />
 * 
 * @param { THeroLayout8Props } props - The properties for configuring the HeroLayout8 component.
 * 
 * @returns { JSX.Element } - The HeroLayout8 component is being returned as a JSX element.
 */
export const HeroLayout8 = ( props: THeroLayout8Props ): JSX.Element => {
  // #region - PROPS
  const {
    action,
    input,
    message,
    onSubmit,
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

  // #region - METHODS
  /**
   * Handles submit events emitted from the content group form.
   * 
   * @param { string } value - The input field value.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleSubmit = ( value: string ): void => {
    // Emit the `onSubmit` prop
    onSubmit( value );
  }
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
            onSubmit={ handleSubmit }
            action={ action }
            input={ input }
            message={ message }
            paragraph={ paragraph }
            stackDirection={ textStackDirection }
            textAlign={ textAlign }
            title={ title }
            type={ 'form' }
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
 * - Header / 16
 * - Header / 18
 * - Header / 27
 * - Header / 29
 * - Header / 73
 * - Header / 74
 */
