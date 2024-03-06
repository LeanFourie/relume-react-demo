// Components
import { Map } from './map';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TMapProps } from './map.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof Map> = {
  render: ( args: TMapProps ) => (
    <div style={{
      width: '100vw',
      height: '100vh'
    }}>
      <Map { ...args } />
    </div>
  ),
  args: {
    lat: -25.752309,
    long: 28.191281
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Map> = {
  component: Map,
  tags: ['autodocs'],
  argTypes: {
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    lat: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    long: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
