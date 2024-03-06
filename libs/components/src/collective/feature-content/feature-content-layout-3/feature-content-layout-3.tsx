'use client'

// Packages & Modules
import { WindowContext } from '@relume-demo/providers';
import { toRem } from '@relume-demo/utils';
import styles from './feature-content-layout-3.module.scss';
import { motion } from 'framer-motion';
import {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';

// Components
import { Text } from '../../../';

// Definitions
import { TFeatureContentLayout3Props } from './feature-content-layout-3.definitions';

// Component
/**
 * FeatureContentLayout3 Component
 * 
 * The `FeatureContentLayout3` is a content driven component commonly used within feature sections.
 * The component is made out out clickable text group. When clicked, the active group is highlighted and the index value is emitted.
 * 
 * @param { TFeatureContentLayout3Props } props - The properties for configuring the FeatureContentLayout3 component.
 * 
 * @returns { JSX.Element } - The FeatureContentLayout3 component is being returned as a JSX element.
 */
export const FeatureContentLayout3 = ( props: TFeatureContentLayout3Props ): JSX.Element => {
  // PROPS
  const {
    onTabClick,
    tabs
  } = props;

  // PROVIDERS
  const { windowSize } = useContext( WindowContext )!;

  // VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'feature-content';

  // REFS
  /**
   * Stores a reference to the tabs container HTML Element
   */
  const tabsContainerRef = useRef< HTMLDivElement >( null );

  // STATES
  /**
   * Stores the index position of the current active tab
   */
  const [
    _activeTab,
    _setActiveTab
  ] = useState< number >( 0 );
  /**
   * Stores the height and top offset values of each tab item
   */
  const [
    _tabStyles,
    _setTabStyles
  ] = useState<{
    height: string;
    top: string;
  }[]>(
    [ ...Array( tabs.length ) ].map( _ => ({
      height: toRem( 0 ),
      top: toRem( 0 )
    }))
  );

  // METHODS
  /**
   * Handles click events on tab items
   * 
   * @param { number } index - The index position of the tab item
   * 
   * @returns { void } - Returns nothing.
   */
  const handleTabClick = ( index: number ): void => {
    // Update the active tab
    _setActiveTab( index );

    // Emits the click event with the tab index position
    onTabClick( index );
  }

  /**
   * Gets the height and top offset values for the tab items
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
      height: string;
      top: string;
    }[] = [];

    // Loop through the tabs
    tabItems.forEach( tab => {
      // Push their styles to the the container variable
      tabStyles.push({
        height: toRem( tab.offsetHeight ),
        top: toRem( tab.offsetTop )
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
      {/* Indicator */}
      <motion.div
        className={ styles[ `${ baseClass }__indicator` ] }
        animate={{
          height: _tabStyles[ _activeTab ].height,
          top: _tabStyles[ _activeTab ].top
        }}
      ></motion.div>
      {/* ./Indicator */}

      {/* Tabs */}
      <div
        ref={ tabsContainerRef }
        className={ styles[ `${ baseClass }__tabs` ] }
      >
        { tabs.map(( tab, index: number ) => (
          <div
            onClick={ () => handleTabClick( index ) }
            key={ `${ tab.title } ${ index }` }
            className={ styles[ `${ baseClass }__tab` ] }
          >
            {/* Title */}
            <div className={ styles[ `${ baseClass }__tab-title` ] }>
              <Text
                className={ styles[ `${ baseClass }__tab-title-element` ] }
                fontWeight={ 'bold' }
                variant={ 'heading regular' }
              >
                { tab.title }
              </Text>
            </div>
            {/* ./Title */}

            {/* Paragraph */}
            <div className={ styles[ `${ baseClass }__tab-paragraph` ] }>
              <Text
                className={ styles[ `${ baseClass }__tab-paragraph-element` ] }
                variant={ 'text regular' }
              >
                { tab.paragraph }
              </Text>
            </div>
            {/* ./Paragraph */}
          </div>
        ))}
      </div>
      {/* ./Tabs */}
    </div>
  );
}
