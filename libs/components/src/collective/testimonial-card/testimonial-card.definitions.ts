// IMPORTS
import type { IImage } from '@relume-demo/utils';
import type { TLinkProps } from '../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TTestimonialCardProps =  ITestimonialCardWithRating |
                              ITestimonialCardWithLogo;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ITestimonialCard {
  // Required
  /**
   * Sets the client / customer information needed on the testimonial.
   */
  client: {
    /**
     * Sets the company name the client / customer works at.
     */
    company: string;
    /**
     * Sets the name of the client / customer.
     */
    name: string;
    /**
     * Sets the profile photo props for the client / customer.
     */
    photo: IImage;
    /**
     * Sets the job title for the client / customer.
     */
    position: string;
  };
  /**
   * Sets the value of the client / customer testimonial message.
   */
  message: string;

  // Optional
  /**
   * Adds a n optional link to the card component.
   */
  link?: TLinkProps;
}

/**
* Sets the required props for the testimonial variant with a rating.
*/
interface ITestimonialCardWithRating extends ITestimonialCard {
  /**
   * Sets the star rating value out of 5
   */
  rating: 1 | 2 | 3 | 4 | 5;
}

/**
* Sets the required props for the testimonial variant with a client / customer logo.
*/
interface ITestimonialCardWithLogo extends ITestimonialCard {
  /**
   * Sets the logo prop values.
   */
  logo: IImage;
}

// EXPORTS
export type {
  ITestimonialCard,
  ITestimonialCardWithLogo,
  ITestimonialCardWithRating,
  TTestimonialCardProps
};
