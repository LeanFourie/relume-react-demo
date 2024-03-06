// Packages & Modules
import {
  sizeNameToFriendlyName,
  toSnakeCase
} from '@relume-demo/utils';
import styles from './radio.module.scss';

// Components
import {
  Host,
  Icon,
  Text
} from '../../';

// Definitions
import type { TRadioProps } from './radio.definitions';

// Component
/**
 * Radio Component
 * 
 * A component for handling user input.
 * Renders a radio input with optional label and link.
 *
 * @component
 * @example
 * <Radio
 *   onChange={ ( state ) => console.log( state ) }
 *   label={ 'Option 1' }
 *   name={ 'options' }
 * />
 *
 * @param { TRadioProps } props - The properties for configuring the radio button.
 * @returns { JSX.Element } - The JSX element representing the radio button.
 */
export const Radio = ( props: TRadioProps ): JSX.Element => {
  // PROPS
  const {
    className,
    isChecked = false,
    isDisabled = false,
    isSkeleton = false,
    label,
    link,
    name,
    onChange,
    showLabel = false,
    size = 'md'
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'radio-button';

  // METHODS
  /**
   * Handles change events on the radio button input element.
   * 
   * @param { React.ChangeEvent< HTMLInputElement > } event - The React change event.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleChange = ( event: React.ChangeEvent ): void => {
    // Get the input element from the event
    const element = event.currentTarget as HTMLInputElement;

    // Get the checked state of the input element
    const checkedState: boolean = element.checked;

    // Emit the change event
    onChange( checkedState );

    // Remove focus from element
    element.blur();
  }

  // HTML
  return (
    <Host
      isDisabled={ isDisabled }
      isSkeleton={ isSkeleton }
    >
      <label className={`
        ${ styles[ baseClass ] }
        ${ styles[ `${ baseClass }--size-${ size }` ] }
        ${ isChecked ? styles[ `${ `${ baseClass }--is-checked` }` ] : '' }
        ${ isDisabled ? styles[ `${ `${ baseClass }--is-disabled` }` ] : '' }
        ${ isSkeleton ? styles[ `${ `${ baseClass }--is-skeleton` }` ] : '' }
        ${ className ? className : '' }
      `}>
        {/* Input */}
        <span className={ styles[ `${ baseClass }__input` ] }>
          <input
            onChange={ ( event ) => handleChange( event ) }
            checked={ isChecked }
            className={ styles[ `${ baseClass }__input-element` ] }
            type={ 'radio' }
            name={ name }
            value={ toSnakeCase( label ) }
          />
        </span>
        {/* ./Input */}

        {/* Icon */}
        <span className={ styles[ `${ baseClass }__icon` ] }>
          <Icon
            className={ styles[ `${ baseClass }__icon-element` ] }
            name={ 'fiber_manual_record' }
            type={ 'text' }
          />
        </span>
        {/* ./Icon */}

        {/* Label */}
        {( showLabel ) && (
          <span className={ styles[ `${ baseClass }__label` ] }>
            <Text
              className={ styles[ `${ baseClass }__label-element` ] }
              variant={ `text ${ sizeNameToFriendlyName( size ) }` }
            >
              { label }
            </Text>
          </span>
        )}
        {/* ./Label */}

        {/* This is separated to not cause click conflicts on the label element */}
        {/* Links */}
        {( link ) && (
          <span className={ styles[ `${ baseClass }__link` ] }>
            { link }
          </span>
        )}
        {/* ./Links */}
      </label>
    </Host>
  )
}
