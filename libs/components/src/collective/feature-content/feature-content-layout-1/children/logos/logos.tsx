// Packages & Modules
import styles from '../../feature-content-layout-1.module.scss';

// Components
import { Image } from '../../../../../';

// Definitions
import type { IFeatureContentLayout1WithLogos } from '../../feature-content-layout-1.definitions';

// Component
/**
 * Logos Component
 * 
 * The `Logos` is a child component of FeatureContentLayout1.
 * Renders a list of logos in a row.
 * 
 * @param { Object } props - The properties for configuring the Logos component.
 * @param { string } props.baseClass - The base class for styling.
 * @param { IFeatureContentLayout1WithContentBlocks[ 'logos' ] } props.logos - The logo items to render
 * 
 * @returns { JSX.Element } - The Logos component is being returned as a JSX element.
 */
export const Logos = ( props: {
  baseClass: string;
  logos: IFeatureContentLayout1WithLogos[ 'logos' ]
}): JSX.Element => {
  // PROPS
  const {
    baseClass,
    logos
  } = props;

  // HTML
  return (
    <div className={ styles[ `${ baseClass }__logos` ] }>
      {/* Logos */}
      { logos.map(( logo, index: number ) => (
        <div
          key={ `${ logo.src } ${ index }` }
          className={ styles[ `${ baseClass }__logo` ] }
        >
          <Image
            { ...logo }
            className={ styles[ `${ baseClass }__logo-element` ] }
          />
        </div>
      ))}
      {/* ./Logos */}
    </div>
  );
}
