// IMPORTS
import type { IImage } from '@relume-demo/utils';
import type { THeroWithActions } from '../hero.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type THeroLayout17Props = IHeroLayout17;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IHeroLayout17 extends THeroWithActions {
  /**
   * Sets the slides to render on the component.
   */
  slides: IHeroLayout17Slide[];
}

/**
* Sets the required props for the slide components.
*/
interface IHeroLayout17Slide {
  /**
   * Sets the slide paragraph text to render.
   */
  description: string;
  /**
   * Sets the slide image to render.
   */
  image: IImage;
  /**
   * Sets the slide title text to render.
   */
  title: string;
}

// EXPORTS
export type { THeroLayout17Props };
