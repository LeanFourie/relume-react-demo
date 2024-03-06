// IMPORTS
import type { ISocialLink } from '@relume-demo/utils';

// TYPES
/**
* Sets the required props for the component.
*/
type TSocialLinksProps = ISocialLinks;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ISocialLinks {
  /**
   * Sets the social link items to render.
   */
  links: ISocialLink[];
}

// EXPORTS
export type { TSocialLinksProps };
