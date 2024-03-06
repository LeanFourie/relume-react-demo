// IMPORTS
import {
  IImage,
  TStackDirection
} from '@relume-demo/utils';

// TYPES
/**
* Sets the required props for the component.
*/
type TPostCardProps = IPostCardWithAuthor |
                      IPostCardWithCta;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IPostCard {
  // Required
  /**
   * Renders a tag component using the post category string value.
  */
  category: string;
  /**
   * Renders excerpt text on the card.
   */
  excerpt: string;
  /**
   * The image props required to render the card image.
   */
  image: IImage;
  /**
   * The estimated amount of time it takes to read the post.
   */
  timeToRead: string;
  /**
   * Renders the title value on the card.
   */
  title: string;
  /**
   * Determines where the user will be directed to once the post card is clicked.
   */
  url: string;

  // Optional
  /**
   * Adds optional class names to child components of the card.
   */
  classNames?: {
    /**
     * Adds a class to the card container.
     */
    container?: string;
    /**
     * Adds a class to the card text content.
     */
    content?: string;
    /**
     * Adds a class to the card image container.
     */
    image?: string;
  };
  /**
   * If se to true, the excerpt will be hidden.
   * 
   * @default false
   */
  hideExcerpt?: boolean;
  /**
   * If se to true, the card will render a border around itself.
   * 
   * @default false
   */
  isOutlined?: boolean;
  /**
   * Determines how the text and image will stack, next to each other or on top of each other.
   * 
   * @default 'vertical'
   */
  stackDirection?: TStackDirection;
}

/**
* Sets the required props for the post card variant with an author.
*/
interface IPostCardWithAuthor extends IPostCard {
  /**
   * Sets the author of the post on the card.
   */
  author: {
    /**
     * The full name, eg. `ALex Smith`, of the post author.
     */
    fullName: string;
    /**
     * The photo props ( src, alt ) of the post author.
     */
    photo: IImage;
  };
  /**
   * Sets the publish date of the post item.
   */
  date: Date;
}

/**
* Sets the required props for the post card variant with a call to action.
*/
interface IPostCardWithCta extends IPostCard {
  /**
   * The label string value of the call to action.
   */
  ctaLabel: string;
}

// EXPORTS
export type {
  IPostCardWithAuthor,
  IPostCardWithCta,
  TPostCardProps
};
