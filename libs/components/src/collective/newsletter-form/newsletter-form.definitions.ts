// TYPES
/**
* Sets the required props for the component
*/
type TNewsletterFormProps = INewsletterForm;

// INTERFACES
/**
* Sets the default required props for the component
*/
interface INewsletterForm {
  /**
   * Emits the email address from the component when the submit button is clicked.
   * 
   * @param { string } emailAddress - The email address value from the input field.
   * 
   * @returns { void } - Returns nothing.
   */
  onSubmit: ( emailAddress: string ) => void;
}

// EXPORTS
export type { TNewsletterFormProps };
