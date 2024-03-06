// Packages & Modules
import styles from './radio-group.module.scss';
import { useState } from 'react';

// Components
import {
  Radio,
  Text
} from '../../';

// Definitions
import type { TRadioGroupProps } from './radio-group.definitions';

// Component
/**
 * RadioGroup Component
 * 
 * The `RadioGroup` component is a form control component used for single selection.
 * The component contains a list of radio button items.
 *
 * @component
 * @example
 * <RadioGroup
 *   onChange={ ( state, label ) => console.log( state, label ) }
 *   name={ 'radio-group' }
 *   options={[{
 *     label: 'Option label'
 *   }]}
 * />
 * 
 * @param { TRadioGroupProps } props - The properties for configuring the RadioGroup component.
 * 
 * @returns { JSX.Element } - The RadioGroup component is being returned as a JSX element.
 */
export const RadioGroup = ( props: TRadioGroupProps ): JSX.Element => {
  // PROPS
  const {
    name,
    onChange,
    options,
    isDisabled = false,
    isSkeleton = false,
    size = 'md',
    title
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'group';

  // STATES
  /**
   * Store the label value of the checked option.
   */
  const [
    _checkedOption,
    _setCheckedOption
  ] = useState< string | undefined >( undefined );

  // METHODS
  /**
   * Handle click events on the radio button items.
   * 
   * @param { boolean } checkedState - The checked state of the clicked radio button option.
   * `@param { string } option - The label value of the clicked option.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleOptionChange = (
    checkedState: boolean,
    option: string
  ): void => {
    // Set the checked option
    _setCheckedOption( option );

    // Emit the change event
    onChange(
      checkedState,
      option
    );
  }

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Title */}
      {( title ) &&
        <div className={ styles[ `${ baseClass }__title` ] }>
          <Text
            className={ styles[ `${ baseClass }__title-element` ] }
            variant={ 'text regular' }
          >
            { title }
          </Text>
        </div>
      }
      {/* ./Title */}

      {/* Options */}
      <div className={ styles[ `${ baseClass }__options` ] }>
        { options.map(( option, index: number ) => (
          <div
            key={ `${ option.label } ${ index }` }
            className={ styles[ `${ baseClass }__option` ] }
          >
            <Radio
              { ...option }
              onChange={ ( checkedState ) => handleOptionChange(
                checkedState,
                option.label
              )}
              className={ styles[ `${ baseClass }__option-element` ] }
              name={ name }
              isChecked={ _checkedOption === option.label }
              isDisabled={ isDisabled }
              isSkeleton={ isSkeleton }
              size={ size }
              showLabel={ true }
            />
          </div>
        ))}
      </div>
      {/* ./Options */}
    </div>
  );
}
