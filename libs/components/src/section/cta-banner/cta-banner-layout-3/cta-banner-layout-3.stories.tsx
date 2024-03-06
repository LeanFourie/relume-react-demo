// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { CtaBannerLayout3 } from './cta-banner-layout-3';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TCtaBannerLayout3Props } from './cta-banner-layout-3.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: Omit<
  TCtaBannerLayout3Props,
  'type'
> = {
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  title: 'Short heading here'
};

// ----------------------------------------------------- //

// Story
export const Cta13: StoryObj<typeof CtaBannerLayout3> = {
  render: ( args: TCtaBannerLayout3Props ) => (
    <CtaBannerLayout3 { ...args } />
  ),
  args: {
    ...defaultArgs,
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
    'image',
    'videoUri',
    'background'
  ])
};

export const Cta14: StoryObj<typeof CtaBannerLayout3> = {
  render: ( args: TCtaBannerLayout3Props ) => (
    <CtaBannerLayout3 { ...args } />
  ),
  args: {
    ...defaultArgs,
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    onFormSubmit: () => {}
  },
  parameters: excludedParams([
    'type',
    'actions',
    'image',
    'videoUri',
    'background'
  ])
};

export const Cta15: StoryObj<typeof CtaBannerLayout3> = {
  render: ( args: TCtaBannerLayout3Props ) => (
    <CtaBannerLayout3 { ...args } />
  ),
  args: {
    ...defaultArgs,
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
    ],
    image: {
      alt: '',
      src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  },
  parameters: excludedParams([
    'type',
    'formMessage',
    'onFormSubmit',
    'videoUri',
    'background'
  ])
};

export const Cta16: StoryObj<typeof CtaBannerLayout3> = {
  render: ( args: TCtaBannerLayout3Props ) => (
    <CtaBannerLayout3 { ...args } />
  ),
  args: {
    ...defaultArgs,
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    image: {
      alt: '',
      src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  },
  parameters: excludedParams([
    'type',
    'actions',
    'videoUri',
    'background'
  ])
};

export const Cta17: StoryObj<typeof CtaBannerLayout3> = {
  render: ( args: TCtaBannerLayout3Props ) => (
    <CtaBannerLayout3 { ...args } />
  ),
  args: {
    ...defaultArgs,
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
    ],
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'type',
    'formMessage',
    'onFormSubmit',
    'image',
    'background'
  ])
};

export const Cta18: StoryObj<typeof CtaBannerLayout3> = {
  render: ( args: TCtaBannerLayout3Props ) => (
    <CtaBannerLayout3 { ...args } />
  ),
  args: {
    ...defaultArgs,
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'type',
    'actions',
    'image',
    'background'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof CtaBannerLayout3> = {
  component: CtaBannerLayout3,
  tags: ['autodocs'],
  argTypes: {
    actions: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    background: {
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
    title: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    type: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    videoUri: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
