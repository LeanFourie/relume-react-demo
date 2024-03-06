// Packages & Modules
import styles from './menu-full-layout-5.module.scss';

// Components
import {
  NewsletterForm,
  SocialLinks,
  Text
} from '../../../../';

// Definitions
import type { TMenuFullLayout5Props } from './menu-full-layout-5.definitions';

// Component
/**
 * MenuFullLayout5 Component
 * 
 * The `MenuFullLayout5` component is a full page  navigation component.
 * It is composed of anchor tags to direct users to their desired destination alongside quick access contact information.
 * The component also includes a quick newsletter sign up form.
 * 
 * @component
 * @example
 * <MenuFullLayout5
 *   address={ '123 Some Street, ZA, 0081' }
 *   contactNumber={ '012 345 6789' }
 *   email={ 'hello@relumedemo.co.za' }
 *   links={[
 *     {
 *       label: 'Link,
 *       url: '#'
 *     }
 *   ]}
 *   newsletter={{
 *     message: 'Join our newsletter to stay up to date on features and releases.',
 *     onSubmit: () => {},
 *     title: 'Subscribe'
 *   }}
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
 * @param { TMenuFullLayout5Props } props - The properties for configuring the MenuFullLayout5 component.
 * 
 * @returns { JSX.Element } - The MenuFullLayout5 component is being returned as a JSX element.
 */
export const MenuFullLayout5 = ( props: TMenuFullLayout5Props ): JSX.Element => {
  // PROPS
  const {
    address,
    contactNumber,
    email,
    links,
    newsletter,
    socials
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'menu';

  // METHODS
  /**
   * Handles form submission events emitted from the newsletter form
   * 
   * @param emailAddress - The email address value emitted from the form
   */
  const handleFormSubmission = ( emailAddress: string ): void => {
    // Emit the `onSubmit` event with the email address
    newsletter.onSubmit( emailAddress );
  }

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
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
                  <Text
                    className={ styles[ `${ baseClass }__link-label` ] }
                    fontWeight={ 'bold' }
                    variant={ 'heading large' }
                  >
                    { link.label.split('').map(( char, index: number ) => (
                      <span
                        key={ `${ char } ${ index }` }
                        className={ styles[ `${ baseClass }__link-label-char` ] }
                      >
                        { char }
                      </span>
                    ))}
                  </Text>
                </a>
              </div>
            )))}
          </div>
        }
        {/* ./Links */}

        {/* Content */}
        <div className={ styles[ `${ baseClass }__content` ] }>
          {/* Form */}
          <div className={ styles[ `${ baseClass }__form` ] }>
            {/* Title */}
            <div className={`
              ${ styles[ `${ baseClass }__form-row` ] }
              ${ styles[ `${ baseClass }__form-row--title` ] }
            `}>
              <Text
                fontWeight={ 'semibold' }
                variant={ 'text medium' }
              >
                { newsletter.title }
              </Text>
            </div>
            {/* ./Title */}
            {/* Paragraph */}
            <div className={`
              ${ styles[ `${ baseClass }__form-row` ] }
              ${ styles[ `${ baseClass }__form-row--paragraph` ] }
            `}>
              <Text variant={ 'text regular' }>
                { newsletter.message }
              </Text>
            </div>
            {/* ./Paragraph */}
            {/* Newsletter Form */}
            <div className={`
              ${ styles[ `${ baseClass }__form-row` ] }
              ${ styles[ `${ baseClass }__form-row--controls` ] }
            `}>
              <NewsletterForm onSubmit={ handleFormSubmission } />
            </div>
            {/* ./Newsletter Form */}
          </div>
          {/* ./Form */}

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
        {/* ./Content */}
      </div>
      {/* ./Inner */}
    </div>
  );
}

/**
 * Relume Lib:
 * - Navbar / 20
 */
