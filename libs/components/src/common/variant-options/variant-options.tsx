// Packages & Modules
import styles from './variant-options.module.scss';
import {
  useEffect,
  useState
} from 'react';

// Components
import {
  Button,
  Select,
  Text
} from '../../';

// Definitions
import type { IProductVariantOption } from '@relume-demo/utils';
import type { TVariantOptionsProps } from './variant-options.definitions';

// Component
/**
 * VariantOptions Component
 * 
 * The `VariantOptions` component is a form type component handling product variant option selection.
 * The component renders a list of product variants, either as a button group or a select dropdown, based on the amount of options available.
 *
 * @component
 * @example
 * <VariantOptions returnSelectedOption={ ( option ) => console.log( option ) } />
 * 
 * @param { TVariantOptionsProps } props - The properties for configuring the VariantOptions component.
 * 
 * @returns { JSX.Element } - The VariantOptions component is being returned as a JSX element.
 */
export const VariantOptions = ( props: TVariantOptionsProps ): JSX.Element => {
  // PROPS
  const {
    options,
    returnSelectedOption,
    selectedOption,
    title
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'variants';

  // STATES
  /**
   * Stores the selected option object.
   */
  const [
    _selectedOption,
    _setSelectedOption
  ] = useState< IProductVariantOption | undefined >( selectedOption );

  // METHODS
  /**
   * Handles changes made to the selected option via the HTML controls.
   * 
   * @param { IProductVariantOption } option - The selected option object.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleOptionChange = ( option: IProductVariantOption ): void => {
    // Check if the option is disabled, THEN...
    // end the function.
    if ( option.isDisabled ) return;

    // Updated the selected option state
    _setSelectedOption( option );
  }

  // EFFECTS
  useEffect(() => {
    // Check if the selected option is defined, THEN...
    // return the selected option value the callback function
    if ( _selectedOption ) returnSelectedOption( _selectedOption );
  }, [ _selectedOption ]);

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Title */}
      <div className={ styles[ `${ baseClass }__title` ] }>
        <Text
          className={ styles[ `${ baseClass }__title-element` ] }
          fontWeight={ 'medium' }
          variant={ 'text regular' }
        >
          { title }
        </Text>
      </div>
      {/* ./Title */}

      {/* Options */}
      <div className={`
        ${ styles[ `${ baseClass }__options` ] }
        ${ ( options.length > 3 ) ? styles[ `${ baseClass }__options--has-select` ] : '' }
      `}>
        {/* Button Group */}
        {( options.length <= 3 ) && (
          <>
            { options.map(( option, index: number ) => (
              <div
                key={ `${ option.id } ${ index }` }
                className={ styles[ `${ baseClass }__option` ] }
              >
                <Button
                  onClick={ () => handleOptionChange( option ) }
                  accessibleLabel={ option.label }
                  className={ styles[ `${ baseClass }__option-element` ] }
                  isSelected={ _selectedOption?.id === option.id }
                  label={ option.label }
                  type={ 'text' }
                  variant={ 'outlined' }
                />
              </div>
            ))}
          </>
        )}
        {/* ./Button Group */}
        {/* Select Dropdown */}
        {( options.length > 3 ) && (
          <Select
            onChange={ ( optionLabel ) => handleOptionChange(
              options.find( option => option.label === optionLabel )!
            )}
            className={ styles[ `${ baseClass }__options-select` ] }
            hideLabel={ true }
            label={ `Select ${ title } variant option` }
            options={ options.map( option => option.label ) }
            placeholder={ 'Select a variant' }
            value={ _selectedOption?.label || '' }
            variant={ 'outlined' }
          />
        )}
        {/* ./Select Dropdown */}
      </div>
      {/* ./Options */}
    </div>
  );
}
