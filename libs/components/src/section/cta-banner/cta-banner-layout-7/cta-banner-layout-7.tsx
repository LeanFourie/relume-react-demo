// Packages & Modules
import styles from './cta-banner-layout-7.module.scss';

// Components
import {
  Button,
  Icon,
  Text
} from '../../../';

// Definitions
import type { TCtaBannerLayout7Props } from './cta-banner-layout-7.definitions';

// Component
/**
 * CtaBannerLayout7 Component
 * 
 * The `CtaBannerLayout7` component is a call to action based content driven section.
 * The component renders text content blocks with actions and an icon element.
 * 
 * @component
 * @example
 * <CtaBannerLayout7
 *   contentGroups={[{
 *     paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
 *     title: 'Short heading here',
 *     icon: {
 *       name: 'home',
 *       type: 'text'
 *     },
 *     actions: [
 *       {
 *         accessibleLabel: '',
 *         label: 'Button',
 *         onClick: () => {},
 *         type: 'text'
 *       }
 *     ]
 *   }]}
 * />
 * 
 * @param { TCtaBannerLayout7Props } props - The properties for configuring the CtaBannerLayout7 component.
 * 
 * @returns { JSX.Element } - The CtaBannerLayout7 component is being returned as a JSX element.
 */
export const CtaBannerLayout7 = ( props: TCtaBannerLayout7Props ): JSX.Element => {
  // #region - PROPS
  const {
    contentGroups,
    textAlign = 'left'
  } = props;
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'section';
  // #endregion

  // #region - HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Content Groups */}
        <div className={ styles[ `${ baseClass }__groups` ] }>
          { contentGroups.map( ( group, index: number ) => (
            <div
              key={ `${ group.title } ${ index }` }
              className={`
                ${ styles[ `${ baseClass }__group` ] }
                ${ styles[ `${ baseClass }__group--align-${ textAlign }` ] }
              `}
            >
              {/* Icon */}
              <div className={ styles[ `${ baseClass }__group-icon` ] }>
                <Icon
                  { ...group.icon }
                  className={ styles[ `${ baseClass }__group-icon-element` ] }
                />
              </div>
              {/* ./Icon */}
              {/* Title */}
              <div className={ styles[ `${ baseClass }__group-title` ] }>
                <Text
                  className={ styles[ `${ baseClass }__group-title-element` ] }
                  fontWeight={ 'bold' }
                  textAlign={ textAlign }
                  variant={ 'heading large' }
                >
                  { group.title }
                </Text>
              </div>
              {/* ./Title */}
              {/* Paragraph */}
              <div className={ styles[ `${ baseClass }__group-paragraph` ] }>
                <Text
                  className={ styles[ `${ baseClass }__group-paragraph-element` ] }
                  textAlign={ textAlign }
                  variant={ 'text medium' }
                >
                  { group.paragraph }
                </Text>
              </div>
              {/* ./Paragraph */}
              {/* Actions */}
              <div className={`
                ${ styles[ `${ baseClass }__group-actions` ] }
                ${ styles[ `${ baseClass }__group-actions--align-${ textAlign }` ] }
              `}>
                { group.actions.map(( action, idx: number ) => (
                  <div
                    key={ `${ action.accessibleLabel } ${ idx }` }
                    className={ styles[ `${ baseClass }__group-action` ] }
                  >
                    <Button
                      { ...action }
                      className={ styles[ `${ baseClass }__group-action-element` ] }
                    />
                  </div>
                ))}
              </div>
              {/* ./Actions */}
            </div>
          ))}
        </div>
        {/* ./Content Groups */}
      </div>
      {/* ./Inner */}
    </div>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - CTA / 35
 * - CTA / 36
 */
