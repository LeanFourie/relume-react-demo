// IMPORTS
import type {
  ISectionWithCustomBackground,
  ISectionWithImage,
  ISectionWithVideo
} from '@relume-demo/utils';
import type { THeroWithForm } from '../hero.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type THeroLayout6Props =
  | IHeroLayout6WithImage
  | IHeroLayout6WithVideo
  | IHeroLayout6WithCustomBackground;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IHeroLayout6 extends THeroWithForm {}

/**
* Sets the required props for the image variant component.
*/
interface IHeroLayout6WithImage extends IHeroLayout6, ISectionWithImage{}
/**
* Sets the required props for the video variant component.
*/
interface IHeroLayout6WithVideo extends IHeroLayout6, ISectionWithVideo {}
/**
* Sets the required props for the custom background variant component.
*/
interface IHeroLayout6WithCustomBackground extends IHeroLayout6, ISectionWithCustomBackground{}

// EXPORTS
export type { THeroLayout6Props };
