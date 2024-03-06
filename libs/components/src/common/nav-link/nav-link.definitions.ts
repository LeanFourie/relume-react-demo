// IMPORTS
import { TIconProps } from '../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TNavLinkProps = INavLink;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface INavLink {
  // Required
  /**
   * Sets the label value of the component.
   */
  label: string;
  /**
   * Sets the URL the user will be directed to once the component is clicked.
   */
  url: string;

  // Optional
  /**
   * A boolean flag that updates the styling of the component - Adds a programmatic hover state.
   * 
   * @default false
   */
  isHovering?: boolean;
  /**
   * Child links that will be rendered when the user hovers over the component.
   */
  links?: ( INavLink & {
    description: string;
    icon: Omit< TIconProps, 'className' >;
  })[];
}

// EXPORTS
export type { TNavLinkProps };
