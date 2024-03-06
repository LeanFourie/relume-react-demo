// IMPORTS
import type { IImage } from '@relume-demo/utils';

// TYPES
/**
* Sets the required props for the component.
*/
type TCtaBannerLayout9Props = ICtaBannerLayout9;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ICtaBannerLayout9 {
  /**
   * Sets a list of link items to be rendered on the component.
   */
  links: ICtaBannerLayout9Link[];
  /**
   * Sets a tagline value at the top of the section.
   */
  tagline: string;
}

/**
* Sets the required props for the section link items.
*/
interface ICtaBannerLayout9Link {
  /**
   * The image props required to render the image element on the link item.
   */
  image: IImage;
  /**
   * The label string value to be rendered.
   */
  label: string;
  /**
   * The destination of the link that the user will be directed to once the link is clicked.
   */
  href: string;
}

// EXPORTS
export type { TCtaBannerLayout9Props };
