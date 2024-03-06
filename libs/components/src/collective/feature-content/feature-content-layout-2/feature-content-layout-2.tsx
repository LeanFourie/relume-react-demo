// Packages & Modules
import styles from './feature-content-layout-2.module.scss';

// Components
import {
  Button,
  Icon,
  Image,
  Text
} from '../../../';

// Definitions
import type { TFeatureContentLayout2Props } from './feature-content-layout-2.definitions';

// Component
/**
 * FeatureContentLayout2 Component
 * 
 * The `FeatureContentLayout2` is a content driven component commonly used within feature sections.
 * It is composed of a list of text elements, which can be used alongside visual such as icons or images.
 * 
 * @param { TFeatureContentLayout2Props } props - The properties for configuring the FeatureContentLayout2 component.
 * 
 * @returns { JSX.Element } - The FeatureContentLayout2 component is being returned as a JSX element.
 */
export const FeatureContentLayout2 = ( props: TFeatureContentLayout2Props ): JSX.Element => {
  // PROPS
  const {
    actions,
    alignActions = 'left',
    classNames,
    contentBlocks,
    fontVariants,
    maxColumns = true,
    stack = 'vertical'
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'feature-content';

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Blocks */}
      <div className={`
        ${ styles[ `${ baseClass }__blocks` ] }
        ${ styles[ `${ baseClass }__blocks--stack-${ stack }` ] }
        ${ maxColumns ? styles[ `${ baseClass }__blocks--has-max-columns` ] : '' }
        ${ ( classNames?.blocks ) ? classNames.blocks : '' }
      `}>
        { contentBlocks.map(( block, index: number ) => (
          <div
            key={ `${ block.title } ${ index }` }
            className={`
              ${ styles[ `${ baseClass }__block` ] }
              ${ ( 'icon' in block && block.icon ) ? styles[ `${ baseClass }__block--stack-${ stack }` ] : '' }
              ${ ( classNames?.block ) ? classNames.block : '' }
            `}
          >
            {/* Icon */}
            {( 'icon' in block && block.icon ) &&
              <div className={`
                ${ styles[ `${ baseClass }__block-icon` ] }
                ${ ( classNames?.icon ) ? classNames.icon : '' }
              `}>
                <Icon
                  { ...block.icon }
                  className={ styles[ `${ baseClass }__block-icon-element` ] }
                />
              </div>
            }
            {/* ./Icon */}

            {/* Image */}
            {( 'image' in block && block.image ) &&
              <div className={ styles[ `${ baseClass }__block-image` ] }>
                <Image 
                  { ...block.image }
                  fit={ 'cover' }
                  className={ styles[ `${ baseClass }__block-image-element` ] }
                />
              </div>
            }
            {/* ./Image */}

            {/* Text */}
            <div className={`
              ${ styles[ `${ baseClass }__block-text` ] }
              ${ ( classNames?.text ) ? classNames.text : '' }
            `}>
              {/* Title */}
              <div className={ styles[ `${ baseClass }__block-title` ] }>
                <Text
                  className={ styles[ `${ baseClass }__block-title-element` ] }
                  fontWeight={ 'bold' }
                  variant={
                    ( fontVariants?.title )
                      ? fontVariants.title
                      : 'heading small'
                  }
                >
                  { block.title }
                </Text>
              </div>
              {/* ./Title */}
              {/* Paragraph */}
              <div className={ styles[ `${ baseClass }__block-paragraph` ] }>
                <Text
                  className={ styles[ `${ baseClass }__block-paragraph-element` ] }
                  variant={ 'text regular' }
                >
                  { block.paragraph }
                </Text>
              </div>
              {/* ./Paragraph */}
              {/* Action */}
              {( block.action ) &&
                <div className={ styles[ `${ baseClass }__block-action` ] }>
                  <Button
                    { ...block.action }
                    className={ styles[ `${ baseClass }__block-action-element` ] }
                    trailingIcon={{
                      name: 'chevron_right',
                      type: 'text'
                    }}
                    size={ 'sm' }
                    type={ 'text' }
                    variant={ 'ghost' }
                  />
                </div>
              }
              {/* ./Action */}
            </div>
            {/* ./Text */}
          </div>
        ))}
      </div>
      {/* ./Blocks */}

      {/* Actions */}
        {( actions ) &&
          <div className={`
            ${ styles[ `${ baseClass }__actions` ] }
            ${ styles[ `${ baseClass }__actions--align-${ alignActions }` ] }
            ${ ( classNames?.actions ) ? classNames.actions : '' }
          `}>
            { actions.map(( action, index: number ) => (
              <div
                key={ `${ action.accessibleLabel } ${ index }` }
                className={ styles[ `${ baseClass }__actions-item` ] }
              >
                <Button { ...action } />
              </div>
            ))}
          </div>
        }
      {/* ./Actions */}
    </div>
  );
}
