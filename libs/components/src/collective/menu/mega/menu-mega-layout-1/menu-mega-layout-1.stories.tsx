// Components
import { MenuMegaLayout1 } from './menu-mega-layout-1';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TMenuMegaLayout1Props } from './menu-mega-layout-1.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof MenuMegaLayout1> = {
  render: ( args: TMenuMegaLayout1Props ) => (
    <MenuMegaLayout1 { ...args } />
  ),
  args: {
    featuredLinks: [
      {
        description: 'Lorem ipsum dolor sit amet consectetur elit',
        image: {
          alt: '',
          src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        title: 'Page 1',
        url: '#'
      },
      {
        description: 'Lorem ipsum dolor sit amet consectetur elit',
        image: {
          alt: '',
          src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        title: 'Page 2',
        url: '#'
      }
    ],
    featuredLinksTitle: 'Featured',
    featuresCTA: {
      label: 'See all',
      url: '#'
    },
    linkGroups: [ ...Array( 2 ) ].map(( _, index: number ) => ({
      title: `Page group ${ index + 1 }`,
      links: [ ...Array( 4 ) ].map(( _, idx: number ) => ({
        label: `Page ${ idx + 1 }`,
        description: 'Lorem ipsum dolor sit amet consectetur elit',
        url: '#',
        icon: {
          name: 'home',
          type: 'text'
        }
      }))
    }))
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof MenuMegaLayout1> = {
  component: MenuMegaLayout1,
  tags: ['autodocs'],
  argTypes: {
    featuredLinks: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    featuredLinksTitle: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    featuresCTA: {
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
