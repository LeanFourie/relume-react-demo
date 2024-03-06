// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { ValueAddedBarLayout6 } from './value-added-bar-layout-6';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TValueAddedBarLayout6Props } from './value-added-bar-layout-6.definitions';

// ----------------------------------------------------- //

// Story
export const Banners11: StoryObj<typeof ValueAddedBarLayout6> = {
  render: ( args: TValueAddedBarLayout6Props ) => (
    <div style={{ padding: '70vh 0' }}>
      <ValueAddedBarLayout6 { ...args } />
    </div>
  ),
  args: {
    text: 'Relume Demo',
    autoScroll: true,
    scrollDirection: 'default'
  },
  parameters: excludedParams([
    'autoScroll',
    'scrollDirection'
  ])
};

export const Banners12: StoryObj<typeof ValueAddedBarLayout6> = {
  render: ( args: TValueAddedBarLayout6Props ) => (
    <div style={{ padding: '70vh 0' }}>
      <ValueAddedBarLayout6 { ...args } />
    </div>
  ),
  args: {
    text: 'Relume Demo',
    autoScroll: true,
    scrollDirection: 'reverse'
  },
  parameters: excludedParams([
    'autoScroll',
    'scrollDirection'
  ])
};

export const Banners14: StoryObj<typeof ValueAddedBarLayout6> = {
  render: ( args: TValueAddedBarLayout6Props ) => (
    <div style={{ padding: '70vh 0' }}>
      <ValueAddedBarLayout6 { ...args } />
    </div>
  ),
  args: {
    text: 'Relume Demo',
    autoScroll: false,
    scrollDirection: 'default'
  },
  parameters: excludedParams([ 'autoScroll' ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof ValueAddedBarLayout6> = {
  component: ValueAddedBarLayout6,
  tags: ['autodocs'],
  argTypes: {
    autoScroll: {
      table: { defaultValue: { summary: true } },
      defaultValue: true
    },
    scrollDirection: {
      table: { defaultValue: { summary: 'default' } },
      defaultValue: 'default'
    },
    text: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    textRepeat: {
      table: { defaultValue: { summary: 5 } },
      defaultValue: 5
    }
  }
};

export default meta;
