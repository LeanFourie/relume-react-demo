// Packages & Modules
import styles from './cta-banner-layout-1.module.scss';
import { useState } from 'react';

// Components
import {
  Button,
  Image,
  Input,
  Text
} from '../../../';

// Definitions
import type { TCtaBannerLayout1Props } from './cta-banner-layout-1.definitions';

// Component
/**
 * NAME Component
 * 
 * The `NAME` component description...
 * Composition...
 * 
 * @component
 * @example
 * <NAME />
 * 
 * @param { PROPS } props - The properties for configuring the NAME component.
 * 
 * @returns { JSX.Element } - The NAME component is being returned as a JSX element.
 */
export const CtaBannerLayout1 = ( props: TCtaBannerLayout1Props ): JSX.Element => {
  // #region - PROPS
  const {
    image,
    paragraph,
    splitContent = false,
    textAlign = 'left',
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
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Content */}
        <div className={`
          ${ styles[ `${ baseClass }__content` ] }
          ${ styles[ `${ baseClass }__content--align-${ textAlign }` ] }
          ${ splitContent ? styles[ `${ baseClass }__content--is-split` ] : '' }
        `}>
          {/* Title */}
          <div className={ styles[ `${ baseClass }__title` ] }>
            <Text
              className={ styles[ `${ baseClass }__title-element` ] }
              textAlign={ splitContent ? 'left' : textAlign }
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
                textAlign={ splitContent ? 'left' : textAlign }
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
                ${ styles[ `${ baseClass }__actions--align-${ textAlign }` ] }
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
                      textAlign={ splitContent ? 'left' : textAlign }
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
 * - CTA / 21
 * - CTA / 22
 * - CTA / 23
 * - CTA / 24
 * - CTA / 31
 * - CTA / 32
 */
