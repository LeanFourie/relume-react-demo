// Packages & Modules
import { getCurrentYear } from '@relume-demo/utils';
import styles from './footer-layout-8.module.scss';

// Components
import {
  Image,
  Link,
  NewsletterForm,
  Text
} from '../../../';

// Definitions
import type { IFooterLegalLinks } from '../footer.definitions';
import type { TFooterLayout8Props } from './footer-layout-8.definitions';

// Component
/**
 * FooterLayout8 Component
 * 
 * The `FooterLayout8` component is a page footer component useful for easy site navigation.
 * The component renders a set of link items, a newsletter sign up form, the company logo and links to legal pages such as the privacy policy page.
 * 
 * @component
 * @example
 * <FooterLayout8
 *   companyName={ 'Relume Demo' }
 *   links={[{
 *     label: 'Link label',
 *     url: '#'
 *   })]}
 *   logoUri={ '/images/image-relume_demo-logo.svg' }
 *   legalLinks={{
 *     policy: {
 *       label: 'Privacy Policy',
 *       url: '#'
 *     },
 *     terms: {
 *       label: 'Terms of Service',
 *       url: '#'
 *     },
 *     cookies: {
 *       label: 'Cookies Settings',
 *       url: '#'
 *     }
 *   }}
 *   newsletter={{
 *     title: 'Subscribe',
 *     onSubmit: () => {}
 *   }}
 * />
 * 
 * @param { TFooterLayout8Props } props - The properties for configuring the FooterLayout8 component.
 * 
 * @returns { JSX.Element } - The FooterLayout8 component is being returned as a JSX element.
 */
export const FooterLayout8 = ( props: TFooterLayout8Props ): JSX.Element => {
  // #region - PROPS
  const {
    companyName,
    links,
    logoUri,
    legalLinks,
    newsletter
  } = props;
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'footer';
  // #endregion

  // #region - METHODS
  /**
   * Handles submit events emitted from the newsletter form.
   * 
   * @param { string } emailAddress - The email address value emitted from the form field.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleFormSubmit = ( emailAddress: string ): void => {
    // Emit the email address value
    newsletter.onSubmit( emailAddress );
  }
  // #endregion

  // #region - HTML
  return (
    <footer className={ styles[ baseClass ] }>
      {/* Inner */}
        <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Top */}
        <div className={ styles[ `${ baseClass }__top` ] }>
          {/* Logo & Links */}
          <div className={ styles[ `${ baseClass }__logo-links` ] }>
            {/* Logo */}
            <div className={ styles[ `${ baseClass }__logo` ] }>
              <Image
                alt={ companyName }
                className={ styles[ `${ baseClass }__logo-element` ] }
                src={ logoUri }
              />
            </div>
            {/* ./Logo */}
            {/* Links */}
            <div className={ styles[ `${ baseClass }__links` ] }>
              { links.map(( link, index: number ) => (
                <div
                  key={ `${ link.label } ${ index }` }
                  className={ styles[ `${ baseClass }__links-item` ] }
                >
                  <Link
                    className={ styles[ `${ baseClass }__link` ] }
                    href={ link.url }
                    label={ link.label }
                    type={ 'a' }
                  />
                </div>
              ))}
            </div>
            {/* ./Links */}
          </div>
          {/* ./Logo & Links */}
          {/* Newsletter */}
          <div className={ styles[ `${ baseClass }__newsletter` ] }>
            {/* Title */}
            <div className={ styles[ `${ baseClass }__newsletter-title` ] }>
              <Text
                className={ styles[ `${ baseClass }__copyright-element` ] }
                fontWeight={ 'semibold' }
                variant={ 'text regular' }
              >
                { newsletter.title }
              </Text>
            </div>
            {/* ./Title */}
            {/* Form */}
            <div className={ styles[ `${ baseClass }__newsletter-form` ] }>
              <NewsletterForm onSubmit={ handleFormSubmit } />
            </div>
            {/* ./Form */}
          </div>
          {/* ./Newsletter */}
        </div>
        {/* ./Top */}

        {/* Bottom */}
        <div className={ styles[ `${ baseClass }__bottom` ] }>
          {/* Copyright */}
          <div className={ styles[ `${ baseClass }__copyright` ] }>
            <Text
              className={ styles[ `${ baseClass }__copyright-element` ] }
              variant={ 'text small' }
            >
              &copy; { getCurrentYear() } { companyName }. All rights reserved.
            </Text>
          </div>
          {/* ./Copyright */}
          {/* Legal Links */}
          <div className={ styles[ `${ baseClass }__legal` ] }>
            { Object.keys( legalLinks ).map(( key, index: number ) => (
              <div
                key={ `${ key } ${ index }` }
                className={ styles[ `${ baseClass }__legal-link` ] }
              >
                <Link
                  className={ styles[ `${ baseClass }__legal-link-element` ] }
                  href={ legalLinks[ key as keyof IFooterLegalLinks ]?.url || '' }
                  label={ legalLinks[ key as keyof IFooterLegalLinks ]?.label || '' }
                  type={ 'a' }
                />
              </div>
            ))}
          </div>
          {/* ./Legal Links */}
        </div>
        {/* ./Bottom */}
      </div>
      {/* ./Inner */}
    </footer>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - Footer / 8
 */
