// Components
import { MenuFullLayout4 } from './menu-full-layout-4';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TMenuFullLayout4Props } from './menu-full-layout-4.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof MenuFullLayout4> = {
  render: ( args: TMenuFullLayout4Props ) => (
    <MenuFullLayout4 { ...args } />
  ),
  args: {
    address: '123 Some Street, ZA, 0081',
    contactNumber: '012 345 6789',
    email: 'hello@relumedemo.co.za',
    links: [ ...Array( 6 ) ].map(( _, index: number ) => ({
      label: `Link ${ index + 1 }`,
      url: '#'
    })),
    secondaryLinks: [ ...Array( 4 ) ].map(( _, index: number) => ({
      title: `Column ${ index + 1 }`,
      links: [ ...Array( 5 ) ].map(( _, idx: number ) => ({
        label: `Link ${ idx + 1 }`,
        url: '#'
      }))
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
const meta: Meta<typeof MenuFullLayout4> = {
  component: MenuFullLayout4,
  tags: ['autodocs'],
  argTypes: {
    address: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    contactNumber: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    email: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    links: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    secondaryLinks: {
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
