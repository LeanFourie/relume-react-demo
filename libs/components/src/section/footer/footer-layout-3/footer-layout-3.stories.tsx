// Components
import { FooterLayout3 } from './footer-layout-3';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TFooterLayout3Props } from './footer-layout-3.definitions';

// ----------------------------------------------------- //

// Story
export const Footer3: StoryObj<typeof FooterLayout3> = {
  render: ( args: TFooterLayout3Props ) => (
    <FooterLayout3 { ...args } />
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
const meta: Meta<typeof FooterLayout3> = {
  component: FooterLayout3,
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
