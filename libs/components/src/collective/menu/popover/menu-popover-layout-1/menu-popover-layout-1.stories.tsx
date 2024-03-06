// Components
import { MenuPopoverLayout1 } from './menu-popover-layout-1';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TMenuPopoverLayout1Props } from './menu-popover-layout-1.definitions';

// ----------------------------------------------------- //

// Story
export const SingleGroup: StoryObj<typeof MenuPopoverLayout1> = {
  render: ( args: TMenuPopoverLayout1Props ) => (
    <MenuPopoverLayout1 { ...args } />
  ),
  args: {
    linkGroups: [{
      links: [ ...Array( 4 ) ].map(( _, idx: number ) => ({
        label: `Page ${ idx + 1 }`,
        description: 'Lorem ipsum dolor sit amet consectetur elit',
        url: '#',
        icon: {
          name: 'home',
          type: 'text'
        }
      }))
    }]
  }
};

export const MultiGroup: StoryObj<typeof MenuPopoverLayout1> = {
  render: ( args: TMenuPopoverLayout1Props ) => (
    <MenuPopoverLayout1 { ...args } />
  ),
  args: {
    linkGroups: [ ...Array( 2 ) ].map(( _, index: number ) => ({
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
const meta: Meta<typeof MenuPopoverLayout1> = {
  component: MenuPopoverLayout1,
  tags: ['autodocs'],
  argTypes: {
    linkGroups: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
