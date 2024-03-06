// IMPORTS
import type {
  IImage,
  THorizontalAlignment,
  TStackDirection
} from '@relume-demo/utils';
import type { TTextProps } from '../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TTestimonialGroupProps = ITestimonialGroup;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ITestimonialGroup {
  // Required
  /**
   * Sets the client / customer information needed on the testimonial.
   */
  client: {
    // Required
    /**
     * Sets the company name the client / customer works at.
     */
    company: string;
    /**
     * Sets the name of the client / customer.
     */
    name: string;
    /**
     * Sets the job title for the client / customer.
     */
    position: string;

    // Optional
    /**
     * Sets the profile photo props for the client / customer.
     */
    photo?: IImage;
  };
  /**
   * Sets the logo prop values.
   */
  logo: IImage;
  /**
   * Sets the value of the client / customer testimonial message.
   */
  message: string;

  // Optional
  /**
   * Determines the horizontal alignment of the content.
   * 
   * @default 'left'
   */
  align?: Exclude<
    THorizontalAlignment,
    'right'
  >;
  /**
   * Determines the font size of the message.
   * 
   * @default 'heading small'
   */
  messageSize?: Extract<
    TTextProps['variant'],
    'heading small' | 'heading tiny'
  >;
  /**
   * Sets a star rating value out of 5.
   */
  rating?: 1 | 2 | 3 | 4 | 5;
  /**
   * Determines the stack direction of the client details content.
   * 
   * @default 'default'
   */
  stackClientDetails?: 'default' | TStackDirection;
}

// EXPORTS
export type { TTestimonialGroupProps };
