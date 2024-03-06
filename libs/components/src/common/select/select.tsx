'use client'

// Packages & Modules
import styles from './select.module.scss';
import {
  useEffect,
  useRef,
  useState
} from 'react';

// Components
import {
  ActionsList,
  Input
} from '../../';

// Definitions
import type { TSelectProps } from './select.definitions';

// Component
/**
 * Select Component
 * 
 * The `Select` component....
 *
 * @component
 * @example
 * <Select
 *   onChang={ ( value ) => console.log( value ) }
 *   label={ 'Select option' }
 *   options={[
 *     'Option 1',
 *     'Option 2',
 *     'Option 3'
 *   ]}
 *   value={ '' }
 * />
 * 
 * @param { TSelectProps } props - The properties for configuring the Select component.
 * 
 * @returns { JSX.Element } - The Select component is being returned as a JSX element.
 */
export const Select = ( props: TSelectProps ): JSX.Element => {
  // PROPS
  const {
    className,
    helperText,
    hideLabel = false,
    isDisabled = false,
    isReadonly = true,
    isRequired = false,
    isSkeleton = false,
    label,
    onBlur,
    onChange,
    onFocus,
    options,
    placeholder,
    shade = 'dark',
    size = 'md',
    state = 'default',
    value,
    variant = 'filled'
  } = props;

  // STATES
  /**
   * Stores the opn / closed state of the select options.
   */
  const [
    _isOpen,
    _setIsOpen
  ] = useState< boolean >( false );
  /**
   * Stores the render position of the options menu.
   */
  const [
    _renderPosition,
    _setRenderPosition
  ] = useState< 'top' | 'bottom' >( 'bottom' );

  // REFS
  /**
   * Stores a reference to the select HTML Element.
   */
  const _selectRef = useRef< HTMLDivElement >( null );

  // VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'select';

  // METHODS
  /**
   * Handles blur events on the select input.
   * 
   * @param { string } val - The value emitted from the blur event.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleBlur = ( val: string ): void => {
    // Check if the `onBlur` function is passed as a prop, THEN...
    // emit the value from the blur event
    if ( onBlur ) onBlur( val );
  }

  /**
   * Handles change events on the select input.
   * 
   * @param { string } val - The value emitted from the change event.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleChange = ( val: string ): void => {
    // Emit the value whenever it changes
    onChange( val );
  }

  /**
   * Handles focus events on the select input.
   * 
   * @param { string } val - The value emitted from the focus event.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleFocus = ( val: string ): void => {
    // Check if the `onFocus` function is passed as a prop, THEN...
    // emit the value from the focus event
    if ( onFocus ) onFocus( val );
  }

  /**
   * Handles click events on the select options items.
   * 
   * @param { string } option - The option that was clicked on.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleOptionClick = ( option: string ): void => {
    // Run the change event
    handleChange( option );

    // Close the options menu
    _setIsOpen( false );
  }

  /**
   * Handles click events outside of the select component..
   * 
   * @param { MouseEvent } event - The mouse event emitted from the click.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleClickOutsideSelect = ( event: MouseEvent ): void => {
    // Check if the select element ref exists AND...
    // that the click was not on or in the element, THEN...
    if ( _selectRef.current && !_selectRef.current.contains( event.target as Node ) ) {
      // Close the options menu
      _setIsOpen( false );
    }
  }

  /**
   * Handle click events on the select input.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleInputClick = (): void => {
    // Get the select element using the element ref.
    const selectElement: HTMLDivElement = _selectRef.current!;

    // Store a condition that checks...
    // if the select element top position is...
    // below three quarters of the screen height
    const selectIsBelowThreshold: boolean = selectElement.getBoundingClientRect().top > ( window.innerHeight / 4 ) * 3;

    // Set the render position of the options menu based on the threshold boolean check
    _setRenderPosition( selectIsBelowThreshold ? 'top' : 'bottom' );

    // Toggle the options menu visibility
    _setIsOpen( value => !value );
  }

  // EFFECTS
  useEffect(() => {
    // Check if the window exists
    if ( typeof window !== undefined ) {
      // Add an event listener to the window to track click events outside of the component
      window.addEventListener( 'click', handleClickOutsideSelect );
    }

    return () => {
      // Check if the window exists
      if ( typeof window !== undefined ) {
        // Remove the event listener from the window 
        window.removeEventListener( 'click', handleClickOutsideSelect );
      }
    }
  }, []);

  // HTML
  return (
    <div
      ref={ _selectRef }
      className={`
        ${ styles[ baseClass ] }
        ${ styles[ `${ baseClass }--position-${ _renderPosition }` ] }
        ${ _isOpen ? styles[ `${ baseClass }--is-open` ] : '' }
        ${ className ? className : '' }
      `}
    >
      {/* Input */}
      <div
        onClick={ handleInputClick }
        className={ styles[ `${ baseClass }__input` ] }
      >
        <Input
          onBlur={ ( val ) => handleBlur( val! ) }
          onChange={ handleChange }
          onFocus={ ( val ) => handleFocus( val! ) }
          className={ styles[ `${ baseClass }__input-element` ] }
          helperText={ helperText }
          hideLabel={ hideLabel }
          isDisabled={ isDisabled }
          isReadonly={ isReadonly }
          isRequired={ isRequired }
          isSkeleton={ isSkeleton }
          label={ label }
          placeholder={ placeholder }
          shade={ shade }
          size={ size }
          state={ state }
          type={ 'text' }
          value={ value }
          variant={ variant }
        />
      </div>
      {/* ./Input */}

      {/* Options */}
      <ActionsList
        className={ styles[ `${ baseClass }__options` ] }
        options={
          options.map( option => ({
            onClick: () => handleOptionClick( option ),
            label: option,
            accessibleLabel: option,
            isDisabled: option === value
          }))
        }
        isSkeleton={ isSkeleton }
        showArrow={ false }
      />
      {/* ./Options */}
    </div>
  );
}
