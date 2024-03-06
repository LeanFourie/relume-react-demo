// Packages & Modules
import { WindowProvider } from '@relume-demo/providers';
import {
  Table1,
  Table2
} from '../../../collective/pricing-table/pricing-table.stories'

// ----------------------------------------------------- //

// Components
import { PricingLayout3 } from './pricing-layout-3';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TPricingTableProps } from '../../../';
import type { TPricingLayout3Props } from './pricing-layout-3.definitions';

// ----------------------------------------------------- //

// Story
export const Pricing21: StoryObj<typeof PricingLayout3> = {
  render: ( args: TPricingLayout3Props ) => (
    <WindowProvider>
      <PricingLayout3 { ...args } />
    </WindowProvider>
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: { ...Table1.args as TPricingTableProps }
  }
};

export const Pricing22: StoryObj<typeof PricingLayout3> = {
  render: ( args: TPricingLayout3Props ) => (
    <WindowProvider>
      <PricingLayout3 { ...args } />
    </WindowProvider>
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: { ...Table2.args as TPricingTableProps }
  }
};

export const Pricing26: StoryObj<typeof PricingLayout3> = {
  render: ( args: TPricingLayout3Props ) => (
    <WindowProvider>
      <PricingLayout3 { ...args } />
    </WindowProvider>
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: {
      monthly: { ...Table1.args as TPricingTableProps },
      yearly: { ...Table1.args as TPricingTableProps }
    }
  }
};

export const Pricing27: StoryObj<typeof PricingLayout3> = {
  render: ( args: TPricingLayout3Props ) => (
    <WindowProvider>
      <PricingLayout3 { ...args } />
    </WindowProvider>
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: {
      monthly: { ...Table2.args as TPricingTableProps },
      yearly: { ...Table2.args as TPricingTableProps }
    }
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof PricingLayout3> = {
  component: PricingLayout3,
  tags: ['autodocs'],
  argTypes: {
    content: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    pricing: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
