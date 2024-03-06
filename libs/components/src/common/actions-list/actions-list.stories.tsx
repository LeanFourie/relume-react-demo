// Components
import { ActionsList } from './actions-list';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TActionsListProps } from './actions-list.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof ActionsList> = {
  render: ( args: TActionsListProps ) => (
    <ActionsList { ...args } />
  ),
  args: {
    className: '',
    options: [ ...Array( 3 ) ].map(( _, index: number ) => ({
      accessibleLabel: '',
      label: `Option ${ index + 1 }`,
      onClick: () => {},
      icon: {
        name: 'home',
        type: 'text'
      },
      isDisabled: false
    })),
    isSkeleton: false,
    showArrow: false
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof ActionsList> = {
  component: ActionsList,
  tags: ['autodocs'],
  argTypes: {
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    options: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isSkeleton: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    showArrow: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    }
  }
};

export default meta;
