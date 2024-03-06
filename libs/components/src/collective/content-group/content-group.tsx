// Packages & Modules
import styles from './content-group.module.scss';

// Components
import { Text } from '../../';
import {
  ContentGroupActions,
  ContentGroupForm
} from './children';

// Definitions
import type { TContentGroupProps } from './content-group.definitions';

// Component
/**
 * ContentGroup Component
 * 
 * Represents a customizable collection of text components.
 *
 * @component
 * @example
 * <ContentGroup
 *   title={ 'Welcome' }
 *   paragraph={ 'Explore our amazing features.' }
 *   tagline={ 'Discover more' }
 * />
 *
 * @param { TContentGroupProps } props - The properties for configuring the ContentGroup component.
 * 
 * @returns { JSX.Element } The rendered ContentGroup component.
 */
export const ContentGroup = ( props: TContentGroupProps ): JSX.Element => {
  // PROPS
  const {
    paragraph,
    stackDirection = 'vertical',
    tagline,
    textAlign = 'left',
    title
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'content-group';

  // METHODS
  /**
   * The handleSubmit function checks if the type prop is set to 'form' and then calls the onSubmit
   * function with the provided value.
   * 
   * @param { string } value - The value parameter is a string that represents the value to be submitted.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleSubmit = ( value: string ): void => {
    // Check if the type props is NOT set, OR...
    // the type prop is set and the type is NOT set to form, THEN...
    // end the function
    if (
      !( 'type' in props ) ||
      ( 'type' in props && props.type !== 'form' )
    ) return;

    // Emit the props submit action
    props.onSubmit( value );
  }

  // HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ styles[ `${ baseClass }--stack-${ stackDirection }` ] }
      ${ styles[ `${ baseClass }--align-${ textAlign }` ] }
    `}>
      {/* Tagline & Title */}
      <div className={ styles[ `${ baseClass }__row` ] }>
        {/* Tagline */}
        {( tagline && tagline !== '' ) && (
          <div className={ styles[ `${ baseClass }__tagline` ] }>
            <Text
              className={ styles[ `${ baseClass }__tagline-element` ] }
              fontWeight={ 'semibold' }
              textAlign={ textAlign }
              variant={ 'text regular' }
            >
              { tagline }
            </Text>
          </div>
        )}
        {/* ./Tagline */}
        {/* Title */}
        <div className={ styles[ `${ baseClass }__title` ] }>
          <Text
            className={ styles[ `${ baseClass }__title-element` ] }
            fontWeight={ 'bold' }
            textAlign={ textAlign }
            variant={ 'heading extra-large' }
          >
            { title }
          </Text>
        </div>
        {/* ./Title */}
      </div>
      {/* ./Tagline & Title */}

      {/* Paragraph & Content */}
      <div className={ styles[ `${ baseClass }__row` ] }>
        {/* Paragraph */}
        <div className={ styles[ `${ baseClass }__paragraph` ] }>
          <Text
            className={ styles[ `${ baseClass }__paragraph-element` ] }
            textAlign={ textAlign }
            variant={ 'text medium' }
          >
            { paragraph }
          </Text>
        </div>
        {/* ./Paragraph */}
        {/* Content */}
        {( 'type' in props ) && (
            <div className={ styles[ `${ baseClass }__content` ] }>
            {/* Actions */}
            {( props.type === 'actions' ) && (
              <ContentGroupActions actions={ props.actions } />
            )}
            {/* ./Actions */}

            {/* Form */}
            {( props.type === 'form' ) &&
              <ContentGroupForm
                action={ props.action }
                input={ props.input }
                message={ props.message }
                onSubmit={ handleSubmit }
              />
            }
            {/* ./Form */}
          </div>
        )}
        {/* ./Content */}
      </div>
      {/* ./Paragraph & Content */}
    </div>
  );
}
