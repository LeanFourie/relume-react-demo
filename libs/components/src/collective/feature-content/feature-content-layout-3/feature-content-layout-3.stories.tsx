// Packages & Modules
import { WindowProvider } from '@relume-demo/providers';

// ----------------------------------------------------- //

// Components
import { FeatureContentLayout3 } from './feature-content-layout-3';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TFeatureContentLayout3Props } from './feature-content-layout-3.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof FeatureContentLayout3> = {
  render: ( args: TFeatureContentLayout3Props ) => (
    <WindowProvider>
      <FeatureContentLayout3 { ...args } />
    </WindowProvider>
  ),
  args: {
    tabs: [ ...Array( 3 ) ].map(( _, index: number ) => ({
      title: `Short heading goes here ${ index + 1 }`,
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    }))
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof FeatureContentLayout3> = {
  component: FeatureContentLayout3,
  tags: ['autodocs'],
  argTypes: {
    onTabClick: { action: 'clicked' },
    tabs: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
