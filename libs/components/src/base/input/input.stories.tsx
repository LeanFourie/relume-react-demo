// Packages & Modules
import {
  excludedParams,
  shadeOptions,
  sizeOptions,
  stateOptions,
  uiVariantOptions
} from '@relume-demo/utils';
import { useArgs } from '@storybook/preview-api';

// ----------------------------------------------------- //

// Components
import { Input } from './input';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TInputProps } from './input.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: Omit<
  TInputProps,
  'onBlur' | 'onChange' | 'onFocus' | 'onEnterPress' | 'type'
> = {
  autoComplete: '',
  className: '',
  helperText: { value: 'Helper text' },
  hideLabel: false,
  isDisabled: false,
  isReadonly: false,
  isRequired: false,
  isSkeleton: false,
  label: 'Input',
  placeholder: 'placeholder',
  shade: 'dark',
  size: 'md',
  state: 'default',
  value: '',
  variant: 'filled'
};

// ----------------------------------------------------- //

// Story
export const Text: StoryObj<typeof Input> = {
  render: ( args: TInputProps ) => {
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
      <Input
        { ...args }
        onChange={ ( event ) => onChange( event ) }
        value={ value }
      />
    )
  },
  args: {
    ...defaultArgs,
    type: 'text',
    minLength: 0,
    maxLength: 20,
    numbersOnly: false
  },
  parameters: excludedParams([
    'dialCode',
    'onForgotPasswordClick',
    'showForgotPassword',
    'searchResults',
    'max',
    'min',
    'timeOfDay',
    'timezone'
  ])
};

export const Email: StoryObj<typeof Input> = {
  render: ( args: TInputProps ) => {
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
      <Input
        { ...args }
        onChange={ ( event ) => onChange( event ) }
        value={ value }
      />
    )
  },
  args: {
    ...defaultArgs,
    type: 'email',
    minLength: 0,
    maxLength: 20
  },
  parameters: excludedParams([
    'numbersOnly',
    'dialCode',
    'onForgotPasswordClick',
    'showForgotPassword',
    'searchResults',
    'max',
    'min',
    'timeOfDay',
    'timezone'
  ])
};

export const Tel: StoryObj<typeof Input> = {
  render: ( args: TInputProps ) => {
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
      <Input
        { ...args }
        onChange={ ( event ) => onChange( event ) }
        value={ value }
      />
    )
  },
  args: {
    ...defaultArgs,
    type: 'tel',
    minLength: 0,
    maxLength: 20,
    dialCode: '+27'
  },
  parameters: excludedParams([
    'numbersOnly',
    'onForgotPasswordClick',
    'showForgotPassword',
    'searchResults',
    'max',
    'min',
    'timeOfDay',
    'timezone'
  ])
};

export const Password: StoryObj<typeof Input> = {
  render: ( args: TInputProps ) => {
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
      <Input
        { ...args }
        onChange={ ( event ) => onChange( event ) }
        value={ value }
      />
    )
  },
  args: {
    ...defaultArgs,
    type: 'password',
    minLength: 0,
    maxLength: 20,
    showForgotPassword: false
  },
  parameters: excludedParams([
    'numbersOnly',
    'dialCode',
    'searchResults',
    'max',
    'min',
    'timeOfDay',
    'timezone'
  ])
};

export const Search: StoryObj<typeof Input> = {
  render: ( args: TInputProps ) => {
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
      <Input
        { ...args }
        onChange={ ( event ) => onChange( event ) }
        value={ value }
      />
    )
  },
  args: {
    ...defaultArgs,
    type: 'search',
    minLength: 0,
    maxLength: 20,
    searchResults: []
  },
  parameters: excludedParams([
    'numbersOnly',
    'dialCode',
    'onForgotPasswordClick',
    'showForgotPassword',
    'max',
    'min',
    'timeOfDay',
    'timezone'
  ])
};

export const Number: StoryObj<typeof Input> = {
  render: ( args: TInputProps ) => {
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
      <Input
        { ...args }
        onChange={ ( event ) => onChange( event ) }
        value={ value }
      />
    )
  },
  args: {
    ...defaultArgs,
    type: 'number',
    min: 0,
    max: 20
  },
  parameters: excludedParams([
    'numbersOnly',
    'dialCode',
    'minLength',
    'maxLength',
    'onForgotPasswordClick',
    'showForgotPassword',
    'searchResults',
    'timeOfDay',
    'timezone'
  ])
};

export const Date: StoryObj<typeof Input> = {
  render: ( args: TInputProps ) => {
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
      <Input
        { ...args }
        onChange={ ( event ) => onChange( event ) }
        value={ value }
      />
    )
  },
  args: {
    ...defaultArgs,
    type: 'date'
  },
  parameters: excludedParams([
    'numbersOnly',
    'dialCode',
    'minLength',
    'maxLength',
    'onForgotPasswordClick',
    'showForgotPassword',
    'searchResults',
    'max',
    'min',
    'timeOfDay',
    'timezone'
  ])
};

export const Time: StoryObj<typeof Input> = {
  render: ( args: TInputProps ) => {
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
      <Input
        { ...args }
        onChange={ ( event ) => onChange( event ) }
        value={ value }
      />
    )
  },
  args: {
    ...defaultArgs,
    type: 'time',
    timeOfDay: 'am',
    timezone: '0'
  },
  parameters: excludedParams([
    'numbersOnly',
    'dialCode',
    'minLength',
    'maxLength',
    'onForgotPasswordClick',
    'showForgotPassword',
    'searchResults',
    'max',
    'min'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    autoComplete: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
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
    onEnterPress: { action: 'enter' },
    onFocus: { action: 'focus' },
    onForgotPasswordClick: { action: 'forgot-password' },
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
    type: {
      table: { defaultValue: { summary: 'text' } },
      defaultValue: 'text'
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
