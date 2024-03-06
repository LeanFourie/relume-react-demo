// IMPORTS
import type { IButtonText } from '../../../../';
import type { IMenuMega } from '../menu-mega.definitions';

// TYPES
/**
* Sets the required props for the component.
*/
type TMenuMegaLayout3Props = IMenuMegaLayout3;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IMenuMegaLayout3 extends IMenuMega {
  /**
   * The config required for the list of actions to be rendered on the component.
   */
  actions: Omit<
    IButtonText,
    'className' | 'isDisabled' | 'isFullWidth' |
    'isSelected' | 'isSkeleton' | 'size' | 'variant'
  >[];
  /**
   * The main CTA config that is required.
   */
  cta: IMenuMegaCTA;
}

/**
* Sets the required props for the component Mega Menu CTA component.
*/
interface IMenuMegaCTA {
  /**
   * The string value of the CTA link label
   */
  label: string;
  /**
   * The string value required for the CTA message text.
   */
  text: string;
  /**
   * The destination the user will be directed to once clicking the CTA link.
   */
  url: string;
}

// EXPORTS
export type { TMenuMegaLayout3Props };
