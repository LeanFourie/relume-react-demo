// Packages & Modules
import { getCurrentYear } from '@relume-demo/utils';
import styles from './footer-layout-6.module.scss';

// Components
import {
  Image,
  Link,
  NewsletterForm,
  Text
} from '../../../';

// Definitions
/**
 * FooterLayout6 Component
 * 
 * The `FooterLayout6` component is a page footer component useful for easy site navigation.
 * The component renders sets of link items, alongside social links, a newsletter sign up form, the company logo and links to legal pages such as the privacy policy page.
 * 
 * @component
 * @example
 * <FooterLayout6
 *   companyName={ 'Relume Demo' }
 *   links={[{
 *     title: 'Column',
 *     links: [{
 *       label: 'Link label',
 *       url: '#'
 *     }]
 *   }]}
 *   logoUri={ '/images/image-relume_demo-logo.svg' }
 *   newsletter={{
 *     title: 'Subscribe',
 *     description: 'Join our newsletter to stay up to date on features and releases.',
 *     onSubmit: () => {}
 *   }}
 * />
 * 
 * @param { TFooterLayout6Props } props - The properties for configuring the FooterLayout6 component.
 * 
 * @returns { JSX.Element } - The FooterLayout6 component is being returned as a JSX element.
 */
import type { TFooterLayout6Props } from './footer-layout-6.definitions';

// Component
export const FooterLayout6 = ( props: TFooterLayout6Props ): JSX.Element => {
  // #region - PROPS
  const {
    companyName,
    links,
    logoUri,
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
          {/* Text */}
          <div className={ styles[ `${ baseClass }__newsletter-text` ] }>
            <div className={ styles[ `${ baseClass }__newsletter-title` ] }>
              <Text
                className={ styles[ `${ baseClass }__newsletter-title-element` ] }
                fontWeight={ 'semibold' }
                variant={ 'text medium' }
              >
                { newsletter.title }
              </Text>
            </div>
            <div className={ styles[ `${ baseClass }__newsletter-paragraph` ] }>
              <Text
                className={ styles[ `${ baseClass }__newsletter-paragraph-element` ] }
                variant={ 'text regular' }
              >
                { newsletter.description }
              </Text>
            </div>
          </div>
          {/* ./Text */}
          {/* Form */}
          <div className={ styles[ `${ baseClass }__newsletter-form` ] }>
            <NewsletterForm onSubmit={ handleFormSubmit } />
          </div>
          {/* ./Form */}
        </div>
        {/* ./Top */}

        {/* Center */}
        <div className={ styles[ `${ baseClass }__center` ] }>
          {/* Links */}
          <div className={ styles[ `${ baseClass }__links` ] }>
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
          </div>
          {/* ./Links */}
        </div>
        {/* ./Center */}

        {/* Bottom */}
        <div className={ styles[ `${ baseClass }__bottom` ] }>
          {/* Logo */}
          <div className={ styles[ `${ baseClass }__logo` ] }>
            <Image
              alt={ companyName }
              className={ styles[ `${ baseClass }__logo-element` ] }
              src={ logoUri }
            />
          </div>
          {/* ./Logo */}
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
 * - Footer / 6
 */
