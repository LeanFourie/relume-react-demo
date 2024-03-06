// Components
import { FooterLayout10 } from './footer-layout-10';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TFooterLayout10Props } from './footer-layout-10.definitions';

// ----------------------------------------------------- //

// Story
export const Footer10: StoryObj<typeof FooterLayout10> = {
  render: ( args: TFooterLayout10Props ) => (
    <FooterLayout10 { ...args } />
  ),
  args: {
    companyName: 'Relume Demo',
    links: [ ...Array( 3 ) ].map(( _, index: number ) => ({
      title: `Column ${ index + 1 }`,
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
    newsletter: {
      title: 'Subscribe',
      description: 'Join our newsletter to stay up to date on features and releases.',
      onSubmit: () => {}
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
const meta: Meta<typeof FooterLayout10> = {
  component: FooterLayout10,
  tags: ['autodocs'],
  argTypes: {
    companyName: {
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
