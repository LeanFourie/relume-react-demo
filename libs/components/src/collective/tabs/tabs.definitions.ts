// IMPORTS
import type { TTabProps } from '../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TTabsProps = ITabs;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ITabs {
  // Required
  /**
   * Sets the tab items to be rendered.
   */
  tabs: ITabsItem[];

  // Optional
  /**
   * Sets the initial active tab when the component is rendered.
   * 
   * @default 0
   */
  activeTab?: number
  /**
   * If set to true, the component will be disabled and users won't be able to interact with the tab items.
   * 
   * @default false
   */
  isDisabled?: TTabProps[ 'isDisabled' ];
  /**
   * If se to true, the tab items will render in a skeleton loader state.
   * 
   * @default false
   */
  isSkeleton?: TTabProps[ 'isSkeleton' ];
}

/**
* Sets the required props for the component tab items.
*/
interface ITabsItem extends Omit<
  TTabProps,
  'onClick' | 'isSelected' | 'isSkeleton'
> {
  /**
   * Sets the content to render inside the tab item.
   */
  content: JSX.Element;
}

// EXPORTS
export type { TTabsProps };
