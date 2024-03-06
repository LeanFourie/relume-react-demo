// IMPORTS
import type {
  TButtonProps,
  TIconProps
} from '../../../';

// TYPES
type TValueAddedBarLayout5Props = IValueAddedBarLayout5;

// INTERFACES
interface IValueAddedBarLayout5 {
  action: TButtonProps;
  icon: Exclude< TIconProps, 'className' >;
  message: string;
  title: string;
}

// EXPORTS
export type { TValueAddedBarLayout5Props };
