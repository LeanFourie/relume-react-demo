// IMPORTS
import type {
  ISectionWithCustomBackground,
  ISectionWithImage,
  ISectionWithVideo,
  TOrder
} from '@relume-demo/utils';
import type { THeroWithActions } from '../hero.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type THeroLayout1Props =
  | IHeroLayout1WithImage
  | IHeroLayout1WithVideo
  | IHeroLayout1WithCustomBackground;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IHeroLayout1 extends THeroWithActions {
  /**
   * If true, all of the hero content will be contained in a block.
   * 
   * @default false
   */
  isCondensed?: boolean;
  /**
   * If true, a border will be added around the contained content.
   * Only works if the hero is condensed.
   * 
   * @default false
   */
  isContained?: boolean;
  /**
   * Determines the display order of the content.
   * 
   * @default 'default'
   */
  order?: TOrder;
}

/**
* Sets the required props for the image variant component.
*/
interface IHeroLayout1WithImage extends IHeroLayout1, ISectionWithImage{}
/**
* Sets the required props for the video variant component.
*/
interface IHeroLayout1WithVideo extends IHeroLayout1, Omit< ISectionWithVideo, 'autoPlay' > {}
/**
* Sets the required props for the custom background variant component.
*/
interface IHeroLayout1WithCustomBackground extends IHeroLayout1, ISectionWithCustomBackground{}

// EXPORTS
export type { THeroLayout1Props };
