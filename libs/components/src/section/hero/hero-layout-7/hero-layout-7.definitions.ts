// IMPORTS
import type {
  ISectionWithCustomBackground,
  ISectionWithImage,
  ISectionWithVideo,
  THorizontalAlignment,
  TStackDirection
} from '@relume-demo/utils';
import type { THeroWithActions } from '../hero.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type THeroLayout7Props =
  | IHeroLayout7WithImage
  | IHeroLayout7WithVideo
  | IHeroLayout7WithCustomBackground;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IHeroLayout7 extends THeroWithActions {
  /**
   * Determines the text alignment of the component.
   * 
   * @default 'left'
   */
  textAlign?: Exclude< THorizontalAlignment, 'right' >;
  /**
   * Determines the stacking order of the content text.
   * 
   * @default 'horizontal'
   */
  textStackDirection?: TStackDirection;
}

/**
* Sets the required props for the image variant component.
*/
interface IHeroLayout7WithImage extends IHeroLayout7, ISectionWithImage{}
/**
* Sets the required props for the video variant component.
*/
interface IHeroLayout7WithVideo extends IHeroLayout7, Omit< ISectionWithVideo, 'autoPlay' > {}
/**
* Sets the required props for the custom background variant component.
*/
interface IHeroLayout7WithCustomBackground extends IHeroLayout7, ISectionWithCustomBackground{}

// EXPORTS
export type { THeroLayout7Props };
