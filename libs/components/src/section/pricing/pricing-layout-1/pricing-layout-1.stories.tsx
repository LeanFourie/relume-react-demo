// Packages & Modules
import { excludedParams } from '@relume-demo/utils';
import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card8
} from '../../../collective/pricing-card/pricing-card.stories';

// ----------------------------------------------------- //

// Components
import { PricingLayout1 } from './pricing-layout-1';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TPricingCardProps } from '../../../';
import type { TPricingLayout1Props } from './pricing-layout-1.definitions';

// ----------------------------------------------------- //

// Story
export const Pricing1: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: [{ ...Card2.args as TPricingCardProps }],
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing2: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: [{ ...Card4.args as TPricingCardProps }],
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing3: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: [{ ...Card6.args as TPricingCardProps }],
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing4: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: [{ ...Card8.args as TPricingCardProps }]
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing6: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: {
      monthly: [{ ...Card1.args as TPricingCardProps }],
      yearly: [{ ...Card1.args as TPricingCardProps }]
    },
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing7: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: {
      monthly: [{ ...Card3.args as TPricingCardProps }],
      yearly: [{ ...Card3.args as TPricingCardProps }]
    },
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing8: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: {
      monthly: [{ ...Card5.args as TPricingCardProps }],
      yearly: [{ ...Card5.args as TPricingCardProps }]
    },
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing9: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: {
      monthly: [{ ...Card8.args as TPricingCardProps }],
      yearly: [{ ...Card8.args as TPricingCardProps }]
    }
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing10: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: [
      { ...Card2.args as TPricingCardProps },
      { ...Card2.args as TPricingCardProps }
    ],
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing11: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: [
      { ...Card4.args as TPricingCardProps },
      { ...Card4.args as TPricingCardProps }
    ],
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing12: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: [
      { ...Card6.args as TPricingCardProps },
      { ...Card6.args as TPricingCardProps }
    ],
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing13: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: [
      { ...Card8.args as TPricingCardProps },
      { ...Card8.args as TPricingCardProps }
    ]
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing14: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: {
      monthly: [
        { ...Card1.args as TPricingCardProps },
        { ...Card1.args as TPricingCardProps }
      ],
      yearly: [
        { ...Card1.args as TPricingCardProps },
        { ...Card1.args as TPricingCardProps }
      ]
    }
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing15: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: {
      monthly: [
        { ...Card3.args as TPricingCardProps },
        { ...Card3.args as TPricingCardProps }
      ],
      yearly: [
        { ...Card3.args as TPricingCardProps },
        { ...Card3.args as TPricingCardProps }
      ]
    },
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing16: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: {
      monthly: [
        { ...Card5.args as TPricingCardProps },
        { ...Card5.args as TPricingCardProps }
      ],
      yearly: [
        { ...Card5.args as TPricingCardProps },
        { ...Card5.args as TPricingCardProps }
      ]
    },
    isCondensed: true
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing17: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: {
      monthly: [
        { ...Card8.args as TPricingCardProps },
        { ...Card8.args as TPricingCardProps }
      ],
      yearly: [
        { ...Card8.args as TPricingCardProps },
        { ...Card8.args as TPricingCardProps }
      ]
    }
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing18: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: [
      { ...Card2.args as TPricingCardProps },
      { ...Card2.args as TPricingCardProps },
      { ...Card2.args as TPricingCardProps }
    ]
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing19: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: [
      { ...Card4.args as TPricingCardProps },
      { ...Card4.args as TPricingCardProps },
      { ...Card4.args as TPricingCardProps }
    ]
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing20: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: [
      { ...Card6.args as TPricingCardProps },
      { ...Card6.args as TPricingCardProps },
      { ...Card6.args as TPricingCardProps }
    ]
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing23: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: {
      monthly: [
        { ...Card2.args as TPricingCardProps },
        { ...Card2.args as TPricingCardProps },
        { ...Card2.args as TPricingCardProps }
      ],
      yearly: [
        { ...Card2.args as TPricingCardProps },
        { ...Card2.args as TPricingCardProps },
        { ...Card2.args as TPricingCardProps }
      ]
    }
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing24: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: {
      monthly: [
        { ...Card4.args as TPricingCardProps },
        { ...Card4.args as TPricingCardProps },
        { ...Card4.args as TPricingCardProps }
      ],
      yearly: [
        { ...Card4.args as TPricingCardProps },
        { ...Card4.args as TPricingCardProps },
        { ...Card4.args as TPricingCardProps }
      ]
    }
  },
  parameters: excludedParams([ 'isCondensed' ])
};

export const Pricing25: StoryObj<typeof PricingLayout1> = {
  render: ( args: TPricingLayout1Props ) => (
    <PricingLayout1 { ...args } />
  ),
  args: {
    content: {
      tagline: 'Tagline',
      title: 'Pricing plan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    pricing: {
      monthly: [
        { ...Card5.args as TPricingCardProps },
        { ...Card5.args as TPricingCardProps },
        { ...Card5.args as TPricingCardProps }
      ],
      yearly: [
        { ...Card5.args as TPricingCardProps },
        { ...Card5.args as TPricingCardProps },
        { ...Card5.args as TPricingCardProps }
      ]
    }
  },
  parameters: excludedParams([ 'isCondensed' ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof PricingLayout1> = {
  component: PricingLayout1,
  tags: ['autodocs'],
  argTypes: {
    content: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isCondensed: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    pricing: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
