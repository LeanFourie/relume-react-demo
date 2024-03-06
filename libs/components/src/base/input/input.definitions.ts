// IMPORTS
import type {
  TShade,
  TSingleValueNumber,
  TSize,
  TState,
  TUiVariant
} from '@relume-demo/utils';
import type { TActionsListProps, THelperTextProps } from '../../';

// TYPES
/**
 * Defines the properties required for the Input component.
 */
type TInputProps =
  | IInputText
  | IInputEmail
  | IInputTel
  | IInputPassword
  | IInputSearch
  | IInputNumber
  | IInputDate
  | IInputTime;
/**
 * Specifies whether the time input is set to 'am' or 'pm'.
 */
type TInputTimeOfDay =
  | 'am'
  | 'pm';

/**
 * Specifies the type of input to render.
 */
type TInputType =
  | 'text'
  | 'email'
  | 'tel'
  | 'password'
  | 'search'
  | 'number'
  | 'date'
  | 'time';

// INTERFACES
/**
 * Defines the default properties for the Input component.
 */
interface IInput {
  // Required
  /**
   * Callback function invoked on changes to the input value.
   * 
   * @param { string } value - The new value of the input.
   * 
   * @returns { void } - Returns nothing.
   */
  onChange: ( value: string ) => void;
  /**
   * Sets the initial value of the input.
   */
  value: string;
  
  // Optional
  /**
   * Sets the autocomplete property for the input element.
   */
  autoComplete?: string;
  /**
   * Additional CSS classes for the input component.
   */
  className?: string;
  /**
   * Helper text to provide additional information or guidance.
   */
  helperText?:
    | IInputHelperText
    | IInputHelperText[];
  /**
   * Hides the input label if true.
   * 
   * @default false
   */
  hideLabel?: boolean;
  /**
   * Disables the input if true.
   * 
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Makes the input read-only if true.
   * 
   * @default false
   */
  isReadonly?: boolean;
  /**
   * Marks the input as required if true.
   * 
   * @default false
   */
  isRequired?: boolean;
  /**
   * Renders the input in a skeleton state if true.
   * 
   * @default false
   */
  isSkeleton?: boolean;
  /**
   * Adds a label to the input.
   */
  label?: string;
  /**
   * Callback function invoked when focus is lots on the input.
   * 
   * @param { string } [value] - The new value of the input.
   * 
   * @returns { void } - Returns nothing.
   */
  onBlur?: ( value?: string ) => void;
  /**
   * Callback function invoked when focus is placed on the input.
   * 
   * @param { string } [value] - The new value of the input.
   * 
   * @returns { void } - Returns nothing.
   */
  onFocus?: ( value?: string ) => void;
  /**
   * Callback function invoked when the enter key is press when inside the input.
   * 
   * @param { string } element - The Input HTML element
   * 
   * @returns { void } - Returns nothing.
   */
  onEnterPress?: ( element: HTMLInputElement ) => void;
  /**
   * Placeholder text to display inside the input.
   */
  placeholder?: string;
  /**
   * Specifies the shade of the input.
   * 
   * @default 'dark'
   */
  shade?: TShade;
  /**
   * Specifies the size of the input.
   * 
   * @default 'md'
   */
  size?: TSize;
  /**
   * Specifies the semantic state of the input.
   * 
   * @default 'default'
   */
  state?: TState;
  /**
   * Specifies the UI variant of the input.
   * 
   * @default 'filled'
   */
  variant?: Exclude< TUiVariant, 'ghost' >;
}

/**
 * Defines the properties required for the text input component.
 */
interface IInputText extends IInput {
  // Required
  /**
   * Sets the input type to 'text'.
   */
  type: Extract< TInputType, 'text' >;
  
  // Optional
  /**
   * Specifies the maximum character length of the input.
   */
  maxLength?: number;
  /**
   * Specifies the minimum character length of the input.
   */
  minLength?: number;
  /**
   * Allows only numeric characters if true.
   */
  numbersOnly?: boolean;
}

/**
 * Defines the properties required for the email input component.
 */
interface IInputEmail extends IInput {
  // Required
  /**
   * Sets the input type to 'email'.
   */
  type: Extract< TInputType, 'email' >;
  
  // Optional
  /**
   * Specifies the maximum character length of the input.
   */
  maxLength?: number;
  /**
   * Specifies the minimum character length of the input.
   */
  minLength?: number;
}

/**
 * Defines the properties required for the tel input component.
 */
interface IInputTel extends IInput {
  // Required
  /**
   * Sets the input type to 'tel'.
   */
  type: Extract< TInputType, 'tel' >;
  
  // Optional
  /**
   * Sets the dial code value of the input.
   */
  dialCode?: string;
  /**
   * Specifies the maximum character length of the input.
   */
  maxLength?: number;
  /**
   * Specifies the minimum character length of the input.
   */
  minLength?: number;
}

/**
 * Defines the properties required for the password input component.
 */
interface IInputPassword extends IInput {
  // Required
  /**
   * Sets the input type to 'password'.
   */
  type: Extract< TInputType, 'password' >;

  // Optional
  /**
   * Specifies the maximum character length of the input.
   */
  maxLength?: number;
  /**
   * Specifies the minimum character length of the input.
   */
  minLength?: number;
  /**
   * Handles the click event on the forgot password link.
   */
  onForgotPasswordClick?: () => void;
  /**
   * Displays a 'forgot password' link if true.
   */
  showForgotPassword?: boolean;
}

/**
 * Defines the properties required for the search input component.
 */
interface IInputSearch extends IInput {
  // Required
  /**
   * Sets the input type to 'search'.
   */
  type: Extract< TInputType, 'search' >;
  
  // Optional
  /**
   * Specifies the maximum character length of the input.
   */
  maxLength?: number;
  /**
   * Specifies the minimum character length of the input.
   */
  minLength?: number;
  /**
   * Renders an optional list of search results.
   */
  searchResults?: TActionsListProps[ 'options' ];
}

/**
 * Defines the properties required for the number input component.
 */
interface IInputNumber extends IInput {
  // Required
  /**
   * Sets the input type to 'number'.
   */
  type: Extract< TInputType, 'number' >;
  
  // Optional
  /**
   * Specifies the maximum number value.
   */
  max?: number;
  /**
   * Specifies the minimum number value.
   */
  min?: number;
}

/**
 * Date Input Component Props
 * 
 * Defines the properties required for the date input component.
 */
interface IInputDate extends IInput {
  // Required
  /**
   * Sets the input type to 'date'.
   */
  type: Extract< TInputType, 'date' >;
}

/**
 * Time Input Component Props
 * 
 * Defines the properties required for the time input component.
 */
interface IInputTime extends IInput {
  // Required
  /**
   * Sets the input type to 'time'.
   */
  type: Extract< TInputType, 'time' >;
  
  // Optional
  /**
   * Specifies the time of day type to render.
   */
  timeOfDay?: TInputTimeOfDay;
  
  /**
   * Specifies the timezone on the input.
   */
  timezone?: '0' | `${ '+' | '-' }${ Exclude< TSingleValueNumber, 0 > | 10 | 11 | 12 }`;
}

/**
 * Defines the properties required for the input helper text.
 */
interface IInputHelperText {
  // Required
  /**
   * The text content of the helper text.
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
export type {
  IInput,
  IInputText,
  TInputProps
};
