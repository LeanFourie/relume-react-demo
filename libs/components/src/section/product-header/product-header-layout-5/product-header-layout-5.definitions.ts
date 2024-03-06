// IMPORTS
import { IProductHeader } from '../product-header.definitions';

// TYPES
/**
* Sets the required props for the component
*/
type TProductHeaderLayout5Props = IProductHeaderLayout5;
type TProductHeaderLayout5Accordion =
  | 'details'
  | 'shipping'
  | 'returns';

// INTERFACES
/**
* Sets the default required props for the component
*/
interface IProductHeaderLayout5  extends IProductHeader {}

// EXPORTS
export type {
  TProductHeaderLayout5Accordion,
  TProductHeaderLayout5Props
};
