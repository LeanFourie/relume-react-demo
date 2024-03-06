// IMPORTS
import type { IImage } from '@relume-demo/utils';
import type { THeroWithActions } from '../hero.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type THeroLayout18Props = IHeroLayout18;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IHeroLayout18 {
  /**
   * Sets the slides to render on the component.
   */
  slides: IHeroLayout18Slide[];
}

/**
* Sets the required props for the slide components.
*/
interface IHeroLayout18Slide extends THeroWithActions {
  /**
   * Sets the slide image to render.
   */
  image: IImage;
  /**
   * Sets the slide tab label to render.
   */
  tagline: string;
}

// EXPORTS
export type { THeroLayout18Props };
