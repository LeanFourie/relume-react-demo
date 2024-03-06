// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { HeroLayout5 } from './hero-layout-5';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { THeroLayout5Props } from './hero-layout-5.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: Omit<
  THeroLayout5Props,
  'image' | 'video'
> = {
  actions: [
    {
      accessibleLabel: '',
      label: 'Button',
      onClick: () => {},
      type: 'text'
    },
    {
      accessibleLabel: '',
      label: 'Button',
      onClick: () => {},
      type: 'text',
      variant: 'outlined'
    }
  ],
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  title: 'Medium length hero headline goes here',
};

// ----------------------------------------------------- //

// Story
export const HeroHeader9: StoryObj<typeof HeroLayout5> = {
  render: ( args: THeroLayout5Props ) => (
    <HeroLayout5 { ...args } />
),
  args: {
    ...defaultArgs,
    image: {
      alt: '',
      src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  },
  parameters: excludedParams([
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader11: StoryObj<typeof HeroLayout5> = {
  render: ( args: THeroLayout5Props ) => (
    <HeroLayout5 { ...args } />
),
  args: {
    ...defaultArgs,
    background: <>Anything can render here</>
  },
  parameters: excludedParams([
    'coverImageUri',
    'videoUri',
    'image'
  ])
};

export const HeroHeader13: StoryObj<typeof HeroLayout5> = {
  render: ( args: THeroLayout5Props ) => (
    <HeroLayout5 { ...args } />
),
  args: {
    ...defaultArgs,
    coverImageUri: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'image',
    'background'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof HeroLayout5> = {
  component: HeroLayout5,
  tags: ['autodocs'],
  argTypes: {
    actions: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    background: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    coverImageUri: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    image: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    paragraph: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    title: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    videoUri: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
