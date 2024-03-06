// Components
import {
  Link,
  Text
} from '../../../';
import { HeroLayout10 } from './hero-layout-10';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TLinkProps } from '../../../';
import type { THeroLayout10Props } from './hero-layout-10.definitions';

// ----------------------------------------------------- //

// Variables
const linkProps: TLinkProps = {
  href: '#',
  label: 'Terms and Conditions',
  type: 'a'
};

// ----------------------------------------------------- //

// Story
export const HeroHeader24: StoryObj<typeof HeroLayout10> = {
  render: ( args: THeroLayout10Props ) => (
    <HeroLayout10 { ...args } />
),
  args: {
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
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    title: 'Medium length hero headline goes here'
  }
};

export const HeroHeader25: StoryObj<typeof HeroLayout10> = {
  render: ( args: THeroLayout10Props ) => (
    <HeroLayout10 { ...args } />
),
  args: {
    ...HeroHeader24.args,
    action: {
      accessibleLabel: '',
      label: 'Search',
      onClick: () => {},
      type: 'text'
    },
    input: {
      hideLabel: true,
      placeholder: 'Search...',
      type: 'text',
      value: ''
    },
    message: <></>
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof HeroLayout10> = {
  component: HeroLayout10,
  tags: ['autodocs'],
  argTypes: {
    action: {
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
    }
  }
};

export default meta;
