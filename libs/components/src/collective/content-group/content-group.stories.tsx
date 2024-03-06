// Packages & Modules
import {
  excludedParams,
  stackOptions
} from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import {
  Link,
  Text
} from '../../';
import { ContentGroup } from './content-group';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TLinkProps } from '../../';
import type { TContentGroupProps } from './content-group.definitions';

// ----------------------------------------------------- //

// Variables
const linkProps: TLinkProps = {
  href: '#',
  label: 'Terms and Conditions',
  type: 'a'
};

const defaultArgs: Omit<
  TContentGroupProps,
  'image' | 'video'
> = {
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  stackDirection: 'vertical',
  tagline: 'Tagline',
  textAlign: 'left',
  title: 'Medium length hero headline goes here'
};

// ----------------------------------------------------- //

// Story
export const Default: StoryObj<typeof ContentGroup> = {
  render: ( args: TContentGroupProps ) => (
    <ContentGroup { ...args } />
  ),
  args: { ...defaultArgs },
  parameters: excludedParams([
    'actions',
    'type',
    'action',
    'input',
    'message',
    'onSubmit'
  ])
};

export const Actions: StoryObj<typeof ContentGroup> = {
  render: ( args: TContentGroupProps ) => (
    <ContentGroup { ...args } />
  ),
  args: {
    ...defaultArgs,
    type: 'actions',
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
    ]
  },
  parameters: excludedParams([
    'action',
    'input',
    'message',
    'onSubmit'
  ])
};

export const Form: StoryObj<typeof ContentGroup> = {
  render: ( args: TContentGroupProps ) => (
    <ContentGroup { ...args } />
  ),
  args: {
    ...defaultArgs,
    type: 'form',
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
    onSubmit: () => {}
  },
  parameters: excludedParams([ 'actions' ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof ContentGroup> = {
  component: ContentGroup,
  tags: ['autodocs'],
  argTypes: {
    action: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    actions: {
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
    stackDirection: {
      table: { defaultValue: { summary: 'horizontal' } },
      defaultValue: 'horizontal',
      options: stackOptions
    },
    tagline: {
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
    type: {
      table: {
        defaultValue: { summary: undefined },
        disable: true
      },
      defaultValue: undefined,
      options: [
        undefined,
        'actions',
        'form'
      ]
    }
  }
};

export default meta;
