// Components
import { VariantOptions } from './variant-options';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TVariantOptionsProps } from './variant-options.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof VariantOptions> = {
  render: ( args: TVariantOptionsProps ) => (
    <VariantOptions { ...args } />
  ),
  args: {
    options: [ ...Array( 3 ) ].map(( _, index: number ) => ({
      id: `option-${ index + 1 }`,
      label: `Option ${ index + 1 }`
    })),
    selectedOption: undefined,
    title: 'Variant options'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof VariantOptions> = {
  component: VariantOptions,
  tags: ['autodocs'],
  argTypes: {
    options: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    returnSelectedOption: { action: 'change' },
    selectedOption: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    title: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
