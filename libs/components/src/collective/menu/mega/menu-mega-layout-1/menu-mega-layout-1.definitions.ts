// IMPORTS
import type {
  IMenuMega,
  IMenuMegaFeaturedLink,
  IMenuMegaFeaturesCTA
} from '../menu-mega.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type TMenuMegaLayout1Props = IMenuMegaLayout1;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IMenuMegaLayout1 extends IMenuMega {
  /**
   * The value of the title for the featured links column.
   */
  featuredLinksTitle: string;
  /**
   * The props required for feature links to be rendered.
   */
  featuredLinks: [
    IMenuMegaFeaturedLink,
    IMenuMegaFeaturedLink
  ];
  /**
   * The props required for the featured links column CTA.
   */
  featuresCTA: IMenuMegaFeaturesCTA
}

// EXPORTS
export type { TMenuMegaLayout1Props };
