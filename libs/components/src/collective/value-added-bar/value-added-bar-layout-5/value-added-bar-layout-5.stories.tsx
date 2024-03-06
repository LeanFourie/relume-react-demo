// Components
import { ValueAddedBarLayout5 } from './value-added-bar-layout-5';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TValueAddedBarLayout5Props } from './value-added-bar-layout-5.definitions';

// ----------------------------------------------------- //

// Story
export const Banners7: StoryObj<typeof ValueAddedBarLayout5> = {
  render: ( args: TValueAddedBarLayout5Props ) => (
    <ValueAddedBarLayout5 { ...args } />
  ),
  args: {
    icon: {
      name: 'home',
      type: 'text'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title: 'Medium length banner heading goes here',
    action: {
      accessibleLabel: '',
      label: 'Button',
      onClick: () => {},
      type: 'text'
    }
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof ValueAddedBarLayout5> = {
  component: ValueAddedBarLayout5,
  tags: ['autodocs'],
  argTypes: {
    action: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    icon: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
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
