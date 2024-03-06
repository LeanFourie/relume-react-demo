// Components
import { FooterLayout11 } from './footer-layout-11';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TFooterLayout11Props } from './footer-layout-11.definitions';

// ----------------------------------------------------- //

// Story
export const Footer11: StoryObj<typeof FooterLayout11> = {
  render: ( args: TFooterLayout11Props ) => (
    <FooterLayout11 { ...args } />
  ),
  args: {
    address: '123 Some Street, ZA, 0081',
    companyName: 'Relume Demo',
    contactNumber: '012 345 6789',
    emailAddress: 'hello@relumedemo.co.za',
    links: [ ...Array( 2 ) ].map(( _, index: number ) => ({
      links: [ ...Array( 5 ) ].map(( _, idx: number ) => ({
        label: `Link ${ idx + 1 }`,
        url: '#'
      }))
    })),
    logoUri: '/images/image-relume_demo-logo.svg',
    legalLinks: {
      policy: {
        label: 'Privacy Policy',
        url: '#'
      },
      terms: {
        label: 'Terms of Service',
        url: '#'
      },
      cookies: {
        label: 'Cookies Settings',
        url: '#'
      }
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
const meta: Meta<typeof FooterLayout11> = {
  component: FooterLayout11,
  tags: ['autodocs'],
  argTypes: {
    address: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    companyName: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    contactNumber: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    emailAddress: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    links: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    logoUri: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    legalLinks: {
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
