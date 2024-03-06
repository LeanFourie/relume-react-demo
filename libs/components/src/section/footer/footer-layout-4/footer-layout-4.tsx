// Packages & Modules
import { getCurrentYear } from '@relume-demo/utils';
import styles from './footer-layout-4.module.scss';

// Components
import {
  Image,
  Link,
  SocialLinks,
  Text
} from '../../../';

// Definitions
import type { IFooterLegalLinks } from '../footer.definitions';
import type { TFooterLayout4Props } from './footer-layout-4.definitions';

// Component
/**
 * FooterLayout4 Component
 * 
 * The `FooterLayout4` component is a page footer component useful for easy site navigation.
 * The component renders a set of link items, alongside social links, the company logo and links to legal pages such as the privacy policy page.
 * 
 * @component
 * @example
 * <FooterLayout4
 *   companyName={ 'Relume Demo' }
 *   links={[{
 *     label: 'Link label',
 *     url: '#'
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
 * @param { TFooterLayout4Props } props - The properties for configuring the FooterLayout4 component.
 * 
 * @returns { JSX.Element } - The FooterLayout4 component is being returned as a JSX element.
 */
export const FooterLayout4 = ( props: TFooterLayout4Props ): JSX.Element => {
  // #region - PROPS
  const {
    companyName,
    links,
    logoUri,
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

  // #region - HTML
  return (
    <footer className={ styles[ baseClass ] }>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Top */}
        <div className={ styles[ `${ baseClass }__top` ] }>
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
          {/* Socials */}
          <div className={ styles[ `${ baseClass }__social` ] }>
            <SocialLinks links={ socials } />
          </div>
          {/* /Socials */}
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
 * - Footer / 4
 */
