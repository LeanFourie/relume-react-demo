// Packages & Modules
import {
  excludedParams,
  stackOptions
} from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { FeatureContentLayout2 } from './feature-content-layout-2';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TFeatureContentLayout2Props } from './feature-content-layout-2.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: Omit<
  TFeatureContentLayout2Props,
  'contentBlocks'
> = {
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
  stack: 'vertical',
  alignActions: 'left',
  maxColumns: true
};

// ----------------------------------------------------- //

// Story
export const Icon: StoryObj<typeof FeatureContentLayout2> = {
  render: ( args: TFeatureContentLayout2Props ) => (
    <FeatureContentLayout2 { ...args } />
  ),
  args: {
    ...defaultArgs,
    contentBlocks: [ ...Array( 2 ) ].map(( _, index: number ) => ({
      title: `Subheading ${ index + 1 }`,
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      icon: {
        name: 'home',
        type: 'text'
      },
      action: {
        onClick: () => {},
        accessibleLabel: '',
        label: 'Button'
      }
    }))
  },
  parameters: excludedParams([ 'fontVariants' ])
};

export const Image: StoryObj<typeof FeatureContentLayout2> = {
  render: ( args: TFeatureContentLayout2Props ) => (
    <FeatureContentLayout2 { ...args } />
  ),
  args: {
    ...defaultArgs,
    contentBlocks: [ ...Array( 2 ) ].map(( _, index: number ) => ({
      title: `Subheading ${ index + 1 }`,
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      image: {
        alt: '',
        src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      action: {
        onClick: () => {},
        accessibleLabel: '',
        label: 'Button'
      }
    }))
  },
  parameters: excludedParams([ 'fontVariants' ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof FeatureContentLayout2> = {
  component: FeatureContentLayout2,
  tags: ['autodocs'],
  argTypes: {
    actions: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    alignActions: {
      table: { defaultValue: { summary: 'left' } },
      defaultValue: 'left',
      options: [
        'left',
        'right'
      ]
    },
    classNames: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    contentBlocks: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    fontVariants: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    maxColumns: {
      table: { defaultValue: { summary: true } },
      defaultValue: true
    },
    stack: {
      table: { defaultValue: { summary: 'horizontal' } },
      defaultValue: 'horizontal',
      options: stackOptions
    }
  }
};

export default meta;
