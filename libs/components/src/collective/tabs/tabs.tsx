// Packages & Modules
import { WindowContext } from '@relume-demo/providers';
import { toRem } from '@relume-demo/utils';
import styles from './tabs.module.scss';
import { motion } from 'framer-motion';
import {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';

// Components
import { Tab } from '../../';

// Definitions
import type { TTabsProps } from './tabs.definitions'

// Component
/**
 * Tabs Component
 * 
 * The `Tabs` component is an in page content switcher component.
 * It is composed of different tab items with unique child values.
 * 
 * @component
 * @example
 * <Tabs
 *   tabs={[{
 *     label: 'Label',
 *     content: <p>Hello world!</p>
 *   }]}
 * />
 * 
 * @param { TTabsProps } props - The properties for configuring the Tabs component.
 * 
 * @returns { JSX.Element } - The Tabs component is being returned as a JSX element.
 */
export const Tabs = ( props: TTabsProps ): JSX.Element => {
  // PROPS
  const {
    tabs,
    activeTab = 0,
    isDisabled = false,
    isSkeleton = false
  } = props;

  // PROVIDERS
  const { windowSize } = useContext( WindowContext )!;

  // VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'tabs';

  // REFS
  /**
   * Stores a reference to the tabs container HTML Element.
   */
  const tabsContainerRef = useRef< HTMLDivElement >( null );

  // STATES
  /**
   * Stores the index position value of the currently active tab
   */
  const [
    _activeTab,
    _setActiveTab
  ] = useState< number >( activeTab );
  /**
   * Stores the width and left offset values of the currently active tab HTML element
   */
  const [
    _tabStyles,
    _setTabStyles
  ] = useState<{
    width: string;
    left: string;
  }[]>(
    [ ...Array( tabs.length ) ].map( _ => ({
      width: toRem( 0 ),
      left: toRem( 0 )
    }))
  );

  // METHODS
  /**
   * Handle click events on the clicked tab item.
   * 
   * @param { number } index - The index position of the clicked tab item.
   * 
   * @returns { void } - Returns nothing.
   *
   * @internal
   */
  const handleClick = ( index: number ): void => {
    // Save the clicked tav item index to the `_activeTab` state
    _setActiveTab( index );
  }

  /**
   * Gets the height and top offset values for the tab items.
   * 
   * @returns { void } - Returns nothing.
   */
  const getTabStyles = (): void => {
    // Get the tabs container HTML element
    const tabsContainerElement: HTMLDivElement = tabsContainerRef.current!;
    // Get the tab HTML elements
    const tabItems = Array.from( tabsContainerElement.children ) as HTMLDivElement[];
    // Create a variable to store the tab styles
    const tabStyles: {
      width: string;
      left: string;
    }[] = [];

    // Loop through the tabs
    tabItems.filter(( _, index: number ) => index > 0 ).forEach( tab => {
      // Push their styles to the the container variable
      tabStyles.push({
        width: toRem( tab.offsetWidth ),
        left: toRem( tab.offsetLeft )
      })
    });

    // Store the styles in a state
    _setTabStyles( tabStyles );
  }

  // EFFECTS
  useEffect(() => {
    // Get the height and top offset values for each tab item
    setTimeout( () => getTabStyles(), 500 )
  }, [ windowSize ]);

  // HTML
  return (
    <div className={ styles[ baseClass ] }>
        {/* Tabs */}
        <div
          ref={ tabsContainerRef }
          className={ styles[ `${ baseClass }__triggers` ] }
        >
          {/* Indicator */}
          <motion.div
            className={ styles[ `${ baseClass }__triggers-indicator` ] }
            animate={{
              width: _tabStyles[ _activeTab ].width,
              left: _tabStyles[ _activeTab ].left
            }}
          />
          {/* ./Indicator */}
          {/* Tab Items */}
          { tabs.map(( item, index: number ) => (
            <Tab
              onClick={ () => handleClick( index ) }
              key={ `${ item.label } ${ index }` }
              isDisabled={ isDisabled }
              isSelected={ _activeTab === index }
              isSkeleton={ isSkeleton }
              { ...item }
            />
          ))}
          {/* ./Tab Items */}
        </div>
        {/* ./Tabs */}

        {/* Content */}
        <div className={ styles[ `${ baseClass }__content` ] }>
          { props.tabs[ _activeTab ].content }
        </div>
        {/* ./Content */}
    </div>
  );
}
