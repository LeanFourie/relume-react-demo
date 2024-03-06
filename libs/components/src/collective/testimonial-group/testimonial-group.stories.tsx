// Packages & Modules
import {
  excludedParams,
  stackOptions
} from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { TestimonialGroup } from './testimonial-group';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TTestimonialGroupProps } from './testimonial-group.definitions';

// ----------------------------------------------------- //

// Story
export const WithoutRating: StoryObj<typeof TestimonialGroup> = {
  render: ( args: TTestimonialGroupProps ) => (
    <TestimonialGroup { ...args } />
  ),
  args: {
    align: 'left',
    messageSize: 'heading small',
    stackClientDetails: 'default',
    client: {
      company: 'Relume Demo',
      name: 'John Doe',
      photo: {
        alt: '',
        src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      position: 'UX / UI Designer'
    },
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    logo: {
      alt: '',
      src: '/images/image-relume_demo-logo.svg'
    }
  },
  parameters: excludedParams([ 'rating' ])
};

export const WithRating: StoryObj<typeof TestimonialGroup> = {
  render: ( args: TTestimonialGroupProps ) => (
    <TestimonialGroup { ...args } />
  ),
  args: {
    ...WithoutRating.args,
    rating: 4
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof TestimonialGroup> = {
  component: TestimonialGroup,
  tags: ['autodocs'],
  argTypes: {
    align: {
      table: { defaultValue: { summary: 'left' } },
      defaultValue: 'left',
      options: [
        'left',
        'center'
      ]
    },
    client: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    logo: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    message: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    messageSize: {
      table: { defaultValue: { summary: 'heading small' } },
      defaultValue: 'heading small',
      options: [
        'heading small',
        'heading tiny'
      ]
    },
    rating: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    stackClientDetails: {
      table: { defaultValue: { summary: 'default' } },
      defaultValue: 'default',
      options: [
        'default' ,
        ...stackOptions
      ]
    }
  }
};

export default meta;
