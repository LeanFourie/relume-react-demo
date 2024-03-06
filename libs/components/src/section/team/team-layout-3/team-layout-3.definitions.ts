// IMPORTS
import type {
  TButtonProps,
  TEmployeeCardProps
} from '../../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TTeamLayout3Props = ITeamLayout3;
/**
 * Sets the interface type for the employee items.
 */
type TTeamLayout3EmployeeItem = Omit<
  TEmployeeCardProps,
  'alignContent' | 'stackContent'
>;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ITeamLayout3 {
  // Required
  /**
   * Sets the content prop values.
   */
  content: {
    /**
     * Sets the action item to render in the content.
     */
    actions: TButtonProps[];
    /**
     * Sets the paragraph string value.
     */
    paragraph: string;
    /**
     * Sets the tagline string value.
     */
    tagline: string;
    /**
     * Sets the title string value.
     */
    title: string;
  };
  /**
   * Sets the employee items to render.
   */
  employees: TTeamLayout3EmployeeItem[];

  // Optional
  /**
   * Sets the amount of columns the content of the section will be split into.
   * 
   * @default 2
   */
  columns: 2 | 3;
  /**
   * If set to true, the employee items will render as cards.
   * 
   * @default false
   */
  useCards?: boolean;
}

// EXPORTS
export type {
  TTeamLayout3EmployeeItem,
  TTeamLayout3Props
};
