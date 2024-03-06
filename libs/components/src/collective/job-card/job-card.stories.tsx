// Components
import { JobCard } from './job-card';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TJobCardProps } from './job-card.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof JobCard> = {
  render: ( args: TJobCardProps ) => (
    <JobCard { ...args } />
  ),
  args: {
    action: {
      accessibleLabel: '',
      label: 'Apply Now',
      onClick: () => {},
      type: 'text',
      variant: 'outlined'
    },
    classNames: {},
    contractType: {
      icon: {
        name: 'schedule',
        type: 'text'
      },
      label: 'Permanent'
    },
    department: 'Product Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    location: {
      icon: {
        name: 'location_on',
        type: 'text'
      },
      label: 'Pretoria, ZA'
    },
    role: 'UX / UI Designer'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof JobCard> = {
  component: JobCard,
  tags: ['autodocs'],
  argTypes: {
    contractType: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    description: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    location: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    role: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    action: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    classNames: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    department: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
