// Packages & Modules
import styles from './cta-banner-layout-3.module.scss';
import {
  useEffect,
  useState
} from 'react';

// Components
import {
  Button,
  Image,
  Input,
  Text,
  Video
} from '../../../';

// Definitions
import type { TCtaBannerLayout3Props } from './cta-banner-layout-3.definitions';

// Component
/**
 * CtaBannerLayout3 Component
 * 
 * The `CtaBannerLayout3` component is a banner component prompting users to take a specific action.
 * The component renders a primary text content block with an optional background image or video, alongside either a small form or call to action buttons.
 * 
 * @component
 * @example
 * <CtaBannerLayout3
 *   actions={[{
 *     accessibleLabel: '',
 *     label: 'Button',
 *     onClick: () => {},
 *     type: 'text'
 *   }]}
 *   paragraph={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' }
 *   title={ 'Short heading here' }
 *   type={ 'with actions' }
 * />
 * 
 * @param { TCtaBannerLayout3Props } props - The properties for configuring the CtaBannerLayout3 component.
 * 
 * @returns { JSX.Element } - The CtaBannerLayout3 component is being returned as a JSX element.
 */
export const CtaBannerLayout3 = ( props: TCtaBannerLayout3Props ): JSX.Element => {
  // #region - PROPS
  const {
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
  /**
   * Stores a boolean flag that checks whether the component has a media element to render.
   */
  const [
    _hasMedia,
    _setHasMedia
  ] = useState< boolean >(
    'image' in props ||
    'videoUri' in props ||
    'background' in props
  );
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

  // #region - EFFECTS
  useEffect(() => {
    // Update the `_hasMedia` boolean flag
    _setHasMedia(
      'image' in props ||
      'videoUri' in props ||
      'background' in props
    );
  }, [ props ]);
  // #endregion

  // #region - HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Container */}
        <div className={`
          ${ styles[ `${ baseClass }__container` ] }
          ${ _hasMedia ? styles[ `${ baseClass }__container--has-media` ] : '' }
        `}>
          {/* Content */}
          <div className={ styles[ `${ baseClass }__content` ] }>
            {/* Left Content */}
            <div className={ styles[ `${ baseClass }__content-group` ] }>
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
            </div>
            {/* ./Left Content */}
            {/* Right Content */}
            <div className={ styles[ `${ baseClass }__content-group` ] }>
              {/* Paragraph */}
              <div className={ styles[ `${ baseClass }__paragraph` ] }>
                <Text
                  className={ styles[ `${ baseClass }__paragraph-element` ] }
                  variant={ 'text regular' }
                >
                  { paragraph }
                </Text>
              </div>
              {/* ./Paragraph */}
              {/* Actions */}
              {( type === 'with actions' ) && (
                <div className={ styles[ `${ baseClass }__actions` ] }>
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
              {( type === 'with form' ) && (
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
            {/* ./Right Content */}
          </div>
          {/* ./Content */}

          {/* Media */}
          {( _hasMedia ) && (
            <div className={ styles[ `${ baseClass }__media` ] }>
              {/* Image */}
              {( 'image' in props ) && (
                <div className={ styles[ `${ baseClass }__image` ] }>
                  <Image
                    { ...props.image }
                    className={ styles[ `${ baseClass }__image-element` ] }
                    fit={ 'cover' }
                  />
                </div>
              )}
              {/* ./Image */}
              {/* Image */}
              {( 'videoUri' in props ) && (
                <div className={ styles[ `${ baseClass }__video` ] }>
                  <Video
                    autoPlay={ true }
                    className={ styles[ `${ baseClass }__image-element` ] }
                    fit={ 'cover' }
                    videoUri={ props.videoUri }
                  />
                </div>
              )}
              {/* ./Image */}
              {/* Image */}
              {( 'background' in props ) && (
                <div className={ styles[ `${ baseClass }__background` ] }>
                  { props.background }
                </div>
              )}
              {/* ./Image */}
            </div>
          )}
          {/* ./Media */}
        </div>
        {/* ./Container */}
      </div>
      {/* ./Inner */}
    </div>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - CTA / 13
 * - CTA / 14
 * - CTA / 15
 * - CTA / 16
 * - CTA / 17
 * - CTA / 18
 */