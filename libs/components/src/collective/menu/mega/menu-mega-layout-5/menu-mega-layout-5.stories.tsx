// Components
import { MenuMegaLayout5 } from './menu-mega-layout-5';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TMenuMegaLayout5Props } from './menu-mega-layout-5.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof MenuMegaLayout5> = {
  render: ( args: TMenuMegaLayout5Props ) => (
    <MenuMegaLayout5 { ...args } />
  ),
  args: {
    cta: {
      label: 'Sign up for free',
      text: 'Ready to get started?',
      url: '#'
    },
    linkGroups: [ ...Array( 4 ) ].map(( _, index: number ) => ({
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
const meta: Meta<typeof MenuMegaLayout5> = {
  component: MenuMegaLayout5,
  tags: ['autodocs'],
  argTypes: {
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
