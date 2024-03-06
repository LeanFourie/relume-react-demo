// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import {
  Link,
  Text
} from '../../../';
import { HeroLayout6 } from './hero-layout-6';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TLinkProps } from '../../../';
import type { THeroLayout6Props } from './hero-layout-6.definitions';

// ----------------------------------------------------- //

// Variables
const linkProps: TLinkProps = {
  href: '#',
  label: 'Terms and Conditions',
  type: 'a'
};

const defaultArgs: Omit<
  THeroLayout6Props,
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
  title: 'Medium length hero headline goes here'
};

// ----------------------------------------------------- //

// Story
export const HeroHeader10: StoryObj<typeof HeroLayout6> = {
  render: ( args: THeroLayout6Props ) => (
    <HeroLayout6 { ...args } />
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

export const HeroHeader12: StoryObj<typeof HeroLayout6> = {
  render: ( args: THeroLayout6Props ) => (
    <HeroLayout6 { ...args } />
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

export const HeroHeader14: StoryObj<typeof HeroLayout6> = {
  render: ( args: THeroLayout6Props ) => (
    <HeroLayout6 { ...args } />
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
const meta: Meta<typeof HeroLayout6> = {
  component: HeroLayout6,
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
