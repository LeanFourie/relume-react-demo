// Packages & Modules
import { WindowProvider } from '@relume-demo/providers';

// Components
import { NavLayout2 } from './nav-layout-2';

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TNavLayout2Props } from './nav-layout-2.definitions';

// Story
export const Story: StoryObj<typeof NavLayout2> = {
  render: ( args: TNavLayout2Props ) => (
    <WindowProvider>
      <NavLayout2 { ...args } />
    </WindowProvider>
  ),
  args: {
    actions: [ ...Array( 2 ) ].map(( _, index: number ) => ({
      onClick: () => {},
      accessibleLabel: '',
      label: 'Button',
      leadingIcon: {
        name: 'home',
        type: 'text'
      },
      type: 'text',
      variant: index === 0 ? 'outlined' : 'filled'
    })),
    className: '',
    logoUri: '/images/image-relume_demo-logo.svg'
  }
};

// Meta
const meta: Meta<typeof NavLayout2> = {
  component: NavLayout2,
  tags: ['autodocs'],
  argTypes: {
    actions: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    logoUri: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
