// Components
import { Tab } from './tab';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TTabProps } from './tab.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof Tab> = {
  render: ( args: TTabProps ) => (
    <Tab { ...args } />
  ),
  args: {
    label: 'Tab label',
    badge: 'badge',
    icon: {
      name: 'home',
      type: 'text'
    },
    isDisabled: false,
    isSelected: false,
    isSkeleton: false,
    state: 'default'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Tab> = {
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    label: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    onClick: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    badge: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    icon: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isDisabled: {
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
    state: {
      table: { defaultValue: { summary: 'default' } },
      defaultValue: 'default'
    }
  }
};

export default meta;
