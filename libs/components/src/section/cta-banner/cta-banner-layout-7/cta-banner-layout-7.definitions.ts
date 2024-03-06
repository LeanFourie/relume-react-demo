// IMPORTS
import type { THorizontalAlignment } from '@relume-demo/utils';
import type {
  TButtonProps,
  TIconProps
} from '../../../';

// TYPES
/**
* Sets the required props for the component.
*/
type TCtaBannerLayout7Props = ICtaBannerLayout7;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface ICtaBannerLayout7 {
  // Required
  /**
   * Sets the content group values to render on the section.
   */
  contentGroups: [
    ICtaBannerLayout7ContentGroup,
    ICtaBannerLayout7ContentGroup
  ];

  // Optional
  /**
   * Determines the alignment of the text content.
   * 
   * @default 'left'
   */
  textAlign?: Exclude< THorizontalAlignment, 'right' >;
}

/**
* Sets the required props for the content group items.
*/
interface ICtaBannerLayout7ContentGroup {
  /**
   * Renders a list of actions at the end of the content group.
   */
  actions: Exclude< TButtonProps, 'className' >[];
  /**
   * Renders an icon at the start of the content group.
   */
  icon: Exclude< TIconProps, 'className' >;
  /**
   * The content group paragraph string value to render.
   */
  paragraph: string;
  /**
   * The content group title string value to render.
   */
  title: string;
}

// EXPORTS
export type { TCtaBannerLayout7Props };
