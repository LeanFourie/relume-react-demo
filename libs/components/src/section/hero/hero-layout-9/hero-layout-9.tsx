// Packages & Modules
import styles from './hero-layout-9.module.scss';

// Components
import { ContentGroup } from '../../../';

// Definitions
import type { THeroLayout9Props } from './hero-layout-9.definitions';

// Component
/**
 * HeroLayout9 Component
 * 
 * The `HeroLayout9` component is a page hero component useful to introduce pages.
 * The component contains a primary text content block.
 * 
 * @component
 * @example
 * <HeroLayout9
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
 * @param { THeroLayout9Props } props - The properties for configuring the HeroLayout9 component.
 * 
 * @returns { JSX.Element } - The HeroLayout9 component is being returned as a JSX element.
 */
export const HeroLayout9 = ( props: THeroLayout9Props ): JSX.Element => {
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
      {/* Content */}
      <div className={ styles[ `${ baseClass }__content` ] }>
        <ContentGroup
          actions={ actions }
          paragraph={ paragraph }
          stackDirection={ 'vertical' }
          textAlign={ 'center' }
          title={ title }
          type={ 'actions' }
        />
      </div>
      {/* ./Content */}
    </section>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - Header / 23
 */
