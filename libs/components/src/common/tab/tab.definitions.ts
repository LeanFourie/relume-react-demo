// IMPORTS
import type { TState } from '@relume-demo/utils';
import type {
  TBadgeProps,
  TIconProps
} from '../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TTabProps = UiTabItemInterface;
/**
 * Determines which values should be excluded from the state type when used for the tab component.
 */
type TTabState = Exclude<
  TState,
  'info' | 'warning'
>;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface UiTabItemInterface {
    // Required
    /**
     * The string value to render as the tab label.
     */
    label: string;
    /**
     * A callback function that fires when a user clicks on a tab item
     * 
     * @returns { void } - Returns nothing.
     */
    onClick: () => void;

    // Optional
    /**
     * If this string value is set, a badge will render alongside the tab label.
     */
    badge?: TBadgeProps[ 'label' ];
    /**
     * Icon props that can be set to render an icon next to the tab label.
     */
    icon?: Exclude< TIconProps, 'className' >;
    /**
     * If set to true, the tab item will be disabled and inactive.
     * 
     * @default false
     */
    isDisabled?: boolean;
    /**
     * If set to true, the tab will render the styles for the selected tab.
     * 
     * @default false
     */
    isSelected?: boolean;
    /**
     * If set to true, the tab will render in a skeleton loading state.
     * 
     * @default false
     */
    isSkeleton?: boolean;
    /**
     * Determines the semantic state the tab should be rendered in.
     * 
     * @default 'default'
     */
    state?: TTabState;
}

// EXPORTS
export type { TTabProps };
