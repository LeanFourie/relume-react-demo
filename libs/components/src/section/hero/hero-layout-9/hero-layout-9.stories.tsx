// Components
import { HeroLayout9 } from './hero-layout-9';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { THeroLayout9Props } from './hero-layout-9.definitions';

// ----------------------------------------------------- //

// Story
export const HeroHeader23: StoryObj<typeof HeroLayout9> = {
  render: ( args: THeroLayout9Props ) => (
    <HeroLayout9 { ...args } />
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
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    title: 'Medium length hero headline goes here'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof HeroLayout9> = {
  component: HeroLayout9,
  tags: ['autodocs'],
  argTypes: {
    actions: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
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
