// TYPES
/**
 * Host Component Props
 * 
 * Defines the properties required for the Host component.
 */
type THostProps = IHost;

// INTERFACES
/**
 * Host Component Default Props
 * 
 * Defines the default properties for the Host component.
 */
interface IHost {
  // Optional
  /**
   * Additional CSS classes to be applied to the component.
   */
  className?: string;
  /**
   * Specifies whether the component is disabled.
   * 
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Specifies whether the component should fill its parent's width.
   * 
   * @default false
   */
  isFullWidth?: boolean;
  /**
   * Specifies whether the component is in a loading state.
   * 
   * @default false
   */
  isLoading?: boolean;
  /**
   * Specifies whether the component is in a skeleton state.
   * 
   * @default false
   */
  isSkeleton?: boolean;
}

// EXPORTS
export type { THostProps };