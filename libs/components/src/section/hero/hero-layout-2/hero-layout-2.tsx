// Packages & Modules
import styles from './hero-layout-2.module.scss';

// Components
import {
  ContentGroup,
  Image,
  Video
} from '../../../';

// Definitions
import type { THeroLayout2Props } from './hero-layout-2.definitions';

// Component
/**
 * HeroLayout2 Component
 * 
 * The `HeroLayout2` component is a page hero component useful to introduce pages.
 * The component contains a primary text content block rendered alongside an image, video or custom JSX component.
 * 
 * @component
 * @example
 * <HeroLayout2
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
 *   message: (
 *     <Text variant={ 'text tiny' }>
 *       By clicking Sign Up you're confirming that you agree with our <Link { ...linkProps } />.
 *     </Text>
 *   ),
 *   onSubmit={ () => {} }
 *   paragraph={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' }
 *   title={ 'Medium length hero headline goes here' }
 *   image={{
 *     alt: '',
 *     src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *   }}
 * />
 * 
 * @param { THeroLayout2Props } props - The properties for configuring the HeroLayout2 component.
 * 
 * @returns { JSX.Element } - The HeroLayout2 component is being returned as a JSX element.
 */
export const HeroLayout2 = ( props: THeroLayout2Props ): JSX.Element => {
  // #region - PROPS
  const {
    action,
    input,
    isCondensed = false,
    isContained = false,
    message,
    onSubmit,
    order = 'default',
    paragraph,
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
      ${ styles[ `${ baseClass }--order-${ order }` ] }
      ${ isCondensed ? styles[ `${ baseClass }--is-condensed` ] : styles[ `${ baseClass }--is-full` ] }
      ${ isContained ? styles[ `${ baseClass }--is-contained` ] : '' }
    `}>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
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

        {/* Content */}
        <div className={ styles[ `${ baseClass }__content` ] }>
          <ContentGroup
            onSubmit={ handleSubmit }
            action={ action }
            input={ input }
            message={ message }
            paragraph={ paragraph }
            title={ title }
            type={ 'form' }
          />
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
 * - Header / 2
 * - Header / 4
 * - Header / 20
 * - Header / 22
 * - Header / 38
 * - Header / 39
 * - Header / 41
 * - Header / 43
 * - Header / 85
 * - Header / 87
 * - Header / 93
 * - Header / 95
 */
