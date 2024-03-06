// IMPORTS
import type {
  TShade,
  TSize,
  TState,
  TUiVariant
} from '@relume-demo/utils';
import type { THelperTextProps } from '../../';

// TYPES
/**
 * Defines the props required for the textarea component.
 */
type TTextareaProps = ITextarea;

// INTERFACES
/**
 * Represents the required and optional props for the textarea component.
 */
interface ITextarea {
  // Required
  /**
   * Callback function invoked on changes to the textarea value.
   * 
   * * @param { string } value - The new value of the textarea.
   * 
   * * @returns { void } - Returns nothing.
   */
  onChange: ( value: string ) => void;
  /**
   * The current value of the textarea.
   */
  value: string;

  // Optional
  /**
   * Additional CSS classes to be applied to the textarea.
   */
  className?: string;
  /**
   * Helper text or an array of helper texts associated with the textarea.
   */
  helperText?:  ITextareaHelperText |
                ITextareaHelperText[];
  /**
   * Hides the label visually while maintaining accessibility.
   * 
   * @default false
   */
  hideLabel?: boolean;
  /**
   * Disables user interaction with the textarea if set to `true`.
   * 
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Makes the textarea read-only if set to `true`.
   * 
   * @default false
   */
  isReadonly?: boolean;
  /**
   * Specifies whether the textarea must be filled before submitting a form.
   * 
   * @default false
   */
  isRequired?: boolean;
  /**
   * Displays a skeleton loading state for the textarea.
   * 
   * @default false
   */
  isSkeleton?: boolean;
  /**
   * A human-readable label associated with the textarea.
   */
  label?: string;
  /**
   * The maximum number of characters allowed in the textarea.
   */
  maxLength?: number;
  /**
   * The minimum number of characters required in the textarea.
   */
  minLength?: number;
  /**
   * Callback function invoked when the textarea loses focus.
   */
  onBlur?: (value?: string) => void;
  /**
   * Callback function invoked when the textarea gains focus.
   */
  onFocus?: (value?: string) => void;
  /**
   * Placeholder text displayed in the textarea when no value is present.
   */
  placeholder?: string;
  /**
   * Specifies the visual appearance of the textarea (e.g., light or dark).
   * 
   * @default 'dark'
   */
  shade?: TShade;
  /**
   * Determines the size of the textarea component.
   * 
   * @default 'md'
   */
  size?: TSize;
  /**
   * Represents the semantic state of the textarea (e.g., success, warning).
   * 
   * @default 'default'
   */
  state?: TState;
  /**
   * Determines the visual style of the textarea (e.g., filled, outlined).
   * 
   * @default 'filled'
   */
  variant?: Exclude< TUiVariant, 'ghost' >;
}

/**
 * Represents the props required for the textarea helper text.
 */
interface ITextareaHelperText {
  // Required
  /**
   * The content of the helper text.
   */
  value: string;

  // Optional
  /**
   * Additional options for the helper text.
   */
  options?: Omit<
    THelperTextProps,
    'children' | 'isSkeleton'
  >;
}

// EXPORTS
export type { TTextareaProps };