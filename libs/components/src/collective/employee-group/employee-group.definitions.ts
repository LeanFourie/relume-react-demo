// IMPORTS
import type {
  IImage,
  ISocialLink,
  THorizontalAlignment,
  TStackDirection
} from '@relume-demo/utils';


// TYPES
type TEmployeeGroupProps = IEmployeeGroup;

// INTERFACES
interface IEmployeeGroup {
  // Required
  /**
   * Sets the description string value on the component
   */
  description: string;
  /**
   * Sets the job title string value on the component
   */
  jobTitle: string;
  /**
   * Sets the name of the employee
   */
  name: string;
  /**
   * Sets the employee photo prop values
   */
  photo: IImage;
  /**
   * Sets the links to the employee social media profiles
   */
  socials: ISocialLink[];

  // Optional
  /**
   * Determines the alignment of the group content
   * 
   * @default 'left'
   */
  alignContent?: Exclude<
    THorizontalAlignment,
    'right'
  >;
  /**
   * Determines how the image and text content will be stacked
   * 
   * @default 'vertical'
   */
  stackContent?: TStackDirection;
}

// EXPORTS
export type { TEmployeeGroupProps };
