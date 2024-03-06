// IMPORTS
import type {
  TNeutralColor,
  TSystemColor,
  TThemeColor
} from '@relume-demo/utils';

// TYPES
/**
 * Specifies the available icons that can be used with the link.
 */
type TLinkIcon =
  | 'arrow'
  | 'new tab';
/**
 * Specifies the props required for the link component, with different variations.
 */
type TLinkProps =
  | ILinkAnchor
  | ILinkButton
  | ILinkSpan;
/**
 * Specifies the target options for the link.
 */
type TLinkTarget =
  | '_self'
  | '_blank'
  | '_parent'
  | '_top';
/**
 * Specifies the type of link variants available.
 */
type TLinkType =
  | 'a'
  | 'button'
  | 'span';

// INTERFACES
/**
 * Base props required for the link component.
 */
interface ILink {
  // Required
  /**
   * The text label displayed for the link.
   */
  label: string;

  // Optional
  /**
   * Additional CSS classes for styling the link component.
   */
  className?: string;
  /**
   * Additional CSS classes for the host/container of the link.
   */
  hostClassName?: string;
  /**
   * An optional icon to be displayed alongside the link.
   */
  icon?: TLinkIcon;
  /**
   * Indicates whether the link is disabled or not.
   * 
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Indicates whether the link is in a skeleton loading state.
   * 
   * @default false
   */
  isSkeleton?: boolean;
  /**
   * Specifies the color of the link.
   * 
   * @default 'primary'
   */
  color?:
    | Extract< TThemeColor, 'primary' >
    | TNeutralColor
    | TSystemColor;
}

/**
 * Props required for anchor tag links.
 */
interface ILinkAnchor extends ILink {
  // Required
  /**
   * The destination URL when the link is clicked.
   */
  href: string;
  /**
   * Specifies the type of link (anchor).
   */
  type: Extract< TLinkType, 'a' >;

  // Optional
  /**
   * Specifies the target window or frame for the linked document.
   */
  target?: TLinkTarget;
}

/**
 * Props required for button links.
 */
interface ILinkButton extends ILink {
  // Required
  /**
   * A function to be called when the button link is clicked.
   * 
   * @returns { void } - Returns nothing.
   */
  onClick: () => void;
  /**
   * Specifies the type of link (button).
   */
  type: Extract< TLinkType, 'button' >;
}

/**
 * Props required for span tag links.
 */
interface ILinkSpan extends ILink {
  // Required
  /**
   * A function to be called when the span link is clicked.
   * 
   * @returns { void } - Returns nothing.
   */
  onClick: () => void;
  /**
   * Specifies the type of link (span).
   */
  type: Extract< TLinkType, 'span' >;
}

// EXPORTS
export type { TLinkProps };
