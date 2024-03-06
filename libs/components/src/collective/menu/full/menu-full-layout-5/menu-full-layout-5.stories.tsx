// Components
import { MenuFullLayout5 } from './menu-full-layout-5';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TMenuFullLayout5Props } from './menu-full-layout-5.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof MenuFullLayout5> = {
  render: ( args: TMenuFullLayout5Props ) => (
    <MenuFullLayout5 { ...args } />
  ),
  args: {
    address: '123 Some Street, ZA, 0081',
    contactNumber: '012 345 6789',
    email: 'hello@relumedemo.co.za',
    links: [ ...Array( 10 ) ].map(( _, index: number ) => ({
      label: `Link ${ index + 1 }`,
      url: '#'
    })),
    newsletter: {
      message: 'Join our newsletter to stay up to date on features and releases.',
      onSubmit: () => {},
      title: 'Subscribe'
    },
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
const meta: Meta<typeof MenuFullLayout5> = {
  component: MenuFullLayout5,
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
    newsletter: {
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
