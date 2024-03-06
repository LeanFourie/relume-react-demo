// TYPES
/**
* Sets the required props for the component.
*/
type TFeatureContentLayout3Props =  IFeatureContentLayout3;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IFeatureContentLayout3 {
  /**
  * Emits a click event containing the clicked tab item index position whenever a tab item is clicked.
  * 
  * @param { number } tabIndex - The index position of the clicked tab item.
  * 
  * @returns { void } -  Returns nothing.
  */
  onTabClick: ( tabIndex: number ) => void;
  /**
   * Sets the tab items to render on the component.
   */
  tabs: IFeatureContentLayout3Tab[];
}

/**
 * Sets the required props on the tab items rendered on the component.
 */
interface IFeatureContentLayout3Tab {
  /**
   * Sets the paragraph value of the tab.
   */
  paragraph: string;
  /**
   * Sets the value title of the tab.
   */
  title: string;
}

// EXPORTS
export type { TFeatureContentLayout3Props };
