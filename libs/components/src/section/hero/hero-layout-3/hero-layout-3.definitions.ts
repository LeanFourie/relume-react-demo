// IMPORTS
import type {
  ISectionWithCustomBackground,
  ISectionWithImage,
  ISectionWithVideo,
  THorizontalAlignment
} from '@relume-demo/utils';
import type { THeroWithActions } from '../hero.definitions';

// TYPES
/**
* Sets the required props for the component
*/
type THeroLayout3Props =
  | IHeroLayout3WithImage
  | IHeroLayout3WithVideo
  | IHeroLayout3WithCustomBackground;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IHeroLayout3 extends THeroWithActions {
  /**
   * If true, all of the hero content will be contained in a block.
   * 
   * @default false
   */
  isCondensed?: boolean;
  /**
   * Determines the alignment of the hero content text.
   * 
   * @default 'left'
   */
  textAlign?: Exclude< THorizontalAlignment, 'right' >;
}

/**
* Sets the required props for the image variant component.
*/
interface IHeroLayout3WithImage extends IHeroLayout3, ISectionWithImage{}
/**
* Sets the required props for the video variant component.
*/
interface IHeroLayout3WithVideo extends IHeroLayout3, Omit< ISectionWithVideo, 'autoPlay' > {}
/**
* Sets the required props for the custom background variant component.
*/
interface IHeroLayout3WithCustomBackground extends IHeroLayout3, ISectionWithCustomBackground{}

// EXPORTS
export type { THeroLayout3Props };
