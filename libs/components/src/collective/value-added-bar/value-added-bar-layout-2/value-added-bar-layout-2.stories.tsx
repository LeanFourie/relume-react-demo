// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { ValueAddedBarLayout2 } from './value-added-bar-layout-2';

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TValueAddedBarLayout2Props } from './value-added-bar-layout-2.definitions';

// Story
export const Banners2: StoryObj<typeof ValueAddedBarLayout2> = {
  render: ( args: TValueAddedBarLayout2Props ) => (
    <ValueAddedBarLayout2 { ...args } />
  ),
  args: {
    icon: {
      name: 'home',
      type: 'text'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title: 'Medium length banner heading goes here',
    actions: [
      {
        accessibleLabel: '',
        label: 'Button',
        onClick: () => {},
        type: 'text'
      }
    ],
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Banners3: StoryObj<typeof ValueAddedBarLayout2> = {
  render: ( args: TValueAddedBarLayout2Props ) => (
    <ValueAddedBarLayout2 { ...args } />
  ),
  args: {
    icon: {
      name: 'home',
      type: 'text'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title: 'Medium length banner heading goes here',
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
    ],
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Banners8: StoryObj<typeof ValueAddedBarLayout2> = {
  render: ( args: TValueAddedBarLayout2Props ) => (
    <ValueAddedBarLayout2 { ...args } />
  ),
  args: {
    icon: {
      name: 'home',
      type: 'text'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title: 'Medium length banner heading goes here',
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
    ],
    isCondensed: false
  },
  parameters: excludedParams([ 'isCondensed' ])
};

// Meta
const meta: Meta<typeof ValueAddedBarLayout2> = {
  component: ValueAddedBarLayout2,
  tags: ['autodocs'],
  argTypes: {
    actions: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
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
    title: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
