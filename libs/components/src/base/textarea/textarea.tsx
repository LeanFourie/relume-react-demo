// Packages & Modules
import styles from './textarea.module.scss';

// Components
import {
  HelperText,
  Host,
  Text
} from '../../';

// Definitions
import type { TTextareaProps } from './textarea.definitions';

// Component
/**
 * Textarea Component
 * 
 * Represents a textarea input with optional label, helper text, and various states.
 *
 * @component
 * @example
 * <Textarea
 *   onChange={ ( value ) => console.log( value ) }
 *   label={ 'Message' }
 *   placeholder={ 'How can we help you?' }
 *   value={ '' }
 * />
 * 
 * @param { TTextareaProps } props - The properties of the textarea component.
 * 
 * @returns { JSX.Element } - The rendered textarea component.
 */
export const Textarea = ( props: TTextareaProps ): JSX.Element => {
  // PROPS
  const {
    className,
    helperText,
    hideLabel = false,
    isDisabled = false,
    isReadonly = false,
    isRequired = false,
    isSkeleton = false,
    label,
    maxLength,
    minLength,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    shade = 'dark',
    size = 'md',
    state = 'default',
    value,
    variant = 'filled'
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'textarea';

  // METHODS


  /**
   * Handle value changes on the textarea and call the `change` prop method with the new textarea value.
   * 
   * @param val - The textarea value as a string
   */
  const handleChange = ( val: string ): void => {
    onChange(val);
  }

  /**
   * Handle blur events on the textarea element
   * 
   * @param val - The textarea value
   */
  const handleBlur = ( val: string ): void => {
    if ( onBlur ) onBlur( val );
  }

  /**
   * Handle focus events on the textarea element
   * 
   * @param val - The textarea element value
   */
  const handleFocus = ( val: string ): void => {
    if ( onFocus ) onFocus( val );
  }

  // HTML
  return (
    <Host
      isDisabled={ isDisabled }
      isFullWidth={ true }
      isSkeleton={ isSkeleton }
    >
      <span
        className={`
          ${ styles[ baseClass ] }
          ${ styles[ `${ baseClass }--shade-${ shade }` ] }
          ${ styles[ `${ baseClass }--size-${ size }` ] }
          ${ styles[ `${ baseClass }--state-${ state }` ] }
          ${ styles[ `${ baseClass }--variant-${ variant }` ] }
          ${ isDisabled ? styles[ `${ baseClass }--is-disabled` ] : '' }
          ${ isReadonly ? styles[ `${ baseClass }--is-read-only` ] : '' }
          ${ isSkeleton ? styles[ `${ baseClass }--is-skeleton` ] : '' }
          ${ className ? className : '' }
        `}
      >
        {/* Label */}
        {( !hideLabel ) &&
          <label className={ styles[ `${ baseClass }__label` ] }>
            {/* Label Text */}
            <Text
              className={ styles[ `${ baseClass }__label-text` ] }
              fontWeight={ 'medium' }
              isSkeleton={ isSkeleton }
              renderAs={ 'span' }
              variant={ 'text regular' }
            >
              { label } { isRequired && <sup className={ styles[ `${ baseClass }__label-text-sup` ] }>*</sup> }
            </Text>
            {/* ./Label Text */}
          </label>
        }
        {/* ./Label */}

        {/* Textarea */}
        <span className={ styles[ `${ baseClass }__textarea` ] }>
          {/* Textarea Element */}
          <textarea
            onBlur={ ( event ) => ( onBlur ) && handleBlur( event.target.value ) }
            onChange={ ( event ) => handleChange( event.target.value ) }
            onFocus={ ( event ) => ( onFocus ) && handleFocus( event.target.value ) }
            className={ styles[ `${ baseClass }__textarea-element` ] }
            disabled={ isDisabled }
            maxLength={ maxLength }
            minLength={ minLength }
            placeholder={ placeholder }
            readOnly={ isReadonly }
            value={ value }
          />
          {/* ./Textarea Element */}
        </span>
        {/* ./Textarea */}

        {/* Helper Text */}
        {( helperText ) &&
          <span className={ styles[ `${ baseClass }__helper` ] }>
            {/* Helper text as array */}
            {( Array.isArray( helperText ) && helperText.length > 0 ) &&
              <>
                { helperText.map( helper => (
                  <span
                    key={ JSON.stringify( helper ) }
                    className={ styles[ `${ baseClass }__helper-item` ] }
                  >
                    <HelperText { ...helper.options }>
                      { helper.value }
                    </HelperText>
                  </span>
                ))}
              </>
            }
            {/* ./Helper text as array */}

            {/* Helper text as string */}
            {( !Array.isArray( helperText ) ) &&
              <span className={ styles[ `${ baseClass }__helper-item` ] }>
                <HelperText
                  { ...helperText.options }
                  isSkeleton={ isSkeleton }
                >
                  { helperText.value }
                </HelperText>
              </span>
            }
            {/* ./Helper text as string */}
          </span>
        }
        {/* ./Helper Text */}
      </span>
    </Host>
  );
}
