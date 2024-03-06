// IMPORTS
import {
  IProductVariant,
  IProductVariantOption
} from '@relume-demo/utils';

// TYPES
/**
* Sets the required props for the component.
*/
type TVariantOptionsProps = IVariantOptions;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IVariantOptions extends IProductVariant {
  // Required
  /**
   * A callback function tha fires when a users updates their selected option.
   * 
   * @param { IProductVariantOption } option - The selected variant option object.
   * 
   * @returns  { void } - Returns nothing.
   */
  returnSelectedOption: ( option: IProductVariantOption ) => void;

  // Optional
  /**
   * If set, the component will have a pre selected option filled.
   */
  selectedOption?: IProductVariantOption;
}

// EXPORTS
export type { TVariantOptionsProps };
