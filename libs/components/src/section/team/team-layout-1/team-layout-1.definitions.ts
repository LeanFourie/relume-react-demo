// IMPORTS
import type {
  THorizontalAlignment,
  TStackDirection
} from '@relume-demo/utils';
import type {
  TButtonProps,
  TEmployeeCardProps
} from '../../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TTeamLayout1Props = ITeamLayout1;
/**
 * Sets the interface type for the employee items.
 */
type TTeamLayout1EmployeeItem = Omit<
  TEmployeeCardProps,
  'alignContent' | 'stackContent'
>;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ITeamLayout1 {
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
  employees: TTeamLayout1EmployeeItem[];
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
   * Determines the amount of columns the employee items should be split into.
   * 
   * @default 3
   */
  columns?:
    | 2
    | 3
    | 4;
  /**
   * Determines how the employee items image and text content will be stacked.
   * 
   * @default 'vertical'
   */
  employeeContentStack?: TStackDirection;
  /**
   * Determines the text alignment of the section.
   * 
   * @default 'left'
   */
  textAlign?: Exclude< THorizontalAlignment, 'right' >;
  /**
   * If set to true, the employee items will render as cards.
   * 
   * @default false
   */
  useCards?: boolean;
}

// EXPORTS
export type {
  TTeamLayout1EmployeeItem,
  TTeamLayout1Props
};
