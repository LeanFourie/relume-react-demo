// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { CtaBannerLayout1 } from './cta-banner-layout-1';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TCtaBannerLayout1Props } from './cta-banner-layout-1.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: Omit<
  TCtaBannerLayout1Props,
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
export const Cta21: StoryObj<typeof CtaBannerLayout1> = {
  render: ( args: TCtaBannerLayout1Props ) => (
    <CtaBannerLayout1 { ...args } />
  ),
  args: {
    ...defaultArgs,
    splitContent: true,
    textAlign: 'left',
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
    'splitContent',
    'textAlign'
  ])
};

export const Cta22: StoryObj<typeof CtaBannerLayout1> = {
  render: ( args: TCtaBannerLayout1Props ) => (
    <CtaBannerLayout1 { ...args } />
  ),
  args: {
    ...defaultArgs,
    splitContent: true,
    textAlign: 'left',
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    onFormSubmit: () => {}
  },
  parameters: excludedParams([
    'type',
    'actions',
    'splitContent',
    'textAlign'
  ])
};

export const Cta23: StoryObj<typeof CtaBannerLayout1> = {
  render: ( args: TCtaBannerLayout1Props ) => (
    <CtaBannerLayout1 { ...args } />
  ),
  args: {
    ...defaultArgs,
    splitContent: false,
    textAlign: 'left',
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
    'splitContent',
    'textAlign'
  ])
};

export const Cta24: StoryObj<typeof CtaBannerLayout1> = {
  render: ( args: TCtaBannerLayout1Props ) => (
    <CtaBannerLayout1 { ...args } />
  ),
  args: {
    ...defaultArgs,
    splitContent: false,
    textAlign: 'left',
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    onFormSubmit: () => {}
  },
  parameters: excludedParams([
    'type',
    'actions',
    'splitContent',
    'textAlign'
  ])
};

export const Cta31: StoryObj<typeof CtaBannerLayout1> = {
  render: ( args: TCtaBannerLayout1Props ) => (
    <CtaBannerLayout1 { ...args } />
  ),
  args: {
    ...defaultArgs,
    splitContent: false,
    textAlign: 'center',
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
    'splitContent',
    'textAlign'
  ])
};

export const Cta32: StoryObj<typeof CtaBannerLayout1> = {
  render: ( args: TCtaBannerLayout1Props ) => (
    <CtaBannerLayout1 { ...args } />
  ),
  args: {
    ...defaultArgs,
    splitContent: false,
    textAlign: 'center',
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`
  },
  parameters: excludedParams([
    'type',
    'actions',
    'splitContent',
    'textAlign'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof CtaBannerLayout1> = {
  component: CtaBannerLayout1,
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
    onFormSubmit: { action: 'submit' },
    paragraph: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    splitContent: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    textAlign: {
      table: { defaultValue: { summary: 'left' } },
      defaultValue: 'left'
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
