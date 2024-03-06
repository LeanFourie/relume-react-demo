// Packages & Modules
import styles from './team-layout-3.module.scss';

// Components
import {
  EmployeeCard,
  EmployeeGroup,
  FeatureContentLayout1,
} from '../../../';

// Definitions
import type { TTeamLayout3Props } from './team-layout-3.definitions';

// Component
/**
 * TeamLayout3 Component
 * 
 * The `TeamLayout3` component is a "Meet the team" section listing company employees.
 * The section renders a list of employees alongside a primary text content block.
 * 
 * @component
 * @example
 * <TeamLayout3
 *   content={{
 *     tagline: 'Tagline',
 *     title: 'Our team',
 *     paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
 *     actions: [{
 *       accessibleLabel: '',
 *       label: 'Button',
 *       onClick: () => {},
 *       type: 'text'
 *     }]
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
 * @param { TTeamLayout3Props } props - The properties for configuring the TeamLayout3 component.
 * 
 * @returns { JSX.Element } - The TeamLayout3 component is being returned as a JSX element.
 */
export const TeamLayout3 = (props: TTeamLayout3Props ): JSX.Element => {
  // #region - PROPS
  const {
    columns = 2,
    content,
    employees,
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
    <div className={`
      ${ styles[ baseClass ] }
      ${ styles[ `${ baseClass }--columns-${ columns }` ] }
    `}>
      {/* Inner */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        {/* Content */}
        <div className={ styles[ `${ baseClass }content` ] }>
          <FeatureContentLayout1
            { ...content }
            textAlign={ 'left' }
          />
        </div>
        {/* ./Content */}

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
                  alignContent={ 'left' }
                  stackContent={ columns === 2 ? 'horizontal' : 'vertical' }
                />
              )}
              {( !useCards ) && (
                <EmployeeGroup
                  { ...employee }
                  alignContent={ 'left' }
                  stackContent={ columns === 2 ? 'horizontal' : 'vertical' }
                />
              )}
            </div>
          ))}
        </div>
        {/* ./Employees */}
      </div>
      {/* ./Inner */}
    </div>
  );
  // #endregion
}

/**
 * Relume Lib:
 * - Team / 17
 * - Team / 18
 * - Team / 19
 * - Team / 20
 */
