// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { CtaBannerLayout4 } from './cta-banner-layout-4';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TCtaBannerLayout4Props } from './cta-banner-layout-4.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: Omit<
  TCtaBannerLayout4Props,
  'type'
> = {
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  title: 'Short heading here'
};

// ----------------------------------------------------- //

// Story
export const Cta3: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
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
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta4: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
    textAlign: 'left',
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
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta5: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
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
    ],
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'type',
    'formMessage',
    'onFormSubmit',
    'image',
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta6: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
    textAlign: 'left',
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'type',
    'actions',
    'image',
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta19: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
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
    'image',
    'videoUri',
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta20: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
    textAlign: 'left',
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    onFormSubmit: () => {}
  },
  parameters: excludedParams([
    'type',
    'actions',
    'image',
    'videoUri',
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta25: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
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
    'image',
    'videoUri',
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta26: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
    textAlign: 'center',
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    onFormSubmit: () => {}
  },
  parameters: excludedParams([
    'type',
    'actions',
    'image',
    'videoUri',
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta27: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
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
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta28: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
    textAlign: 'center',
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
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta29: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
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
    ],
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'type',
    'formMessage',
    'onFormSubmit',
    'image',
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta30: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: false,
    textAlign: 'center',
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'type',
    'actions',
    'image',
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta41: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: true,
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
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta42: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: true,
    textAlign: 'left',
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
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta43: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: true,
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
    ],
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'type',
    'formMessage',
    'onFormSubmit',
    'image',
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta44: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: true,
    textAlign: 'left',
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'type',
    'actions',
    'image',
    'isOutlined',
    'textAlign',
    'background'
  ])
};


export const Cta51: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: true,
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
    'image',
    'videoUri',
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta52: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: true,
    textAlign: 'center',
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    onFormSubmit: () => {}
  },
  parameters: excludedParams([
    'type',
    'actions',
    'image',
    'videoUri',
    'isOutlined',
    'textAlign',
    'background'
  ])
};


export const Cta53: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: true,
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
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta54: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: true,
    textAlign: 'center',
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
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta55: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: true,
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
    ],
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'type',
    'formMessage',
    'onFormSubmit',
    'image',
    'isOutlined',
    'textAlign',
    'background'
  ])
};

export const Cta56: StoryObj<typeof CtaBannerLayout4> = {
  render: ( args: TCtaBannerLayout4Props ) => (
    <CtaBannerLayout4 { ...args } />
  ),
  args: {
    ...defaultArgs,
    isOutlined: true,
    textAlign: 'center',
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`,
    videoUri: '/videos/video_placeholder-ocean.mp4'
  },
  parameters: excludedParams([
    'type',
    'actions',
    'image',
    'isOutlined',
    'textAlign',
    'background'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof CtaBannerLayout4> = {
  component: CtaBannerLayout4,
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
    },
    videoUri: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
