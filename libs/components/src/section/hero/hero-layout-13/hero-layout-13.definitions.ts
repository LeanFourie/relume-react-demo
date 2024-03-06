// IMPORTS
import type { IImage } from '@relume-demo/utils';
import type { THeroWithActions } from '../hero.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type THeroLayout13Props = IHeroLayout13;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IHeroLayout13 extends THeroWithActions {
  /**
   * Renders columns of images in the background.
   */
  images: IImage[];
}

// EXPORTS
export type { THeroLayout13Props };
