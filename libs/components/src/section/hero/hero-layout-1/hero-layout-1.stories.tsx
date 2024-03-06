// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { HeroLayout1 } from './hero-layout-1';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { THeroLayout1Props } from './hero-layout-1.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: Omit<
  THeroLayout1Props,
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
  isCondensed: true,
  isContained: false,
  order: 'reverse',
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  title: 'Medium length hero headline goes here'
};

// ----------------------------------------------------- //

// Story
export const HeroHeader1: StoryObj<typeof HeroLayout1> = {
  render: ( args: THeroLayout1Props ) => (
    <HeroLayout1 { ...args } />
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
    'isContained',
    'order',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader3: StoryObj<typeof HeroLayout1> = {
  render: ( args: THeroLayout1Props ) => (
    <HeroLayout1 { ...args } />
),
  args: {
    ...defaultArgs,
    coverImageUri: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'image',
    'background'
  ])
};

export const HeroHeader19: StoryObj<typeof HeroLayout1> = {
  render: ( args: THeroLayout1Props ) => (
    <HeroLayout1 { ...args } />
),
  args: {
    ...HeroHeader1.args,
    order: 'reverse'
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'order',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader21: StoryObj<typeof HeroLayout1> = {
  render: ( args: THeroLayout1Props ) => (
    <HeroLayout1 { ...args } />
),
  args: {
    ...HeroHeader3.args,
    order: 'reverse'
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'image',
    'background'
  ])
};

export const HeroHeader36: StoryObj<typeof HeroLayout1> = {
  render: ( args: THeroLayout1Props ) => (
    <HeroLayout1 { ...args } />
),
  args: {
    ...HeroHeader1.args,
    isCondensed: false
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'order',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader37: StoryObj<typeof HeroLayout1> = {
  render: ( args: THeroLayout1Props ) => (
    <HeroLayout1 { ...args } />
),
  args: {
    ...HeroHeader36.args,
    order: 'reverse'
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'order',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader40: StoryObj<typeof HeroLayout1> = {
  render: ( args: THeroLayout1Props ) => (
    <HeroLayout1 { ...args } />
),
  args: {
    ...HeroHeader3.args,
    isCondensed: false
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'image',
    'background'
  ])
};

export const HeroHeader41: StoryObj<typeof HeroLayout1> = {
  render: ( args: THeroLayout1Props ) => (
    <HeroLayout1 { ...args } />
),
  args: {
    ...HeroHeader40.args,
    order: 'reverse'
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'image',
    'background'
  ])
};

export const HeroHeader81: StoryObj<typeof HeroLayout1> = {
  render: ( args: THeroLayout1Props ) => (
    <HeroLayout1 { ...args } />
),
  args: {
    ...HeroHeader36.args
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'order',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader84: StoryObj<typeof HeroLayout1> = {
  render: ( args: THeroLayout1Props ) => (
    <HeroLayout1 { ...args } />
),
  args: {
    ...HeroHeader1.args,
    isContained: true
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'order',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader86: StoryObj<typeof HeroLayout1> = {
  render: ( args: THeroLayout1Props ) => (
    <HeroLayout1 { ...args } />
),
  args: {
    ...HeroHeader3.args,
    isContained: true
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'image',
    'background'
  ])
};

export const HeroHeader92: StoryObj<typeof HeroLayout1> = {
  render: ( args: THeroLayout1Props ) => (
    <HeroLayout1 { ...args } />
),
  args: {
    ...HeroHeader84.args,
    order: 'reverse'
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'order',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader94: StoryObj<typeof HeroLayout1> = {
  render: ( args: THeroLayout1Props ) => (
    <HeroLayout1 { ...args } />
),
  args: {
    ...HeroHeader86.args,
    order: 'reverse'
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'image',
    'background'
  ])
};

export const Background: StoryObj<typeof HeroLayout1> = {
  render: ( args: THeroLayout1Props ) => (
    <HeroLayout1 { ...args } />
),
  args: {
    ...defaultArgs,
    background: <>Anything can render here</>
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'order',
    'coverImageUri',
    'videoUri',
    'image'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof HeroLayout1> = {
  component: HeroLayout1,
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
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isContained: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    order: {
      table: { defaultValue: { summary: 'default' } },
      defaultValue: 'default',
      options: [
        'default',
        'reverse'
      ]
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
