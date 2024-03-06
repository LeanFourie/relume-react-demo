// Packages & Modules
import { getCurrentYear } from '@relume-demo/utils';
import styles from './footer-layout-2.module.scss';

// Components
import {
  Image,
  Link,
  NewsletterForm,
  SocialLinks,
  Text
} from '../../../';

// Definitions
import type { IFooterLegalLinks } from '../footer.definitions';
import type { TFooterLayout2Props } from './footer-layout-2.definitions';

// Component
/**
 * FooterLayout2 Component
 * 
 * The `FooterLayout2` component is a page footer component useful for easy site navigation.
 * The component renders sets of link items, alongside social links, a newsletter sign up form, the company logo and links to legal pages such as the privacy policy page.
 * 
 * @component
 * @example
 * <FooterLayout2
 *   companyName={ 'Relume Demo' }
 *   links={[{
 *     title: 'Column',
 *     links: [{
 *       label: 'Link label',
 *       url: '#'
 *     }]
 *   }]}
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
 *     description: 'Join our newsletter to stay up to date on features and releases.',
 *     onSubmit: () => {}
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
 * @param { TFooterLayout2Props } props - The properties for configuring the FooterLayout2 component.
 * 
 * @returns { JSX.Element } - The FooterLayout2 component is being returned as a JSX element.
 */
export const FooterLayout2 = ( props: TFooterLayout2Props ): JSX.Element => {
  // #region - PROPS
  const {
    companyName,
    links,
    logoUri,
    newsletter,
    legalLinks,
    socials
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
            { links.map(( group, index: number ) => (
              <div
                key={ `${ group.title } ${ index }` }
                className={ styles[ `${ baseClass }__links` ] }
              >
                {/* Title */}
                <div className={ styles[ `${ baseClass }__links-title` ] }>
                  <Text
                    className={ styles[ `${ baseClass }__links-title-element` ] }
                    fontWeight={ 'semibold' }
                    variant={ 'text regular' }
                  >
                    { group.title }
                  </Text>
                </div>
                {/* ./Title */}
                {/* Links */}
                <div className={ styles[ `${ baseClass }__links-items` ] }>
                  { group.links.map(( link, idx: number ) => (
                    <div
                      key={ `${ link.label } ${ idx }` }
                      className={ styles[ `${ baseClass }__link` ] }
                    >
                      <Link
                        className={ styles[ `${ baseClass }__link-element` ] }
                        href={ link.url }
                        label={ link.label }
                        type={ 'a' }
                      />
                    </div>
                  ))}
                </div>
                {/* ./Links */}
              </div>
            ))}
            {/* ./Links */}
          </div>
          {/* ./Logo & Links */}

          {/* Newsletter */}
          <div className={ styles[ `${ baseClass }__newsletter` ] }>
            {/* Title */}
            <div className={ styles[ `${ baseClass }__newsletter-title` ] }>
              <Text
                className={ styles[ `${ baseClass }__newsletter-title-element` ] }
                fontWeight={ 'semibold' }
                variant={ 'text regular' }
              >
                { newsletter.title }
              </Text>
            </div>
            {/* ./Title */}
            {/* Paragraph */}
            <div className={ styles[ `${ baseClass }__newsletter-paragraph` ] }>
              <Text
                className={ styles[ `${ baseClass }__newsletter-paragraph-element` ] }
                variant={ 'text regular' }
              >
                { newsletter.description }
              </Text>
            </div>
            {/* ./Paragraph */}
            {/* Form */}
            <NewsletterForm onSubmit={ handleFormSubmit } />
            {/* ./Form */}
          </div>
          {/* ./Newsletter */}
        </div>
        {/* ./Top */}

        {/* Bottom */}
        <div className={ styles[ `${ baseClass }__bottom` ] }>
          {/* Copyright & Legal */}
          <div className={ styles[ `${ baseClass }__copy-and-legal` ] }>
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
            {/* Links */}
            <div className={ styles[ `${ baseClass }__legal-links` ] }>
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
            {/* ./Links */}
          </div>
          {/* ./Copyright & Legal */}

          {/* Socials */}
          <div className={ styles[ `${ baseClass }__socials` ] }>
            <SocialLinks links={ socials } />
          </div>
          {/* ./Socials */}
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
 * - Footer / 2
 */
