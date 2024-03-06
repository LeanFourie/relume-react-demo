// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { TestimonialCard } from './testimonial-card';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type {
  ITestimonialCard,
  TTestimonialCardProps
} from './testimonial-card.definitions';

// ----------------------------------------------------- //

// Varaibles
const cardContent: ITestimonialCard = {
  client: {
    company: 'Relume Demo',
    name: 'John Doe',
    photo: {
      alt: '',
      src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    position: 'UX / UI Designer'
  },
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.'
};

// ----------------------------------------------------- //

// Story
export const WithRating: StoryObj<typeof TestimonialCard> = {
  render: ( args: TTestimonialCardProps ) => (
    <TestimonialCard { ...args } />
  ),
  args: {
    ...cardContent,
    rating: 4
  },
  parameters: excludedParams([
    'link',
    'logo'
  ])
};

export const WithLogo: StoryObj<typeof TestimonialCard> = {
  render: ( args: TTestimonialCardProps ) => (
    <TestimonialCard { ...args } />
  ),
  args: {
    ...cardContent,
    logo: {
      alt: '',
      src: '/images/image-relume_demo-logo.svg'
    }
  },
  parameters: excludedParams([ 'link' ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof TestimonialCard> = {
  component: TestimonialCard,
  tags: ['autodocs'],
  argTypes: {
    client: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    link: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    message: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
