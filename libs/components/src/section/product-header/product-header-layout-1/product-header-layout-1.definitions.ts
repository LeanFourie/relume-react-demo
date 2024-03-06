// IMPORTS
import { IProductHeader } from '../product-header.definitions';

// TYPES
/**
* Sets the required props for the component
*/
type TProductHeaderLayout1Props = IProductHeaderLayout1;
/**
 * Sets the available accordion item types that can be rendered.
 */
type TProductHeaderLayout1Accordion =
  | 'details'
  | 'shipping'
  | 'returns';

// INTERFACES
/**
* Sets the default required props for the component
*/
interface IProductHeaderLayout1 extends IProductHeader {}

// EXPORTS
export type {
  TProductHeaderLayout1Accordion,
  TProductHeaderLayout1Props
};
