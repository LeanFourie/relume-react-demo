// Packages & Modules
import { getCurrentYear } from '@relume-demo/utils';
import styles from './footer-layout-9.module.scss';

// Components
import {
  Icon,
  Image,
  Link,
  NewsletterForm,
  Text
} from '../../../';

// Definitions
import type { IFooterLegalLinks } from '../footer.definitions';
import type { TFooterLayout9Props } from './footer-layout-9.definitions';

// Component
/**
 * FooterLayout9 Component
 * 
 * The `FooterLayout9` component is a page footer component useful for easy site navigation.
 * The component renders sets of link items, alongside social links, a newsletter sign up form, the company logo and links to legal pages such as the privacy policy page.
 * 
 * @component
 * @example
 * <FooterLayout9
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
 * @param { TFooterLayout9Props } props - The properties for configuring the FooterLayout9 component.
 * 
 * @returns { JSX.Element } - The FooterLayout9 component is being returned as a JSX element.
 */
export const FooterLayout9 = ( props: TFooterLayout9Props ): JSX.Element => {
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
          {/* Form */}
          <div className={ styles[ `${ baseClass }__form` ] }>
            {/* Logo */}
            <div className={ styles[ `${ baseClass }__form-logo` ] }>
              <Image
                alt={ companyName }
                className={ styles[ `${ baseClass }__form-logo-element` ] }
                src={ logoUri }
              />
            </div>
            {/* ./Logo */}
            {/* Description */}
            <div className={ styles[ `${ baseClass }__form-description` ] }>
              <Text
                className={ styles[ `${ baseClass }__form-description-element` ] }
                variant={ 'text regular' }
              >
                { newsletter.description }
              </Text>
            </div>
            {/* ./Description */}
            {/* Newsletter Form */}
            <div className={ styles[ `${ baseClass }__form-newsletter` ] }>
              <NewsletterForm onSubmit={ handleFormSubmit } />
            </div>
            {/* ./Newsletter Form */}
          </div>
          {/* ./Form */}
          {/* Links */}
          <div className={ styles[ `${ baseClass }__links` ] }>
            {/* Internal Links */}
            { links.map(( group, index: number ) => (
              <div
                key={ `${ group.title } ${ index }` }
                className={ styles[ `${ baseClass }__links-group` ] }
              >
                {/* Title */}
                <div className={ styles[ `${ baseClass }__links-group-title` ] }>
                  <Text
                    className={ styles[ `${ baseClass }__links-group-title-element` ] }
                    fontWeight={ 'semibold' }
                    variant={ 'text regular' }
                  >
                    { group.title }
                  </Text>
                </div>
                {/* ./Title */}
                {/* Links */}
                <div className={ styles[ `${ baseClass }__links-group-items` ] }>
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
            {/* ./Internal Links */}
            {/* Socials */}
            <div className={ styles[ `${ baseClass }__links-group` ] }>
              {/* Title */}
              <div className={ styles[ `${ baseClass }__links-group-title` ] }>
                <Text
                  className={ styles[ `${ baseClass }__links-group-title-element` ] }
                  fontWeight={ 'semibold' }
                  variant={ 'text regular' }
                >
                  Follow us
                </Text>
              </div>
              {/* ./Title */}
              {/* Links */}
              <div className={ styles[ `${ baseClass }__links-group-items` ] }>
                { socials.map(( link, index: number ) => (
                  <div
                    key={ `${ link.name } ${ index }` }
                    className={`
                      ${ styles[ `${ baseClass }__link` ] }
                      ${ styles[ `${ baseClass }__link--social` ] }
                    `}
                  >
                    <a
                      className={ styles[ `${ baseClass }__link-element` ] }
                      href={ link.url }
                      target={ '_blank' }
                    >
                      {/* Icon */}
                      <div className={ styles[ `${ baseClass }__link-icon` ] }>
                        <Icon
                          className={ styles[ `${ baseClass }__link-icon-element` ] }
                          type={ 'svg' }
                          uri={ link.icon }
                        />
                      </div>
                      {/* ./Icon */}
                      {/* Label */}
                      <div className={ styles[ `${ baseClass }__link-label` ] }>
                        <Text
                          className={ styles[ `${ baseClass }__link-label-element` ] }
                          variant={ 'text regular' }
                        >
                          { link.name }
                        </Text>
                      </div>
                      {/* ./Label */}
                    </a>
                  </div>
                ))}
              </div>
              {/* ./Links */}
            </div>
            {/* ./Socials */}
          </div>
          {/* ./Links */}
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
        {/* ./Bottom */}
      </div>
      {/* ./Inner */}
    </footer>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - Footer / 9
 */
