// Packages & Modules
import {
  colorOptions,
  excludedParams,
  shadeOptions,
  sizeOptions,
  uiVariantOptions
} from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { Button } from './button';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TButtonProps } from './button.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: Omit<
  TButtonProps,
  'type' | 'onClick'
> = {
  accessibleLabel: '',
  className: '',
  color: 'primary',
  hostClassName: '',
  isDisabled: false,
  isFullWidth: false,
  isLoading:  false,
  isSelected: false,
  isSkeleton: false,
  shade: 'dark',
  size: 'md',
  variant: 'filled'
};

// ----------------------------------------------------- //

// Story
export const Text: StoryObj<typeof Button> = {
  render: ( args: TButtonProps ) => (
    <Button { ...args } />
  ),
  args: {
    ...defaultArgs,
    type: 'text',
    label: 'Button',
    leadingIcon: {
      name: 'home',
      type: 'text'
    },
    trailingIcon: {
      name: 'arrow_forward',
      type: 'text'
    }
  },
  parameters: excludedParams([ 'icon' ])
};

export const Icon: StoryObj<typeof Button> = {
  render: ( args: TButtonProps ) => (
    <Button { ...args } />
  ),
  args: {
    ...defaultArgs,
    type: 'icon',
    icon: {
      name: 'home',
      type: 'text'
    }
  },
  parameters: excludedParams([
    'label',
    'leadingIcon',
    'trailingIcon'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    accessibleLabel: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
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
    onClick: { action: 'click' },
    hostClassName: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isDisabled: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    isFullWidth: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    isLoading: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    isSelected: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    isSkeleton: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
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
    type: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    variant: {
      table: { defaultValue: { summary: 'filled' } },
      defaultValue: 'filled',
      options: uiVariantOptions
    }
  }
};

export default meta;
