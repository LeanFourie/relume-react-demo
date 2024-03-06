// Components
import { MenuMegaLayout6 } from './menu-mega-layout-6';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TMenuMegaLayout6Props } from './menu-mega-layout-6.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof MenuMegaLayout6> = {
  render: ( args: TMenuMegaLayout6Props ) => (
    <MenuMegaLayout6 { ...args } />
  ),
  args: {
    featuredLinks: [ ...Array( 6 ) ].map(( _, index: number ) => ({
      description: 'Lorem ipsum dolor sit amet consectetur elit',
      image: {
        alt: '',
        src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      title: `Page ${ index + 1 }`,
      url: '#'
    })),
    linkGroups: [
      {
        title: 'Pages',
        links: [ ...Array( 5 ) ].map(( _, idx: number ) => ({
          label: `Page ${ idx + 1 }`,
          description: 'Lorem ipsum dolor sit amet consectetur elit',
          url: '#',
          icon: {
            name: 'home',
            type: 'text'
          }
        }))
      }
    ]
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof MenuMegaLayout6> = {
  component: MenuMegaLayout6,
  tags: ['autodocs'],
  argTypes: {
    featuredLinks: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    linkGroups: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
