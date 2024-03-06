// Components
import { ValueAddedBarLayout7 } from './value-added-bar-layout-7';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TValueAddedBarLayout7Props } from './value-added-bar-layout-7.definitions';

// ----------------------------------------------------- //

// Story
export const Banners13: StoryObj<typeof ValueAddedBarLayout7> = {
  render: ( args: TValueAddedBarLayout7Props ) => (
    <div style={{ padding: '70vh 0' }}>
      <ValueAddedBarLayout7 { ...args } />
    </div>
  ),
  args: {
    text: 'Medium length banner heading goes here'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof ValueAddedBarLayout7> = {
  component: ValueAddedBarLayout7,
  tags: ['autodocs'],
  argTypes: {
    text: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
