// Packages & Modules
import { formatDate } from '@relume-demo/utils';
import styles from './post-card.module.scss';

// Components
import {
  Badge,
  Image,
  Link,
  Text
} from '../../';

// Definitions
import type { TPostCardProps } from './post-card.definitions';

// Component
/**
 * PostCard Component
 * 
 * The `PostCard` is a content driven component commonly used within feature sections.
 * It is composed of text elements, which can be used alongside visual and functional elements such as icons or buttons.
 * 
 * @component
 * @example
 * <PostCard
 *   category={ 'Category' }
 *   excerpt={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.' }
 *   image={{
 *     alt: '',
 *     src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *   }}
 *   timeToRead={ '5 min' }
 *   title={ 'Blog title heading will go here' }
 *   url={ '#' }
 *   author={{
 *     photo: {
 *       alt: '',
 *       src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 *     },
 *     fullName: 'Author Name'
 *   }}
 *   date={ new Date() }
 * />
 * 
 * @param { TPostCardProps } props - The properties for configuring the PostCard component.
 * 
 * @returns { JSX.Element } - The PostCard component is being returned as a JSX element.
 */
export const PostCard = ( props: TPostCardProps ): JSX.Element => {
  // PROPS
  const {
    category,
    classNames,
    excerpt,
    hideExcerpt = false,
    image,
    stackDirection = 'vertical',
    timeToRead,
    title,
    isOutlined = false
  } = props;


  // VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'card';
  /**
   * Stores the HTML tag to render based on the component props.
   */
  const _tag: 'a' | 'div' = ( 'ctaLabel' in props ) ? 'div' : 'a';

  // HTML
  return (
    <_tag
      className={`
        ${ styles[ baseClass ] }
        ${ styles[ `${ baseClass }--stack-${ stackDirection }` ] }
        ${ styles[ `${ baseClass }--tag-${ _tag }` ] }
        ${ isOutlined ? styles[ `${ baseClass }--is-outlined` ] : '' }
        ${ classNames?.container ? classNames.container : '' }
      `}
      href={ !( 'ctaLabel' in props ) ? props.url : undefined }
    >
      {/* Image */}
      <div className={`
        ${ styles[ `${ baseClass }__image` ] }
        ${ classNames?.image ? classNames.image : '' }
      `}>
        <Image
          { ...image }
          className={ styles[ `${ baseClass }__image-element` ] }
          fit={ 'cover' }
        />
      </div>
      {/* ./Image */}

      {/* Content */}
      <div className={`
        ${ styles[ `${ baseClass }__content` ] }
        ${ classNames?.content ? classNames.content : '' }
      `}>
        {/* Content Header */}
        <div className={`
          ${ styles[ `${ baseClass }__content-header` ] }
          ${ ( 'ctaLabel' in props ) ? styles[ `${ baseClass }__content-header--has-time` ] : '' }
        `}>
          {/* Category */}
          {( 'ctaLabel' in props ) &&
            <Badge
              color={ 'primary' }
              label={ category }
              shade={ 'light' }
              size={ 'sm' }
            />
          }
          { !( 'ctaLabel' in props ) && (
            <div className={ styles[ `${ baseClass }__category` ] }>
              <Text
                className={ styles[ `${ baseClass }__category-element` ] }
                fontWeight={ 'semibold' }
                variant={ 'text small' }
              >
                { category }
              </Text>
            </div>
          )}
          {/* ./Category */}
          {/* Time to Read */}
          {( 'ctaLabel' in props ) && (
            <div className={ styles[ `${ baseClass }__time-to-read` ] }>
              <Text
                className={ styles[ `${ baseClass }__time-to-read-element` ] }
                fontWeight={ 'semibold' }
                variant={ 'text small' }
              >
                { timeToRead }
              </Text>
            </div>
          )}
          {/* ./Time to Read */}
        </div>
        {/* ./Content Header */}
        {/* Content Body */}
        <div className={ styles[ `${ baseClass }__content-body` ] }>
          {/* Title */}
          <div className={ styles[ `${ baseClass }__title` ] }>
            <Text
              className={ styles[ `${ baseClass }__title-element` ] }
              fontWeight={ 'bold' }
              variant={ 'heading small' }
            >
              { title }
            </Text>
          </div>
          {/* ./Title */}
          {/* Excerpt */}
          {( !hideExcerpt ) && (
            <div className={ styles[ `${ baseClass }__excerpt` ] }>
              <Text
                className={ styles[ `${ baseClass }__excerpt-element` ] }
                variant={ 'text regular' }
              >
                { excerpt }
              </Text>
            </div>
          )}
          {/* ./Excerpt */}
        </div>
        {/* ./Content Body */}
        {/* Content Footer */}
        <div className={ styles[ `${ baseClass }__content-footer` ] }>
          {/* Author */}
          {( 'author' in props ) && (
            <div className={ styles[ `${ baseClass }__author` ] }>
              {/* Image */}
              <div className={ styles[ `${ baseClass }__author-image` ] }>
                <Image
                  { ...props.author.photo }
                  className={ styles[ `${ baseClass }__author-image-element` ] }
                  fit={ 'cover' }
                />
              </div>
              {/* ./Image */}
              {/* Text */}
              <div className={ styles[ `${ baseClass }__author-text` ] }>
                {/* Name */}
                <div className={ styles[ `${ baseClass }__author-name` ] }>
                  <Text
                    className={ styles[ `${ baseClass }__author-name-element` ] }
                    fontWeight={ 'semibold' }
                    variant={ 'text small' }
                  >
                    { props.author.fullName }
                  </Text>
                </div>
                {/* ./Name */}
                {/* Date */}
                <div className={ styles[ `${ baseClass }__author-date` ] }>
                  <Text
                    className={ styles[ `${ baseClass }__author-date-element` ] }
                    variant={ 'text small' }
                  >
                    { formatDate( props.date ) } <span>{ timeToRead }</span>
                  </Text>
                </div>
                {/* ./Date */}
              </div>
              {/* ./Text */}
            </div>
          )}
          {/* ./Author */}
          {/* Link */}
          {( 'ctaLabel' in props ) && (
            <div className={ styles[ `${ baseClass }__link` ] }>
              <Link
                href={ props.url }
                icon={ 'arrow' }
                label={ props.ctaLabel }
                type={ 'a' }
              />
            </div>
          )}
          {/* ./Link */}
        </div>
        {/* ./Content Footer */}
      </div>
      {/* ./Content */}
    </_tag>
  );
}

export default PostCard;
