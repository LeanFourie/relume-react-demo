// Packages & Modules
import { sizeNameToFriendlyName } from '@relume-demo/utils';
import styles from './badge.module.scss';

// Components
import {
  Host,
  Icon,
  Text
} from '../../';

// Definitions
import type { TBadgeProps } from './badge.definitions';

// Component
/**
 * Badge Component
 * 
 * A customizable badge component represented by a visual label with an optional icon.
 *
 * @component
 * @example
 * <Badge label={ 'On sale' } />
 * 
 * @param { TBadgeProps } props - The props for the component.
 * 
 * @returns { JSX.Element } - The rendered Badge component.
 */
export const Badge = ( props: TBadgeProps ): JSX.Element => {
  // PROPS
  const {
    className,
    color = 'primary',
    hostClassName,
    icon,
    isSkeleton = false,
    label,
    shade = 'dark',
    size = 'md',
    variant = 'filled'
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'badge';

  // HTML
  return (
    <Host
      className={ hostClassName }
      isSkeleton={ isSkeleton }
    >
      <div className={`
        ${ styles[ baseClass ] }
        ${ styles[ `${ baseClass }--color-${ color }` ] }
        ${ styles[ `${ baseClass }--shade-${ shade }` ] }
        ${ styles[ `${ baseClass }--size-${ size }` ] }
        ${ styles[ `${ baseClass }--variant-${ variant }` ] }
        ${ isSkeleton ? styles[ `${ baseClass }--is-skeleton` ] : '' }
        ${ className ? className : '' }
      `}>
        {/* Icon */}
        {( icon ) && (
          <div className={ styles[ `${ baseClass }__icon` ] }>
            <Icon
              { ...icon }
              className={ styles[ `${ baseClass }__icon-element` ] }
            />
          </div>
        )}
        {/* ./Icon */}

        {/* Label */}
        <div className={ styles[ `${ baseClass }__label` ] }>
          <Text
            className={ styles[ `${ baseClass }__label-element` ] }
            fontWeight={ 'semibold' }
            renderAs={ 'span' }
            variant={ `text ${ sizeNameToFriendlyName( size ) }` }
          >
            { label }
          </Text>
        </div>
        {/* ./Label */}
      </div>
    </Host>
  );
}
