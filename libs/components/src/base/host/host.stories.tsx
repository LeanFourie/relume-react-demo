// Components
import { Host } from './host';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { THostProps } from './host.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof Host> = {
  render: ( args: THostProps ) => (
    <Host { ...args }>
      Host
    </Host>
  ),
  args: {
    className: '',
    isDisabled: false,
    isFullWidth: false,
    isLoading: false,
    isSkeleton: false,
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Host> = {
  component: Host,
  tags: ['autodocs'],
  argTypes: {
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isDisabled: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isFullWidth: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isLoading: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isSkeleton: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
