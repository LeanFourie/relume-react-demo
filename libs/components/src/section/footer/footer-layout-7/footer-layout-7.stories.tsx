// Components
import { FooterLayout7 } from './footer-layout-7';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TFooterLayout7Props } from './footer-layout-7.definitions';

// ----------------------------------------------------- //

// Story
export const Footer7: StoryObj<typeof FooterLayout7> = {
  render: ( args: TFooterLayout7Props ) => (
    <FooterLayout7 { ...args } />
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
    }
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof FooterLayout7> = {
  component: FooterLayout7,
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
    }
  }
};

export default meta;
