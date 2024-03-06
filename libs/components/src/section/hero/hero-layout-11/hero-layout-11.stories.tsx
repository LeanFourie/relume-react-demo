// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { HeroLayout11 } from './hero-layout-11';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { THeroLayout11Props } from './hero-layout-11.definitions';

// ----------------------------------------------------- //

// Story
export const HeroHeader76: StoryObj<typeof HeroLayout11> = {
  render: ( args: THeroLayout11Props ) => (
    <div style={{ padding: '0 0 100vh'}}>
      <HeroLayout11 { ...args } />
    </div>
  ),
  args: {
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
    images: [ ...Array( 6 ) ].map( _ => ({
      alt: '',
      src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    })),
    imageStackDirection: 'vertical',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    title: 'Medium length hero headline goes here'
  },
  parameters: excludedParams([ 'imageStackDirection' ])
};

export const HeroHeader77: StoryObj<typeof HeroLayout11> = {
  render: ( args: THeroLayout11Props ) => (
    <div style={{ padding: '0 0 100vh'}}>
      <HeroLayout11 { ...args } />
    </div>
  ),
  args: {
    ...HeroHeader76.args,
    imageStackDirection: 'horizontal'
  },
  parameters: excludedParams([ 'imageStackDirection' ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof HeroLayout11> = {
  component: HeroLayout11,
  tags: ['autodocs'],
  argTypes: {
    actions: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    images: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    imageStackDirection: {
      table: { defaultValue: { summary: 'vertical' } },
      defaultValue: 'vertical',
      options: [
        'vertical',
        'horizontal'
      ]
    },
    paragraph: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    title: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
