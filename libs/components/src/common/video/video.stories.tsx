// Components
import { Video } from './video';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TVideoProps } from './video.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof Video> = {
  render: ( args: TVideoProps ) => (
    <Video { ...args } />
  ),
  args: {
    autoPlay: false,
    className: '',
    coverImageUri: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fit: 'contain',
    videoUri: '/videos/video_placeholder-ocean.mp4'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Video> = {
  component: Video,
  tags: ['autodocs'],
  argTypes: {
    autoPlay: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    coverImageUri: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    fit: {
      table: { defaultValue: { summary: 'contain' } },
      defaultValue: 'contain'
    },
    videoUri: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
