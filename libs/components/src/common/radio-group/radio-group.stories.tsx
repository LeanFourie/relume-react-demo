// Components
import { RadioGroup } from './radio-group';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TRadioGroupProps } from './radio-group.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof RadioGroup> = {
  render: ( args: TRadioGroupProps ) => (
    <RadioGroup { ...args } />
  ),
  args: {
    name: 'radio-group',
    options: [ ...Array( 6 )].map(( _, index: number ) => ({
        label: `Option ${ index + 1 }`
    })),
    isDisabled: false,
    isSkeleton: false,
    size: 'md',
    title: 'Title'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    name: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    onChange: { actions: 'change' },
    options: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isDisabled: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    isSkeleton: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    size: {
      table: { defaultValue: { summary: 'md' } },
      defaultValue: 'md'
    },
    title: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
