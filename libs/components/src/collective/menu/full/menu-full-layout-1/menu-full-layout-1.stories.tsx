// Components
import { MenuFullLayout1 } from './menu-full-layout-1';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TMenuFullLayout1Props } from './menu-full-layout-1.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof MenuFullLayout1> = {
  render: ( args: TMenuFullLayout1Props ) => (
    <MenuFullLayout1 { ...args } />
  ),
  args: {
    contactUrl: '#',
    links: [ ...Array( 6 ) ].map(( _, index: number ) => ({
      label: `Link ${ index + 1 }`,
      url: '#'
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
const meta: Meta<typeof MenuFullLayout1> = {
  component: MenuFullLayout1,
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
