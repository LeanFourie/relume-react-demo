// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { ValueAddedBarLayout3 } from './value-added-bar-layout-3';

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TValueAddedBarLayout3Props } from './value-added-bar-layout-3.definitions';

// Story
export const Banners4: StoryObj<typeof ValueAddedBarLayout3> = {
  render: ( args: TValueAddedBarLayout3Props ) => (
    <ValueAddedBarLayout3 { ...args } />
  ),
  args: {
    icon: {
      name: 'home',
      type: 'text'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title: 'Medium length banner heading goes here',
    socialLinks: [
      {
        icon: '/icons/icon-facebook.svg',
        name: 'Facebook',
        url: '#',
        type: 'facebook'
      },
      {
        icon: '/icons/icon-instagram.svg',
        name: 'Instagram',
        url: '#',
        type: 'instagram'
      },
      {
        icon: '/icons/icon-x.svg',
        name: 'X',
        url: '#',
        type: 'x'
      }
    ],
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Banners9: StoryObj<typeof ValueAddedBarLayout3> = {
  render: ( args: TValueAddedBarLayout3Props ) => (
    <ValueAddedBarLayout3 { ...args } />
  ),
  args: {
    icon: {
      name: 'home',
      type: 'text'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title: 'Medium length banner heading goes here',
    socialLinks: [
      {
        icon: '/icons/icon-facebook.svg',
        name: 'Facebook',
        url: '#',
        type: 'facebook'
      },
      {
        icon: '/icons/icon-instagram.svg',
        name: 'Instagram',
        url: '#',
        type: 'instagram'
      },
      {
        icon: '/icons/icon-x.svg',
        name: 'X',
        url: '#',
        type: 'x'
      }
    ],
    isCondensed: false
  },
  parameters: excludedParams([ 'isCondensed' ])
};

// Meta
const meta: Meta<typeof ValueAddedBarLayout3> = {
  component: ValueAddedBarLayout3,
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
    socialLinks: {
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
