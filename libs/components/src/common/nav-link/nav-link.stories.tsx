// Packages & Modules
import { excludedParams } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { NavLink } from './nav-link';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TNavLinkProps } from './nav-link.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: TNavLinkProps = {
  isHovering: false,
  label: 'Nav link',
  url: '#'
};

// ----------------------------------------------------- //

// Story
export const WithoutChildren: StoryObj<typeof NavLink> = {
  render: ( args: TNavLinkProps ) => (
    <NavLink { ...args } />
  ),
  args: { ...defaultArgs },
  parameters: excludedParams([ 'links' ])
};

export const WithChildren: StoryObj<typeof NavLink> = {
  render: ( args: TNavLinkProps ) => (
    <NavLink { ...args } />
  ),
  args: {
    ...defaultArgs,
    links: [ ...Array( 6 ) ].map(( _, idx: number ) => ({
      label: `Page ${ idx + 1 }`,
      description: 'Lorem ipsum dolor sit amet consectetur elit',
      url: '#',
      icon: {
        name: 'home',
        type: 'text'
      }
    }))
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof NavLink> = {
  component: NavLink,
  tags: ['autodocs'],
  argTypes: {
    isHovering: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    label: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    links: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    url: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
