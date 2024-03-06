// TYPES
/**
 * Defines the props type for the MenuTrigger component.
 */
type TMenuTriggerProps = IMenuTrigger;

// INTERFACES
/**
 * Defines the properties required for the MenuTrigger component.
 */
interface IMenuTrigger {
  /**
   * Emits click events form the element trigger
   * 
   * @param state - The state to be emitted.
   * 
   * @returns { void } - Returns nothing.
   */
  onClick: ( state: boolean ) => void;
}

// EXPORTS
export type { TMenuTriggerProps };
