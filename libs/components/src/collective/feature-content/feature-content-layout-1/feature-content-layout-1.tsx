// Packages & Modules
import styles from './feature-content-layout-1.module.scss';

// Components
import {
  Button,
  Icon,
  Text
} from '../../../';
import {
  ContentBlocks,
  List,
  Logos,
  Stats
} from './children';

// Definitions
import type { TFeatureContentLayout1Props } from './feature-content-layout-1.definitions';

// Component
/**
 * FeatureContentLayout1 Component
 * 
 * The `FeatureContentLayout1` is a content driven component commonly used within feature sections.
 * It is composed of text elements, which can be used alongside visual and functional elements such as icons or buttons.
 * 
 * @component
 * @example
 * <FeatureContentLayout1
 *   paragraph={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' }
 *   title={ 'Medium length section heading goes here' }
 * />
 * 
 * @param { TFeatureContentLayout1Props } props - The properties for configuring the FeatureContentLayout1 component.
 * 
 * @returns { JSX.Element } - The FeatureContentLayout1 component is being returned as a JSX element.
 */
export const FeatureContentLayout1 = ( props: TFeatureContentLayout1Props ): JSX.Element => {
  // PROPS
  const {
    actions,
    classNames,
    paragraph,
    hideTitle = false,
    stackDirection = 'vertical',
    tagline,
    textAlign = 'left',
    title,
    fontVariants
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'feature-content';

  // HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ styles[ `${ baseClass }--align-${ textAlign }` ] }
      ${ styles[ `${ baseClass }--stack-${ stackDirection }` ] }
      ${ classNames?.container ? classNames.container : '' }
    `}>
      {/* Tile Row */}
      <div className={ styles[ `${ baseClass }__row` ] }>
        {/* Icon */}
        {( ( 'variant' in props ) && props.variant === 'icon' ) && (
          <div className={`
            ${ styles[ `${ baseClass }__icon` ] }
            ${ ( !tagline ) ? styles[ `${ baseClass }__icon--size-sm` ] : '' }
            ${ classNames?.icon ? classNames.icon : '' }
          `}>
            <Icon
              { ...props.icon }
              className={ styles[ `${ baseClass }__icon-element` ] }
            />
          </div>
        )}
        {/* ./Icon */}

        {/* Tagline */}
        {( tagline && !( ( 'variant' in props ) && props.variant === 'icon' ) ) && (
          <div className={ styles[ `${ baseClass }__tagline` ] }>
            <Text
              className={ styles[ `${ baseClass }__tagline-element` ] }
              fontWeight={ 'semibold' }
              textAlign={ textAlign }
              variant={ 'text regular' }
            >
              { tagline }
            </Text>
          </div>
        )}
        {/* ./Tagline */}

        {/* Title */}
        {( !hideTitle ) && (
          <div className={ styles[ `${ baseClass }__title` ] }>
            <Text
              className={ styles[ `${ baseClass }__title-element` ] }
              fontWeight={ 'bold' }
              textAlign={ textAlign }
              variant={
                ( fontVariants?.title )
                  ? fontVariants?.title
                  : ( tagline ) ? 'heading large' : 'heading medium'
              }
            >
              { title }
            </Text>
          </div>
        )}
        {/* ./Title */}
      </div>
      {/* ./Tile Row */}

      {/* Content Row */}
      <div className={ styles[ `${ baseClass }__row` ] }>
        {/* Paragraph */}
        {( paragraph !== '' ) && (
          <div className={ styles[ `${ baseClass }__paragraph` ] }>
            <Text
              className={ styles[ `${ baseClass }__paragraph-element` ] }
              textAlign={ textAlign }
              variant={
                ( fontVariants?.paragraph )
                  ? fontVariants?.paragraph
                  : 'text medium'
              }
            >
              { paragraph }
            </Text>
          </div>
        )}
        {/* ./Paragraph */}

        {/* Content Blocks */}
        {( ( 'variant' in props ) && props.variant === 'content-blocks' ) && (
          <ContentBlocks
            baseClass={ baseClass }
            contentBlocks={ props.contentBlocks }
          />
        )}
        {/* ./Content Blocks */}

        {/* List */}
        {( ( 'variant' in props ) && props.variant === 'list' ) && (
          <List
            baseClass={ baseClass }
            items={ props.items }
          />
        )}
        {/* ./List */}

        {/* Logos */}
        {( ( 'variant' in props ) && props.variant === 'logos' ) && (
          <Logos
            baseClass={ baseClass }
            logos={ props.logos }
          />
        )}
        {/* ./Logos */}

        {/* Stats */}
        {( ( 'variant' in props ) && props.variant === 'stats' ) && (
          <Stats
            baseClass={ baseClass }
            stats={ props.stats }
          />
        )}
        {/* ./Stats */}

        {/* Actions */}
        {( actions ) && (
          <div className={`
            ${ styles[ `${ baseClass }__actions` ] }
            ${ classNames?.actions ? classNames.actions : '' }
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
        )}
        {/* ./Actions */}
      </div>
      {/* ./Content Row */}
    </div>
  );
}
