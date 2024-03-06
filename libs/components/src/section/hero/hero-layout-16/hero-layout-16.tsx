// Packages & Modules
import styles from './hero-layout-16.module.scss';

// Components
import { ContentGroup } from '../../../';

// Definitions
import type { THeroLayout16Props } from './hero-layout-16.definitions';

// Component
/**
 * HeroLayout16 Component
 * 
 * The `HeroLayout16` component is a page hero component useful to introduce pages.
 * The component contains a primary text content block.
 * 
 * @component
 * @example
 * <HeroLayout16
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
 *   title={ 'Medium length hero headline goes here' }
 * />
 * 
 * @param { THeroLayout16Props } props - The properties for configuring the HeroLayout16 component.
 * 
 * @returns { JSX.Element } - The HeroLayout16 component is being returned as a JSX element.
 */
export const HeroLayout16 = ( props: THeroLayout16Props ): JSX.Element => {
  // #region - PROPS
  const {
    action,
    input,
    message,
    onSubmit,
    paragraph,
    title
  } = props;
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'section';
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
    <section className={ styles[ baseClass ] }>
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Content */}
        <div className={ styles[ `${ baseClass }__content` ] }>
          <ContentGroup
            onSubmit={ handleSubmit }
            action={ action }
            input={ input }
            message={ message }
            paragraph={ paragraph }
            stackDirection={ 'vertical' }
            textAlign={ 'center' }
            title={ title }
            type={ 'form' }
          />
        </div>
        {/* ./Content */}
      </div>
    </section>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - Header / 97
 */
