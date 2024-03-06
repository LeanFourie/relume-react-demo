// Components
import { CtaBannerLayout9 } from './cta-banner-layout-9';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TCtaBannerLayout9Props } from './cta-banner-layout-9.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: TCtaBannerLayout9Props = {
  tagline: 'Tagline',
  links: [ ...Array( 4 ) ].map( ( _, index: number ) => {
    const imageSrc: string =
      index === 0 ? 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      : index === 1 ? 'https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      : index === 2 ? 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      : 'https://images.unsplash.com/photo-1485955891060-a3318433e95f?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    return {
      label: `Hover over link ${ index + 1 }`,
      href: '#',
      image: {
        src: imageSrc,
        alt: ''
      }
    }
  })
};

// ----------------------------------------------------- //

// Story
export const Cta38: StoryObj<typeof CtaBannerLayout9> = {
  render: ( args: TCtaBannerLayout9Props ) => (
    <CtaBannerLayout9 { ...args } />
  ),
  args: { ...defaultArgs }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof CtaBannerLayout9> = {
  component: CtaBannerLayout9,
  tags: ['autodocs'],
  argTypes: {
    links: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    tagline: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
