// Packages & Modules
import { WindowProvider } from '@relume-demo/providers';

// Components
import { NavLayout3 } from './nav-layout-3';

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TNavLayout3Props } from './nav-layout-3.definitions';

// Story
export const Story: StoryObj<typeof NavLayout3> = {
  render: ( args: TNavLayout3Props ) => (
    <WindowProvider>
      <NavLayout3 { ...args } />
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
    links: [ ...Array( 4 ) ].map(( _, index: number ) => ({
      label: `Link ${ index + 1 }`,
      url: '#',
      links: index >= 2 ?
        [ ...Array( 6 ) ].map(( _, idx: number ) => ({
          label: `Page ${ idx + 1 }`,
          description: 'Lorem ipsum dolor sit amet consectetur elit',
          url: '#',
          icon: {
            name: 'home',
            type: 'text'
          }
        }))
      : undefined
    }))
  }
};

// Meta
const meta: Meta<typeof NavLayout3> = {
  component: NavLayout3,
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
    links: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
