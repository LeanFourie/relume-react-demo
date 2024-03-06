// Components
import { MenuFullLayout3 } from './menu-full-layout-3';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TMenuFullLayout3Props } from './menu-full-layout-3.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof MenuFullLayout3> = {
  render: ( args: TMenuFullLayout3Props ) => (
    <MenuFullLayout3 { ...args } />
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
const meta: Meta<typeof MenuFullLayout3> = {
  component: MenuFullLayout3,
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
