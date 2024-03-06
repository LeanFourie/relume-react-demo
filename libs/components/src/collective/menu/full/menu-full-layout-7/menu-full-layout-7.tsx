'use client'

// Packages & Modules
import styles from './menu-full-layout-7.module.scss';
import { useState } from 'react';

// Components
import {
  Button,
  Checkbox,
  Input,
  Link,
  SocialLinks,
  Text,
  Textarea
} from '../../../../';

// Definitions
import type { TLinkProps } from '../../../../';
import type { TMenuFullLayout7Props } from './menu-full-layout-7.definitions';

// Component
/**
 * MenuFullLayout7 Component
 * 
 * The `MenuFullLayout7` component is a full page  navigation component.
 * It is composed of anchor tags to direct users to their desired destination.
 * The component also includes a quick contact form and quick access contact details.
 * 
 * @component
 * @example
 * <MenuFullLayout7
 *   address={ '123 Some Street, ZA, 0081' }
 *   contactForm={{
 *     onSubmit: () => {},
 *     paragraph: 'Lorem ipsum dolor sit amet, consectetur.',
 *     termsLinkUrl: '#',
 *     title: 'Contact us'
 *   }}
 *   contactNumber={ '012 345 6789' }
 *   email={ 'hello@relumedemo.co.za' }
 *   links={[
 *     {
 *       label: 'Link,
 *       url: '#'
 *     }
 *   ]}
 *   socials={[
 *     {
 *       icon: '/icons/icon-facebook.svg',
 *       name: 'Facebook',
 *       url: '#',
 *       type: 'facebook'
 *     }
 *   ]}
 * />
 * 
 * @param { TMenuFullLayout7Props } props - The properties for configuring the MenuFullLayout7 component.
 * 
 * @returns { JSX.Element } - The MenuFullLayout7 component is being returned as a JSX element.
 */
