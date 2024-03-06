// IMPORTS
import type {
  TColor,
  TShade,
  TSize,
  TSupportColor,
  TUiVariant
} from '@relume-demo/utils';
import type { TIconProps } from './../icon/icon.definitions';

// TYPES
/**
 * Union type for the props required for the Button component.
 */
type TButtonProps = 
  | IButtonText
  | IButtonIcon;

/**
 * Type representing the available button types ('text' or 'icon').
 */
type TButtonType = 
  | 'text'
  | 'icon';

// INTERFACES
/**
 * Interface defining the default props required for the button component.
 */
interface IButton {
  // Required
  /**
   * A descriptive label for accessibility and screen readers.
   */
  accessibleLabel: string;
  /**
   * Callback function invoked when the button is clicked.
   * 
   * @returns { void } - Returns nothing.
   */
  onClick: () => void;
  
  // Optional
  /**
   * Additional CSS classes for styling the button.
   */
  className?: string;
  /**
   * The visual color of the button (excluding 'tertiary' and support colors).
   * 
   * @default 'primary'
   */
  color?: Exclude<
    TColor,
    'tertiary' | TSupportColor
  >;
  /**
   * Additional CSS classes for styling the component host.
   */
  hostClassName?: string;
  /**
   * Indicates whether the button is disabled.
   * 
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Determines whether the button adjusts its width to its content or fills its parent width.
   * 
   * @default false
   */
  isFullWidth?: boolean;
  /**
   * Indicates whether the button is in a loading state.
   * 
   * @default false
   */
  isLoading?: boolean;
  /**
   * Indicates whether the button is selected.
   * 
   * @default false
   */
  isSelected?: boolean;
  /**
   * Indicates whether the button is in a skeleton loading state.
   * 
   * @default false
   */
  isSkeleton?: boolean;
  /**
   * The visual shade of the button.
   * 
   * @default 'dark'
   */
  shade?: TShade;
  /**
   * The size of the button.
   * 
   * @default 'md'
   */
  size?: TSize;
  /**
   * The visual variant of the button.
   * 
   * @default 'filled'
   */
  variant?: TUiVariant;
}

/**
 * Interface defining the props required for buttons with labels.
 */
interface IButtonText extends IButton {
  // Required
  /**
   * The text label displayed on the button.
   */
  label: string;
  /**
   * The type of the button, set to 'text'.
   */
  type: Extract< TButtonType, 'text' >;
  
  // Optional
  /**
   * An optional leading icon displayed before the label.
   */
  leadingIcon?: Exclude< TIconProps, 'className' >;
  /**
   * An optional trailing icon displayed after the label.
   */
  trailingIcon?: Exclude< TIconProps, 'className' >;
}

/**
 * Interface defining the props required for buttons without labels.
 */
interface IButtonIcon extends IButton {
  /**
   * The icon to render inside the button.
   */
  icon: Exclude< TIconProps, 'className' >;
  /**
   * The type of the button, set to 'icon'.
   */
  type: Extract< TButtonType, 'icon' >;
}

// EXPORTS
export type {
  IButtonText,
  IButtonIcon,
  TButtonProps
};
