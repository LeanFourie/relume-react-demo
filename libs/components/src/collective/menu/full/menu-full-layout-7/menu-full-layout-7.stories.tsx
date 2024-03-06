// Components
import { MenuFullLayout7 } from './menu-full-layout-7';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TMenuFullLayout7Props } from './menu-full-layout-7.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof MenuFullLayout7> = {
  render: ( args: TMenuFullLayout7Props ) => (
    <MenuFullLayout7 { ...args } />
  ),
  args: {
    address: '123 Some Street, ZA, 0081',
    contactForm: {
      onSubmit: () => {},
      paragraph: 'Lorem ipsum dolor sit amet, consectetur.',
      termsLinkUrl: '#',
      title: 'Contact us'
    },
    contactNumber: '012 345 6789',
    email: 'hello@relumedemo.co.za',
    links: [ ...Array( 10 ) ].map(( _, index: number ) => ({
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
const meta: Meta<typeof MenuFullLayout7> = {
  component: MenuFullLayout7,
  tags: ['autodocs'],
  argTypes: {
    address: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    contactForm: {
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
    socials: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;