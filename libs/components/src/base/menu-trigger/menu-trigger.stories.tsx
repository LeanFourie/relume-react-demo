// Components
import { MenuTrigger } from './menu-trigger';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TMenuTriggerProps } from './menu-trigger.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof MenuTrigger> = {
  render: ( args: TMenuTriggerProps ) => (
    <MenuTrigger { ...args }>
      Host
    </MenuTrigger>
  ),
  args: {
    onClick: () => {}
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof MenuTrigger> = {
  component: MenuTrigger,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
};

export default meta;
