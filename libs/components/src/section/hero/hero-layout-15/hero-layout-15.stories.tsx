// Components
import { HeroLayout15 } from './hero-layout-15';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { THeroLayout15Props } from './hero-layout-15.definitions';

// ----------------------------------------------------- //

// Story
export const HeroHeader96: StoryObj<typeof HeroLayout15> = {
  render: ( args: THeroLayout15Props ) => (
    <HeroLayout15 { ...args } />
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
const meta: Meta<typeof HeroLayout15> = {
  component: HeroLayout15,
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
