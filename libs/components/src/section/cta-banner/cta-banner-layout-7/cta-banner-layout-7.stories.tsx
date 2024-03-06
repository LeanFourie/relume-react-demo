// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

/// Components
import { CtaBannerLayout7 } from './cta-banner-layout-7';

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TCtaBannerLayout7Props } from './cta-banner-layout-7.definitions';

// Variables
const defaultArgs: Omit<
  TCtaBannerLayout7Props,
  'type'
> = {
  contentGroups: [
    {
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      title: 'Short heading here',
      icon: {
        name: 'home',
        type: 'text'
      },
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
    {
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      title: 'Short heading here',
      icon: {
        name: 'home',
        type: 'text'
      },
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
    }
  ]
}

// Story
export const Cta35: StoryObj<typeof CtaBannerLayout7> = {
  render: ( args: TCtaBannerLayout7Props ) => (
    <CtaBannerLayout7 { ...args } />
  ),
  args: {
    ...defaultArgs,
    textAlign: 'left'
  },
  parameters: excludedParams([ 'textAlign' ])
};

export const Cta36: StoryObj<typeof CtaBannerLayout7> = {
  render: ( args: TCtaBannerLayout7Props ) => (
    <CtaBannerLayout7 { ...args } />
  ),
  args: {
    ...defaultArgs,
    textAlign: 'center'
  },
  parameters: excludedParams([ 'textAlign' ])
};

// Meta
const meta: Meta<typeof CtaBannerLayout7> = {
  component: CtaBannerLayout7,
  tags: ['autodocs'],
  argTypes: {
    contentGroups: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    textAlign: {
      table: { defaultValue: { summary: 'left' } },
      defaultValue: 'left'
    }
  }
};

export default meta;
