// IMPORTS
import type {
  IContentGroupWithActions,
  IContentGroupWithForm
} from '../../';

// TYPES
/**
* Sets the properties to exclude form the `IContentGroupWithActions` component when extending it for the hero components.
*/
type TPropertiesToExclude =
  | 'stackDirection'
  | 'tagline'
  | 'type'
  | 'textAlign';
/**
* Sets the required props for the hero component with actions.
*/
type THeroWithActions = Omit< IContentGroupWithActions, TPropertiesToExclude >;
/**
* Sets the required props for the hero component with a form.
*/
type THeroWithForm = Omit< IContentGroupWithForm, TPropertiesToExclude >;

// EXPORTS
export type {
  THeroWithActions,
  THeroWithForm
};
