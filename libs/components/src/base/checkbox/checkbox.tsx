// Packages & Modules
import { sizeNameToFriendlyName } from '@relume-demo/utils';
import styles from './checkbox.module.scss';

// Components
import {
  Host,
  Icon,
  Text
} from '../../';

// Definitions
import type { TCheckboxProps } from './checkbox.definitions';

// Component
/**
 * Checkbox Component
 * 
 * A component for handling user input.
 * Renders a checkbox input with optional label and link.
 *
 * @component
 * @example
 * <Checkbox
 *   onChange={ ( state ) => console.log( state ) }
 *   label={ 'Select all' }
 *   name={ 'employees' }
 * />
 *
 * @param { TCheckboxProps } props - The properties to configure the checkbox.
 * 
 * @returns { JSX.Element } The rendered Checkbox component.
 */
export const Checkbox = ( props: TCheckboxProps ): JSX.Element => {
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
  const baseClass: string = 'checkbox';

  // METHODS
  /**
   * Handles click events on the checkbox input element
   * 
   * @param { React.MouseEvent } event - The React mouse event
   */
  const handleChange = ( event: React.MouseEvent ): void => {
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
            onClick={ ( event ) => handleChange( event ) }
            className={ styles[ `${ baseClass }__input-element` ] }
            defaultChecked={ isChecked }
            type={ 'checkbox' }
            name={ name }
          />
        </span>
        {/* ./Input */}

        {/* Icon */}
        <span className={ styles[ `${ baseClass }__icon` ] }>
          <Icon
            className={ styles[ `${ baseClass }__icon-element` ] }
            name={ 'done' }
            type={ 'text' }
          />
        </span>
        {/* ./Icon */}

        {/* Label */}
        {( showLabel ) &&
          <span className={ styles[ `${ baseClass }__label` ] }>
            <Text
              className={ styles[ `${ baseClass }__label-element` ] }
              renderAs={ 'span' }
              variant={ `text ${ sizeNameToFriendlyName( size ) }` }
            >
              { label }

              {( link ) && (
                <span className={ styles[ `${ baseClass }__link` ] }>
                  { link }
                </span>
              )}
            </Text>
          </span>
        }
        {/* ./Label */}
      </label>
    </Host>
  );
}
