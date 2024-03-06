// IMPORTS
import type {
  ISectionWithCustomBackground,
  ISectionWithImage,
  ISectionWithVideo,
  THorizontalAlignment,
  TStackDirection
} from '@relume-demo/utils';
import type { THeroWithForm } from '../hero.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type THeroLayout8Props =
  | IHeroLayout8WithImage
  | IHeroLayout8WithVideo
  | IHeroLayout8WithCustomBackground;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IHeroLayout8 extends THeroWithForm {
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
interface IHeroLayout8WithImage extends IHeroLayout8, ISectionWithImage{}
/**
* Sets the required props for the video variant component.
*/
interface IHeroLayout8WithVideo extends IHeroLayout8, Omit< ISectionWithVideo, 'autoPlay' > {}
/**
* Sets the required props for the custom background variant component.
*/
interface IHeroLayout8WithCustomBackground extends IHeroLayout8, ISectionWithCustomBackground{}

// EXPORTS
export type { THeroLayout8Props };
