// IMPORTS
import type { TNavLinkProps } from '../../../../';
import type { IMenuFull } from '../menu-full.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type TMenuFullLayout4Props = IMenuFullLayout4;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IMenuFullLayout4 extends Omit< IMenuFull, 'contactUrl' > {
  /**
   * Sets the address on the menu.
   */
  address: string;
  /**
   * Sets the contact number and contact number link value on the menu.
   */
  contactNumber: string;
  /**
   * Sets the email address and email address link value on the menu.
   */
  email: string;
  /**
   * Renders a list of secondary link items.
   */
  secondaryLinks: IMenuFullSecondaryLink[];
}

interface IMenuFullSecondaryLink {
  /**
   * Sets the links to render.
   */
  links: Omit< TNavLinkProps, 'links' >[];
  /**
   * Sets the title value of the link group.
   */
  title: string;
}

// EXPORTS
export type { TMenuFullLayout4Props };
