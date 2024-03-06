// Components
import { FooterLayout8 } from './footer-layout-8';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TFooterLayout8Props } from './footer-layout-8.definitions';

// ----------------------------------------------------- //

// Story
export const Footer8: StoryObj<typeof FooterLayout8> = {
  render: ( args: TFooterLayout8Props ) => (
    <FooterLayout8 { ...args } />
  ),
  args: {
    companyName: 'Relume Demo',
    links: [ ...Array( 5 ) ].map(( _, idx: number ) => ({
      label: `Link ${ idx + 1 }`,
      url: '#'
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
      onSubmit: () => {}
    }
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof FooterLayout8> = {
  component: FooterLayout8,
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
    }
  }
};

export default meta;
