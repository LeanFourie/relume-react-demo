// Packages & Modules
import styles from './testimonial-group.module.scss';

// Components
import {
  Icon,
  Image,
  Text
} from '../../';

// Definitions
import type { TTestimonialGroupProps } from './testimonial-group.definitions';

// Component
/**
 * TestimonialGroup Component
 * 
 * The `TestimonialGroup` component is a card type component containing a testimonial message.
 * It is composed of text and visual elements showcasing the client and the message.
 * 
 * @component
 * @example
 * <TestimonialGroup
 *   align={ 'left' }
 *   messageSize={ 'heading small' }
 *   stackClientDetails={ 'default' }
 *   client={{
 *     company: 'Relume Demo',
 *     name: 'John Doe',
 *     photo: {
 *       alt: '',
 *       src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *     },
 *     position: 'UX / UI Designer'
 *   }}
 *   message={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.' }
 *   logo={{
 *     alt: '',
 *     src: '/images/image-relume_demo-logo.svg'
 *   }}
 * />
 * 
 * @param { TTestimonialGroupProps } props - The properties for configuring the TestimonialGroup component.
 * 
 * @returns { JSX.Element } - The TestimonialGroup component is being returned as a JSX element.
 */
export const TestimonialGroup = ( props: TTestimonialGroupProps ): JSX.Element => {
  // PROPS
  const {
    align = 'left',
    client,
    logo,
    message,
    messageSize = 'heading small',
    rating,
    stackClientDetails = 'default'
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
      ${ styles[ `${ baseClass }--align-${ align }` ] }
      ${ styles[ `${ baseClass }--client-stack-${ stackClientDetails }` ] }
      ${ rating ? styles[ `${ baseClass }--has-rating` ] : '' }
    `}>
      {/* Logo */}
      {( !rating ) && (
        <div className={`
          ${ styles[ `${ baseClass }__logo` ] }
          ${ styles[ `${ baseClass }__logo--is-top` ] }
        `}>
          <Image
            { ...logo }
            className={ styles[ `${ baseClass }__logo-element` ] }
          />
        </div>
      )}
      {/* ./Logo */}

      {/* Rating */}
      {( rating ) && (
        <div className={ styles[ `${ baseClass }__rating` ] }>
          { [ ...Array( 5 ) ].map(( _, index: number ) => (
            <div
              key={ index }
              className={`
                ${ styles[ `${ baseClass }__star` ] }
                ${ ( index + 1 <= rating ) ? styles[ `${ baseClass }__star--is-filled` ] : '' }
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
          fontWeight={ 'bold' }
          textAlign={ align }
          variant={ messageSize }
        >
          { message }
        </Text>
      </div>
      {/* ./Message */}

      {/* Client */}
      <div className={ styles[ `${ baseClass }__client` ] }>
        {/* Image */}
        {( client.photo ) &&
          <div className={ styles[ `${ baseClass }__client-image` ] }>
            <Image
              { ...client.photo }
              className={ styles[ `${ baseClass }__client-image-element` ] }
              fit={ 'cover' }
            />
          </div>
        }
        {/* ./Image */}
        {/* Details */}
        <div className={ styles[ `${ baseClass }__client-details` ] }>
          {/* Name */}
          <div className={ styles[ `${ baseClass }__client-name` ] }>
            <Text
              className={ styles[ `${ baseClass }__client-name-element` ] }
              fontWeight={ 'semibold' }
              textAlign={ rating ? 'left' : align }
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
              textAlign={ rating ? 'left' : align }
              variant={ 'text regular' }
            >
              { client.position }, { client.company }
            </Text>
          </div>
          {/* ./Company */}
        </div>
        {/* ./Details */}
        {/* Logo */}
        {( rating ) &&
        <div className={`
          ${ styles[ `${ baseClass }__logo` ] }
          ${ styles[ `${ baseClass }__logo--is-bottom` ] }
        `}>
            <Image
              { ...logo }
              className={ styles[ `${ baseClass }__client-logo-element` ] }
            />
          </div>
        }
        {/* ./Logo */}
      </div>
      {/* ./Client */}
    </div>
  );
}
