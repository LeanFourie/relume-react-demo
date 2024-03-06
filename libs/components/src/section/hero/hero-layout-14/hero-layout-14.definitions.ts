// IMPORTS
import type { IImage } from '@relume-demo/utils';
import type { THeroWithActions } from '../hero.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type THeroLayout14Props = IHeroLayout14;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IHeroLayout14 extends THeroWithActions {
  /**
   * Renders parallax scrolling images around the text content block.
   */
  images: [
    IImage,
    IImage,
    IImage,
    IImage,
    IImage,
    IImage
  ];
}

// EXPORTS
export type { THeroLayout14Props };
