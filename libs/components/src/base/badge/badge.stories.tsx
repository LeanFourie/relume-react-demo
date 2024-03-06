// Packages & Modules
import {
  colorOptions,
  shadeOptions,
  sizeOptions,
  uiVariantOptions
} from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { Badge } from './badge';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TBadgeProps } from './badge.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof Badge> = {
  render: ( args: TBadgeProps ) => (
    <Badge { ...args } />
  ),
  args: {
    className: '',
    color: 'primary',
    hostClassName: '',
    icon: {
      name: 'arrow_forward',
      type: 'text'
    },
    isSkeleton: false,
    label: 'Badge',
    shade: 'dark',
    size: 'md',
    variant: 'filled'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    color: {
      table: { defaultValue: { summary: 'primary' } },
      defaultValue: 'primary',
      options: colorOptions.filter( color => (
        color !== 'tertiary' &&
        !color.includes( 'support' )
      ))
    },
    hostClassName: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    icon: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isSkeleton: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    label: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    shade: {
      table: { defaultValue: { summary: 'dark' } },
      defaultValue: 'dark',
      options: shadeOptions
    },
    size: {
      table: { defaultValue: { summary: 'md' } },
      defaultValue: 'md',
      options: sizeOptions
    },
    variant: {
      table: { defaultValue: { summary: 'filled' } },
      defaultValue: 'filled',
      options: uiVariantOptions
    }
  }
};

export default meta;
