// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Packages & Modules
import { stackOptions } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import {
  Link,
  Text
} from '../../../';
import { HeroLayout8 } from './hero-layout-8';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TLinkProps } from '../../../';
import type { THeroLayout8Props } from './hero-layout-8.definitions';

// ----------------------------------------------------- //

// Variables
const linkProps: TLinkProps = {
  href: '#',
  label: 'Terms and Conditions',
  type: 'a'
}

const defaultArgs: Omit<
  THeroLayout8Props,
  'image' | 'video'
> = {
  action: {
    accessibleLabel: '',
    label: 'Sign up',
    onClick: () => {},
    type: 'text'
  },
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
  textStackDirection: 'horizontal',
  title: 'Medium length hero headline goes here'
};

// ----------------------------------------------------- //

// Story
export const HeroHeader16: StoryObj<typeof HeroLayout8> = {
  render: ( args: THeroLayout8Props ) => (
    <HeroLayout8 { ...args } />
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

export const HeroHeader18: StoryObj<typeof HeroLayout8> = {
  render: ( args: THeroLayout8Props ) => (
    <HeroLayout8 { ...args } />
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

export const HeroHeader27: StoryObj<typeof HeroLayout8> = {
  render: ( args: THeroLayout8Props ) => (
    <HeroLayout8 { ...args } />
),
  args: {
    ...HeroHeader16.args,
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

export const HeroHeader29: StoryObj<typeof HeroLayout8> = {
  render: ( args: THeroLayout8Props ) => (
    <HeroLayout8 { ...args } />
),
  args: {
    ...HeroHeader18.args,
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

export const HeroHeader73: StoryObj<typeof HeroLayout8> = {
  render: ( args: THeroLayout8Props ) => (
    <HeroLayout8 { ...args } />
),
  args: {
    ...HeroHeader27.args,
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

export const HeroHeader74: StoryObj<typeof HeroLayout8> = {
  render: ( args: THeroLayout8Props ) => (
    <HeroLayout8 { ...args } />
),
  args: {
    ...HeroHeader29.args,
    textAlign: 'left'
  },
  parameters: excludedParams([
    'textStackDirection',
    'textAlign',
    'image',
    'background'
  ])
};

export const Background: StoryObj<typeof HeroLayout8> = {
  render: ( args: THeroLayout8Props ) => (
    <HeroLayout8 { ...args } />
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
const meta: Meta<typeof HeroLayout8> = {
  component: HeroLayout8,
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
