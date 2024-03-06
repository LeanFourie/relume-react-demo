// Components
import { MenuFullLayout2 } from './menu-full-layout-2';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TMenuFullLayout2Props } from './menu-full-layout-2.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof MenuFullLayout2> = {
  render: ( args: TMenuFullLayout2Props ) => (
    <MenuFullLayout2 { ...args } />
  ),
  args: {
    contactUrl: '#',
    links: [ ...Array( 6 ) ].map(( _, index: number ) => ({
      label: `Link ${ index + 1 }`,
      url: '#',
      image: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    })),
    socials: [
      {
        icon: '/icons/icon-facebook.svg',
        name: 'Facebook',
        url: '#',
        type: 'facebook'
      },
      {
        icon: '/icons/icon-instagram.svg',
        name: 'Instagram',
        url: '#',
        type: 'instagram'
      },
      {
        icon: '/icons/icon-x.svg',
        name: 'X',
        url: '#',
        type: 'x'
      },
      {
        icon: '/icons/icon-linkedin.svg',
        name: 'LinkedIn',
        url: '#',
        type: 'linkedin'
      },
      {
        icon: '/icons/icon-youtube.svg',
        name: 'Youtube',
        url: '#',
        type: 'youtube'
      }
    ]
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof MenuFullLayout2> = {
  component: MenuFullLayout2,
  tags: ['autodocs'],
  argTypes: {
    contactUrl: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    links: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    socials: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
