// Packages & Modules
import styles from './employee-group.module.scss';

// Components
import {
  Image,
  SocialLinks,
  Text
} from '../../';

// Definitions
import type { TEmployeeGroupProps } from './employee-group.definitions';

// Component
/**
 * EmployeeGroup Component
 * 
 * The `EmployeeGroup` component is a TypeScript React component that displays information about an
 * employee, including their name, job title, description, photo, and social media links.
 *
 * @component
 * @example
 * <EmployeeGroup
 *   name={ 'Full name' }
 *   jobTitle={ 'Job Title' }
 *   description={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' }
 *   photo={{
 *     alt: '',
 *     src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *   }}
 *   socials={[
 *    {
 *      icon: '/icons/icon-facebook.svg',
 *      name: 'Facebook',
 *      url: '#',
 *      type: 'facebook'
 *    }
 *   ]}
 * />
 * 
 * @param { TEmployeeGroupProps } props - The properties for configuring the EmployeeGroup component.
 * 
 * @returns { JSX.Element } - The EmployeeGroup component is being returned as a JSX element.
 */
export const EmployeeGroup = ( props: TEmployeeGroupProps ): JSX.Element => {
  // PROPS
  const {
    alignContent = 'left',
    description,
    jobTitle,
    name,
    photo,
    socials,
    stackContent = 'vertical'
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'group';

  // HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ styles[ `${ baseClass }--align-${ stackContent === 'horizontal' ? 'left' : alignContent }` ] }
      ${ styles[ `${ baseClass }--stack-${ stackContent }` ] }
    `}>
      {/* Image */}
      <div className={ styles[ `${ baseClass }__image` ] }>
        <Image
          { ...photo }
          className={ styles[ `${ baseClass }__image-element` ] }
          fit={ 'cover' }
        />
      </div>
      {/* ./Image */}

      {/* Text */}
      <div className={ styles[ `${ baseClass }__text` ] }>
        {/* Name */}
        <div className={ styles[ `${ baseClass }__name` ] }>
          <Text
            className={ styles[ `${ baseClass }__name-element` ] }
            fontWeight={ 'semibold' }
            textAlign={ stackContent === 'horizontal' ? 'left' : alignContent }
            variant={ 'text large' }
          >
            { name }
          </Text>
        </div>
        {/* ./Name */}
        {/* Job Title */}
        <div className={ styles[ `${ baseClass }__job-title` ] }>
          <Text
            className={ styles[ `${ baseClass }__job-title-element` ] }
            textAlign={ stackContent === 'horizontal' ? 'left' : alignContent }
            variant={ 'text medium' }
          >
            { jobTitle }
          </Text>
        </div>
        {/* ./Job Title */}
        {/* Description */}
        <div className={ styles[ `${ baseClass }__description` ] }>
          <Text
            className={ styles[ `${ baseClass }__description-element` ] }
            textAlign={ stackContent === 'horizontal' ? 'left' : alignContent }
            variant={ 'text regular' }
          >
            { description }
          </Text>
        </div>
        {/* ./Description */}
      </div>
      {/* ./Text */}

      {/* Socials */}
      <div className={ styles[ `${ baseClass }__socials` ] }>
        <SocialLinks links={ socials } />
      </div>
      {/* ./Socials */}
    </div>
  );
}
