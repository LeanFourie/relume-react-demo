// Packages & Modules
import { WindowProvider } from '@relume-demo/providers';

// ----------------------------------------------------- //

// Components
import { HeroLayout17 } from './hero-layout-17';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { THeroLayout17Props } from './hero-layout-17.definitions';

// ----------------------------------------------------- //

// Story
export const HeroHeader102: StoryObj<typeof HeroLayout17> = {
  render: ( args: THeroLayout17Props ) => (
    <WindowProvider>
      <HeroLayout17 { ...args } />
    </WindowProvider>
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
    slides: [ ...Array( 3 ) ].map(( _, index: number ) => ({
      title: `Short heading goes here ${ index + 1 }`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: {
        alt: '',
        src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    })),
    title: 'Medium length hero headline goes here'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof HeroLayout17> = {
  component: HeroLayout17,
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
    slides: {
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
