// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { CtaBannerLayout2 } from './cta-banner-layout-2';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TCtaBannerLayout2Props } from './cta-banner-layout-2.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: Omit<
  TCtaBannerLayout2Props,
  'type'
> = {
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  title: 'Short heading here'
};

// ----------------------------------------------------- //

// Story
export const Cta7: StoryObj<typeof CtaBannerLayout2> = {
  render: ( args: TCtaBannerLayout2Props ) => (
    <CtaBannerLayout2 { ...args } />
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
    'image',
    'videoUri',
    'background',
    'isOutlined'
  ])
};

export const Cta8: StoryObj<typeof CtaBannerLayout2> = {
  render: ( args: TCtaBannerLayout2Props ) => (
    <CtaBannerLayout2 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    onFormSubmit: () => {}
  },
  parameters: excludedParams([
    'type',
    'actions',
    'image',
    'videoUri',
    'background',
    'isOutlined'
  ])
};

export const Cta9: StoryObj<typeof CtaBannerLayout2> = {
  render: ( args: TCtaBannerLayout2Props ) => (
    <CtaBannerLayout2 { ...args } />
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
    'background',
    'isOutlined'
  ])
};

export const Cta10: StoryObj<typeof CtaBannerLayout2> = {
  render: ( args: TCtaBannerLayout2Props ) => (
    <CtaBannerLayout2 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
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
    'background',
    'isOutlined'
  ])
};

export const Cta11: StoryObj<typeof CtaBannerLayout2> = {
  render: ( args: TCtaBannerLayout2Props ) => (
    <CtaBannerLayout2 { ...args } />
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
    ],
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'type',
    'formMessage',
    'onFormSubmit',
    'image',
    'background',
    'isOutlined'
  ])
};

export const Cta12: StoryObj<typeof CtaBannerLayout2> = {
  render: ( args: TCtaBannerLayout2Props ) => (
    <CtaBannerLayout2 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'type',
    'actions',
    'image',
    'background',
    'isOutlined'
  ])
};

export const Cta45: StoryObj<typeof CtaBannerLayout2> = {
  render: ( args: TCtaBannerLayout2Props ) => (
    <CtaBannerLayout2 { ...args } />
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
    'image',
    'videoUri',
    'background',
    'isOutlined'
  ])
};

export const Cta46: StoryObj<typeof CtaBannerLayout2> = {
  render: ( args: TCtaBannerLayout2Props ) => (
    <CtaBannerLayout2 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: true,
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    onFormSubmit: () => {}
  },
  parameters: excludedParams([
    'type',
    'actions',
    'image',
    'videoUri',
    'background',
    'isOutlined'
  ])
};

export const Cta47: StoryObj<typeof CtaBannerLayout2> = {
  render: ( args: TCtaBannerLayout2Props ) => (
    <CtaBannerLayout2 { ...args } />
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
    'background',
    'isOutlined'
  ])
};

export const Cta48: StoryObj<typeof CtaBannerLayout2> = {
  render: ( args: TCtaBannerLayout2Props ) => (
    <CtaBannerLayout2 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: true,
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
    'background',
    'isOutlined'
  ])
};

export const Cta49: StoryObj<typeof CtaBannerLayout2> = {
  render: ( args: TCtaBannerLayout2Props ) => (
    <CtaBannerLayout2 { ...args } />
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
    ],
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'type',
    'formMessage',
    'onFormSubmit',
    'image',
    'background',
    'isOutlined'
  ])
};

export const Cta50: StoryObj<typeof CtaBannerLayout2> = {
  render: ( args: TCtaBannerLayout2Props ) => (
    <CtaBannerLayout2 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: true,
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'type',
    'actions',
    'image',
    'background',
    'isOutlined'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof CtaBannerLayout2> = {
  component: CtaBannerLayout2,
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
    },
    videoUri: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
