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
type TMenuMegaLayout2Props = IMenuMegaLayout2;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IMenuMegaLayout2 extends IMenuMega {
  /**
   * The value of the title for the featured link column.
   */
  featuredLinkTitle: string;
  /**
   * The props required for feature link to be rendered.
   */
  featuredLink: IMenuMegaFeaturedLink;
  /**
   * The props required for the featured link column CTA.
   */
  featuresCTA: IMenuMegaFeaturesCTA;
}

// EXPORTS
export type { TMenuMegaLayout2Props };
