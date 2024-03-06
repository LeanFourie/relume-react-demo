'use client'

/**
 * TODO: Make play button large & have it follow the cursor
 */

// Packages & Modules
import styles from './video.module.scss';
import {
  useEffect,
  useRef,
  useState
} from 'react';

// Components
import { Button } from '../../';

// Definitions
import type { TVideoProps } from './video.definitions';

// Component
/**
 * Video Component
 * 
 * The `Video` component is a media based component.
 * The component renders an HTML video component with options such as auto play and object fit.
 *
 * @component
 * @example
 * <Video videoUri={ '/videos/video_placeholder-ocean.mp4' } />
 * 
 * @param { TVideoProps } props - The properties for configuring the Video component.
 * 
 * @returns { JSX.Element } - The Video component is being returned as a JSX element.
 */
export const Video = ( props: TVideoProps ): JSX.Element => {
  // PROPS
  const {
    autoPlay = false,
    className,
    coverImageUri,
    fit = 'contain',
    videoUri
  } = props;

  // VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'video';

  // REFS
  /**
   * Stores a reference to the video HTML Element.
   */
  const videoRef = useRef< HTMLVideoElement >( null );

  // STATES
  /**
   * Stores the current play / pause state of the video.
   */
  const [
    _playVideo,
    _setPlayVideo
  ] = useState< boolean >( !!autoPlay );
  /**
   * Determines whether the play button will be visible to the user or not.
   */
  const [
    _showPlayButton,
    _setShowPlayButton
  ] = useState< boolean >( true );
  /**
   * Stores the NodeJS timer ID controlling the visibility of the play / pause button.
   */
  const [
    _timeoutId,
    _setTimeoutId
  ] = useState< NodeJS.Timeout | number | null >( null );

  // METHODS
  /**
   * Plays / pauses the video.
   * 
   * @returns { void } - Returns nothing.
   */
  const playVideo = (): void => {
    // Get the video HTML element
    const videoElement: HTMLVideoElement = videoRef.current!;

    // Check if the video SHOULD play, THEN...
    if ( _playVideo ) {
      // Play the video
      videoElement.play();
    }
    // ELSE...
    else {
      // Pause the video
      videoElement.pause();
    }
  }

  /**
   * Handle click events on the play / pause button.
   * 
   * @returns { void } - Returns nothing.
   */
  const handlePlayClick = (): void => {
    // Toggle the play / pause state
    _setPlayVideo( state => !state );
  }

  /**
   * Handle mouse move events on the container.
   * 
   * @returns { void } - Returns nothing.
   */
  const handleMouseMove = (): void => {
    // Check if the play button is NOT visible, THEN...
    // set the button to be visible
    if ( !_showPlayButton ) _setShowPlayButton( true );
  
    // Check if the NodeJS timer ID is set, THEN...
    // clear the timer
    if ( _timeoutId !== null ) clearTimeout( _timeoutId );
  
    // Create a new NodeJS timer with a half a second timeout
    const timeoutId = setTimeout(() => {
      // Check if the play button is visible, THEN...
      // hide the button
      if ( _showPlayButton ) _setShowPlayButton(false);
    }, 500 );

    // Save the timer ID to the state
    _setTimeoutId( timeoutId );
  };

  // EFFECTS
  useEffect(() => {
    playVideo();
  }, [ _playVideo ]);

  // HTML
  return (
    <div
      onMouseMove={ handleMouseMove }
      className={`
        ${ styles[ baseClass ] }
        ${ styles[ `${ baseClass }--fit-${ fit }` ] }
        ${ _playVideo ? styles[ `${ baseClass }--is-playing` ] : '' }
        ${ className ? className : '' }
      `}
    >
      {/* Video */}
      <div className={ styles[ `${ baseClass }__inner` ] }>
        <video
          ref={ videoRef }
          className={ styles[ `${ baseClass }__element` ] }
          controls={ false }
          muted={ autoPlay }
          poster={ coverImageUri }
          src={ videoUri }
        />
      </div>
      {/* ./Video */}

      {/* Button */}
      {( !autoPlay ) && (
        <div className={`
          ${ styles[ `${ baseClass }__button` ] }
          ${ _showPlayButton ? styles[ `${ baseClass }__button--is-visible` ] : '' }
        `}>
          <Button
            onClick={ () => handlePlayClick() }
            accessibleLabel={ _playVideo ? 'Pause video' : 'Play video' }
            icon={{
              name: _playVideo ? 'pause_circle' : 'play_circle',
              type: 'text'
            }}
            type={ 'icon' }
          />
        </div>
      )}
      {/* ./Button */}
    </div>
  );
}

export default Video;
