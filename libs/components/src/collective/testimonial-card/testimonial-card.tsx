// Packages & Modules
import styles from './testimonial-card.module.scss';

// Components
import {
  Icon,
  Link,
  Image,
  Text
} from '../../';

// Definitions
import type { TTestimonialCardProps } from './testimonial-card.definitions';

// Component
/**
 * TestimonialCard Component
 * 
 * The `TestimonialCard` component is a card type component containing a testimonial message.
 * It is composed of text and visual elements showcasing the client and the message.
 * 
 * @component
 * @example
 * <TestimonialCard
 *   client={{
 *     company: 'Relume Demo',
 *     name: 'John Doe',
 *     photo: {
 *       alt: '',
 *       src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *     },
 *     position: 'UX / UI Designer'
 *   }}
 *   message={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare. }
 *   rating={ 4 }
 * />
 * 
 * @param { TTestimonialCardProps } props - The properties for configuring the TestimonialCard component.
 * 
 * @returns { JSX.Element } - The TestimonialCard component is being returned as a JSX element.
 */
export const TestimonialCard = ( props: TTestimonialCardProps ): JSX.Element => {
  // PROPS
  const {
    client,
    link,
    message
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'card';

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
      {/* Logo */}
      {( 'logo' in props ) && (
        <div className={ styles[ `${ baseClass }__logo` ] }>
          <Image
            { ...props.logo }
            className={ styles[ `${ baseClass }__logo-element` ] }
          />
        </div>
      )}
      {/* ./Logo */}

      {/* Rating */}
      {( 'rating' in props ) && (
        <div className={ styles[ `${ baseClass }__rating` ] }>
          { [ ...Array( 5 ) ].map(( _, index: number ) => (
            <div
              key={ index }
              className={`
                ${ styles[ `${ baseClass }__star` ] }
                ${ ( index + 1 <= props.rating ) ? styles[ `${ baseClass }__star--is-filled` ] : '' }
              `}
            >
              <Icon
                className={ styles[ `${ baseClass }__star-element` ] }
                name={ 'star' }
                type={ 'text' }
              />
            </div>
          ))}
        </div>
      )}
      {/* ./Rating */}

      {/* Message */}
      <div className={ styles[ `${ baseClass }__message` ] }>
        <Text
          className={ styles[ `${ baseClass }__message-element` ] }
          variant={ 'text medium' }
        >
          { message }
        </Text>
      </div>
      {/* ./Message */}

      {/* Client */}
      <div className={ styles[ `${ baseClass }__client` ] }>
        {/* Image */}
        <div className={ styles[ `${ baseClass }__client-image` ] }>
          <Image
            { ...client.photo }
            className={ styles[ `${ baseClass }__client-image-element` ] }
            fit={ 'cover' }
          />
        </div>
        {/* ./Image */}
        {/* Details */}
        <div className={ styles[ `${ baseClass }__client-details` ] }>
          {/* Name */}
          <div className={ styles[ `${ baseClass }__client-name` ] }>
            <Text
              className={ styles[ `${ baseClass }__client-name-element` ] }
              fontWeight={ 'semibold' }
              variant={ 'text regular' }
            >
              { client.name }
            </Text>
          </div>
          {/* ./Name */}
          {/* Company */}
          <div className={ styles[ `${ baseClass }__client-company` ] }>
            <Text
              className={ styles[ `${ baseClass }__client-company-element` ] }
              variant={ 'text regular' }
            >
              { client.position }, { client.company }
            </Text>
          </div>
          {/* ./Company */}
        </div>
        {/* ./Details */}
      </div>
      {/* ./Client */}

      {/* Link */}
      {( link ) &&
        <div className={ styles[ `${ baseClass }__link` ] }>
          <Link
            { ...link }
            className={ styles[ `${ baseClass }__link-element` ] }
          />
        </div>
      }
      {/* ./Link */}
    </div>
  );
}
