'use client'

// IMPORTS
// Module Imports
import React, {
  useEffect,
  useState
} from 'react'

// Definition Imports
import type { TWindowContext } from './window.definitions'

// CONTEXT
export const WindowContext = React.createContext< TWindowContext | null >( null )

// PROVIDER
const WindowProvider = ( props: React.PropsWithChildren ): JSX.Element => {
  // PROPS
  const { children } = props

  // VARIABLES
  /**
   * Stores the available breakpoints
   */
  const breakpoints: TWindowContext[ 'breakpoints' ] = {
    // Mobile Small
    xs: 400,
    // Mobile Large
    sm: 750,
    // Tablet
    md: 1200,
    // Desktop Small
    lg: 1440,
    // Desktop Medium
    xl: 1600
    // Desktop Large
  };

  // STATES
  /**
   * Stores the current device size
   */
  const [
    _device,
    _setDevice
  ] = useState< TWindowContext[ 'device' ] >( 'desktop lg' );
  /**
   * Stores the current window size
   */
  const [
    _windowSize,
    _setWindowSize
  ] = useState< TWindowContext[ 'windowSize' ] >( 0 );

  // METHODS
  /**
   * Updates the window size state to the updated window inner width
   */
  const setWindowSize = (): void => {
    // Get the new window inner width
    const windowWidth: number = window.innerWidth;
    
    // Update the window size state with the updated window width
    _setWindowSize( windowWidth );
  }

  /**
   * Update the device size state
   */
  const setDevice = (): void => {
    // Check if the window size is within the params of the device size, THEN...
    // update the device size state accordingly
    switch ( true ) {
      case _windowSize >= breakpoints.xl:
        _setDevice( 'desktop lg' );
        break;
      case _windowSize < breakpoints.xl &&
           _windowSize >= breakpoints.lg:
        _setDevice( 'desktop md' );
        break;
      case _windowSize < breakpoints.lg &&
           _windowSize >= breakpoints.md:
        _setDevice( 'desktop sm' );
        break;
      case _windowSize < breakpoints.md &&
           _windowSize >= breakpoints.sm:
        _setDevice( 'tablet md' );
        break;
      case _windowSize < breakpoints.sm &&
           _windowSize >= breakpoints.xs:
        _setDevice( 'mobile lg' );
        break;
      case _windowSize < breakpoints.xs:
        _setDevice( 'mobile sm' );
        break;
      default:
        _setDevice( 'desktop lg' );
        break;
    }
  }
    
  // EFFECTS
  useEffect(() => {
    // Check if the window exists, THEN...
    if ( typeof window !== undefined ) {
      // Set the initial window size
      setWindowSize();

      // Attach a resize event to the window to get the new window width on resize
      window.addEventListener( 'resize', setWindowSize );
    }

    // Run the cleanup
    return () => {
      // Check if the window exists, THEN...
      if ( typeof window !== undefined ) {
        // Remove the attached resize event listener from the window
        window.removeEventListener( 'resize', setWindowSize );
      }
    }
  }, []);

  useEffect(() => {
    // Check if the window exists, THEN...
    // update the device size
    if ( typeof window !== undefined ) setDevice();
  }, [ _windowSize ]);
    
  // VALUE
  const value: TWindowContext = {
    // Values
    breakpoints,
    device: _device,
    windowSize: _windowSize
  }
    
  // HTML
  return (
    <WindowContext.Provider value={ value }>
      { children }
    </WindowContext.Provider>
  )
}
    
export default WindowProvider
    