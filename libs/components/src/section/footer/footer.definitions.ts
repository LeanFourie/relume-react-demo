// IMPORTS
import type { ISocialLink } from '@relume-demo/utils';

// TYPES
/**
* Sets the required props for the component.
*/
type TFooterLinks =
  | IFooterLink[]
  | IFooterLinkGroup[]
  | IFooterLinkGroupWithTitle[];

// INTERFACES
/**
* Sets the default required props for the footer.
*/
interface IFooter {
  /**
   * Sets the company name on the component.
   */
  companyName: string;
  /**
   * Sets the link items on the component.
   */
  links: TFooterLinks;
  /**
   * The company logo source url.
   */
  logoUri: string;
  /**
   * The legal link items to render on the component.
   */
  legalLinks: IFooterLegalLinks;
  /**
   * The social link items to render on the component.
   */
  socials: ISocialLink[];
}

/**
* Sets the default required props for the footer legal links.
*/
interface IFooterLegalLinks {
  // Required
  /**
   * The privacy policy link props.
   */
  policy: IFooterLink;
  /**
   * The terms and conditions link props.
   */
  terms: IFooterLink;

  // Optional
  /**
   * The cookies link props.
   */
  cookies?: IFooterLink;
}

/**
* Sets the default required props for the footer link.
*/
interface IFooterLink {
  /**
   * The label value rendered on the link.
   */
  label: string;
  /**
   * The URL the user will be directed to once the link is clicked.
   */
  url: string;
}

/**
* Sets the default required props for the footer link group.
*/
interface IFooterLinkGroup {
  /**
   * The list of links to render.
   */
  links: IFooterLink[];
}

/**
* Sets the default required props for the footer link group with a title.
*/
interface IFooterLinkGroupWithTitle extends IFooterLinkGroup {
  /**
   * The title to render above the links.
   */
  title: string;
}

// EXPORTS
export type {
  IFooter,
  IFooterLink,
  IFooterLinkGroup,
  IFooterLinkGroupWithTitle,
  IFooterLegalLinks,
  TFooterLinks
};
