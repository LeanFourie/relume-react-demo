// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

/// Components
import { CtaBannerLayout5 } from './cta-banner-layout-5';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TCtaBannerLayout5Props } from './cta-banner-layout-5.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: Omit<
  TCtaBannerLayout5Props,
  'type'
> = {
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  title: 'Short heading here',
  image: {
    alt: '',
    src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
};

// ----------------------------------------------------- //

// Story
export const Cta1: StoryObj<typeof CtaBannerLayout5> = {
  render: ( args: TCtaBannerLayout5Props ) => (
    <CtaBannerLayout5 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
    type: 'with actions',
    actions: [
      {
        accessibleLabel: '',
        label: 'Button',
        onClick: () => {},
        type: 'text'
      },
      {
        accessibleLabel: '',
        label: 'Button',
        onClick: () => {},
        type: 'text',
        variant: 'outlined'
      }
    ]
  },
  parameters: excludedParams([
    'type',
    'formMessage',
    'onFormSubmit',
    'isOutlined'
  ])
};

export const Cta2: StoryObj<typeof CtaBannerLayout5> = {
  render: ( args: TCtaBannerLayout5Props ) => (
    <CtaBannerLayout5 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`
  },
  parameters: excludedParams([
    'type',
    'actions',
    'isOutlined'
  ])
};

export const Cta39: StoryObj<typeof CtaBannerLayout5> = {
  render: ( args: TCtaBannerLayout5Props ) => (
    <CtaBannerLayout5 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: true,
    type: 'with actions',
    actions: [
      {
        accessibleLabel: '',
        label: 'Button',
        onClick: () => {},
        type: 'text'
      },
      {
        accessibleLabel: '',
        label: 'Button',
        onClick: () => {},
        type: 'text',
        variant: 'outlined'
      }
    ]
  },
  parameters: excludedParams([
    'type',
    'formMessage',
    'onFormSubmit',
    'isOutlined'
  ])
};

export const Cta40: StoryObj<typeof CtaBannerLayout5> = {
  render: ( args: TCtaBannerLayout5Props ) => (
    <CtaBannerLayout5 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: true,
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`
  },
  parameters: excludedParams([
    'type',
    'actions',
    'isOutlined'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof CtaBannerLayout5> = {
  component: CtaBannerLayout5,
  tags: ['autodocs'],
  argTypes: {
    actions: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    formMessage: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    image: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isOutlined: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    onFormSubmit: { action: 'submit' },
    paragraph: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    title: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    type: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
