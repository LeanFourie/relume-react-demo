// Packages & Modules
import {
  colorOptions,
  excludedParams
} from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { Link } from './link';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TLinkProps } from './link.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: Omit< TLinkProps, 'type' > = {
  className: '',
  hostClassName: '',
  icon: undefined,
  isDisabled: false,
  isSkeleton: false,
  label: 'Link',
  color: 'primary'
};

// ----------------------------------------------------- //

// Story
export const A: StoryObj<typeof Link> = {
  render: ( args: TLinkProps ) => (
    <Link { ...args } />
  ),
  args: {
    ...defaultArgs,
    type: 'a',
    href: 'https://google.com',
    target: '_blank'
  },
  parameters: excludedParams([ 'onClick' ])
};

export const Button: StoryObj<typeof Link> = {
  render: ( args: TLinkProps ) => (
    <Link { ...args } />
  ),
  args: {
    ...defaultArgs,
    type: 'button'
  },
  parameters: excludedParams([
    'href',
    'target'
  ])
};

export const Span: StoryObj<typeof Link> = {
  render: ( args: TLinkProps ) => (
    <Link { ...args } />
  ),
  args: {
    ...defaultArgs,
    type: 'span'
  },
  parameters: excludedParams([
    'href',
    'target'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Link> = {
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    hostClassName: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    color: {
      table: { defaultValue: { summary: 'primary' } },
      defaultValue: 'primary',
      options: colorOptions.filter( color => (
        color !== 'secondary' &&
        color !== 'tertiary' &&
        color !== 'info' &&
        color !== 'success' &&
        color !== 'warning' &&
        color !== 'danger' &&
        !color.includes( 'support' )
      ))
    },
    icon: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined,
      options: [
        undefined,
        'arrow',
        'new tab'
      ]
    },
    isDisabled: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    isSkeleton: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    label: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    onClick: { action: 'click' },
    type: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined,
      control: false
    }
  }
};

export default meta;
