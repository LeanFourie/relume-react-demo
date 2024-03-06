// Components
import { Breadcrumbs } from './breadcrumbs';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof Breadcrumbs> = {
  render: () => <Breadcrumbs />
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  tags: ['autodocs']
};

export default meta;
