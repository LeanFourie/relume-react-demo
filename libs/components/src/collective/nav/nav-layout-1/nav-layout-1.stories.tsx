// Packages & Modules
import { WindowProvider } from '@relume-demo/providers';

// Components
import { NavLayout1 } from './nav-layout-1';

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TNavLayout1Props } from './nav-layout-1.definitions';

// Story
export const Story: StoryObj<typeof NavLayout1> = {
  render: ( args: TNavLayout1Props ) => (
    <WindowProvider>
      <NavLayout1 { ...args } />
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
    floatType: 'none',
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
    })),
    linksPosition: 'right',
    logoUri: '/images/image-relume_demo-logo.svg'
  }
};

// Meta
const meta: Meta<typeof NavLayout1> = {
  component: NavLayout1,
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
    floatType: {
      table: { defaultValue: { summary: 'none' } },
      defaultValue: 'none'
    },
    links: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    linksPosition: {
      table: { defaultValue: { summary: 'right' } },
      defaultValue: 'right',
      options: [
        'left',
        'center',
        'right'
      ]
    },
    logoUri: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
