// Packages & Modules
import { stateOptions } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { HelperText } from './helper-text';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { THelperTextProps } from './helper-text.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof HelperText> = {
  render: ( args: THelperTextProps ) => (
    <HelperText { ...args }>
      Relume Demo Helper Text
    </HelperText>
  ),
  args: {
    className: '',
    icon: {
      name: 'error',
      type: 'text'
    },
    isSkeleton: false,
    state: 'default'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof HelperText> = {
  component: HelperText,
  tags: ['autodocs'],
  argTypes: {
    children: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    icon: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isSkeleton: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    state: {
      table: { defaultValue: { summary: 'default' } },
      defaultValue: 'default',
      options: stateOptions
    }
  }
};

export default meta;
