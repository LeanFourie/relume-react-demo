// TYPES
type TTagProps = ITag;

// INTERFACES
/**
 * Interface defining the properties required for the Tag component.
 */
interface ITag {
  // Required
  /**
   * The label or text content of the Tag.
   */
  label: string;
  /**
   * The URL to link when the Tag is clicked.
   */
  url: string;

  // Optional
  /**
   * Optional additional classes to apply to the Tag component.
   */
  className?: string;
}

// EXPORTS
export type { TTagProps };
