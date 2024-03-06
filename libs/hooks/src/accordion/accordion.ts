// Packages & Modules
import { useAnimation } from 'framer-motion';
import { useState } from 'react';

// Definitions
import type { IUseAccordion } from './accordion.definitions';

// Hook
export const useAccordion = ( ids: string[] ): IUseAccordion => {
  // STATES
  const [
    _activePanel,
    _setActivePanel
  ] = useState< string | null >( null );

  // ANIMATION HOOKS
  /**
   * Stores the the list of animation values for each panel
   */
  const panels = ids.reduce(( accumulator, id ) => {
    // Create a new object
    accumulator[ id ] = {
      animation: useAnimation()
    };

    // Return the object
    return accumulator;
  }, {} as IUseAccordion[ 'panels' ] );

  // METHODS
  /**
   * Handles click events on the panel items
   * 
   * @param panelId - The id of the panel
   * @param contentHeight - The height to be set on the panel
   */
  const handlePanelClick = (
    panelId: string,
    contentHeight: number
  ): void => {
    // Loop through the panels
    Object.entries( panels ).forEach(([ id, panel ]) => {
      // Check if the id does NOT match the panel id, OR...
      // if the id does match the panel id AND the panel id matches the active panel, THEN...
      if ( id !== panelId || ( id === panelId && _activePanel === panelId ) ) {
        // Set the panel height to 0
        panel.animation.start({ height: 0 });
      }
      // ELSE...
      else {
        // Set the panel height to the required height
        panel.animation.start({ height: contentHeight });
      }
    });
  
    // Update the active panel ID
    _setActivePanel( _activePanel === panelId ? null : panelId );
  };

  // RETURN
  return {
    activePanel: _activePanel,
    panels,
    handlePanelClick
  };
}
