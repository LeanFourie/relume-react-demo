// Packages & Modules
import styles from './actions-list.module.scss';

// Components
import { ActionsListItem } from '../../';

// Definitions
import type { TActionsListProps } from './actions-list.definitions';

// Component
/**
 * ActionsList Component
 * 
 * The `ActionsList` component renders a list of clickable action items.
 * The component is designed to work alongside other components such as overflow menus or select dropdowns.
 *
 * @component
 * @example
 * <ActionsList
 *   options={[{
 *     accessibleLabel: 'Option accessible label',
 *     label: 'Option label',
 *     onClick: () => {},
 *     icon: {
 *       name: 'home',
 *       type: 'text'
 *     },
 *     isDisabled: false
 *   }]}
 * />
 * 
 * @param { TActionsListProps } props - The properties for configuring the ActionsList component.
 * 
 * @returns { JSX.Element } - The ActionsList component is being returned as a JSX element.
 */
export const ActionsList = ( props: TActionsListProps ): JSX.Element => {
  // PROPS
  const {
    className,
    options,
    isSkeleton = false,
    showArrow = false
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'actions-list';

  // HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ className ? className : '' }
    `}>
      {/* Options */}
      { options.map( option => (
        <ActionsListItem
          onClick={ option.onClick }
          key={ JSON.stringify( option ) }
          accessibleLabel={ option.accessibleLabel }
          label={ option.label }
          icon={ option.icon }
          isDisabled={ option.isDisabled }
          isSkeleton={ isSkeleton }
          showArrow={ showArrow }
        />
      ))}
      {/* ./Options */}
    </div>
  );
}

export default ActionsList;
