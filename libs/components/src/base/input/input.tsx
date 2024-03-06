'use client'

// Packages & Modules
import styles from './input.module.scss';
import { useState } from 'react';

// Components
import {
  HelperText,
  Host,
  Icon,
  Link,
  Text
} from '../../';

// Definitions
import type { TInputProps } from './input.definitions';
import type { KeyboardEvent } from 'react'

// Component

/**
 * Input component
 * 
 * A component that provides a flexible and customizable input field.
 *
 * @component
 * @example
 * <Input
 *   onChange={ ( value ) => console.log( value ) }
 *   label={ 'Username' }
 *   placeholder={ 'Enter your username' } 
 *   type={ 'text' }
 *   value={ '' }
 * />
 *
 * @param { TInputProps } props - The properties of the Input component.
 * 
 * @returns { JSX.Element } Input component JSX element.
 */
export const Input = ( props: TInputProps ): JSX.Element => {
  // PROPS
  const {
    autoComplete,
    className,
    helperText,
    hideLabel = false,
    isDisabled = false,
    isReadonly = false,
    isRequired = false,
    isSkeleton = false,
    label,
    onBlur,
    onChange,
    onFocus,
    onEnterPress,
    placeholder,
    shade = 'dark',
    size = 'md',
    state = 'default',
    type = 'text',
    value,
    variant = 'filled'
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'input';
  /**
   * Stores the `showForgotPassword` prop if it can be set
   */
  let showForgotPassword = 'showForgotPassword' in props && props.showForgotPassword;

  // STATES
  /**
   * A state to manage the visibility of the password.
   */
  const [
    _passwordIsVisible,
    _setPasswordIsVisible
  ] = useState< boolean >( false );

  // METHODS
  /**
   * Generates the input value and sends it to the parent element based on type and restrictions.
   *
   * @param { string } val - The input value as a string.
   * @param { ( val: string ) => void } method - The method to handle the value.
   * 
   * @returns { void } - Returns nothing.
   */
  const generateInputValue = (
    val: string,
    method: ( val: string ) => void
  ): void => {
    // Check if the value needs to be a number value
    if (
      props.type === 'tel' ||
      props.type === 'number' ||
      ( props.type === 'text' && props.numbersOnly )
    ) {
      // Create a numbers only regular expression
      const regex: RegExp = props.type === 'tel' ? /^[0-9+\b]+$/ : /^[0-9\b]+$/;

      // Check if the value is empty or if the value matches the regular expression
      if ( val === '' || regex.test( val ) ) {
        // Send the value to the parent element
        method( val );
      }
    } else {
      // Send the value to the parent element
      method( val );
    }
  }

  /**
   * Handles value changes on the input and calls the `onChange` prop method with the new input value.
   *
   * @param { string } val - The input value as a string.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleChange = ( val: string ): void => {
    // Generate the new input value
    generateInputValue(
        val,
        onChange
    );
  }

  /**
   * Handles blur events on the input element.
   *
   * @param { string } val - The input value.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleBlur = ( val: string ): void => {
    // Check if the type is `tel` AND the value is only the dial code THEN...
    if ( type === 'tel' && value.trim() === '+27' ) {
      // Generate the new input value
      generateInputValue(
        '',
        onChange
      );
    }

    // Check if the blur event is not defined THEN...
    // end the function
    if ( !onBlur ) return;

    // Generate the new input value
    generateInputValue(
      val,
      onBlur
    );
  }

  /**
   * Handles focus events on the input element.
   *
   * @param { string } val - The input element value.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleFocus = ( val: string ): void => {
    // Check if the type is `tel` AND the value is only the dial code THEN...
    if ( type === 'tel' && value === '' ) {
      // Generate the new input value
      generateInputValue(
          '+27',
          onChange
      );
    }

    // Check if the focus event is not defined THEN...
    // end the function
    if ( !onFocus ) return;

    // Generate the new input value
    generateInputValue(
      val,
      onFocus
    );
  }

  /**
   * Changes the input type from `'password'` to `'text'` by toggling the `_setPasswordIsVisible` state.
   * 
   * @returns { void } - Returns nothing.
   */
  const handlePressStart = (): void => {
    // Set `_setPasswordIsVisible` to `true` to reveal the password
    _setPasswordIsVisible( true );
  }

  /**
   * Changes the input type from `'text'` to `'password'` by toggling the `_setPasswordIsVisible` state.
   * 
   * @returns { void } - Returns nothing.
   */
  const handlePressEnd = (): void => {
    // Set `_setPasswordIsVisible` to `false` to hide the password
    _setPasswordIsVisible( false );
  }

  /**
   * Increments / Decrements the value of a number input.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleControlClick = ( incrementValue: 1 | -1 ): void => {
    // Check of the input is NOT of type number THEN...
    // end the function
    if ( props.type !== 'number' ) return;

    // Get the current value of the input
    const currentValue: number = props.value === ''
                                    ? props.min
                                        ? props.min
                                        : 0
                                    : parseInt( props.value );

    // Create the new value by incrementing or decrementing the value
    const newValue: number = currentValue + incrementValue;

    // Check if the value is in range
    const isValidMinValue: boolean = (
      !props.min ||
      ( typeof props.min !== undefined && newValue >= props.min )
    );
    const isValidMaxValue: boolean = (
      !props.max ||
      ( typeof props.max !== undefined && newValue <= props.max )
    );

    // Check if the value is in range then update the value
    if ( isValidMinValue && isValidMaxValue ) handleChange( newValue.toString() );
  }

  /**
   * Handle click events on the forgot password link
   * 
   * @returns { void } - Returns nothing.
   */
  const handleForgotPasswordClick = () => {
    // Check if the input type is of password AND the forgot password link is defined
    if ( props.type === 'password' && props.onForgotPasswordClick ) {
      // Handle click events on the link element
      props.onForgotPasswordClick();
    }
  }

  /**
   * Handles key up events on the input
   * 
   * @param { KeyboardEvent } event - The key up event
   * 
   * @returns { void } - Returns nothing.
   */
  const handleKeyup = ( event: KeyboardEvent ): void => {
    // Check if the key is not enter, THEN...
    // end the function
    if ( !onEnterPress || event.key !== 'Enter' ) return;

    // Get the input element from the event
    const inputElement = event.currentTarget as HTMLInputElement;
    // Run the enter press event
    onEnterPress( inputElement );
  }

  // HTML
  return (
    <Host
      isDisabled={ isDisabled }
      isFullWidth={ true }
      isSkeleton={ isSkeleton }
    >
      <span
        className={`
          ${ styles[ baseClass ] }
          ${ styles[ `${ baseClass }--shade-${ shade }` ] }
          ${ styles[ `${ baseClass }--size-${ size }` ] }
          ${ styles[ `${ baseClass }--state-${ state }` ] }
          ${ styles[ `${ baseClass }--type-${ type }` ] }
          ${ styles[ `${ baseClass }--variant-${ variant }` ] }
          ${ isDisabled ? styles[ `${ baseClass }--is-disabled` ] : '' }
          ${ isReadonly ? styles[ `${ baseClass }--is-read-only` ] : '' }
          ${ isSkeleton ? styles[ `${ baseClass }--is-skeleton` ] : '' }
          ${ className ? className : '' }
        `}
      >
        {/* Label */}
        {( !hideLabel ) && (
          <label className={ styles[ `${ baseClass }__label` ] }>
            {/* Label Text */}
            <Text
              className={ styles[ `${ baseClass }__label-text` ] }
              fontWeight={ 'medium' }
              isSkeleton={ isSkeleton }
              renderAs={ 'span' }
              variant={ 'text regular' }
            >
              { label } { isRequired && <sup className={ styles[ `${ baseClass }__label-text-sup` ] }>*</sup> }
            </Text>
            {/* ./Label Text */}

            {/* Forgot Password Link */}
            {( showForgotPassword ) && (
              <Link
                onClick={ () => handleForgotPasswordClick() }
                label={ 'Forgot password?' }
                type={ 'span' }   
              />
            )}
            {/* ./Forgot Password Link */}
          </label>
        )}
        {/* ./Label */}

        {/* Input */}
        <span
          className={ styles[ `${ baseClass }__input` ] }
          data-input
        >
          {/* Input Element */}
          <input
            onBlur={ ( event ) => ( onBlur || type === 'tel' ) && handleBlur( event.target.value ) }
            onChange={ ( event ) => handleChange( event.target.value ) }
            onFocus={ ( event ) => ( onFocus || type === 'tel' ) && handleFocus( event.target.value ) }
            onKeyUp={ handleKeyup }
            autoComplete={ autoComplete }
            className={ styles[ `${ baseClass }__input-element` ] }
            disabled={ isDisabled }
            placeholder={ placeholder }
            readOnly={ isReadonly }
            type={ ( type === 'password' && _passwordIsVisible ) ? 'text' : type }
            value={ value }
          />
          {/* ./Input Element */}

          {/* Password Toggle */}
          {( type === 'password' ) && (
              <span
                className={ styles[ `${ baseClass }__input-password-toggle` ] }
                onMouseDown={ () => handlePressStart() }
                onMouseUp={ () => handlePressEnd() }
                onTouchEnd={ () => handlePressEnd() }
                onTouchStart={ () => handlePressStart() }
                tabIndex={ 0 }
              >
                <Icon
                  className={ styles[ `${ baseClass }__input-password-toggle-icon` ] }
                  name={ _passwordIsVisible ? 'visibility_off' : 'visibility' }
                  type={ 'text' }
                />
              </span>
          )}
          {/* ./Password Toggle */}

          {/* Controls */}
          {( type === 'number' ) && (
            <span className={ styles[ `${ baseClass }__input-controls` ] }>
              {/* Minus */}
              <span
                className={`
                  ${ styles[ `${ baseClass }__input-control` ] }
                  ${ styles[ `${ baseClass }__input-control--minus` ] }
                `}
                onClick={ () => handleControlClick( -1 ) }
                tabIndex={ 0 }
              >
                <Icon
                  className={ styles[ `${ baseClass }__input-control-icon` ] }
                  name={ 'remove' }
                  type={ 'text' }
                />
              </span>
              {/* ./Minus */}
              {/* Plus */}
              <span
                className={`
                  ${ styles[ `${ baseClass }__input-control` ] }
                  ${ styles[ `${ baseClass }__input-control--plus` ] }
                `}
                onClick={ () => handleControlClick( 1 ) }
                tabIndex={ 0 }
              >
                <Icon
                  className={ styles[ `${ baseClass }__input-control-icon` ] }
                  name={ 'add' }
                  type={ 'text' }
                />
              </span>
              {/* ./Plus */}
            </span>
          )}
          {/* ./Controls */}
        </span>
        {/* ./Input */}

        {/* Helper Text */}
        {( helperText ) && (
          <span className={ styles[ `${ baseClass }__helper` ] }>
            {/* Helper text as array */}
            {( Array.isArray( helperText ) && helperText.length > 0 ) && (
              <>
                { helperText.map( helper => (
                  <span
                    key={ JSON.stringify( helper ) }
                    className={ styles[ `${ baseClass }__helper-item` ] }
                  >
                    <HelperText { ...helper.options }>
                      { helper.value }
                    </HelperText>
                  </span>
                ))}
              </>
            )}
            {/* ./Helper text as array */}

            {/* Helper text as string */}
            {( !Array.isArray( helperText ) ) && (
              <span className={ styles[ `${ baseClass }__helper-item` ] }>
                <HelperText
                  { ...helperText.options }
                  isSkeleton={ isSkeleton }
                >
                  { helperText.value }
                </HelperText>
              </span>
            )}
            {/* ./Helper text as string */}
          </span>
        )}
        {/* ./Helper Text */}
      </span>
    </Host>
  );
}
