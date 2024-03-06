// IMPORTS
import type {
  ISectionWithCustomBackground,
  ISectionWithImage,
  ISectionWithVideo,
  TOrder
} from '@relume-demo/utils';
import type { THeroWithForm } from '../hero.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type THeroLayout2Props =
  | IHeroLayout2WithImage
  | IHeroLayout2WithVideo
  | IHeroLayout2WithCustomBackground;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IHeroLayout2 extends THeroWithForm {
  /**
   * If true, all of the hero content will be contained in a block.
   * 
   * @renders false
   */
  isCondensed?: boolean;
  /**
   * If true, a border will be added around the contained content.
   * Only works if the hero is condensed.
   * 
   * @renders false
   */
  isContained?: boolean;
  /**
   * Determines the display order of the content.
   * 
   * @renders 'default'
   */
  order?: TOrder;
}

/**
* Sets the required props for the image variant component.
*/
interface IHeroLayout2WithImage extends IHeroLayout2, ISectionWithImage{}
/**
* Sets the required props for the video variant component.
*/
interface IHeroLayout2WithVideo extends IHeroLayout2, Omit< ISectionWithVideo, 'autoPlay' > {}
/**
* Sets the required props for the custom background variant component.
*/
interface IHeroLayout2WithCustomBackground extends IHeroLayout2, ISectionWithCustomBackground{}

// EXPORTS
export type { THeroLayout2Props };
