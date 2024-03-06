// Packages & Modules
import styles from './cta-banner-layout-5.module.scss';
import { useState } from 'react';

// Components
import {
  Button,
  Image,
  Input,
  Text
} from '../../../';

// Definitions
import type { TCtaBannerLayout5Props } from './cta-banner-layout-5.definitions';

// Component
/**
 * CtaBannerLayout5 Component
 * 
 * The `CtaBannerLayout5` component is a banner component prompting users to take a specific action.
 * The component renders a primary text content block and an image alongside either a small form or call to action buttons.
 * 
 * @component
 * @example
 * <CtaBannerLayout5
 *   actions={[
 *     {
 *       accessibleLabel: '',
 *       label: 'Button',
 *       onClick: () => {},
 *       type: 'text'
 *     }
 *   ]}
 *   image={{
 *     alt: '',
 *     src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *   }}
 *   paragraph={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' }
 *   title={ 'Short heading here' }
 *   type={ 'with actions' }
 * />
 * 
 * @param { TCtaBannerLayout5Props } props - The properties for configuring the CtaBannerLayout5 component.
 * 
 * @returns { JSX.Element } - The CtaBannerLayout5 component is being returned as a JSX element.
 */
export const CtaBannerLayout5 = ( props: TCtaBannerLayout5Props ): JSX.Element => {
  // #region - PROPS
  const {
    image,
    isOutlined = false,
    paragraph,
    title,
    type
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
   * Stores the email address value from the input field.
   */
  const [
    _emailAddress,
    _setEmailAddress
  ] = useState< string >( '' );
  // #endregion

  // #region - METHODS
  /**
   * Emits the email address to the parent element on click.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleFormSubmit = (): void => {
    // Check if the type is NOT set to `with form`, THEN...
    // end the function.
    if ( type !== 'with form' ) return;

    // Run the callback function to emit the email address value
    props.onFormSubmit( _emailAddress );
  }
  // #endregion

  // #region - HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Inner */}
      <div className={`
        ${ styles[ `${ baseClass }__inner` ] }
        ${ isOutlined ? styles[ `${ baseClass }__inner--is-outlined` ] : '' }
      `}>
        {/* Content */}
        <div className={ styles[ `${ baseClass }__content` ] }>
          {/* Title */}
          <div className={ styles[ `${ baseClass }__title` ] }>
            <Text
              className={ styles[ `${ baseClass }__title-element` ] }
              fontWeight={ 'bold' }
              variant={ 'heading large' }
            >
              { title }
            </Text>
          </div>
          {/* ./Title */}
          {/* Body */}
          <div className={ styles[ `${ baseClass }__body` ] }>
            {/* Paragraph */}
            <div className={ styles[ `${ baseClass }__paragraph` ] }>
              <Text
                className={ styles[ `${ baseClass }__paragraph-element` ] }
                variant={ 'text medium' }
              >
                { paragraph }
              </Text>
            </div>
            {/* ./Paragraph */}
            {/* Actions */}
            {( type === 'with actions' ) && (
              <div className={`
                ${ styles[ `${ baseClass }__actions` ] }
              `}>
                { props.actions.map(( action, index: number ) => (
                  <div
                    key={ `${ action.accessibleLabel } ${ index }` }
                    className={ styles[ `${ baseClass }__action` ] }
                  >
                    <Button
                      { ...action }
                      className={ styles[ `${ baseClass }__action-element` ] }
                    />
                  </div>
                ))}
              </div>
            )}
            {/* ./Actions */}
            {/* Form */}
            {( type === 'with form') && (
              <div className={ styles[ `${ baseClass }__form` ] }>
                <div className={ styles[ `${ baseClass }__form-row` ] }>
                  <div className={ styles[ `${ baseClass }__form-input` ] }>
                    <Input
                      onChange={ ( value ) => _setEmailAddress( value ) }
                      autoComplete={ 'email' }
                      className={ styles[ `${ baseClass }__form-input-element` ] }
                      helperText={
                        _emailAddress !== '' &&
                        (
                          !_emailAddress.includes( '@' ) ||
                          !_emailAddress.includes( '.' )
                        ) ? {
                          value: 'Please enter a valid email address',
                          options: {
                            state: 'danger'
                          }
                        } : undefined
                      }
                      hideLabel={ true }
                      label={ 'Email Address' }
                      placeholder={ 'Enter your email address' }
                      value={ _emailAddress}
                      variant={ 'outlined' }
                      type={ 'email' }
                      minLength={ 0 }
                      maxLength={ 100 }
                    />
                  </div>
                  <div className={ styles[ `${ baseClass }__form-submit` ] }>
                    <Button
                      onClick={ handleFormSubmit }
                      accessibleLabel={ 'Submit newsletter subscription form' }
                      className={ styles[ `${ baseClass }__form-submit-element` ] }
                      hostClassName={ styles[ `${ baseClass }__form-submit-host` ] }
                      isDisabled={
                        _emailAddress === '' ||
                        !_emailAddress.includes( '@' ) ||
                        !_emailAddress.includes( '.' )
                      }
                      label={ 'Subscribe' }
                      type={ 'text' }
                    />
                  </div>
                </div>
                <div className={ styles[ `${ baseClass }__form-row` ] }>
                  <div className={ styles[ `${ baseClass }__form-message` ] }>
                    <Text
                      className={ styles[ `${ baseClass }__form-message-element` ] }
                      variant={ 'text tiny' }
                    >
                      { props.formMessage }
                    </Text>
                  </div>
                </div>
              </div>
            )}
            {/* ./Form */}
          </div>
          {/* ./Body */}
        </div>
        {/* ./Content */}

        {/* Image */}
        <div className={ styles[ `${ baseClass }__image` ] }>
          <Image
            { ...image }
            className={ styles[ `${ baseClass }__image-element` ] }
            fit={ 'cover' }
          />
        </div>
        {/* ./Image */}
      </div>
      {/* ./Inner */}
    </div>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - CTA / 1
 * - CTA / 2
 * - CTA / 39
 * - CTA / 40
 */
