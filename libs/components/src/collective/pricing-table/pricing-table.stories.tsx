// Packages & Modules
import { WindowProvider } from '@relume-demo/providers';

// ----------------------------------------------------- //

// Components
import { PricingTable } from './pricing-table';

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TPricingTableProps } from './pricing-table.definitions';

// ----------------------------------------------------- //

// Story
export const Table1: StoryObj<typeof PricingTable> = {
  render: ( args: TPricingTableProps ) => (
    <WindowProvider>
      <PricingTable { ...args } />
    </WindowProvider>
  ),
  args: {
    stickyHeader: true,
    pricing: [ ...Array( 3 ) ].map(( _, index ) => ({
      name: `Option ${ index + 1 }`,
      price: `$${ 19 + ( index * 3 ) }`,
      recurrence: 'Per month',
      description: 'Lorem ipsum dolor sit amet'
    })),
    features: [ ...Array( 3 ) ].map(( _, index ) => ({
      category: `Category ${ index + 1 }`,
      options: [ ...Array( 5 ) ].map(( _, idx ) => ({
        description: 'Feature text goes here',
        includes: idx === 0 ? [ '10', '25', 'Unlimited' ] : [ true, true, false ]
      }))
    }))
  }
};

export const Table2: StoryObj<typeof PricingTable> = {
  render: ( args: TPricingTableProps ) => (
    <WindowProvider>
      <PricingTable { ...args } />
    </WindowProvider>
  ),
  args: {
    ...Table1.args,
    pricing: [ ...Array( 3 ) ].map(( _, index ) => ({
      name: `Option ${ index + 1 }`,
      price: `$${ 19 + ( index * 3 ) }`,
      recurrence: '/mo',
      description: 'Lorem ipsum dolor sit amet'
    })),
    stickyHeader: false
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof PricingTable> = {
  component: PricingTable,
  tags: ['autodocs'],
  argTypes: {
    features: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    pricing: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    onOptionSelect: { action: 'optionSelect' },
    stickyHeader: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    }
  }
};

export default meta;
