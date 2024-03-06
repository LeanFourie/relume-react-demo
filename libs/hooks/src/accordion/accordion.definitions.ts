// IMPORTS
import type { AnimationControls } from 'framer-motion';

// INTERFACES
interface IUseAccordion {
  /**
   * Stores the active panel id
   */
  activePanel: string | null;
  /**
   * Sets the animation controls
   */
  panels: {
    [ key: string ]: {
      animation: AnimationControls;
    };
  };
  /**
   * Handles click events on the accorion panels
   */
  handlePanelClick: (
    panelId: string,
    contentHeight: number
  ) => void;
}

// EXPORTS
export type { IUseAccordion };
