// Packages & Modules
import { WindowProvider } from '@relume-demo/providers';

// ----------------------------------------------------- //

// Components

// ----------------------------------------------------- //
import { ProductHeaderLayout6 } from './product-header-layout-6';

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TProductHeaderLayout6Props } from './product-header-layout-6.definitions';

// ----------------------------------------------------- //

// Story
export const ProductHeader6: StoryObj<typeof ProductHeaderLayout6> = {
  render: ( args: TProductHeaderLayout6Props ) => (
    <WindowProvider>
      <div style={{ padding: '0 0 80vh' }}>
        <ProductHeaderLayout6 { ...args } />
      </div>
    </WindowProvider>
  ),
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    details: 'Details ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    images: [
      {
        alt: '',
        src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        alt: '',
        src: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        alt: '',
        src: 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        alt: '',
        src: 'https://images.unsplash.com/photo-1485955891060-a3318433e95f?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        alt: '',
        src: 'https://images.unsplash.com/photo-1584794171574-fe3f84b43838?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ],
    name: 'Product name',
    onAddToCartClick: () => {},
    onBuyNowClick: () => {},
    price: {
      default: 50.00,
      discount: 50,
      sale: 25.00
    },
    returns: 'Returns ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    shipping: 'Shipping ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    badges: [
      { label: 'Free shipping', color: 'success', shade: 'dark' },
      { label: 'Low stock', color: 'warning', shade: 'dark' },
      { label: 'Another badge', color: 'primary', shade: 'dark' },
    ],
    maxQtySelect: 90,
    note: 'Free shipping over R50',
    rating: 3.5,
    reviews: 10,
    variants: [
      {
        title: 'Variant',
        options: [
          { label: 'Option 1', id: 'option-1' },
          { label: 'Option 2', id: 'option-2' },
          { label: 'Option 3', id: 'option-3' },
          { label: 'Option 4', id: 'option-4' },
          { label: 'Option 5', id: 'option-5' }
        ]
      },
      {
        title: 'Color',
        options: [
          { label: 'Red', id: 'red' },
          { label: 'Blue', id: 'blue' },
          { label: 'Green', id: 'green' }
        ]
      }
    ]
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof ProductHeaderLayout6> = {
  component: ProductHeaderLayout6,
  tags: ['autodocs'],
  argTypes: {
    badges: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    description: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    details: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    images: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    maxQtySelect: {
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
    returns: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    reviews: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    shipping: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    variants: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
