// Components
import { MenuMegaLayout4 } from './menu-mega-layout-4';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TMenuMegaLayout4Props } from './menu-mega-layout-4.definitions';

// Story
export const Story: StoryObj<typeof MenuMegaLayout4> = {
  render: ( args: TMenuMegaLayout4Props ) => (
    <MenuMegaLayout4 { ...args } />
  ),
  args: {
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
const meta: Meta<typeof MenuMegaLayout4> = {
  component: MenuMegaLayout4,
  tags: ['autodocs'],
  argTypes: {
    linkGroups: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
