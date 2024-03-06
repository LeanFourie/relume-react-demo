'use client'

// Packages & Modules
import styles from './newsletter-form.module.scss';
import { useState } from 'react';

// Components
import {
  Button,
  Input,
  Link,
  Text
} from '../../';

// Definitions
import type { TNewsletterFormProps } from './newsletter-form.definitions';
import type { TLinkProps } from '../../';

// Component
/**
 * NewsletterForm Component
 * 
 * The `NewsletterForm` is a newsletter subscription form component
 * It is composed of an input, a submit action and a note informing users the agree to the Terms and Conditions.
 * 
 * @component
 * @example
 * <NewsletterForm onSubmit={ ( emailAddress ) => console.log( emailAddress ) } />
 * 
 * @param { TNewsletterFormProps } props - The properties for configuring the NewsletterForm component.
 * 
 * @returns { JSX.Element } - The NewsletterForm component is being returned as a JSX element.
 */
export const NewsletterForm = ( props: TNewsletterFormProps ): JSX.Element => {
  // PROPS
  const { onSubmit } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'form';
  /**
   * Stores the default props to set on the link component.
   */
  const linkProps: TLinkProps = {
    href: '#',
    label: 'Privacy Policy',
    type: 'a'
  }

  // STATES
  /**
   * Stores the email address value entered into the input.
   */
  const [
    _emailAddress,
    _setEmailAddress
  ] = useState< string >( '' );

  // METHODS
  /**
   * Handles click events on the button.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleFormSubmission = (): void => {
    // Emit the `onSubmit` prop
    onSubmit( _emailAddress );
  }

  /**
   * Handles change events on the input.
   * 
   * @param { string } value - The value emitted from the input.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleInputChange = ( value: string ): void => {
    // Update the `_emailAddress` state value
    _setEmailAddress( value );
  }

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Input and Button */}
      <div className={ styles[ `${ baseClass }__row` ] }>
        <Input
          onChange={ handleInputChange }
          className={ styles[ `${ baseClass }__row-input` ] }
          hideLabel={ true }
          placeholder={ 'Email address' }
          size={ 'md' }
          type={ 'text' }
          value={ _emailAddress }
        />
        <Button
          onClick={ handleFormSubmission }
          accessibleLabel={ 'Submit newsletter subscrption form' }
          className={ styles[ `${ baseClass }__row-action` ] }
          hostClassName={ styles[ `${ baseClass }__row-action-host` ] }
          label={ 'Subscribe' }
          type={ 'text' }
          variant={ 'outlined' }
        />
      </div>
      {/* ./Input and Button */}

      {/* Terms and Conditions */}
      <div className={ styles[ `${ baseClass }__row` ] }>
        <Text
          className={ styles[ `${ baseClass }__row-conditions` ] }
          variant={ 'text tiny' }
        >
          By subscribing you agree to with our <Link { ...linkProps } /> and provide consent to receive updates from our company.
        </Text>
      </div>
      {/* ./Terms and Conditions */}
    </div>
  );
}
