// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import {
  Link,
  Text
} from '../../../';
import { HeroLayout4 } from './hero-layout-4';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TLinkProps } from '../../../';
import type { THeroLayout4Props } from './hero-layout-4.definitions';

// ----------------------------------------------------- //

// Variables
const linkProps: TLinkProps = {
  href: '#',
  label: 'Terms and Conditions',
  type: 'a'
};

const defaultArgs: Omit<
  THeroLayout4Props,
  'image' | 'video'
> = {
  action: {
    accessibleLabel: '',
    label: 'Sign up',
    onClick: () => {},
    type: 'text'
  },
  isCondensed: false,
  input: {
    hideLabel: true,
    placeholder: 'Enter your email',
    type: 'text',
    value: ''
  },
  message: (
    <Text variant={ 'text tiny' }>
      By clicking Sign Up you're confirming that you agree with our <Link { ...linkProps } />.
    </Text>
  ),
  onSubmit: () => {},
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  textAlign: 'left',
  title: 'Medium length hero headline goes here'
};

// ----------------------------------------------------- //

// Story
export const HeroHeader6: StoryObj<typeof HeroLayout4> = {
  render: ( args: THeroLayout4Props ) => (
    <HeroLayout4 { ...args } />
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

export const HeroHeader8: StoryObj<typeof HeroLayout4> = {
  render: ( args: THeroLayout4Props ) => (
    <HeroLayout4 { ...args } />
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

export const HeroHeader31: StoryObj<typeof HeroLayout4> = {
  render: ( args: THeroLayout4Props ) => (
    <HeroLayout4 { ...args } />
),
  args: {
    ...HeroHeader6.args,
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

export const HeroHeader32: StoryObj<typeof HeroLayout4> = {
  render: ( args: THeroLayout4Props ) => (
    <HeroLayout4 { ...args } />
),
  args: {
    ...HeroHeader31.args,
    action: {
      accessibleLabel: '',
      label: 'Search',
      onClick: () => {},
      type: 'text'
    },
    isCondensed: false,
    input: {
      hideLabel: true,
      placeholder: 'Search...',
      type: 'text',
      value: ''
    },
    message: <></>
  },
  parameters: excludedParams([
    'isCondensed',
    'textAlign',
    'coverImageUri',
    'videoUri',
    'background'
  ])
};

export const HeroHeader34: StoryObj<typeof HeroLayout4> = {
  render: ( args: THeroLayout4Props ) => (
    <HeroLayout4 { ...args } />
),
  args: {
    ...HeroHeader8.args,
    textAlign: 'center'
  },
  parameters: excludedParams([
    'isCondensed',
    'textAlign',
    'image',
    'background'
  ])
};

export const HeroHeader35: StoryObj<typeof HeroLayout4> = {
  render: ( args: THeroLayout4Props ) => (
    <HeroLayout4 { ...args } />
),
  args: {
    ...HeroHeader34.args,
    action: {
      accessibleLabel: '',
      label: 'Search',
      onClick: () => {},
      type: 'text'
    },
    isCondensed: false,
    input: {
      hideLabel: true,
      placeholder: 'Search...',
      type: 'text',
      value: ''
    },
    message: <></>
  },
  parameters: excludedParams([
    'isCondensed',
    'textAlign',
    'image',
    'background'
  ])
};

export const HeroHeader89: StoryObj<typeof HeroLayout4> = {
  render: ( args: THeroLayout4Props ) => (
    <HeroLayout4 { ...args } />
),
  args: {
    ...HeroHeader6.args,
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

export const HeroHeader91: StoryObj<typeof HeroLayout4> = {
  render: ( args: THeroLayout4Props ) => (
    <HeroLayout4 { ...args } />
),
  args: {
    ...HeroHeader8.args,
    isCondensed: true
  },
  parameters: excludedParams([
    'isCondensed',
    'textAlign',
    'image',
    'background'
  ])
};

export const HeroHeader99: StoryObj<typeof HeroLayout4> = {
  render: ( args: THeroLayout4Props ) => (
    <HeroLayout4 { ...args } />
),
  args: {
    ...HeroHeader89.args,
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

export const HeroHeader101: StoryObj<typeof HeroLayout4> = {
  render: ( args: THeroLayout4Props ) => (
    <HeroLayout4 { ...args } />
),
  args: {
    ...HeroHeader91.args,
    textAlign: 'center'
  },
  parameters: excludedParams([
    'isCondensed',
    'textAlign',
    'image',
    'background'
  ])
};

export const Background: StoryObj<typeof HeroLayout4> = {
  render: ( args: THeroLayout4Props ) => (
    <HeroLayout4 { ...args } />
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
const meta: Meta<typeof HeroLayout4> = {
  component: HeroLayout4,
  tags: ['autodocs'],
  argTypes: {
    action: {
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
    input: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    message: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    onSubmit: { action: 'submit' },
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
