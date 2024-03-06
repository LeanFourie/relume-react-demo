// Packages & Modules
import {
  excludedParams,
  stackOptions
} from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { FeatureContentLayout1 } from './feature-content-layout-1';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type {
  IFeatureContentLayout1,
  TFeatureContentLayout1Props
} from './feature-content-layout-1.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: Omit<
  IFeatureContentLayout1,
  'variant'
> = {
  hideTitle: false,
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  title: 'Medium length section heading goes here',
  stackDirection: 'vertical',
  textAlign: 'left'
};

const defaultExtendedArgs: Omit<
  IFeatureContentLayout1,
  'variant'
> = {
  ...defaultArgs,
  tagline: 'Tagline',
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
};

// ----------------------------------------------------- //

// Story
export const Default: StoryObj<typeof FeatureContentLayout1> = {
  render: ( args: TFeatureContentLayout1Props ) => (
    <FeatureContentLayout1 { ...args } />
  ),
  args: {
    ...defaultArgs
  },
  parameters: excludedParams([
    'tagline',
    'actions',
    'variant',
    'contentBlocks',
    'icon',
    'items',
    'logos',
    'stats',
    'hideTitle',
    'fontVariants'
  ])
};

export const Extended: StoryObj<typeof FeatureContentLayout1> = {
  render: ( args: TFeatureContentLayout1Props ) => (
    <FeatureContentLayout1 { ...args } />
  ),
  args: {
    ...defaultExtendedArgs
  },
  parameters: excludedParams([
    'variant',
    'contentBlocks',
    'icon',
    'items',
    'logos',
    'stats',
    'hideTitle',
    'fontVariants'
  ])
};

export const ContentBlocks: StoryObj<typeof FeatureContentLayout1> = {
  render: ( args: TFeatureContentLayout1Props ) => (
    <FeatureContentLayout1 { ...args } />
  ),
  args: {
    ...defaultArgs,
    variant: 'content-blocks',
    contentBlocks: {
      stack: 'horizontal',
      blocks: [ ...Array( 2 ) ].map(( _, index: number ) => ({
        title: `Subheading ${ index + 1 }`,
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        icon: {
          name: 'home',
          type: 'text'
        }
      }))
    }
  },
  parameters: excludedParams([
    'tagline',
    'actions',
    'variant',
    'icon',
    'items',
    'logos',
    'stats',
    'hideTitle',
    'fontVariants'
  ])
};

export const ContentBlocksExtended: StoryObj<typeof FeatureContentLayout1> = {
  render: ( args: TFeatureContentLayout1Props ) => (
    <FeatureContentLayout1 { ...args } />
  ),
  args: {
    ...defaultExtendedArgs,
    ...ContentBlocks.args
  },
  parameters: excludedParams([
    'variant',
    'icon',
    'items',
    'logos',
    'stats',
    'hideTitle',
    'fontVariants'
  ])
};

export const Icon: StoryObj<typeof FeatureContentLayout1> = {
  render: ( args: TFeatureContentLayout1Props ) => (
    <FeatureContentLayout1 { ...args } />
  ),
  args: {
    ...defaultArgs,
    variant: 'icon',
    icon: {
      name: 'home',
      type: 'text'
    }
  },
  parameters: excludedParams([
    'tagline',
    'actions',
    'variant',
    'contentBlocks',
    'items',
    'logos',
    'stats',
    'hideTitle',
    'fontVariants'
  ])
};

export const IconExtended: StoryObj<typeof FeatureContentLayout1> = {
  render: ( args: TFeatureContentLayout1Props ) => (
    <FeatureContentLayout1 { ...args } />
  ),
  args: {
    ...defaultExtendedArgs,
    ...Icon.args
  },
  parameters: excludedParams([
    'variant',
    'contentBlocks',
    'items',
    'logos',
    'stats',
    'hideTitle',
    'fontVariants'
  ])
};

export const List: StoryObj<typeof FeatureContentLayout1> = {
  render: ( args: TFeatureContentLayout1Props ) => (
    <FeatureContentLayout1 { ...args } />
  ),
  args: {
    ...defaultArgs,
    variant: 'list',
    items: [ ...Array( 3 ) ].map( _ => ({
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: {
        name: 'home',
        type: 'text'
      }
    }))
  },
  parameters: excludedParams([
    'tagline',
    'actions',
    'variant',
    'contentBlocks',
    'icon',
    'logos',
    'stats',
    'hideTitle',
    'fontVariants'
  ])
};

export const ListExtended: StoryObj<typeof FeatureContentLayout1> = {
  render: ( args: TFeatureContentLayout1Props ) => (
    <FeatureContentLayout1 { ...args } />
  ),
  args: {
    ...defaultExtendedArgs,
    ...List.args
  },
  parameters: excludedParams([
    'variant',
    'contentBlocks',
    'icon',
    'logos',
    'stats',
    'hideTitle',
    'fontVariants'
  ])
};

export const Logos: StoryObj<typeof FeatureContentLayout1> = {
  render: ( args: TFeatureContentLayout1Props ) => (
    <FeatureContentLayout1 { ...args } />
  ),
  args: {
    ...defaultArgs,
    variant: 'logos',
    logos: [ ...Array( 4 ) ].map( _ => ({
      alt: '',
      src: '/images/image-relume_demo-logo.svg'
    }))
  },
  parameters: excludedParams([
    'tagline',
    'actions',
    'variant',
    'contentBlocks',
    'icon',
    'items',
    'stats',
    'hideTitle',
    'fontVariants'
  ])
};

export const LogosExtended: StoryObj<typeof FeatureContentLayout1> = {
  render: ( args: TFeatureContentLayout1Props ) => (
    <FeatureContentLayout1 { ...args } />
  ),
  args: {
    ...defaultExtendedArgs,
    ...Logos.args
  },
  parameters: excludedParams([
    'variant',
    'contentBlocks',
    'icon',
    'items',
    'stats',
    'hideTitle',
    'fontVariants'
  ])
};

export const Stats: StoryObj<typeof FeatureContentLayout1> = {
  render: ( args: TFeatureContentLayout1Props ) => (
    <FeatureContentLayout1 { ...args } />
  ),
  args: {
    ...defaultArgs,
    variant: 'stats',
    stats: [ ...Array( 2 ) ].map( _ => ({
      value: '50%',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    }))
  },
  parameters: excludedParams([
    'tagline',
    'actions',
    'variant',
    'contentBlocks',
    'icon',
    'items',
    'logos',
    'hideTitle',
    'fontVariants'
  ])
};

export const StatsExtended: StoryObj<typeof FeatureContentLayout1> = {
  render: ( args: TFeatureContentLayout1Props ) => (
    <FeatureContentLayout1 { ...args } />
  ),
  args: {
    ...defaultExtendedArgs,
    ...Stats.args
  },
  parameters: excludedParams([
    'variant',
    'contentBlocks',
    'icon',
    'items',
    'logos',
    'hideTitle',
    'fontVariants'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof FeatureContentLayout1> = {
  component: FeatureContentLayout1,
  tags: ['autodocs'],
  argTypes: {
    actions: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
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
    hideTitle: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    icon: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    items: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    logos: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    paragraph: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    stackDirection: {
      table: { defaultValue: { summary: 'horizontal' } },
      defaultValue: 'horizontal',
      options: stackOptions
    },
    stats: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    tagline: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    textAlign: {
      table: { defaultValue: { summary: 'left' } },
      defaultValue: 'left',
      options: [
        'left',
        'center'
      ]
    },
    title: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    variant: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
