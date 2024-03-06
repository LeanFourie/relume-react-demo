// Packages & Modules
import styles from '../../feature-content-layout-1.module.scss';

// Components
import {
  Icon,
  Text
} from '../../../../../';

// Definitions
import type { IFeatureContentLayout1WithContentBlocks } from '../../feature-content-layout-1.definitions';

// Component
/**
 * ContentBlocks Component
 * 
 * The `ContentBlocks` is a child component of FeatureContentLayout1.
 * This component consist of text elements combined to created a group of text content
 * 
 * @param { Object } props - The properties for configuring the ContentBlocks component.
 * @param { string } props.baseClass - The base class for styling.
 * @param { IFeatureContentLayout1WithContentBlocks[ 'contentBlocks' ] } props.contentBlocks - The content blocks configuration.
 * 
 * @returns { JSX.Element } - The ContentBlocks component is being returned as a JSX element.
 */
export const ContentBlocks = ( props: {
  baseClass: string;
  contentBlocks: IFeatureContentLayout1WithContentBlocks[ 'contentBlocks' ]
}): JSX.Element => {
  // PROPS
  const {
    baseClass,
    contentBlocks
  } = props;

  // HTML
  return (
    <div className={ styles[ `${ baseClass }__content-blocks` ] }>
      {/* Content Blocks */}
      { contentBlocks.blocks.map(( block, index: number ) => (
        <div
          key={ `${ block.title } ${ index }` }
          className={`
            ${ styles[ `${ baseClass }__content-block` ] }
            ${ ( block.icon ) ? styles[ `${ baseClass }__content-block--stack-${ contentBlocks.stack || 'horizontal' }` ] : '' }
          `}
        >
          {/* Icon */}
          {( block.icon ) &&
            <div className={ styles[ `${ baseClass }__content-block-icon` ] }>
              <Icon
                { ...block.icon }
                className={ styles[ `${ baseClass }__content-block-icon-element` ] }
              />
            </div>
          }
          {/* ./Icon */}

          {/* Text */}
          <div className={ styles[ `${ baseClass }__content-block-text` ] }>
            {/* Title */}
            <div className={ styles[ `${ baseClass }__content-block-title` ] }>
              <Text
                className={ styles[ `${ baseClass }__content-block-title-element` ] }
                fontWeight={ 'bold' }
                variant={ 'heading tiny' }
              >
                { block.title }
              </Text>
            </div>
            {/* ./Title */}
            {/* Paragraph */}
            <div className={ styles[ `${ baseClass }__content-block-paragraph` ] }>
              <Text
                className={ styles[ `${ baseClass }__content-block-paragraph-element` ] }
                variant={ 'text regular' }
              >
                { block.paragraph }
              </Text>
            </div>
            {/* ./Paragraph */}
          </div>
          {/* ./Text */}
        </div>
      ))}
      {/* ./Content Blocks */}
    </div>
  );
}
