// TYPES
/**
* Sets the required props for the component.
*/
type TVideoProps = IVideo;
/**
 * Determines the video fit options.
 */
type TVideoFit =
  | 'cover'
  | 'contain';

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IVideo {
  // Required
  /**
   * The video source route.
   */
  videoUri: string;

  // Optional
  /**
   * Adds an additional class name to the component.
   */
  className?: string;
  /**
   * If set, a cover image will render before the video is played.
   */
  coverImageUri?: string;
  /**
   * If true, the video will play automatically and be muted.
   * 
   * @default false
   */
  autoPlay?: boolean;
  /**
   * Determines how the video will sit inside its container.
   * 
   * @default 'contain'
   */
  fit?: TVideoFit;
}

// EXPORTS
export type { TVideoProps };
