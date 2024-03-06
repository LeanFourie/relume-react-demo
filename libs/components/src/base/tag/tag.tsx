// Packages & Modules
import styles from './tag.module.scss';

// Components
import { Text } from '../../';

// Definitions
import type { TTagProps } from './tag.definitions';

// Component
/**
 * Tag Component
 * 
 * Component rendering a tag with an associated link.
 * Tags are used for categorization or labeling, typically as links to related content.
 *
 * @component
 * @example
 * <Tag
 *   label={ 'Select all' }
 *   url={ '#' }
 * />
 *
 * @param { TTagProps } props - The properties of the Tag component.
 * 
 * @returns { JSX.Element } The rendered Tag component.
 */
export const Tag = ( props: TTagProps ): JSX.Element => {
  // PROPS
  const {
    className,
    label,
    url
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'tag';

  // HTML
  return (
    <a
      className={`
        ${ styles[ baseClass ] }
        ${ className ? className : '' }
      `}
      href={ url }
    >
      {/* Label */}
      <div className={ styles[ `${ baseClass }__label` ] }>
        <Text
          className={ styles[ `${ baseClass }__label-element` ] }
          fontWeight={ 'medium' }
          variant={ 'text regular' }
        >
          { label }
        </Text>
      </div>
      {/* ./Label */}
    </a>
  );
}
