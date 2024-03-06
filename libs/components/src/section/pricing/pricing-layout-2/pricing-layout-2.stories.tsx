// Packages & Modules
import { Card7 } from '../../../collective/pricing-card/pricing-card.stories';

// ----------------------------------------------------- //

// Components
import { PricingLayout2 } from './pricing-layout-2';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { IPricingCardLayout7 } from '../../../';
import type { TPricingLayout2Props } from './pricing-layout-2.definitions';

// ----------------------------------------------------- //

// Story
export const Pricing5: StoryObj<typeof PricingLayout2> = {
  render: ( args: TPricingLayout2Props ) => (
    <PricingLayout2 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: { ...Card7.args as IPricingCardLayout7 },
    features: [ ...Array( 3 ) ].map(( _, index: number ) => ({
      icon: {
        name: 'home',
        type: 'text'
      },
      title: `Key feature heading ${ index + 1 }`,
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    }))
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof PricingLayout2> = {
  component: PricingLayout2,
  tags: ['autodocs'],
  argTypes: {
    content: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    features: {
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
