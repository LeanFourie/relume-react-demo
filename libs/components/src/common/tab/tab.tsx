// Packages & Modules
import styles from './tab.module.scss';

// Components
import {
  Badge,
  Icon,
  Text
} from '../../';

// Definitions
import type { TTabProps } from './tab.definitions';

// Component
/**
 * Tab Component
 * 
 * The `Tab` component....
 *
 * @component
 * @example
 * <Tab
 *   onClick={ () => console.log( 'clicked' ) }
 *   label={ 'Tab label' }
 * />
 * 
 * @param { TTabProps } props - The properties for configuring the Tab component.
 * 
 * @returns { JSX.Element } - The Tab component is being returned as a JSX element.
 */
export const Tab = ( props: TTabProps ): JSX.Element => {
  // PROPS
  const {
    label,
    onClick,
    badge,
    icon,
    isDisabled = false,
    isSelected = false,
    isSkeleton = false,
    state = 'default'
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'tab';

  // METHODS
  /**
   * Handles click events on the tab item.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleTabClick = (): void => {
    // Execute the click event in the parent component
    onClick();
  }

  // HTML
  return (
    <button
      onClick={ () => handleTabClick() }
      className={`
        ${ styles[ baseClass ] }
        ${ styles[ `${ baseClass }--state-${ state }` ] }
        ${ isDisabled ? styles[ `${ baseClass }--is-disabled` ] : '' }
        ${ isSelected ? styles[ `${ baseClass }--is-selected` ] : '' }
        ${ isSkeleton ? styles[ `${ baseClass }--is-skeleton` ] : '' }
        ${ badge ? styles[ `${ baseClass }--with-badge` ] : '' }
      `}
    >
      {/* Icon */}
      {( icon ) && (
        <span className={ styles[ `${ baseClass }__icon` ] }>
          <Icon
            { ...icon }
            className={ styles[ `${ baseClass }__icon-element` ] }
          />
        </span>
      )}
      {/* ./Icon */}

      {/* Label */}
      <span className={ styles[ `${ baseClass }__label` ] }>
        <Text
          className={ styles[ `${ baseClass }__label-element` ] }
          renderAs={ 'span' }
          textAlign={ 'center' }
          variant={ 'text regular' }
        >
          { label }
        </Text>
      </span>
      {/* ./Label */}

      {/* Badge */}
      {( badge ) && (
        <span className={ styles[ `${ baseClass }__badge` ] }>
          <Badge 
            className={ styles[ `${ baseClass }__label-badge` ] }
            color={ state === 'default' ? 'primary' : state }
            label={ badge }
            shade={ 'light' }
          />
        </span>
      )}
      {/* ./Badge */}
    </button>
  );
}
