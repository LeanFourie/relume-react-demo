// Packages & Modules
import styles from '../../content-group.module.scss';

// Components
import { Button } from '../../../../';

// Definitions
import type { IContentGroupWithActions } from '../../content-group.definitions';

// Component
/**
 * ContentGroupActions Component
 * 
 * The `ContentGroupActions` function is a React component that renders a group of actions as buttons.
 * 
 * @param { IContentGroupWithActions } props - The `props` parameter is an object that contains the properties of the
 * `ContentGroupActions` component. It is of type `Omit<IContentGroupWithActions, 'title' | 'paragraph'
 * | 'tagline' | 'type'>`, which means it is an object that has all
 * 
 * @returns { JSX.Element } a JSX element, which is a div containing a list of buttons. Each button is rendered based
 * on the actions array passed in as props.
 */
export const ContentGroupActions = ( props: Omit<
  IContentGroupWithActions,
  'title' | 'paragraph' | 'tagline' | 'type'
> ): JSX.Element => {
  // PROPS
  const { actions } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'content-group';

  // HTML
  return (
    <div className={ styles[ `${ baseClass }__actions` ] }>
      { actions.map(( action, index: number ) => (
        <div
          key={ `${ action.accessibleLabel } ${ index }` }
          className={ styles[ `${ baseClass }__actions-item` ] }
        >
          <Button { ...action } />
        </div>
      ))}
    </div>
  );
}
