// IMPORTS
import type {
  IImage,
  ISocialLink,
  THorizontalAlignment,
  TStackDirection
} from '@relume-demo/utils';


// TYPES
/**
 * Represents the props required for the EmployeeCard component.
 */
type TEmployeeCardProps = IEmployeeCard;

// INTERFACES
/**
 * Represents the props for the EmployeeCard component.
 *
 * @interface
 */
interface IEmployeeCard {
  // Required
  /**
   * The description of the employee.
   */
  description: string;
  /**
   * The job title of the employee.
   */
  jobTitle: string;
  /**
   * The name of the employee.
   */
  name: string;
  /**
   * The photo prop values for the employee.
   */
  photo: IImage;
  /**
   * The links to the employee's social media profiles.
   */
  socials: ISocialLink[];

  // Optional
  /**
   * Determines the alignment of the card content.
   * 
   * @default 'left'
   */
  alignContent?: Exclude<THorizontalAlignment, 'right'>;
  /**
   * Determines how the image and text content will be stacked.
   * 
   * @default 'vertical'
   */
  stackContent?: TStackDirection;
}

// EXPORTS
/**
 * Exports the types for the EmployeeCard component.
 */
export type { TEmployeeCardProps };
