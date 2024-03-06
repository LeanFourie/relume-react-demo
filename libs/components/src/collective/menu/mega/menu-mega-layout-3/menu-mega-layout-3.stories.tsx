// Components
import { MenuMegaLayout3 } from './menu-mega-layout-3';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TMenuMegaLayout3Props } from './menu-mega-layout-3.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof MenuMegaLayout3> = {
  render: ( args: TMenuMegaLayout3Props ) => (
    <MenuMegaLayout3 { ...args } />
  ),
  args: {
    actions: [
      {
        onClick: () => {},
        accessibleLabel: '',
        label: 'Button',
        leadingIcon: {
          name: 'home',
          type: 'text'
        },
        type: 'text'
      },
      {
        onClick: () => {},
        accessibleLabel: '',
        label: 'Button',
        leadingIcon: {
          name: 'home',
          type: 'text'
        },
        type: 'text'
      }
    ],
    cta: {
      label: 'Sign up for free',
      text: 'Ready to get started?',
      url: '#'
    },
    linkGroups: [ ...Array( 4 ) ].map(( _, index: number ) => ({
      title: `Page group ${ index + 1 }`,
      links: [ ...Array( 4 ) ].map(( _, idx: number ) => ({
        label: `Page ${ idx + 1 }`,
        description: 'Lorem ipsum dolor sit amet consectetur elit',
        url: '#',
        icon: {
          name: 'home',
          type: 'text'
        }
      }))
    }))
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof MenuMegaLayout3> = {
  component: MenuMegaLayout3,
  tags: ['autodocs'],
  argTypes: {
    actions: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    cta: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    linkGroups: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
