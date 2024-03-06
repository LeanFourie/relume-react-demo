// Packages & Modules
import styles from '../../feature-content-layout-1.module.scss';

// Components
import {
  Icon,
  Text
} from '../../../../../';

// Definitions
import type { IFeatureContentLayout1WithList } from '../../feature-content-layout-1.definitions';

// Component
/**
 * List Component
 * 
 * The `List` is a child component of FeatureContentLayout1.
 * This component renders a list of text elements alongside their respective icons.
 * 
 * @param { Object } props - The properties for configuring the List component.
 * @param { string } props.baseClass - The base class for styling.
 * @param { IFeatureContentLayout1WithContentBlocks[ 'items' ] } props.items - The items to render inside the list.
 * 
 * @returns { JSX.Element } - The List component is being returned as a JSX element.
 */
export const List = ( props: {
  baseClass: string;
  items: IFeatureContentLayout1WithList[ 'items' ]
}): JSX.Element => {
  // PROPS
  const {
    baseClass,
    items
  } = props;

  // HTML
  return (
    <div className={ styles[ `${ baseClass }__list` ] }>
      {/* Logos */}
      { items.map(( item, index: number ) => (
        <div
          key={ `${ item.value } ${ index }` }
          className={`
            ${ styles[ `${ baseClass }__list-item` ] }
            ${ ( item.icon ) ? styles[ `${ baseClass }__list-item--has-icon` ] : '' }
          `}
        >
          {/* Icon */}
          {( item.icon ) && (
            <div className={ styles[ `${ baseClass }__list-item-icon` ] }>
              <Icon
                { ...item.icon }
                className={ styles[ `${ baseClass }__list-item-icon-element` ] }
              />
            </div>
          )}
          {/* ./Icon */}

          {/* Value */}
          <div className={ styles[ `${ baseClass }__list-item-paragraph` ] }>
            <Text
              className={ styles[ `${ baseClass }__list-item-paragraph-element` ] }
              variant={ 'text regular' }
            >
              { item.value }
            </Text>
          </div>
          {/* ./Value */}
        </div>
      ))}
      {/* ./Logos */}
    </div>
  );
}
