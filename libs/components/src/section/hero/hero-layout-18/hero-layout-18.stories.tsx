// Packages & Modules
import { WindowProvider } from '@relume-demo/providers';

// ----------------------------------------------------- //

// Components
import { HeroLayout18 } from './hero-layout-18';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { THeroLayout18Props } from './hero-layout-18.definitions';

// ----------------------------------------------------- //

// Story
export const HeroHeader103: StoryObj<typeof HeroLayout18> = {
  render: ( args: THeroLayout18Props ) => (
    <WindowProvider>
      <HeroLayout18 { ...args } />
    </WindowProvider>
  ),
  args: {
    slides: [ ...Array( 4 ) ].map(( _, index: number ) => ({
      tagline: `Tab ${ index + 1 }`,
      title: `Medium length hero headline goes here ${ index + 1 }`,
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      image: {
        alt: '',
        src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
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
    }))
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof HeroLayout18> = {
  component: HeroLayout18,
  tags: ['autodocs'],
  argTypes: {
    slides: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
