// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { PricingCard } from './pricing-card';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TPricingCardProps } from './pricing-card.definitions';

// ----------------------------------------------------- //

// Story
export const Card1: StoryObj<typeof PricingCard> = {
  render: ( args: TPricingCardProps ) => (
    <PricingCard { ...args } />
  ),
  args: {
    name: 'Basic Plan',
    price: {
      value: '$19',
      recurrence: '/mo'
    },
    cta: {
      accessibleLabel: '',
      label: 'Get started',
      onClick: () => {},
      type: 'text'
    },
    features: {
      items: [ ...Array( 5 ) ].map( ( _, index: number ) => ({
        included: index <= 3,
        value: `Feature ${ index + 1 } text goes here`
      }))
    },
    layout: 1
  },
  parameters: excludedParams([
    'icon',
    'description'
  ])
};

export const Card2: StoryObj<typeof PricingCard> = {
  render: ( args: TPricingCardProps ) => (
    <PricingCard { ...args } />
  ),
  args: {
    name: 'Basic Plan',
    price: {
      value: '$19',
      recurrence: '/mo',
      note: 'or $199 yearly'
    },
    cta: {
      accessibleLabel: '',
      label: 'Get started',
      onClick: () => {},
      type: 'text'
    },
    features: {
      items: [ ...Array( 5 ) ].map( ( _, index: number ) => ({
        included: index <= 3,
        value: `Feature ${ index + 1 } text goes here`
      }))
    },
    layout: 2
  },
  parameters: excludedParams([
    'icon',
    'description'
  ])
};

export const Card3: StoryObj<typeof PricingCard> = {
  render: ( args: TPricingCardProps ) => (
    <PricingCard { ...args } />
  ),
  args: {
    name: 'Basic Plan',
    price: {
      value: '$19',
      recurrence: '/mo'
    },
    cta: {
      accessibleLabel: '',
      label: 'Get started',
      onClick: () => {},
      type: 'text'
    },
    features: {
      items: [ ...Array( 5 ) ].map( ( _, index: number ) => ({
        included: index <= 3,
        value: `Feature ${ index + 1 } text goes here`
      }))
    },
    icon: {
      name: 'home',
      type: 'text'
    },
    layout: 3
  },
  parameters: excludedParams([ 'description' ])
};

export const Card4: StoryObj<typeof PricingCard> = {
  render: ( args: TPricingCardProps ) => (
    <PricingCard { ...args } />
  ),
  args: {
    name: 'Basic Plan',
    price: {
      value: '$19',
      recurrence: '/mo',
      note: 'or $199 yearly'
    },
    cta: {
      accessibleLabel: '',
      label: 'Get started',
      onClick: () => {},
      type: 'text'
    },
    features: {
      items: [ ...Array( 5 ) ].map( ( _, index: number ) => ({
        included: index <= 3,
        value: `Feature ${ index + 1 } text goes here`
      }))
    },
    icon: {
      name: 'home',
      type: 'text'
    },
    layout: 4
  },
  parameters: excludedParams([ 'description' ])
};

export const Card5: StoryObj<typeof PricingCard> = {
  render: ( args: TPricingCardProps ) => (
    <PricingCard { ...args } />
  ),
  args: {
    name: 'Basic Plan',
    price: {
      value: '$19',
      recurrence: '/mo'
    },
    cta: {
      accessibleLabel: '',
      label: 'Get started',
      onClick: () => {},
      type: 'text'
    },
    features: {
      items: [ ...Array( 5 ) ].map( ( _, index: number ) => ({
        included: index <= 3,
        value: `Feature ${ index + 1 } text goes here`
      }))
    },
    description: 'Lorem ipsum dolor sit amet',
    layout: 5
  },
  parameters: excludedParams([ 'icon' ])
};

export const Card6: StoryObj<typeof PricingCard> = {
  render: ( args: TPricingCardProps ) => (
    <PricingCard { ...args } />
  ),
  args: {
    name: 'Basic Plan',
    price: {
      value: '$19',
      recurrence: '/mo',
      note: 'or $199 yearly'
    },
    cta: {
      accessibleLabel: '',
      label: 'Get started',
      onClick: () => {},
      type: 'text'
    },
    features: {
      items: [ ...Array( 5 ) ].map( ( _, index: number ) => ({
        included: index <= 3,
        value: `Feature ${ index + 1 } text goes here`
      }))
    },
    description: 'Lorem ipsum dolor sit amet',
    layout: 6
  },
  parameters: excludedParams([ 'description' ])
};

export const Card7: StoryObj<typeof PricingCard> = {
  render: ( args: TPricingCardProps ) => (
    <PricingCard { ...args } />
  ),
  args: {
    name: 'Basic Plan',
    price: {
      value: '$19',
      recurrence: '/mo'
    },
    cta: {
      accessibleLabel: '',
      label: 'Get started',
      onClick: () => {},
      type: 'text'
    },
    features: {
      items: [ ...Array( 10 ) ].map( ( _, index: number ) => ({
        included: index <= 6,
        value: `Feature ${ index + 1 } text goes here`
      }))
    },
    description: 'Lorem ipsum dolor sit amet',
    layout: 7
  },
  parameters: excludedParams([ 'description' ])
};

export const Card8: StoryObj<typeof PricingCard> = {
  render: ( args: TPricingCardProps ) => (
    <PricingCard { ...args } />
  ),
  args: {
    name: 'Basic Plan',
    price: {
      value: '$19',
      recurrence: '/mo'
    },
    cta: {
      accessibleLabel: '',
      label: 'Get started',
      onClick: () => {},
      type: 'text'
    },
    features: {
      items: [ ...Array( 10 ) ].map( ( _, index: number ) => ({
        included: index <= 6,
        value: `Feature ${ index + 1 } text goes here`
      }))
    },
    icon: {
      name: 'home',
      type: 'text'
    },
    description: 'Lorem ipsum dolor sit amet',
    layout: 8
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof PricingCard> = {
  component: PricingCard,
  tags: ['autodocs'],
  argTypes: {
    cta: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    features: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    layout: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    name: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    price: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
