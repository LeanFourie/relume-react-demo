// Packages & Modules
import { generateSlidesForCarousel } from '@relume-demo/utils';

// ----------------------------------------------------- //

// Components
import { Carousel } from './carousel';

// ----------------------------------------------------- //

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/react';
import type { TCarouselProps } from './carousel.definitions';

// ----------------------------------------------------- //

// Story
export const Story: StoryObj<typeof Carousel> = {
  render: ( args: TCarouselProps ) => (
    <Carousel { ...args }>
      { generateSlidesForCarousel([ ...Array( 3 ) ]).map(( _, index: number ) => (
        <div
          key={ `slide ${ index }` }
          style={{
            padding: '4rem 2rem 8rem'
          }}
        >
          Slide { index === 0 ? 3 : index === 4 ? 1 : index }
        </div>
      ))}
    </Carousel>
  ),
  args: {
    slidesCount: 5,
    infiniteSlides: true,
    hideArrows: false,
    hideControls: false,
    hideDots: false,
    perView: 1
  }
};

// ----------------------------------------------------- //

// Meta
const meta: Meta<typeof Carousel> = {
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    children: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    classNames: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    hideArrows: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    hideControls: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    hideDots: {
      table: { defaultValue: { summary: false } },
      defaultValue: false
    },
    infiniteSlides: {
      table: { defaultValue: { summary: true } },
      defaultValue: true
    },
    perView: {
      table: { defaultValue: { summary: 1 } },
      defaultValue: 1
    },
    slidesCount: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    }
  }
};

export default meta;
