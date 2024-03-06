// IMPORTS
import type {
  TButtonProps,
  TEmployeeCardProps
} from '../../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TTeamLayout2Props = ITeamLayout2;
/**
 * Sets the interface type for the employee items.
 */
type TTeamLayout2EmployeeItem = Omit<
  TEmployeeCardProps,
  'alignContent' | 'stackContent'
>;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ITeamLayout2 {
  // Required
  /**
   * Sets the cta content prop values.
   */
  ctaContent: {
    /**
     * Sets the action item to render in the content.
     */
    action: TButtonProps;
    /**
     * Sets the paragraph string value.
     */
    paragraph: string;
    /**
     * Sets the title string value.
     */
    title: string;
  };
  /**
   * Sets the employee items to render.
   */
  employees: TTeamLayout2EmployeeItem[];
  /**
   * Sets the leading content prop values.
   */
  leadingContent: {
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

  // Optional
  /**
   * If set to true, the employee items will render as cards.
   * 
   * @default false
   */
  useCards?: boolean;
}

// EXPORTS
export type {
  TTeamLayout2EmployeeItem,
  TTeamLayout2Props
};
