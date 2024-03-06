// Components
import { Image } from './image';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TImageProps } from './image.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof Image> = {
  render: ( args: TImageProps ) => (
    <Image { ...args } />
  ),
  args: {
    alt: '',
    className: '',
    fit: 'contain',
    src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Image> = {
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    alt: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    fit: {
      table: { defaultValue: { summary: 'contain' } },
      defaultValue: 'contain'
    },
    src: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
