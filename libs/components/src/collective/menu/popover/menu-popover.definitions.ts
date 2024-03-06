// IMPORTS
import { TNavLinkProps } from '../../../';

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IMenuPopover {
  /**
   * Renders the link group items with their titles and link items.
   */
  linkGroups: IMenuPopoverLinkGroup[];
}

/**
* Sets the required props for the component popover menu link items.
*/
interface IMenuPopoverLinkGroup {
  // Required
  /**
   * The required prop values for the link component.
   */
  links: TNavLinkProps[ 'links' ];

  // Optional
  /**
   * The string value for the group title text.
   */
  title?: string;
}

// EXPORTS
export type { IMenuPopover };
