// IMPORTS
import type {
  ISectionWithCustomBackground,
  ISectionWithImage,
  ISectionWithVideo
} from '@relume-demo/utils';
import type { THeroWithActions } from '../hero.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type THeroLayout5Props =
  | IHeroLayout5WithImage
  | IHeroLayout5WithVideo
  | IHeroLayout5WithCustomBackground;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IHeroLayout5 extends THeroWithActions {}

/**
* Sets the required props for the image variant component.
*/
interface IHeroLayout5WithImage extends IHeroLayout5, ISectionWithImage{}
/**
* Sets the required props for the video variant component.
*/
interface IHeroLayout5WithVideo extends IHeroLayout5, Omit< ISectionWithVideo, 'autoPlay' > {}
/**
* Sets the required props for the custom background variant component.
*/
interface IHeroLayout5WithCustomBackground extends IHeroLayout5, ISectionWithCustomBackground{}

// EXPORTS
export type { THeroLayout5Props };
