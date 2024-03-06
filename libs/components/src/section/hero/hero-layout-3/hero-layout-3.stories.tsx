// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { HeroLayout3 } from './hero-layout-3';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { THeroLayout3Props } from './hero-layout-3.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: Omit<
  THeroLayout3Props,
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
  isCondensed: false,
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  textAlign: 'left',
  title: 'Medium length hero headline goes here'
};

// ----------------------------------------------------- //

// Story
export const HeroHeader5: StoryObj<typeof HeroLayout3> = {
  render: ( args: THeroLayout3Props ) => (
    <HeroLayout3 { ...args } />
),
  args: {
    ...defaultArgs,
    image: {
      alt: '',
      src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  },
  parameters: excludedParams([
    'isCondensed',
    'textAlign',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader7: StoryObj<typeof HeroLayout3> = {
  render: ( args: THeroLayout3Props ) => (
    <HeroLayout3 { ...args } />
),
  args: {
    ...defaultArgs,
    coverImageUri: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'isCondensed',
    'textAlign',
    'image',
    'background'
  ])
};

export const HeroHeader30: StoryObj<typeof HeroLayout3> = {
  render: ( args: THeroLayout3Props ) => (
    <HeroLayout3 { ...args } />
),
  args: {
    ...HeroHeader5.args,
    textAlign: 'center'
  },
  parameters: excludedParams([
    'isCondensed',
    'textAlign',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader33: StoryObj<typeof HeroLayout3> = {
  render: ( args: THeroLayout3Props ) => (
    <HeroLayout3 { ...args } />
),
  args: {
    ...HeroHeader7.args,
    textAlign: 'center'
  },
  parameters: excludedParams([
    'isCondensed',
    'textAlign',
    'image',
    'background'
  ])
};

export const HeroHeader83: StoryObj<typeof HeroLayout3> = {
  render: ( args: THeroLayout3Props ) => (
    <HeroLayout3 { ...args } />
),
  args: {
    ...HeroHeader30.args
  },
  parameters: excludedParams([
    'isCondensed',
    'textAlign',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader88: StoryObj<typeof HeroLayout3> = {
  render: ( args: THeroLayout3Props ) => (
    <HeroLayout3 { ...args } />
),
  args: {
    ...HeroHeader5.args,
    isCondensed: true
  },
  parameters: excludedParams([
    'isCondensed',
    'textAlign',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader90: StoryObj<typeof HeroLayout3> = {
  render: ( args: THeroLayout3Props ) => (
    <HeroLayout3 { ...args } />
),
  args: {
    ...HeroHeader7.args,
    isCondensed: true
  },
  parameters: excludedParams([
    'isCondensed',
    'textAlign',
    'image',
    'background'
  ])
};

export const HeroHeader98: StoryObj<typeof HeroLayout3> = {
  render: ( args: THeroLayout3Props ) => (
    <HeroLayout3 { ...args } />
),
  args: {
    ...HeroHeader88.args,
    textAlign: 'center'
  },
  parameters: excludedParams([
    'isCondensed',
    'textAlign',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader100: StoryObj<typeof HeroLayout3> = {
  render: ( args: THeroLayout3Props ) => (
    <HeroLayout3 { ...args } />
),
  args: {
    ...HeroHeader90.args,
    textAlign: 'center'
  },
  parameters: excludedParams([
    'isCondensed',
    'textAlign',
    'image',
    'background'
  ])
};

export const Background: StoryObj<typeof HeroLayout3> = {
  render: ( args: THeroLayout3Props ) => (
    <HeroLayout3 { ...args } />
),
  args: {
    ...defaultArgs,
    background: <>Anything can render here</>
  },
  parameters: excludedParams([
    'isCondensed',
    'textAlign',
    'coverImageUri',
    'videoUri',
    'image'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof HeroLayout3> = {
  component: HeroLayout3,
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
    isCondensed: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
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
