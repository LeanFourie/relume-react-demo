// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Packages & Modules
import { stackOptions } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { HeroLayout7 } from './hero-layout-7';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { THeroLayout7Props } from './hero-layout-7.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: Omit<
  THeroLayout7Props,
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
  textAlign: 'left',
  textStackDirection: 'horizontal',
  title: 'Medium length hero headline goes here'
};

// ----------------------------------------------------- //

// Story
export const HeroHeader15: StoryObj<typeof HeroLayout7> = {
  render: ( args: THeroLayout7Props ) => (
    <HeroLayout7 { ...args } />
),
  args: {
    ...defaultArgs,
    image: {
      alt: '',
      src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  },
  parameters: excludedParams([
    'textStackDirection',
    'textAlign',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader17: StoryObj<typeof HeroLayout7> = {
  render: ( args: THeroLayout7Props ) => (
    <HeroLayout7 { ...args } />
),
  args: {
    ...defaultArgs,
    coverImageUri: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'textStackDirection',
    'textAlign',
    'image',
    'background'
  ])
};

export const HeroHeader26: StoryObj<typeof HeroLayout7> = {
  render: ( args: THeroLayout7Props ) => (
    <HeroLayout7 { ...args } />
),
  args: {
    ...HeroHeader15.args,
    textAlign: 'center',
    textStackDirection: 'vertical'
  },
  parameters: excludedParams([
    'textStackDirection',
    'textAlign',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader28: StoryObj<typeof HeroLayout7> = {
  render: ( args: THeroLayout7Props ) => (
    <HeroLayout7 { ...args } />
),
  args: {
    ...HeroHeader17.args,
    textAlign: 'center',
    textStackDirection: 'vertical'
  },
  parameters: excludedParams([
    'textStackDirection',
    'textAlign',
    'image',
    'background'
  ])
};

export const HeroHeader71: StoryObj<typeof HeroLayout7> = {
  render: ( args: THeroLayout7Props ) => (
    <HeroLayout7 { ...args } />
),
  args: {
    ...HeroHeader26.args,
    textAlign: 'left'
  },
  parameters: excludedParams([
    'textStackDirection',
    'textAlign',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader72: StoryObj<typeof HeroLayout7> = {
  render: ( args: THeroLayout7Props ) => (
    <HeroLayout7 { ...args } />
),
  args: {
    ...HeroHeader28.args,
    textAlign: 'left'
  },
  parameters: excludedParams([
    'textStackDirection',
    'textAlign',
    'image',
    'background'
  ])
};

export const HeroHeader75: StoryObj<typeof HeroLayout7> = {
  render: ( args: THeroLayout7Props ) => (
    <HeroLayout7 { ...args } />
),
  args: {
    ...HeroHeader28.args
  },
  parameters: excludedParams([
    'textStackDirection',
    'textAlign',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader82: StoryObj<typeof HeroLayout7> = {
  render: ( args: THeroLayout7Props ) => (
    <HeroLayout7 { ...args } />
),
  args: {
    ...HeroHeader28.args
  },
  parameters: excludedParams([
    'textStackDirection',
    'textAlign',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const Background: StoryObj<typeof HeroLayout7> = {
  render: ( args: THeroLayout7Props ) => (
    <HeroLayout7 { ...args } />
),
  args: {
    ...defaultArgs,
    background: <>Anything can render here</>
  },
  parameters: excludedParams([
    'textStackDirection',
    'textAlign',
    'coverImageUri',
    'videoUri',
    'image'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof HeroLayout7> = {
  component: HeroLayout7,
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
    textAlign: {
      table: { defaultValue: { summary: 'left' } },
      defaultValue: 'left',
      options: [
        'left',
        'center'
      ]
    },
    textStackDirection: {
      table: { defaultValue: { summary: 'horizontal' } },
      defaultValue: 'horizontal',
      options: stackOptions
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
