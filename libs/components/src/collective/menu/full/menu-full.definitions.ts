// IMPORTS
import type { ISocialLink } from '@relume-demo/utils';
import type { TNavLinkProps } from '../../../';

// INTERFACES
/**
* Sets the default required props for the component
*/
interface IMenuFull {
  /**
   * Sets the URL to which the user will be directed when clicking on the contact link
   */
  contactUrl: string;
  /**
   * Sets the links to render on the menu
   */
  links: ( Omit< TNavLinkProps, 'links' > )[];
  /**
   * Sets the social account links to render on the menu
   */
  socials: ISocialLink[];
}

// EXPORTS
export type { IMenuFull };
