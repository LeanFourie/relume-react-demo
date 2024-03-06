// Packages & Modules
import styles from './job-card.module.scss';

// Components
import {
  Badge,
  Button,
  Icon,
  Text
} from '../../';

// Definitions
import type { TJobCardProps } from './job-card.definitions';

// Component
/**
 * JobCard Component
 * 
 * The `JobCard` component is a card component containing information about available job positions.
 * The component contains information such as the role, location and industry.
 * It can be combined with a quick apply button.
 * 
 * @component
 * @example
 * <JobCard
 *   contractType={{
 *     icon: {
 *       name: 'schedule',
 *       type: 'text'
 *     },
 *     label: 'Permanent'
 *   }}
 *   description={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' }
 *   location={{
 *     icon: {
 *       name: 'location_on',
 *       type: 'text'
 *     },
 *     label: 'Pretoria, ZA'
 *   }}
 *   role={ 'UX / UI Designer' }
 * />
 * 
 * @param { TJobCardProps } props - The properties for configuring the JobCard component.
 * 
 * @returns { JSX.Element } - The JobCard component is being returned as a JSX element.
 */
export const JobCard = ( props: TJobCardProps ): JSX.Element => {
  // PROPS
  const {
    action,
    classNames,
    contractType,
    department,
    description,
    location,
    role
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
      ${ ( classNames?.card ) ? classNames.card : '' }
    `}>
      {/* Header */}
      <div className={`
        ${ styles[ `${ baseClass }__header` ] }
        ${ ( classNames?.header ) ? classNames.header : '' }
      `}>
        {/* Role */}
        <div className={ styles[ `${ baseClass }__role` ] }>
          <Text
            className={ styles[ `${ baseClass }__role-element` ] }
            fontWeight={ 'bold' }
            variant={ 'heading small' }
          >
            { role }
          </Text>
        </div>
        {/* ./Role */}
        {/* Deparment */}
        {( department ) &&
          <div className={ styles[ `${ baseClass }__department` ] }>
            <Badge
              className={ styles[ `${ baseClass }__department-element` ] }
              label={ department }
              shade={ 'light' }
            />
          </div>
        }
        {/* ./Deparment */}
      </div>
      {/* ./Header */}

      {/* Body */}
      <div className={`
        ${ styles[ `${ baseClass }__body` ] }
        ${ ( classNames?.header ) ? classNames.body : '' }
      `}>
        {/* Description */}
        <div className={ styles[ `${ baseClass }__description` ] }>
          <Text
            className={ styles[ `${ baseClass }__description-element` ] }
            variant={ 'text regular' }
          >
            { description }
          </Text>
        </div>
        {/* ./Description */}
        {/* Details */}
        <div className={ styles[ `${ baseClass }__details` ] }>
          {/* Location */}
          <div className={ styles[ `${ baseClass }__details-item` ] }>
            <Icon
              { ...location.icon }
              className={ styles[ `${ baseClass }__details-item-icon` ] }
            />
            <Text
              className={ styles[ `${ baseClass }__details-item-text` ] }
              variant={ 'text regular' }
            >
              { location.label }
            </Text>
          </div>
          {/* ./Location */}
          {/* Contract Type */}
          <div className={ styles[ `${ baseClass }__details-item` ] }>
            <Icon
              { ...contractType.icon }
              className={ styles[ `${ baseClass }__details-item-icon` ] }
            />
            <Text
              className={ styles[ `${ baseClass }__details-item-text` ] }
              variant={ 'text regular' }
            >
              { contractType.label }
            </Text>
          </div>
          {/* ./Contract Type */}
        </div>
        {/* ./Details */}
        {/* Action */}
        {( action ) &&
          <div className={ styles[ `${ baseClass }__action` ] }>
            <Button
              { ...action }
              className={ styles[ `${ baseClass }__action-element` ] }
            />
          </div>
        }
        {/* ./Action */}
      </div>
      {/* ./Body */}
    </div>
  );
}
