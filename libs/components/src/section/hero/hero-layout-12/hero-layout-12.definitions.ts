// IMPORTS
import type { IImage } from '@relume-demo/utils';
import type { THeroWithActions } from '../hero.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type THeroLayout12Props = IHeroLayout12;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IHeroLayout12 extends THeroWithActions {
  /**
   * Renders rows of images below the text content block.
   */
  images: IImage[];
}

// EXPORTS
export type { THeroLayout12Props };
