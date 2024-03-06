// Packages & Modules
import { WindowProvider } from '@relume-demo/providers';
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { TeamLayout2 } from './team-layout-2';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type {
  TTeamLayout2EmployeeItem,
  TTeamLayout2Props
} from './team-layout-2.definitions';

// ----------------------------------------------------- //

// Variables
const leadingContent: TTeamLayout2Props[ 'leadingContent' ] = {
  tagline: 'Tagline',
  title: 'Our team',
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};

const ctaContent: TTeamLayout2Props[ 'ctaContent' ] = {
  title: 'We’re hiring!',
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  action: {
    accessibleLabel: '',
    label: 'Button',
    onClick: () => {},
    type: 'text'
  }
};

const employee: TTeamLayout2EmployeeItem = {
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
export const Team9: StoryObj<typeof TeamLayout2> = {
  render: ( args: TTeamLayout2Props ) => (
    <WindowProvider>
      <TeamLayout2 { ...args } />
    </WindowProvider>
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 9 ) ].map( _ => employee ),
    useCards: false
  },
  parameters: excludedParams([ 'useCards' ])
};

export const Team10: StoryObj<typeof TeamLayout2> = {
  render: ( args: TTeamLayout2Props ) => (
    <WindowProvider>
      <TeamLayout2 { ...args } />
    </WindowProvider>
  ),
  args: {
    leadingContent,
    ctaContent,
    employees: [ ...Array( 9 ) ].map( _ => employee ),
    useCards: true
  },
  parameters: excludedParams([ 'useCards' ])
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof TeamLayout2> = {
  component: TeamLayout2,
  tags: ['autodocs'],
  argTypes: {
    ctaContent: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    employees: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    leadingContent: {
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
