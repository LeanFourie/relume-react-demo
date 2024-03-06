// Packages & Modules
import {
  excludedParams,
  stackOptions
} from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { PostCard } from './post-card';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TPostCardProps } from './post-card.definitions';

// ----------------------------------------------------- //

// Story
export const Card1: StoryObj<typeof PostCard> = {
  render: ( args: TPostCardProps ) => (
    <PostCard { ...args } />
  ),
  args: {
    category: 'Category',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    image: {
      alt: '',
      src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    timeToRead: '5 min',
    title: 'Blog title heading will go here',
    url: '#',
    isOutlined: false,
    author: {
      photo: {
        alt: '',
        src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      fullName: 'Author Name'
    },
    date: new Date(),
    stackDirection: 'vertical'
  },
  parameters: excludedParams([
    'hideExcerpt',
    'ctaLabel'
  ])
};

export const Card2: StoryObj<typeof PostCard> = {
  render: ( args: TPostCardProps ) => (
    <PostCard { ...args } />
  ),
  args: {
    category: 'Category',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    image: {
      alt: '',
      src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    timeToRead: '5 min',
    title: 'Blog title heading will go here',
    url: '#',
    ctaLabel: 'Read more',
    isOutlined: false,
    stackDirection: 'vertical'
  },
  parameters: excludedParams([
    'author',
    'date',
    'hideExcerpt'
  ])
};

export const Card3: StoryObj<typeof PostCard> = {
  render: ( args: TPostCardProps ) => (
    <PostCard { ...args } />
  ),
  args: {
    ...Card1.args,
    isOutlined: true
  },
  parameters: excludedParams([
    'hideExcerpt',
    'ctaLabel'
  ])
};

export const Card4: StoryObj<typeof PostCard> = {
  render: ( args: TPostCardProps ) => (
    <PostCard { ...args } />
  ),
  args: {
    ...Card2.args,
    isOutlined: true
  },
  parameters: excludedParams([
    'author',
    'date',
    'hideExcerpt'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof PostCard> = {
  component: PostCard,
  tags: ['autodocs'],
  argTypes: {
    category: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    classNames: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    excerpt: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    hideExcerpt: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    image: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    stackDirection: {
      table: { defaultValue: { summary: 'vertical' } },
      defaultValue: 'vertical',
      options: stackOptions
    },
    timeToRead: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    title: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isOutlined: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    }
  }
};

export default meta;
