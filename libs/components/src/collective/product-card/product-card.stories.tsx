// Components
import { ProductCard } from './product-card';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TProductCardProps } from './product-card.definitions';

// ----------------------------------------------------- //

// Variables
const defaultArgs: TProductCardProps = {
  id: 'Card',
  image: [
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
    }
  ],
  name: 'Product 1',
  onAddToCartClick: () => {},
  onWishlistClick: () => {},
  price: {
    default: 50.00,
    discount: 50,
    sale: 25.00
  },
  badges: [
    { label: 'Free shipping', color: 'success', shade: 'dark' },
    { label: 'Low stock', color: 'warning', shade: 'dark' },
    { label: 'Another badge', color: 'primary', shade: 'dark' },
  ],
  controls: {
    addToCart: true,
    wishlist: false
  },
  description: 'Lorem ipsum dolor sit amet',
  isWishListed: false,
  textAlign: 'left'
};

// ----------------------------------------------------- //

// Story
export const Card1: StoryObj<typeof ProductCard> = {
  render: ( args: TProductCardProps ) => (
    <div style={{ width: '400px' }}>
      <ProductCard { ...args } />
    </div>
  ),
  args: { ...defaultArgs }
};

export const Card2: StoryObj<typeof ProductCard> = {
  render: ( args: TProductCardProps ) => (
    <div style={{ width: '400px' }}>
      <ProductCard { ...args } />
    </div>
  ),
  args: {
    ...defaultArgs,
    textAlign: 'center'
  }
};

export const Card3: StoryObj<typeof ProductCard> = {
  render: ( args: TProductCardProps ) => (
    <div style={{ width: '400px' }}>
      <ProductCard { ...args } />
    </div>
  ),
  args: {
    ...defaultArgs,
    controls: {
      addToCart: false,
      wishlist: false
    }
  }
};

export const Card4: StoryObj<typeof ProductCard> = {
  render: ( args: TProductCardProps ) => (
    <div style={{ width: '400px' }}>
      <ProductCard { ...args } />
    </div>
  ),
  args: {
    ...Card3.args,
    textAlign: 'center'
  }
};

export const Card5: StoryObj<typeof ProductCard> = {
  render: ( args: TProductCardProps ) => (
    <div style={{ width: '400px' }}>
      <ProductCard { ...args } />
    </div>
  ),
  args: {
    ...defaultArgs,
    controls: {
      addToCart: true,
      wishlist: true
    }
  }
};

export const Card6: StoryObj<typeof ProductCard> = {
  render: ( args: TProductCardProps ) => (
    <div style={{ width: '400px' }}>
      <ProductCard { ...args } />
    </div>
  ),
  args: {
    ...Card5.args,
    textAlign: 'center'
  }
};

export const Card7: StoryObj<typeof ProductCard> = {
  render: ( args: TProductCardProps ) => (
    <div style={{ width: '400px' }}>
      <ProductCard { ...args } />
    </div>
  ),
  args: {
    ...defaultArgs,
    controls: {
      addToCart: false,
      wishlist: true
    }
  }
};

export const Card8: StoryObj<typeof ProductCard> = {
  render: ( args: TProductCardProps ) => (
    <div style={{ width: '400px' }}>
      <ProductCard { ...args } />
    </div>
  ),
  args: {
    ...Card7.args,
    textAlign: 'center'
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    badges: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    controls: {
      table: { defaultValue: { summary: { addToCart: true, wishlist: false } } },
      defaultValue: { addToCart: true, wishlist: false }
    },
    description: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    id: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    isWishListed: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    image: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    name: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    onAddToCartClick: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    onWishlistClick: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    price: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    textAlign: {
      table: { defaultValue: { summary: 'left' } },
      defaultValue: 'left',
      options: [
        'left',
        'right'
      ]
    }
  }
};

export default meta;
