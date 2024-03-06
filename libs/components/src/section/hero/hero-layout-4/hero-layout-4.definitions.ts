// IMPORTS
import type {
  ISectionWithCustomBackground,
  ISectionWithImage,
  ISectionWithVideo,
  THorizontalAlignment
} from '@relume-demo/utils';
import type { THeroWithForm } from '../hero.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type THeroLayout4Props =
  | IHeroLayout4WithImage
  | IHeroLayout4WithVideo
  | IHeroLayout4WithCustomBackground;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IHeroLayout4 extends THeroWithForm {
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
interface IHeroLayout4WithImage extends IHeroLayout4, ISectionWithImage{}
/**
* Sets the required props for the video variant component.
*/
interface IHeroLayout4WithVideo extends IHeroLayout4, Omit< ISectionWithVideo, 'autoPlay' > {}
/**
* Sets the required props for the custom background variant component.
*/
interface IHeroLayout4WithCustomBackground extends IHeroLayout4, ISectionWithCustomBackground{}

// EXPORTS
export type { THeroLayout4Props };
