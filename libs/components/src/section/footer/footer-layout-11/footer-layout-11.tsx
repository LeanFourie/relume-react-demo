// Packages & Modules
import { getCurrentYear } from '@relume-demo/utils';
import styles from './footer-layout-11.module.scss';

// Components
import {
  Image,
  Link,
  SocialLinks,
  Text
} from '../../../';

// Definitions
import type { IFooterLegalLinks } from '../footer.definitions';
import type { TFooterLayout11Props } from './footer-layout-11.definitions';

// Component
/**
 * FooterLayout11 Component
 * 
 * The `FooterLayout11` component is a page footer component useful for easy site navigation.
 * The component renders sets of link items, alongside social links, contact details, the company logo and links to legal pages such as the privacy policy page.
 * 
 * @component
 * @example
 * <FooterLayout11
 *   address={ '123 Some Street, ZA, 0081' }
 *   companyName={ 'Relume Demo' }
 *   contactNumber={ '012 345 6789' }
 *   emailAddress={ 'hello@relumedemo.co.za' }
 *   links={[{
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
 * @param { TFooterLayout11Props } props - The properties for configuring the FooterLayout11 component.
 * 
 * @returns { JSX.Element } - The FooterLayout11 component is being returned as a JSX element.
 */
export const FooterLayout11 = ( props: TFooterLayout11Props ): JSX.Element => {
  // #region - PROPS
  const {
    address,
    companyName,
    contactNumber,
    emailAddress,
    links,
    logoUri,
    legalLinks,
    socials,
  } = props;
  // #endregion

  // #region - VARIABLES 
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'footer';
  // #endregion

  // #region - HTML
  return (
    <footer className={ styles[ baseClass ] }>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Top */}
        <div className={ styles[ `${ baseClass }__top` ] }>
          {/* Details */}
          <div className={ styles[ `${ baseClass }__details` ] }>
            {/* Logo */}
            <div className={ styles[ `${ baseClass }__logo` ] }>
              <Image
                alt={ companyName }
                className={ styles[ `${ baseClass }__logo-element` ] }
                src={ logoUri }
              />
            </div>
            {/* ./Logo */}
            {/* Address */}
            <div className={ styles[ `${ baseClass }__address` ] }>
              <div className={ styles[ `${ baseClass }__address-title` ] }>
                <Text
                  className={ styles[ `${ baseClass }__address-title-element` ] }
                  fontWeight={ 'semibold' }
                  variant={ 'text regular' }
                >
                  Address
                </Text>
              </div>
              <div className={ styles[ `${ baseClass }__address-text` ] }>
                <Text
                  className={ styles[ `${ baseClass }__address-text-element` ] }
                  variant={ 'text regular' }
                >
                  { address }
                </Text>
              </div>
            </div>
            {/* ./Address */}
            {/* Contact */}
            <div className={ styles[ `${ baseClass }__contact` ] }>
              <div className={ styles[ `${ baseClass }__contact-title` ] }>
                <Text
                  className={ styles[ `${ baseClass }__contact-title-element` ] }
                  fontWeight={ 'semibold' }
                  variant={ 'text regular' }
                >
                  Contact
                </Text>
              </div>
              <div className={ styles[ `${ baseClass }__contact-links` ] }>
                <Link
                  className={ styles[ `${ baseClass }__contact-links-item` ] }
                  href={ `tel:${ contactNumber.split( ' ' ).join( '' ) }` }
                  label={ contactNumber }
                  type={ 'a' }
                />
                <Link
                  className={ styles[ `${ baseClass }__contact-links-item` ] }
                  href={ `mailto:${ emailAddress }` }
                  label={ emailAddress }
                  type={ 'a' }
                />
              </div>
            </div>
            {/* ./Contact */}
            {/* Social */}
            <div className={ styles[ `${ baseClass }__social` ] }>
              <SocialLinks links={ socials } />
            </div>
            {/* ./Social */}
          </div>
          {/* ./Details`*/}
          {/* Links */}
          <div className={ styles[ `${ baseClass }__links` ] }>
            { links.map(( group, index: number ) => (
              <div
                key={ `${ index }` }
                className={ styles[ `${ baseClass }__links-group` ] }
              >
                { group.links.map(( link, idx: number ) => (
                  <div
                    key={ `${ link.label } ${ idx }` }
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
            ))}
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
 * - Footer / 11
 */
