// Components
import { ProductHeaderLayout9 } from './product-header-layout-9';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TProductHeaderLayout9Props } from './product-header-layout-9.definitions';

// ----------------------------------------------------- //

// Story
export const ProductHeader9: StoryObj<typeof ProductHeaderLayout9> = {
  render: ( args: TProductHeaderLayout9Props ) => (
    <ProductHeaderLayout9 { ...args } />
  ),
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
    details: [ ...Array( 8 ) ].map(( _, index: number ) => ({
      heading: `Details ${ index + 1 }`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
    })),
    includes: [ ...Array( 8 ) ].map( _ => 'Feature text goes here' ),
    name: 'Digital product name',
    note: '30-Day Money-Back Guarantee',
    onAddToCartClick: () => {},
    onBuyNowClick: () => {},
    price: {
      default: 50,
      discount: 50,
      sale: 25
    },
    rating: 3.5,
    reviews: 10,
    video: {
      autoPlay: false,
      className: '',
      fit: 'contain',
      videoUri: '/videos/video_placeholder-ocean.mp4'
    }
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof ProductHeaderLayout9> = {
  component: ProductHeaderLayout9,
  tags: ['autodocs'],
  argTypes: {
    description: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    details: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    includes: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    name: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    note: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    onAddToCartClick: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    onBuyNowClick: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    price: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    rating: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    reviews: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    video: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
