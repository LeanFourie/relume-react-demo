// Components
import { NewsletterForm } from './newsletter-form';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TNewsletterFormProps } from './newsletter-form.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof NewsletterForm> = {
  render: ( args: TNewsletterFormProps ) => (
    <NewsletterForm { ...args } />
  ),
  args: {}
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof NewsletterForm> = {
  component: NewsletterForm,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submit' },
  }
};

export default meta;