export const MenuFullLayout7 = ( props: TMenuFullLayout7Props ): JSX.Element => {
  // PROPS
  const {
    address,
    contactForm,
    contactNumber,
    email,
    links,
    socials
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'menu';
  /**
   * Stores the props passed the terms and conditions component
   */
  const termsAndConditionsLinkProps: TLinkProps = {
    label: 'Terms and Conditions',
    href: contactForm.termsLinkUrl,
    target: '_blank',
    type: 'a'
  };

  // STATES
  /**
   * Stores the full name of the user entered into the name fied
   */
  const [
    _name,
    _setName
  ] = useState< string >( '' );
  /**
   * Stores the email address of the user entered into the email fied
   */
  const [
    _email,
    _setEmail
  ] = useState< string >( '' );
  /**
   * Stores the message value entered into the message fied
   */
  const [
    _message,
    _setMessage
  ] = useState< string >( '' );
  /**
   * Stores the state of the terms and conditions checkbox
   */
  const [
    _acceptedTerms,
    _setAcceptedTerms
  ] = useState< boolean >( false );

  // METHODS
  /**
   * Handles change events on the text based form fields
   * 
   * @param value - The new value emitted from the form field
   * @param field - The field that is being updated
   */
  const handleInputChange = (
    value: string,
    field: 'name' | 'email' | 'message'
  ): void => {
    // Check which field is being updated and update its value state accordingly
    switch ( field ) {
      case 'name':
        _setName( value );
        break;
      case 'email':
        _setEmail( value );
        break;
      case 'message':
        _setMessage( value );
        break;
      default:
        break;
    }
  }

  /**
   * Handles value changes on the terms and conditions checkbox
   * 
   * @param checkedState - The current checked state of the checkbox
   */
  const handleTsAndCsChange = ( checkedState: boolean ): void => {
    // Save the new state
    _setAcceptedTerms( checkedState );
  }

  /**
   * Handles click events on the form submission button
   */
  const handleFormSubmission = (): void => {
    // Emit the form field values with the `onSubmit` prop
    contactForm.onSubmit({
      name: _name,
      email: _email,
      message: _message,
      acceptedTerms: _acceptedTerms
    });
  }

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Links */}
      {( links && links.length > 0 ) &&
        <div className={ styles[ `${ baseClass }__links` ] }>
          {( links.map(( link, index: number ) => (
            <div
              key={ `${ link.label } ${ index }` }
              className={ styles[ `${ baseClass }__link` ] }
            >
              <a
                className={ styles[ `${ baseClass }__link-inner` ] }
                href={ link.url }
              >
                <div
                  className={ styles[ `${ baseClass }__link-label` ] }
                  data-label={ link.label }
                >
                  <Text
                    className={ styles[ `${ baseClass }__link-label-element` ] }
                    fontWeight={ 'bold' }
                    variant={ 'heading large' }
                  >
                    { link.label }
                  </Text>
                </div>
              </a>
            </div>
          )))}
        </div>
      }
      {/* ./Links */}

      {/* Contact Form */}
      <div className={ styles[ `${ baseClass }__form` ] }>
        {/* Text */}
        <div className={`
          ${ styles[ `${ baseClass }__form-row` ] }
          ${ styles[ `${ baseClass }__form-row--text` ] }
        `}>
          <Text
            fontWeight={ 'bold' }
            variant={ 'heading small' }
          >
            { contactForm.title }
          </Text>
          <Text variant={ 'text regular' }>
            { contactForm.paragraph }
          </Text>
        </div>
        {/* ./Text */}
        {/* Name */}
        <div className={`
          ${ styles[ `${ baseClass }__form-row` ] }
          ${ styles[ `${ baseClass }__form-row--name` ] }
        `}>
          <Input
            onChange={ ( value ) => handleInputChange( value, 'name' ) }
            label={ 'Full name' }
            placeholder={ 'e.g. Riley Smith' }
            type={ 'text' }
            value={ _name }
          />
        </div>
        {/* ./Name */}
        {/* Email */}
        <div className={`
          ${ styles[ `${ baseClass }__form-row` ] }
          ${ styles[ `${ baseClass }__form-row--email` ] }
        `}>
          <Input
            onChange={ ( value ) => handleInputChange( value, 'email' ) }
            label={ 'Email address' }
            placeholder={ 'e.g. rileysmith@email.com' }
            type={ 'text' }
            value={ _email }
          />
        </div>
        {/* ./Email */}
        {/* Message */}
        <div className={`
          ${ styles[ `${ baseClass }__form-row` ] }
          ${ styles[ `${ baseClass }__form-row--message` ] }
        `}>
          <Textarea
            onChange={ ( value ) => handleInputChange( value, 'message' ) }
            label={ 'Message' }
            value={ _message }
          />
        </div>
        {/* ./Message */}
        {/* Terms */}
        <div className={`
          ${ styles[ `${ baseClass }__form-row` ] }
          ${ styles[ `${ baseClass }__form-row--terms` ] }
        `}>
          <Checkbox
              label={ 'I have read and agreed to the' }
              link={ <Link { ...termsAndConditionsLinkProps } /> }
              name={ 'terms-and-conditions' }
              isChecked={ _acceptedTerms }
              onChange={ handleTsAndCsChange }
              showLabel={ true }
          />
        </div>
        {/* ./Terms */}
        {/* Submit */}
        <div className={`
          ${ styles[ `${ baseClass }__form-row` ] }
          ${ styles[ `${ baseClass }__form-row--submit` ] }
        `}>
          <Button
            onClick={ handleFormSubmission }
            accessibleLabel={ 'Submit contact form' }
            label={ 'Submit' }
            type={ 'text' }
          />
        </div>
        {/* ./Submit */}
      </div>
      {/* ./Contact Form */}

      {/* Footer */}
      <div className={ styles[ `${ baseClass }__footer` ] }>
        {/* Company Details */}
        <div className={ styles[ `${ baseClass }__details` ] }>
          {/* Title */}
          <div className={ styles[ `${ baseClass }__details-title` ] }>
            <Text variant={ 'text medium' }>
              Get in touch
            </Text>
          </div>
          {/* ./Title */}
          {/* Contact Number */}
          <a
            className={ styles[ `${ baseClass }__details-item` ] }
            href={ `tel:${ contactNumber.replace( /\s/g,'' ) }` }
            target={ '_blank' }
          >
            <Text variant={ 'text small' }>
              { contactNumber }
            </Text>
          </a>
          {/* ./Contact Number */}
          {/* Email Address */}
          <a
            className={ styles[ `${ baseClass }__details-item` ] }
            href={ `mailto:${ email }` }
            target={ '_blank' }
          >
            <Text variant={ 'text small' }>
              { email }
            </Text>
          </a>
          {/* ./Email Address */}
          {/* Location */}
          <div  className={ styles[ `${ baseClass }__details-item` ] }>
            <Text variant={ 'text small' }>
              { address }
            </Text>
          </div>
          {/* ./Location */}
        </div>
        {/* ./Company Details */}
        {/* Socials */}
        <SocialLinks links={ socials } />
        {/* ./Socials */}
      </div>
      {/* ./Footer */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Navbar / 22
 */
