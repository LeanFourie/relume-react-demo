// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { CtaBannerLayout6 } from './cta-banner-layout-6';

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TCtaBannerLayout6Props } from './cta-banner-layout-6.definitions';

// Variables
const defaultArgs: Omit<
  TCtaBannerLayout6Props,
  'type'
> = {
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  title: 'Short heading here',
  logos: [ ...Array( 6 ) ].map( _ => ({
    alt: '',
    src: '/images/image-relume_demo-logo.svg'
  }))
}

// Story
export const Cta33: StoryObj<typeof CtaBannerLayout6> = {
  render: ( args: TCtaBannerLayout6Props ) => (
    <CtaBannerLayout6 { ...args } />
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
    'onFormSubmit'
  ])
};

export const Cta34: StoryObj<typeof CtaBannerLayout6> = {
  render: ( args: TCtaBannerLayout6Props ) => (
    <CtaBannerLayout6 { ...args } />
  ),
  args: {
    ...defaultArgs,
    type: 'with form',
    formMessage: `By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`
  },
  parameters: excludedParams([
    'type',
    'actions'
  ])
};

// Meta
const meta: Meta<typeof CtaBannerLayout6> = {
  component: CtaBannerLayout6,
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
    logos: {
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
    }
  }
};

export default meta;
