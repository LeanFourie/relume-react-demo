// Packages & Modules
import { WindowProvider } from '@relume-demo/providers';

// ----------------------------------------------------- //

// Components
import { HeroLayout14 } from './hero-layout-14';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { THeroLayout14Props } from './hero-layout-14.definitions';

// ----------------------------------------------------- //

// Story
export const HeroHeader80: StoryObj<typeof HeroLayout14> = {
  render: ( args: THeroLayout14Props ) => (
    <WindowProvider>
      <div style={{ padding: '0 0 100vh'}}>
        <HeroLayout14 { ...args } />
      </div>
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
    images: [
      {
        alt: '',
        src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        alt: '',
        src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        alt: '',
        src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        alt: '',
        src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        alt: '',
        src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        alt: '',
        src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ],
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    title: 'Medium length hero headline goes here'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof HeroLayout14> = {
  component: HeroLayout14,
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