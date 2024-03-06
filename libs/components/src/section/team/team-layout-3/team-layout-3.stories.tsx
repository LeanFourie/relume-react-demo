// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { TeamLayout3 } from './team-layout-3';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type {
  TTeamLayout3EmployeeItem,
  TTeamLayout3Props
} from './team-layout-3.definitions';

// ----------------------------------------------------- //

// Variables
const content: TTeamLayout3Props[ 'content' ] = {
  tagline: 'Tagline',
  title: 'Our team',
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  actions: [{
    accessibleLabel: '',
    label: 'Button',
    onClick: () => {},
    type: 'text'
  }]
};

const employee: TTeamLayout3EmployeeItem = {
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
};

// ----------------------------------------------------- //

// Story
export const Team17: StoryObj<typeof TeamLayout3> = {
  render: ( args: TTeamLayout3Props ) => (
    <TeamLayout3 { ...args } />
  ),
  args: {
    content,
    employees: [ ...Array( 3 ) ].map( _ => employee ),
    useCards: false,
    columns: 2
  },
  parameters: excludedParams([
    'columns',
    'useCards'
  ])
};

export const Team18: StoryObj<typeof TeamLayout3> = {
  render: ( args: TTeamLayout3Props ) => (
    <TeamLayout3 { ...args } />
  ),
  args: {
    content,
    employees: [ ...Array( 3 ) ].map( _ => employee ),
    useCards: true,
    columns: 2
  },
  parameters: excludedParams([
    'columns',
    'useCards'
  ])
};

export const Team19: StoryObj<typeof TeamLayout3> = {
  render: ( args: TTeamLayout3Props ) => (
    <TeamLayout3 { ...args } />
  ),
  args: {
    content,
    employees: [ ...Array( 4 ) ].map( _ => employee ),
    useCards: false,
    columns: 3
  },
  parameters: excludedParams([
    'columns',
    'useCards'
  ])
};

export const Team20: StoryObj<typeof TeamLayout3> = {
  render: ( args: TTeamLayout3Props ) => (
    <TeamLayout3 { ...args } />
  ),
  args: {
    content,
    employees: [ ...Array( 4 ) ].map( _ => employee ),
    useCards: true,
    columns: 3
  },
  parameters: excludedParams([
    'columns',
    'useCards'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof TeamLayout3> = {
  component: TeamLayout3,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      table: { defaultValue: { summary: 2 } },
      defaultValue: 2
    },
    content: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    employees: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    useCards: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    }
  }
};

export default meta;
