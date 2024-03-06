// Packages & Modules
import {
  colorOptions,
  shadeOptions,
  sizeOptions
} from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { Loader } from './loader';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TLoaderProps } from './loader.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: Omit< TLoaderProps, 'type' > = {
  className: '',
  color: 'primary',
  shade: 'dark',
  size: 'md'
};

// ----------------------------------------------------- //

// Story
export const Dots: StoryObj<typeof Loader> = {
  render: ( args: TLoaderProps ) => (
    <Loader { ...args } />
  ),
  args: {
    ...defaultArgs,
    type: 'dots'
  }
};

export const Circle: StoryObj<typeof Loader> = {
  render: ( args: TLoaderProps ) => (
    <Loader { ...args } />
  ),
  args: {
    ...defaultArgs,
    type: 'circle'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Loader> = {
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    color: {
      table: { defaultValue: { summary: 'primary' } },
      defaultValue: 'primary',
      options: colorOptions
    },
    size: {
      table: { defaultValue: { summary: 'dark' } },
      defaultValue: 'dark',
      options: sizeOptions
    },
    shade: {
      table: { defaultValue: { summary: 'md' } },
      defaultValue: 'md',
      options: shadeOptions
    },
    type: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined,
      control: false
    }
  }
};

export default meta;
