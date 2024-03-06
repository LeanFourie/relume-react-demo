// IMPORTS
import type {
  IImage,
  TStackDirection
} from '@relume-demo/utils';
import type { THeroWithActions } from '../hero.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type THeroLayout11Props = IHeroLayout11;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IHeroLayout11 extends THeroWithActions {
  // Required
  /**
   * Renders rows of images to the side of the text content.
   */
  images: IImage[];

  // Optional
  /**
   * Determines how the images will be stacked.
   * 
   * @default 'vertical'
   */
  imageStackDirection?: TStackDirection;
}

// EXPORTS
export type { THeroLayout11Props };
