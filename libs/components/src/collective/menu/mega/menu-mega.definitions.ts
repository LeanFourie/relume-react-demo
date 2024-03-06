// IMPORTS
import type { IImage } from '@relume-demo/utils';
import type { TNavLinkProps } from '../../../';

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IMenuMega {
  /**
   * Renders a list of link groups with their titles and link items.
   */
  linkGroups: IMenuMegaLinkGroup[];
}

/**
* Sets the required props for the component mega menu link group.
*/
interface IMenuMegaLinkGroup {
  // Required
  links: TNavLinkProps[ 'links' ];

  // Optional
  title?: string;
}

/**
* Sets the required props for the component mega menu featured link item.
*/
interface IMenuMegaFeaturedLink {
  /**
   * The string description value of the featured link.
   */
  description: string;
  /**
   * Sets the image properties on the featured link.
   */
  image: IImage;
  /**
   * Sets the title string value to render on the featured link.
   */
  title: string;
  /**
   * Sets the destination the user will be directed to once the featured link is clicked.
   */
  url: string;
}


/**
* Sets the required props for the component mega menu features column CTA item.
*/
interface IMenuMegaFeaturesCTA {
  /**
   * The label string value of the CTA link.
   */
  label: string;
  /**
   * Sets the destination the user will be directed to once the CTA link is clicked.
   */
  url: string;
}

// EXPORTS
export type {
  IMenuMega,
  IMenuMegaFeaturedLink,
  IMenuMegaFeaturesCTA,
  IMenuMegaLinkGroup
};
