// Components
import { EmployeeCard } from './employee-card';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TEmployeeCardProps } from './employee-card.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof EmployeeCard> = {
  render: ( args: TEmployeeCardProps ) => (
    <EmployeeCard { ...args } />
  ),
  args: {
    alignContent: 'center',
    name: 'Full name',
    jobTitle: 'Job Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    photo: {
      alt: '',
      src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
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
      }
    ]
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof EmployeeCard> = {
  component: EmployeeCard,
  tags: ['autodocs'],
  argTypes: {
    alignContent: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: 'left',
      options: [
        'left',
        'center'
      ]
    },
    name: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    jobTitle: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    description: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    photo: {
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
