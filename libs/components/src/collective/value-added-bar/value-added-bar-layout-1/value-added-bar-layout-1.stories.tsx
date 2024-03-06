// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { ValueAddedBarLayout1 } from './value-added-bar-layout-1';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TValueAddedBarLayout1Props } from './value-added-bar-layout-1.definitions';

// ----------------------------------------------------- //

// Story
export const Banners1: StoryObj<typeof ValueAddedBarLayout1> = {
  render: ( args: TValueAddedBarLayout1Props ) => (
    <ValueAddedBarLayout1 { ...args } />
  ),
  args: {
    icon: {
      name: 'home',
      type: 'text'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title: 'Medium length banner heading goes here',
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Banners6: StoryObj<typeof ValueAddedBarLayout1> = {
  render: ( args: TValueAddedBarLayout1Props ) => (
    <ValueAddedBarLayout1 { ...args } />
  ),
  args: {
    icon: {
      name: 'home',
      type: 'text'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title: 'Medium length banner heading goes here',
    isCondensed: false
  },
  parameters: excludedParams([ 'isCondensed' ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof ValueAddedBarLayout1> = {
  component: ValueAddedBarLayout1,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isCondensed: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    message: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    onSubmit: { action: 'clicked' },
    title: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
