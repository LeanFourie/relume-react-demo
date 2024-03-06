'use client'

// Packages & Modules
import { toSnakeCase } from '@relume-demo/utils'
import styles from './text.module.scss';
import {
  useEffect,
  useState
} from 'react';

// Definitions
import type { TTextElement } from '@relume-demo/utils';
import type { TTextProps } from './text.definitions';
import type { PropsWithChildren } from 'react';

// Component
/**
 * Text Component
 * 
 * Represents a text element with various styling options.
 * 
 * @component
 * @example
 * <Text>
 *   Hello world
 * </Text>
 * 
 * @param { PropsWithChildren< TTextProps > } props - The component props.
 * 
 * @returns { JSX.Element } The rendered text element.
 */
export const Text = ( props: PropsWithChildren< TTextProps > ): JSX.Element => {
  // PROPS
  const {
    children,
    className,
    fontStyle = 'unset',
    fontWeight = 'regular',
    isEditable = false,
    isSkeleton = false,
    renderAs,
    textAlign = 'left',
    textTransform = 'unset',
    variant = 'text regular'
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'text';
  
  // STATES
  /**
   * Stores the HTML tag element to render
   */
  const [
    _tag,
    _setTag
  ] = useState< TTextElement >();

  // METHODS
  /**
   * Sets the appropriate HTML tag based on the 'renderAs' and 'variant' props.
   * 
   * @returns { void } - Returns nothing.
   */
  const setTag = (): void => {
    switch (true) {
      case ( renderAs && renderAs === 'label' ):
        _setTag( 'label' );
        break;
      case ( renderAs && renderAs === 'span' ):
        _setTag( 'span' );
        break;
      case ( renderAs && renderAs === 'caption' ):
        _setTag( 'caption' );
        break;
      case variant === 'heading extra-large':
        _setTag( 'h1' );
        break;
      case variant === 'heading large':
        _setTag( 'h2' );
        break;
      case variant === 'heading medium':
        _setTag( 'h3' );
        break;
      case variant === 'heading regular':
        _setTag( 'h4' );
        break;
      case variant === 'heading small':
        _setTag( 'h5' );
        break;
      case variant === 'heading tiny':
        _setTag( 'h6' );
        break;
      case variant.includes( 'text' ):
        _setTag( 'p' );
        break;
      default:
        break;
    };
  }

  // EFFECTS
  useEffect(() => {
    setTag();
  }, [ variant ]);

  // HTML
  return (
    <>
      {( _tag ) && (
        <_tag
          className={`
            ${ styles[ baseClass ] }
            ${ styles[ `${ baseClass }--align-${ textAlign }` ] }
            ${ styles[ `${ baseClass }--casing-${ textTransform }` ] }
            ${ styles[ `${ baseClass }--style-${ fontStyle }` ] }
            ${ styles[ `${ baseClass }--tag-${ _tag }` ] }
            ${ styles[ `${ baseClass }--variant-${ toSnakeCase( variant ) }` ] }
            ${ styles[ `${ baseClass }--weight-${ fontWeight }` ] }
            ${ isEditable ? styles[ `${ baseClass }--is-editable` ] : '' }
            ${ isSkeleton ? styles[ `${ baseClass }--is-skeleton` ] : '' }
            ${ className ? className : '' }
          `}
          contentEditable={ isEditable }
          suppressContentEditableWarning={ isEditable }
          tabIndex={ isEditable ? 0 : undefined }
        >
          { children }
        </_tag>
      )}
    </>
  );
}
