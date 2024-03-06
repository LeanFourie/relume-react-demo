// Components
import { Tag } from './tag';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TTagProps } from './tag.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof Tag> = {
  render: ( args: TTagProps ) => (
    <Tag { ...args } />
  ),
  args: {
    className: '',
    label: 'Tag',
    url: '#'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    label: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    url: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
