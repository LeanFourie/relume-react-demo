// Packages & Modules
import { sizeOptions } from '@relume-demo/utils';
import { useArgs } from '@storybook/preview-api';

// ----------------------------------------------------- //

// Components
import { Checkbox } from './checkbox';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TCheckboxProps } from './checkbox.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof Checkbox> = {
  render: ( args: TCheckboxProps ) => {
    // HOOKS
    const [
      { isChecked },
      updateArgs
    ] = useArgs();

    // METHODS
    const onChange = () => {
      updateArgs({ isChecked: !isChecked });
    }

    // HTML
    return (
      <Checkbox
        { ...args }
        onChange={ onChange }
        isChecked={ isChecked }
      />
    )
  },
  args: {
    className: '',
    isChecked: false,
    isDisabled: false,
    isSkeleton: false,
    label: 'Checkbox',
    name: 'checkbox',
    showLabel: false,
    size: 'md'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isChecked: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    isDisabled: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    isSkeleton: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    label: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    link: {
      control: false,
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    name: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    onChange: { action: 'change' },
    showLabel: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    size: {
      table: { defaultValue: { summary: 'md' } },
      defaultValue: 'md',
      options: sizeOptions
    }
  }
};

export default meta;
