// Packages & Modules
import styles from './actions-list-item.module.scss';

// Components
import {
  Host,
  Icon,
  Text
} from '../../';

// Definitions
import type { TActionsListItemProps } from './actions-list-item.definitions';

// Component
/**
 * ActionsListItem Component
 * 
 * A clickable list item with optional icon and arrow.
 *
 * @component
 * @example
 * <ActionsListItem
 *   onClick={ () => console.log( 'clicked' ) }
 *   accessibleLabel={ 'Return the list of employees' }
 *   label={ 'Return list' }
 * />
 * 
 * @param { TActionsListItemProps } props - The props for the component.
 * 
 * @returns { JSX.Element } - The rendered component.
 */
export const ActionsListItem = ( props: TActionsListItemProps ): JSX.Element => {
  // PROPS
  const {
    accessibleLabel,
    label,
    onClick,
    icon,
    isDisabled = false,
    isSkeleton = false,
    showArrow = false
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'actions-list-item';

  // HTML
  return (
    <Host
      isDisabled={ isDisabled }
      isFullWidth={ true }
      isSkeleton={ isSkeleton }
    >
      <button
        onClick={ onClick }
        className={`
          ${ styles[ baseClass ] }
          ${ isDisabled ? styles[ `${ baseClass }--is-disabled` ] : '' }
          ${ isSkeleton ? styles[ `${ baseClass }--is-skeleton` ] : '' }
        `}
        aria-label={ accessibleLabel }
      >
        {/* Icon */}
        {( icon ) && (
          <span className={ styles[ `${ baseClass }__icon` ] }>
            <Icon { ...icon } />
          </span>
        )}
        {/* ./Icon */}

        {/* Label */}
        <Text
          className={ styles[ `${ baseClass }__label` ] }
          fontWeight={ 'medium' }
          renderAs={ 'span' }
          variant={ 'text regular' }
        >
          { label }
        </Text>
        {/* ./Label */}

        {/* Arrow */}
        {( showArrow ) && (
          <span className={ styles[ `${ baseClass }__arrow` ] }>
            <Icon
              name={ 'arrow_forward' }
              type={ 'text' }
            />
          </span>
        )}
        {/* ./Arrow */}
      </button>
    </Host>
  );
}
