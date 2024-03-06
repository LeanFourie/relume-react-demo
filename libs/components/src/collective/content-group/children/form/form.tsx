'use client'

// Packages & Modules
import styles from '../../content-group.module.scss';
import { useState } from 'react';

// Components
import {
  Button,
  Input
} from '../../../../';

// Definitions
import type { IContentGroupWithForm } from '../../content-group.definitions';

// Component
/**
 * ContentGroupForm Component
 * 
 * The `ContentGroupForm` component is a form that takes in props such as action, input, message, and
 * onSubmit, and renders an input field, a button, and a message.
 * 
 * @param { IContentGroupWithForm } props - An object containing properties for the action button, such as label,
 * onClick function, and classNames.
 * 
 * @returns { JSX.Element } The `ContentGroupForm` component is being returned as a JSX element.
 */
export const ContentGroupForm = ( props: Omit<
  IContentGroupWithForm,
  'title' | 'paragraph' | 'tagline' | 'type'
> ): JSX.Element => {
  // PROPS
  const {
    action,
    input,
    message,
    onSubmit
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'content-group';

  // STATES
  /**
   * Stores the value of the input
   */
  const [
    _inputValue,
    _setInputValue
  ] = useState< string >( input.value || '' );

  // METHODS
  /**
   * The `handleSubmit` function emits the `onSubmit` prop with the `_inputValue` as its argument.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleSubmit = (): void => {
    // Emit the `onSubmit` prop
    onSubmit( _inputValue );
  }

  /**
   * The function `handleInputChange` updates the state `_setInputValue` with the provided value.
   * 
   * @param { string } value - The `value` parameter is a string that represents the new value of an
   * input field.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleInputChange = ( value: string ): void => {
    // Update the `_setInputValue` state
    _setInputValue( value );
  }

  // HTML
  return (
    <div className={ styles[ `${ baseClass }__form` ] }>
      {/* Input & Button */}
      <div className={ styles[ `${ baseClass }__form-row` ] }>
        {/* Input */}
        <div className={ styles[ `${ baseClass }__input` ] }>
          <Input
            { ...input }
            value={ _inputValue }
            onChange={ handleInputChange }
          />
        </div>
        {/* ./Input */}
        {/* Button */}
        <div className={ styles[ `${ baseClass }__action` ] }>
          <Button
            { ...action }
            onClick={ handleSubmit }
            className={ styles[ `${ baseClass }__action-element` ]}
            hostClassName={ styles[ `${ baseClass }__action-element-host` ]}
          />
        </div>
        {/* ./Button */}
      </div>
      {/* ./Input & Button */}

      {/* Message */}
      <div className={ styles[ `${ baseClass }__form-row` ] }>
        <div className={ styles[ `${ baseClass }__message` ] }>
          { message }
        </div>
      </div>
      {/* ./Message */}
    </div>
  );
}
