// Packages & Modules
import styles from './employee-card.module.scss';

// Components
import {
  Image,
  SocialLinks,
  Text
} from '../../';

// Definitions
import type { TEmployeeCardProps } from './employee-card.definitions';

// Component
/**
 * EmployeeCard Component
 * 
 * The `EmployeeCard` component is a TypeScript React component that renders a card with employee
 * information, including their name, job title, description, photo, and social media links.
 *
 * @component
 * @example
 * <EmployeeCard
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
 * @param { TEmployeeCardProps } props - The properties for configuring the EmployeeCard component.
 * @returns { JSX.Element } - The EmployeeCard component is being returned as a JSX element.
 */
export const EmployeeCard = ( props: TEmployeeCardProps ): JSX.Element => {
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
  const baseClass: string = 'card';

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

        {/* Socials */}
        <div className={ styles[ `${ baseClass }__socials` ] }>
          <SocialLinks links={ socials } />
        </div>
        {/* ./Socials */}
      </div>
      {/* ./Text */}
    </div>
  );
}
