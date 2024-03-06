// Packages & Modules
import styles from './value-added-bar-layout-1.module.scss';
import {
  useEffect,
  useState
} from 'react';

// Components
import {
  Button,
  Icon,
  Input,
  Text
} from '../../../';

// Definitions
import type { TValueAddedBarLayout1Props } from './value-added-bar-layout-1.definitions';

// Component
/**
 * ValueAddedBarLayout1 Component
 * 
 * The `ValueAddedBarLayout1` component is an informational component placed at the top of the screen.
 * It consists of text elements, visual elements and a sign up form.
 * 
 * @component
 * @example
 * <ValueAddedBarLayout1
 *   icon={{
 *     name: 'home',
 *     type: 'text'
 *   }}
 *   message={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
 *   title={ 'Medium length banner heading goes here' }
 * />
 * 
 * @param { TValueAddedBarLayout1Props } props - The properties for configuring the ValueAddedBarLayout1 component.
 * 
 * @returns { JSX.Element } - The ValueAddedBarLayout1 component is being returned as a JSX element.
 */
export const ValueAddedBarLayout1 = ( props: TValueAddedBarLayout1Props ): JSX.Element => {
  // PROPS
  const {
    icon,
    isCondensed = false,
    message,
    onSubmit,
    title
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'vab';

  // STATES
  /**
   * Stores the show / hide state of the value added bar.
   */
  const [
    _showValueAddedBar,
    _setShowValueAddedBar
  ] = useState< boolean >( true );
  /**
   * Stores the value of sign up form email address.
   */
  const [
    _emailAddress,
    _setEmailAddress
  ] = useState< string >( '' );

  // METHODS
  /**
   * Handles click events on the close button.
   * 
   * @returns { void } = Returns nothing.
   */
  const handleCloseClick = (): void => {
    _setShowValueAddedBar( false );
  }

  /**
   * Handles click events on the form submit button.
   * 
   * @returns { void } = Returns nothing.
   */
  const handleSubmitClick = (): void => {
    // Emit the email address value from the form
    onSubmit( _emailAddress );
  }

  /**
   * Handles value change events on the form input.
   * 
   * @param { string } value - The new value of the input
   */
  const handleInputValChange = ( value: string ): void => {
    // Update the email address state value
    _setEmailAddress( value );
  }

  // EFFECTS
  useEffect(() => {
    // Check if the local storage item `showValueAddedBar` is set to false, THEN...
    if ( window.localStorage.getItem( 'showValueAddedBar' ) === 'false' ) {
      // Hide the value added bar by setting the `_setShowValueAddedBar` state to false
      _setShowValueAddedBar( false );
    }
  }, []);

  useEffect(() => {
    // Check if the local storage item `showValueAddedBar` is NOT set, THEN...
    if ( !window.localStorage.getItem( 'showValueAddedBar' ) ) {
      // Set the value of the local store item ( `showValueAddedBar` ) to the value of the `_showValueAddedBar` state
      window.localStorage.setItem( 'showValueAddedBar', `${ _showValueAddedBar }` );
    }
  }, [ _showValueAddedBar ]);

  // HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ !_showValueAddedBar ? styles[ `${ baseClass }--is-hidden` ] : '' }
      ${ isCondensed ? styles[ `${ baseClass }--is-condensed` ] : '' }
    `}>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Content */}
        <div className={ styles[ `${ baseClass }__content` ] }>
          {/* Icon */}
          <div className={ styles[ `${ baseClass }__icon` ] }>
            <Icon
              { ...icon }
              className={ styles[ `${ baseClass }__icon-element` ] }
            />
          </div>
          {/* ./Icon */}
          {/* Text */}
          <div className={ styles[ `${ baseClass }__text` ] }>
            {/* Title */}
            <div className={ styles[ `${ baseClass }__title` ] }>
              <Text
                className={ styles[ `${ baseClass }__title` ] }
                fontWeight={ 'semibold' }
                variant={ 'text regular' }
              >
                { title }
              </Text>
            </div>
            {/* ./Title */}
            {/* Message */}
            <div className={ styles[ `${ baseClass }__message` ] }>
              <Text
                className={ styles[ `${ baseClass }__message` ] }
                variant={ 'text small' }
              >
                { message }
              </Text>
            </div>
            {/* ./Message */}
          </div>
          {/* ./Text */}
        </div>
        {/* ./Content */}

        {/* Form */}
        <div className={ styles[ `${ baseClass }__form` ] }>
          {/* Input */}
          <div className={ styles[ `${ baseClass }__input` ] }>
            <Input
              onChange={ handleInputValChange }
              className={ styles[ `${ baseClass }__input-element` ] }
              hideLabel={ true }
              label={ 'Eneter your email address' }
              placeholder={ 'Email address' }
              size={ 'sm' }
              type={ 'text' }
              value={ _emailAddress }
              variant={ 'outlined' }
            />
          </div>
          {/* ./Input */}
          {/* Submit */}
          <div className={ styles[ `${ baseClass }__submit` ] }>
            <Button
              onClick={ handleSubmitClick }
              accessibleLabel={ 'Submit sign up form' }
              className={ styles[ `${ baseClass }__submit-element` ] }
              hostClassName={ styles[ `${ baseClass }__submit-host` ] }
              label={ 'Sign up' }
              size={ 'sm' }
              type={ 'text' }
            />
          </div>
          {/* ./Submit */}

          {/* Close */}
          <div className={ styles[ `${ baseClass }__close` ] }>
            <Button
              onClick={ handleCloseClick }
              accessibleLabel={ 'Close value added bar' }
              icon={{
                name: 'close',
                type: 'text'
              }}
              type={ 'icon' }
              variant={ 'ghost' }
            />
          </div>
          {/* ./Close */}
        </div>
        {/* ./Form */}
      </div>
      {/* ./Inner */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Banners / 1
 * - Banners / 6
 */
