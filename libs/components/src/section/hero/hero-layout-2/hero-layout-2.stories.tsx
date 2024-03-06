// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import {
  Link,
  Text
} from '../../../';
import { HeroLayout2 } from './hero-layout-2';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TLinkProps } from '../../../';
import type { THeroLayout2Props } from './hero-layout-2.definitions';

// ----------------------------------------------------- //

// Variables
const linkProps: TLinkProps = {
  href: '#',
  label: 'Terms and Conditions',
  type: 'a'
};

const defaultArgs: Omit<
  THeroLayout2Props,
  'image' | 'video'
> = {
  action: {
    accessibleLabel: '',
    label: 'Sign up',
    onClick: () => {},
    type: 'text'
  },
  isCondensed: true,
  isContained: false,
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
  order: 'default',
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  title: 'Medium length hero headline goes here'
};

// ----------------------------------------------------- //

// Story
export const HeroHeader2: StoryObj<typeof HeroLayout2> = {
  render: ( args: THeroLayout2Props ) => (
    <HeroLayout2 { ...args } />
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

export const HeroHeader4: StoryObj<typeof HeroLayout2> = {
  render: ( args: THeroLayout2Props ) => (
    <HeroLayout2 { ...args } />
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

export const HeroHeader20: StoryObj<typeof HeroLayout2> = {
  render: ( args: THeroLayout2Props ) => (
    <HeroLayout2 { ...args } />
),
  args: {
    ...HeroHeader2.args,
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

export const HeroHeader22: StoryObj<typeof HeroLayout2> = {
  render: ( args: THeroLayout2Props ) => (
    <HeroLayout2 { ...args } />
),
  args: {
    ...HeroHeader4.args,
    order: 'reverse'
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'image',
    'background'
  ])
};

export const HeroHeader38: StoryObj<typeof HeroLayout2> = {
  render: ( args: THeroLayout2Props ) => (
    <HeroLayout2 { ...args } />
),
  args: {
    ...HeroHeader2.args,
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

export const HeroHeader39: StoryObj<typeof HeroLayout2> = {
  render: ( args: THeroLayout2Props ) => (
    <HeroLayout2 { ...args } />
),
  args: {
    ...HeroHeader38.args,
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

export const HeroHeader42: StoryObj<typeof HeroLayout2> = {
  render: ( args: THeroLayout2Props ) => (
    <HeroLayout2 { ...args } />
),
  args: {
    ...HeroHeader4.args,
    isCondensed: false
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'image',
    'background'
  ])
};

export const HeroHeader43: StoryObj<typeof HeroLayout2> = {
  render: ( args: THeroLayout2Props ) => (
    <HeroLayout2 { ...args } />
),
  args: {
    ...HeroHeader42.args,
    order: 'reverse'
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'image',
    'background'
  ])
};

export const HeroHeader85: StoryObj<typeof HeroLayout2> = {
  render: ( args: THeroLayout2Props ) => (
    <HeroLayout2 { ...args } />
),
  args: {
    ...HeroHeader2.args,
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

export const HeroHeader87: StoryObj<typeof HeroLayout2> = {
  render: ( args: THeroLayout2Props ) => (
    <HeroLayout2 { ...args } />
),
  args: {
    ...HeroHeader4.args,
    isContained: true
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'image',
    'background'
  ])
};

export const HeroHeader93: StoryObj<typeof HeroLayout2> = {
  render: ( args: THeroLayout2Props ) => (
    <HeroLayout2 { ...args } />
),
  args: {
    ...HeroHeader85.args,
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

export const HeroHeader95: StoryObj<typeof HeroLayout2> = {
  render: ( args: THeroLayout2Props ) => (
    <HeroLayout2 { ...args } />
),
  args: {
    ...HeroHeader87.args,
    order: 'reverse'
  },
  parameters: excludedParams([
    'isCondensed',
    'isContained',
    'image',
    'background'
  ])
};

export const Background: StoryObj<typeof HeroLayout2> = {
  render: ( args: THeroLayout2Props ) => (
    <HeroLayout2 { ...args } />
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
const meta: Meta<typeof HeroLayout2> = {
  component: HeroLayout2,
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
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isContained: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
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
