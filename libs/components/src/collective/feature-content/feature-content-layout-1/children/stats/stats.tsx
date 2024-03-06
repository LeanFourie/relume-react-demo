// Packages & Modules
import styles from '../../feature-content-layout-1.module.scss';

// Components
import {
  Icon,
  Text
} from '../../../../../';

// Definitions
import type { IFeatureContentLayout1WithStats } from '../../feature-content-layout-1.definitions';

// Component
/**
 * Stats Component
 * 
 * The `Stats` is a child component of FeatureContentLayout1.
 * Renders a list of statistic values alongside their respective labels. 
 * 
 * @param { Object } props - The properties for configuring the Stats component.
 * @param { string } props.baseClass - The base class for styling.
 * @param { IFeatureContentLayout1WithContentBlocks[ 'stats' ] } props.logos - The stats items to render
 * 
 * @returns { JSX.Element } - The Stats component is being returned as a JSX element.
 */
export const Stats = ( props: {
  baseClass: string;
  stats: IFeatureContentLayout1WithStats[ 'stats' ]
}): JSX.Element => {
  // PROPS
  const {
    baseClass,
    stats
  } = props;

  // HTML
  return (
    <div className={ styles[ `${ baseClass }__stats` ] }>
      {/* Content Blocks */}
      { stats.map(( stat, index: number ) => (
        <div
          key={ `${ stat.description } ${ index }` }
          className={ styles[ `${ baseClass }__stats-item` ] }
        >
          {/* Value */}
          <div className={ styles[ `${ baseClass }__stats-item-value` ] }>
            <Text
              className={ styles[ `${ baseClass }__stats-item-value-element` ] }
              fontWeight={ 'bold' }
              variant={ 'heading large' }
            >
              { stat.value }
            </Text>
          </div>
          {/* ./Value */}
          {/* Description */}
          <div className={ styles[ `${ baseClass }__stats-item-description` ] }>
            <Text
              className={ styles[ `${ baseClass }__stats-item-description-element` ] }
              variant={ 'text regular' }
            >
              { stat.description }
            </Text>
          </div>
          {/* ./Description */}
        </div>
      ))}
      {/* ./Content Blocks */}
    </div>
  );
}
