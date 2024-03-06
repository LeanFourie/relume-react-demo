// Components
import {
  Link,
  Text
} from '../../../';
import { HeroLayout16 } from './hero-layout-16';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TLinkProps } from '../../../';
import type { THeroLayout16Props } from './hero-layout-16.definitions';

// ----------------------------------------------------- //

// Variables
const linkProps: TLinkProps = {
  href: '#',
  label: 'Terms and Conditions',
  type: 'a'
};

// ----------------------------------------------------- //

// Story
export const HeroHeader97: StoryObj<typeof HeroLayout16> = {
  render: ( args: THeroLayout16Props ) => (
    <HeroLayout16 { ...args } />
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
    onSubmit: () => {},
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    title: 'Medium length hero headline goes here'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof HeroLayout16> = {
  component: HeroLayout16,
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
