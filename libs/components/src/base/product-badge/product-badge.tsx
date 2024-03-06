// Packages & Modules
import styles from './product-badge.module.scss';

// Components
import {
  Host,
  Icon,
  Text
} from '../../';

// Definitions
import type { TProductBadgeProps } from './product-badge.definitions';

// Component
/**
 * ProductBadge Component
 * 
 * A component that displays a badge with a label and an optional icon.
 * 
 * @component
 * @example
 * <ProductBadge label={ 'On sale' } />
 *
 * @param { TProductBadgeProps } props - Props for configuring the ProductBadge component.
 * 
 * @returns { JSX.Element } - Rendered ProductBadge component.
 */
export const ProductBadge = ( props: TProductBadgeProps ): JSX.Element => {
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
            fontWeight={ ( icon ) ? 'semibold' : 'bold' }
            renderAs={ 'span' }
            textAlign={ 'center' }
            variant={ 'text tiny' }
          >
            { label }
          </Text>
        </div>
        {/* ./Label */}
      </div>
    </Host>
  );
}
