// Packages & Modules
import {
  shadeOptions,
  sizeOptions,
  stateOptions,
  uiVariantOptions
} from '@relume-demo/utils';
import { useArgs } from '@storybook/preview-api';

// ----------------------------------------------------- //

// Components
import { Select } from './select';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TSelectProps } from './select.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof Select> = {
  render: ( args: TSelectProps ) => {
    // HOOKS
    const [
      { value },
      updateArgs
    ] = useArgs();

    // METHODS
    const onChange = ( value: string ) => {
      updateArgs({ value: value });
    }

    // HTML
    return (
      <Select
        { ...args }
        onChange={ ( event ) => onChange( event ) }
        value={ value }
      />
    )
  },
  args: {
    className: '',
    helperText: { value: 'Helper text' },
    hideLabel: false,
    isDisabled: false,
    isReadonly: true,
    isRequired: false,
    isSkeleton: false,
    label: 'Select',
    options: [
      'Option 1',
      'Option 2',
      'Option 3'
    ],
    placeholder: 'Placeholder',
    shade: 'dark',
    size: 'md',
    state: 'default',
    value: '',
    variant: 'filled'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    helperText: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    hideLabel: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    isDisabled: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    isReadonly: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    isRequired: {
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
    onBlur: { action: 'blur' },
    onChange: { action: 'change' },
    onFocus: { action: 'focus' },
    options: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    placeholder: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    shade: {
      table: { defaultValue: { summary: 'dark' } },
      defaultValue: 'dark',
      options: shadeOptions
    },
    size: {
      table: { defaultValue: { summary: 'md' } },
      defaultValue: 'md',
      options: sizeOptions
    },
    state: {
      table: { defaultValue: { summary: 'default' } },
      defaultValue: 'default',
      options: stateOptions
    },
    value: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    variant: {
      table: { defaultValue: { summary: 'filled' } },
      defaultValue: 'filled',
      options: uiVariantOptions.filter( option => option !== 'ghost' )
    }
  }
};

export default meta;
