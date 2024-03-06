// Components
import { MenuFullLayout6 } from './menu-full-layout-6';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TMenuFullLayout6Props } from './menu-full-layout-6.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof MenuFullLayout6> = {
  render: ( args: TMenuFullLayout6Props ) => (
    <MenuFullLayout6 { ...args } />
  ),
  args: {
    blogPosts: [
      {
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: {
          alt: '',
          src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        title: 'Article Title',
        url: '#'
      },
      {
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: {
          alt: '',
          src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        title: 'Article Title',
        url: '#'
      }
    ],
    blogTitle: 'Featured from Blog',
    blogUrl: '#',
    contactUrl: '#',
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
const meta: Meta<typeof MenuFullLayout6> = {
  component: MenuFullLayout6,
  tags: ['autodocs'],
  argTypes: {
    blogPosts: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    blogTitle: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    blogUrl: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
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
