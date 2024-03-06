// IMPORTS
import type { TNavLinkProps } from '../../../../';
import type { IMenuFull } from '../menu-full.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type TMenuFullLayout2Props = IMenuFullLayout2;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IMenuFullLayout2 extends Omit< IMenuFull, 'links' > {
  /**
   * Overrides the default links prop.
   */
  links: (( Omit< TNavLinkProps, 'links' > ) & {
    image: string;
  })[];
}

// EXPORTS
export type { TMenuFullLayout2Props };
