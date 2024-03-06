// IMPORTS
import {
  THorizontalAlignment,
  TStackDirection
} from '@relume-demo/utils';
import type {
  TButtonProps,
  TInputProps
} from '../../';

// TYPES
/**
 * Defines the props required for the ContentGroup component.
 */
type TContentGroupProps =
  | IContentGroup
  | IContentGroupWithActions
  | IContentGroupWithForm;

// INTERFACES
/**
 * Represents the default required props for the basic ContentGroup component.
 */
interface IContentGroup {
  // Required
  /**
   * The title value displayed on the component.
   */
  title: string;
  /**
   * The paragraph value displayed on the component.
   */
  paragraph: string;

  // Optional
  /**
   * Determines how the content will stack, either next to each other or on top of each other.
   */
  stackDirection?: TStackDirection;
  /**
   * The tagline and its value displayed on the component.
   */
  tagline?: string;
  /**
   * Determines the text alignment of the component.
   * 
   * @default 'left'
   */
  textAlign?: Exclude< THorizontalAlignment, 'right' >;
}

/**
 * Represents the props for the ContentGroup component with actions.
 */
interface IContentGroupWithActions extends IContentGroup {
  /**
   * A list of buttons to render on the component.
   */
  actions: TButtonProps[];
  /**
   * The component type set to `actions`.
   */
  type: 'actions';
}

/**
 * Represents the props for the ContentGroup component with a form.
 */
interface IContentGroupWithForm extends IContentGroup {
  /**
   * The props on the form action button.
   */
  action: TButtonProps;
  /**
   * The form input props.
   */
  input: Omit<
    TInputProps,
    'onChange' | 'onBlur' | 'onFocus' | 'onEnterPress'
  >;
  /**
   * The message props to render below the form.
   */
  message: JSX.Element;
  /**
   * Emits the form input field value on submit (when the form action is clicked).
   */
  onSubmit: ( value: string ) => void;
  /**
   * The component type set to `form`.
   */
  type: 'form';
}

// EXPORTS

/**
 * Exports the types and interfaces for the ContentGroup component.
 */
export type {
  IContentGroup,
  IContentGroupWithActions,
  IContentGroupWithForm,
  TContentGroupProps
};