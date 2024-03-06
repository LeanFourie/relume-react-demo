// Components
import { FooterLayout6 } from './footer-layout-6';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TFooterLayout6Props } from './footer-layout-6.definitions';

// ----------------------------------------------------- //

// Story
export const Footer6: StoryObj<typeof FooterLayout6> = {
  render: ( args: TFooterLayout6Props ) => (
    <FooterLayout6 { ...args } />
  ),
  args: {
    companyName: 'Relume Demo',
    links: [ ...Array( 6 ) ].map(( _, index: number ) => ({
      title: `Column ${ index + 1 }`,
      links: [ ...Array( 6 ) ].map(( _, idx: number ) => ({
        label: `Link ${ idx + 1 }`,
        url: '#'
      }))
    })),
    logoUri: '/images/image-relume_demo-logo.svg',
    newsletter: {
      title: 'Subscribe',
      description: 'Join our newsletter to stay up to date on features and releases.',
      onSubmit: () => {}
    }
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof FooterLayout6> = {
  component: FooterLayout6,
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
    newsletter: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
