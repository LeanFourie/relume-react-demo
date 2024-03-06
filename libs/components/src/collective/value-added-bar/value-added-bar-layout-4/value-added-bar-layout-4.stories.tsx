// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { ValueAddedBarLayout4 } from './value-added-bar-layout-4';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TValueAddedBarLayout4Props } from './value-added-bar-layout-4.definitions';

// ----------------------------------------------------- //

// Story
export const Banners5: StoryObj<typeof ValueAddedBarLayout4> = {
  render: ( args: TValueAddedBarLayout4Props ) => (
    <ValueAddedBarLayout4 { ...args } />
  ),
  args: {
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: {
      url: '#',
      label: 'Read more',
      openInNewTab: false
    },
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Banners10: StoryObj<typeof ValueAddedBarLayout4> = {
  render: ( args: TValueAddedBarLayout4Props ) => (
    <ValueAddedBarLayout4 { ...args } />
  ),
  args: {
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: {
      url: '#',
      label: 'Read more',
      openInNewTab: false
    },
    isCondensed: false
  },
  parameters: excludedParams([ 'isCondensed' ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof ValueAddedBarLayout4> = {
  component: ValueAddedBarLayout4,
  tags: ['autodocs'],
  argTypes: {
    link: {
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
    }
  }
};

export default meta;
