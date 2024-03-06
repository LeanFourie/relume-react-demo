// Components
import { ActionsListItem } from './actions-list-item';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TActionsListItemProps } from './actions-list-item.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof ActionsListItem> = {
  render: ( args: TActionsListItemProps ) => (
    <ActionsListItem { ...args } />
  ),
  args: {
    accessibleLabel: '',
    label: 'Actions List Item',
    icon: {
      name: 'home',
      type: 'text'
    },
    isDisabled: false,
    isSkeleton: false,
    showArrow: false
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof ActionsListItem> = {
  component: ActionsListItem,
  tags: ['autodocs'],
  argTypes: {
    accessibleLabel: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    onClick: { action: 'clicked' },
    label: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    icon: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isDisabled: {
      table: { defaultValue: { summary: false } },
      defaultValue: undefined
    },
    isSkeleton: {
      table: { defaultValue: { summary: false } },
      defaultValue: undefined
    },
    showArrow: {
      table: { defaultValue: { summary: false } },
      defaultValue: undefined
    }
  }
};

export default meta;
