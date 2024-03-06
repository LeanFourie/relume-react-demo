// Packages & Modules
import styles from './hero-layout-15.module.scss';

// Components
import { ContentGroup } from '../../../';

// Definitions
import type { THeroLayout15Props } from './hero-layout-15.definitions';

// Component
/**
 * HeroLayout15 Component
 * 
 * The `HeroLayout15` component is a page hero component useful to introduce pages.
 * The component contains a primary text content block.
 * 
 * @component
 * @example
 * <HeroLayout15
 *   actions={[
 *     {
 *       accessibleLabel: '',
 *       label: 'Button',
 *       onClick: () => {},
 *       type: 'text'
 *     }
 *   ]}
 *   paragraph={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' }
 *   title={ 'Medium length hero headline goes here' }
 * />
 * 
 * @param { THeroLayout15Props } props - The properties for configuring the HeroLayout15 component.
 * 
 * @returns { JSX.Element } - The HeroLayout15 component is being returned as a JSX element.
 */
export const HeroLayout15 = ( props: THeroLayout15Props ): JSX.Element => {
  // #region - PROPS
  const {
    actions,
    paragraph,
    title
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
    <section className={ styles[ baseClass ] }>
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Content */}
        <div className={ styles[ `${ baseClass }__content` ] }>
          <div className={ styles[ `${ baseClass }__content-inner` ] }>
            <ContentGroup
              actions={ actions }
              paragraph={ paragraph }
              stackDirection={ 'vertical' }
              textAlign={ 'center' }
              title={ title }
              type={ 'actions' }
            />
          </div>
        </div>
        {/* ./Content */}
      </div>
    </section>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - Header / 96
 */
