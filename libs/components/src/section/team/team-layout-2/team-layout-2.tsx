// Packages & Modules
import { WindowContext } from '@relume-demo/providers';
import styles from './team-layout-2.module.scss';
import { useContext } from 'react';

// Components
import {
  Button,
  Carousel,
  EmployeeCard,
  EmployeeGroup,
  FeatureContentLayout1,
  Text
} from '../../../';

// Definitions
import type { TTeamLayout2Props } from './team-layout-2.definitions';

// Component
/**
 * TeamLayout2 Component
 * 
 * The `TeamLayout2` component is a "Meet the team" section listing company employees.
 * The section renders a list of employees inside a carousel, alongside primary and secondary text content blocks.
 * 
 * @component
 * @example
 * <TeamLayout2
 *   leadingContent={{
 *     tagline: 'Tagline',
 *     title: 'Our team',
 *     paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
 *   }}
 *   ctaContent={{
 *     title: 'We’re hiring!',
 *     paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
 *     action: {
 *       accessibleLabel: '',
 *       label: 'Button',
 *       onClick: () => {},
 *       type: 'text'
 *     }
 *   }}
 *   employees={[{
 *     name: 'Full name',
 *     jobTitle: 'Job Title',
 *     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
 *     photo: {
 *       alt: '',
 *       src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *     },
 *     socials: [
 *       {
 *         icon: '/icons/icon-facebook.svg',
 *         name: 'Facebook',
 *         url: '#',
 *         type: 'facebook'
 *       }
 *     ]
 *   }]}
 * />
 * 
 * @param { TTeamLayout2Props } props - The properties for configuring the TeamLayout2 component.
 * 
 * @returns { JSX.Element } - The TeamLayout2 component is being returned as a JSX element.
 */
export const TeamLayout2 = (props: TTeamLayout2Props ): JSX.Element => {
  // #region - PROPS
  const {
    ctaContent,
    employees,
    leadingContent,
    useCards = false
  } = props;
  // #endregion

  // #region - PROVIDERS
  const {
    breakpoints,
    windowSize
  } = useContext( WindowContext )!;
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'team';
  // #endregion

  // #region - HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Leading Content */}
        <div className={ styles[ `${ baseClass }__leading-content` ] }>
          <FeatureContentLayout1
            { ...leadingContent }
            textAlign={ 'left' }
          />
        </div>
        {/* ./Leading Content */}

        {/* Employees */}
        <div className={ styles[ `${ baseClass }__employees` ] }>
          <Carousel
            classNames={{
              arrows: styles[ `${ baseClass }__carousel-arrows` ],
              container: styles[ `${ baseClass }__carousel` ],
              containerInner: styles[ `${ baseClass }__carousel-inner` ],
              controls: styles[ `${ baseClass }__carousel-controls` ],
              dots: styles[ `${ baseClass }__carousel-dots` ],
              slides: styles[ `${ baseClass }__slides` ]
            }}
            slidesCount={ employees.length }
            infiniteSlides={ false }
            perView={
              ( windowSize < breakpoints.md )
                ? ( windowSize < breakpoints.sm ) ? 1 : 2
                : 3
            }
          >
            { employees.map(( employee, index: number ) => (
              <div
                key={ `${ employee.name } ${ index }` }
                className={ styles[ `${ baseClass }__employee` ] }
              >
                {( useCards ) && (
                  <EmployeeCard
                    { ...employee }
                    alignContent={ 'left' }
                  />
                )}
                {( !useCards ) && (
                  <EmployeeGroup
                    { ...employee }
                    alignContent={ 'left' }
                  />
                )}
              </div>
            ))}
          </Carousel>
        </div>
        {/* ./Employees */}

        {/* Trailing Content */}
        <div className={ styles[ `${ baseClass }__trailing-content` ] }>
          {/* Title */}
          <div className={ styles[ `${ baseClass }__trailing-content-title` ] }>
            <Text
              className={ styles[ `${ baseClass }__trailing-content-title-element` ] }
              fontWeight={ 'bold' }
              textAlign={ 'left' }
              variant={ 'heading regular' }
            >
              { ctaContent.title }
            </Text>
          </div>
          {/* ./Title */}
          {/* Paragraph */}
          <div className={ styles[ `${ baseClass }__trailing-content-paragraph` ] }>
            <Text
              className={ styles[ `${ baseClass }__trailing-content-paragraph-element` ] }
              textAlign={ 'left' }
              variant={ 'text medium' }
            >
              { ctaContent.paragraph }
            </Text>
          </div>
          {/* ./Paragraph */}
          {/* Action */}
          <div className={ styles[ `${ baseClass }__trailing-content-action` ] }>
            <Button
              { ...ctaContent.action }
              className={ styles[ `${ baseClass }__trailing-content-action-element` ] }
            />
          </div>
          {/* ./Action */}
        </div>
        {/* ./Trailing Content */}
      </div>
      {/* ./Inner */}
    </div>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - Team / 9
 * - Team / 10
 */
