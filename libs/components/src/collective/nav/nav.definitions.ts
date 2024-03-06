// IMPORTS
import type {
  IButtonText,
  TIconProps
} from '../../';

// TYPES
type TNavAction = Omit<
  IButtonText,
  'className' | 'isDisabled' | 'isFullWidth' |
  'isSelected' | 'isSkeleton' | 'size'
>;

// INTERFACES
interface INav {
  logoUri: string;
}

// EXPORTS
export type {
  INav,
  TNavAction
};
