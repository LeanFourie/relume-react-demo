// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { TeamLayout1 } from './team-layout-1';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type {
  TTeamLayout1EmployeeItem,
  TTeamLayout1Props
} from './team-layout-1.definitions';

// ----------------------------------------------------- //

// Variables
const leadingContent: TTeamLayout1Props[ 'leadingContent' ] = {
  tagline: 'Tagline',
  title: 'Our team',
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};

const ctaContent: TTeamLayout1Props[ 'ctaContent' ] = {
  title: 'We’re hiring!',
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  action: {
    accessibleLabel: '',
    label: 'Button',
    onClick: () => {},
    type: 'text'
  }
};

const employee: TTeamLayout1EmployeeItem = {
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
export const Team1: StoryObj<typeof TeamLayout1> = {
  render: ( args: TTeamLayout1Props ) => (
    <TeamLayout1 { ...args } />
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 8 ) ].map( _ => employee ),
    textAlign: 'center',
    useCards: false,
    columns: 4
  },
  parameters: excludedParams([
    'columns',
    'textAlign',
    'useCards'
  ])
};

export const Team2: StoryObj<typeof TeamLayout1> = {
  render: ( args: TTeamLayout1Props ) => (
    <TeamLayout1 { ...args } />
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 8 ) ].map( _ => employee ),
    textAlign: 'center',
    useCards: true,
    columns: 4
  },
  parameters: excludedParams([
    'columns',
    'textAlign',
    'useCards'
  ])
};

export const Team3: StoryObj<typeof TeamLayout1> = {
  render: ( args: TTeamLayout1Props ) => (
    <TeamLayout1 { ...args } />
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 8 ) ].map( _ => employee ),
    textAlign: 'left',
    useCards: false,
    columns: 4
  },
  parameters: excludedParams([
    'columns',
    'textAlign',
    'useCards'
  ])
};

export const Team4: StoryObj<typeof TeamLayout1> = {
  render: ( args: TTeamLayout1Props ) => (
    <TeamLayout1 { ...args } />
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 8 ) ].map( _ => employee ),
    textAlign: 'left',
    useCards: true,
    columns: 4
  },
  parameters: excludedParams([
    'columns',
    'textAlign',
    'useCards'
  ])
};

export const Team5: StoryObj<typeof TeamLayout1> = {
  render: ( args: TTeamLayout1Props ) => (
    <TeamLayout1 { ...args } />
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 6 ) ].map( _ => employee ),
    textAlign: 'center',
    useCards: false,
    columns: 3
  },
  parameters: excludedParams([
    'columns',
    'textAlign',
    'useCards'
  ])
};

export const Team6: StoryObj<typeof TeamLayout1> = {
  render: ( args: TTeamLayout1Props ) => (
    <TeamLayout1 { ...args } />
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 6 ) ].map( _ => employee ),
    textAlign: 'center',
    useCards: true,
    columns: 3
  },
  parameters: excludedParams([
    'columns',
    'textAlign',
    'useCards'
  ])
};

export const Team7: StoryObj<typeof TeamLayout1> = {
  render: ( args: TTeamLayout1Props ) => (
    <TeamLayout1 { ...args } />
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 6 ) ].map( _ => employee ),
    textAlign: 'left',
    useCards: false,
    columns: 3
  },
  parameters: excludedParams([
    'columns',
    'textAlign',
    'useCards'
  ])
};

export const Team8: StoryObj<typeof TeamLayout1> = {
  render: ( args: TTeamLayout1Props ) => (
    <TeamLayout1 { ...args } />
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 6 ) ].map( _ => employee ),
    textAlign: 'left',
    useCards: true,
    columns: 3
  },
  parameters: excludedParams([
    'columns',
    'textAlign',
    'useCards'
  ])
};

export const Team11: StoryObj<typeof TeamLayout1> = {
  render: ( args: TTeamLayout1Props ) => (
    <TeamLayout1 { ...args } />
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 4 ) ].map( _ => employee ),
    textAlign: 'center',
    useCards: false,
    columns: 2
  },
  parameters: excludedParams([
    'columns',
    'textAlign',
    'useCards'
  ])
};

export const Team12: StoryObj<typeof TeamLayout1> = {
  render: ( args: TTeamLayout1Props ) => (
    <TeamLayout1 { ...args } />
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 4 ) ].map( _ => employee ),
    textAlign: 'center',
    useCards: true,
    columns: 2
  },
  parameters: excludedParams([
    'columns',
    'textAlign',
    'useCards'
  ])
};

export const Team13: StoryObj<typeof TeamLayout1> = {
  render: ( args: TTeamLayout1Props ) => (
    <TeamLayout1 { ...args } />
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 4 ) ].map( _ => employee ),
    textAlign: 'left',
    useCards: false,
    columns: 2
  },
  parameters: excludedParams([
    'columns',
    'textAlign',
    'useCards'
  ])
};

export const Team14: StoryObj<typeof TeamLayout1> = {
  render: ( args: TTeamLayout1Props ) => (
    <TeamLayout1 { ...args } />
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 4 ) ].map( _ => employee ),
    textAlign: 'left',
    useCards: true,
    columns: 2
  },
  parameters: excludedParams([
    'columns',
    'textAlign',
    'useCards'
  ])
};

export const Team15: StoryObj<typeof TeamLayout1> = {
  render: ( args: TTeamLayout1Props ) => (
    <TeamLayout1 { ...args } />
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 4 ) ].map( _ => employee ),
    textAlign: 'left',
    useCards: false,
    columns: 2,
    employeeContentStack: 'horizontal'
  },
  parameters: excludedParams([
    'columns',
    'textAlign',
    'useCards'
  ])
};

export const Team16: StoryObj<typeof TeamLayout1> = {
  render: ( args: TTeamLayout1Props ) => (
    <TeamLayout1 { ...args } />
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 4 ) ].map( _ => employee ),
    textAlign: 'left',
    useCards: true,
    columns: 2,
    employeeContentStack: 'horizontal'
  },
  parameters: excludedParams([
    'columns',
    'textAlign',
    'useCards'
  ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof TeamLayout1> = {
  component: TeamLayout1,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      table: { defaultValue: { summary: 3 } },
      defaultValue: 3
    },
    ctaContent: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    employeeContentStack: {
      table: { defaultValue: { summary: 'vertical' } },
      defaultValue: 'vertical'
    },
    employees: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    leadingContent: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    textAlign: {
      table: { defaultValue: { summary: 'left' } },
      defaultValue: 'left'
    },
    useCards: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    }
  }
};

export default meta;
