// IMPORTS
import { IProductHeader } from '../product-header.definitions';

// TYPES
/**
* Sets the required props for the component
*/
type TProductHeaderLayout3Props = IProductHeaderLayout3;
/**
 * Sets the available accordion item types that can be rendered.
 */
type TProductHeaderLayout3Accordion =
  | 'details'
  | 'shipping'
  | 'returns';

// INTERFACES
/**
* Sets the default required props for the component
*/
interface IProductHeaderLayout3 extends IProductHeader {}

// EXPORTS
export type {
  TProductHeaderLayout3Accordion,
  TProductHeaderLayout3Props
};
