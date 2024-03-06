// Packages & Modules
import styles from './team-layout-1.module.scss';

// Components
import {
  Button,
  EmployeeCard,
  EmployeeGroup,
  FeatureContentLayout1,
  Text
} from '../../../';

// Definitions
import type { TTeamLayout1Props } from './team-layout-1.definitions';

// Component
/**
 * TeamLayout1 Component
 * 
 * The `TeamLayout1` component is a "Meet the team" section listing company employees.
 * The section renders a list of employees alongside primary and secondary text content blocks.
 * 
 * @component
 * @example
 * <TeamLayout1
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
 *   textAlign={ 'center' }
 *   useCards={ false }
 *   columns={ 4 }
 * />
 * 
 * @param { TTeamLayout1Props } props - The properties for configuring the TeamLayout1 component.
 * 
 * @returns { JSX.Element } - The TeamLayout1 component is being returned as a JSX element.
 */
export const TeamLayout1 = (props: TTeamLayout1Props ): JSX.Element => {
  // #region - PROPS
  const {
    columns = 3,
    ctaContent,
    employeeContentStack = 'vertical',
    employees,
    leadingContent,
    textAlign = 'left',
    useCards = false
  } = props;
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
            textAlign={ textAlign }
          />
        </div>
        {/* ./Leading Content */}

        {/* Employees */}
        <div className={`
          ${ styles[ `${ baseClass }__employees` ] }
          ${ styles[ `${ baseClass }__employees--columns-${ columns }` ] }
        `}>
          { employees.map(( employee, index: number ) => (
            <div
              key={ `${ employee.name } ${ index }` }
              className={ styles[ `${ baseClass }__employee` ] }
            >
              {( useCards ) && (
                <EmployeeCard
                  { ...employee }
                  alignContent={ textAlign }
                  stackContent={ employeeContentStack }
                />
              )}
              {( !useCards ) && (
                <EmployeeGroup
                  { ...employee }
                  alignContent={ textAlign }
                  stackContent={ employeeContentStack }
                />
              )}
            </div>
          ))}
        </div>
        {/* ./Employees */}

        {/* Trailing Content */}
        <div className={`
          ${ styles[ `${ baseClass }__trailing-content` ] }
          ${ styles[ `${ baseClass }__trailing-content--align-${ textAlign }` ] }
        `}>
          {/* Title */}
          <div className={ styles[ `${ baseClass }__trailing-content-title` ] }>
            <Text
              className={ styles[ `${ baseClass }__trailing-content-title-element` ] }
              fontWeight={ 'bold' }
              textAlign={ textAlign }
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
              textAlign={ textAlign }
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
 * - Team / 1
 * - Team / 2
 * - Team / 3
 * - Team / 4
 * - Team / 5
 * - Team / 6
 * - Team / 7
 * - Team / 8
 * - Team / 11
 * - Team / 12
 * - Team / 13
 * - Team / 14
 * - Team / 15
 * - Team / 16
 */
