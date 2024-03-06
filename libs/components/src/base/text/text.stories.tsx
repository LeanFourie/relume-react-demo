// Components
import { Text } from './text';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TTextProps } from './text.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof Text> = {
  render: ( args: TTextProps ) => (
    <Text { ...args }>
      Relume Demo Text
    </Text>
  ),
  args: {
    className: '',
    fontStyle: 'unset',
    fontWeight: 'regular',
    isEditable: false,
    isSkeleton: false,
    renderAs: undefined,
    textAlign: 'left',
    textTransform: 'unset',
    variant: 'heading extra-large'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Text> = {
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    fontStyle: {
      table: { defaultValue: { summary: 'unset' } },
      defaultValue: 'unset'
    },
    fontWeight: {
      table: { defaultValue: { summary: 'regular' } },
      defaultValue: 'regular'
    },
    isEditable: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    isSkeleton: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    renderAs: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    textTransform: {
      table: { defaultValue: { summary: 'unset' } },
      defaultValue: 'unset'
    },
    textAlign: {
      table: { defaultValue: { summary: 'left' } },
      defaultValue: 'left',
      options: [
        'left',
        'center',
        'right'
      ]
    },
    variant: {
      table: { defaultValue: { summary: 'text regular' } },
      defaultValue: 'text regular',
      options: [
        'heading extra-large',
        'heading large',
        'heading medium',
        'heading regular',
        'heading small',
        'heading tiny',
        'text extra-large',
        'text large',
        'text medium',
        'text regular',
        'text small',
        'text tiny'
      ],
    }
  }
};

export default meta;
