// Components
import { Icon } from './icon';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TIconProps } from './icon.definitions';

// ----------------------------------------------------- //

// Story
export const Text: StoryObj<typeof Icon> = {
  render: ( args: TIconProps ) => (
    <Icon { ...args } />
  ),
  args: {
    className: '',
    name: 'home',
    type: 'text'
  },
  parameters: {
    controls: {
      exclude: [ 'uri' ]
    }
  }
};

export const Svg: StoryObj<typeof Icon> = {
  render: ( args: TIconProps ) => (
    <Icon { ...args } />
  ),
  args: {
    className: '',
    type: 'svg',
    uri: 'https://leanfourie.co.za/tools/logo-react.svg'
  },
  parameters: {
    controls: {
      exclude: [ 'name' ]
    }
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    type: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    uri: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    name: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
