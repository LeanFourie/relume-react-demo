// Packages & Modules
import { WindowProvider } from '@relume-demo/providers';

// ----------------------------------------------------- //

// Components
import { Tabs } from './tabs';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TTabsProps } from './tabs.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof Tabs> = {
  render: ( args: TTabsProps ) => (
    <WindowProvider>
      <Tabs { ...args } />
    </WindowProvider>
  ),
  args: {
    tabs: [ ...Array( 3 ) ].map(( _, index: number ) => ({
      label: `Tab ${ index + 1 }`,
      content: (
        <p>
          { index + 1 }. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      )
    }))
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    activeTab: {
      table: { defaultValue: { summary: 0 } },
      defaultValue: 0
    },
    isDisabled: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    isSkeleton: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    }
  }
};

export default meta;
