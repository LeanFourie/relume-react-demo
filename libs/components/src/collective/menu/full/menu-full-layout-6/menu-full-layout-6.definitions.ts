// IMPORTS
import type { IImage } from '@relume-demo/utils';
import type { IMenuFull } from '../menu-full.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type TMenuFullLayout6Props = IMenuFullLayout6;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IMenuFullLayout6 extends IMenuFull {
  /**
   * Determines the featured blog post to render on the component.
   */
  blogPosts: [
    IMenuFullBlogPost,
    IMenuFullBlogPost
  ];
  /**
   * Determines the title to render above the featured blog posts.
   */
  blogTitle: string;
  /**
   * Determines the URL the user will be directed to when they click the all posts link.
   */
  blogUrl: string;
}

/**
* Sets the required props for the blog posts.
*/
interface IMenuFullBlogPost {
  /**
   * Sets the excerpt text render on the post.
   */
  excerpt: string;
  /**
   * Sets the image to render on the post.
   */
  image: IImage;
  /**
   * Sets the title value of the post.
   */
  title: string;
  /**
   * Sets the URL of the post.
   */
  url: string;
}

// EXPORTS
export type { TMenuFullLayout6Props };
