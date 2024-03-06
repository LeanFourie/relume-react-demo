import { render } from '@testing-library/react';

import TestimonialGroup from './testimonial-group';

describe('TestimonialGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestimonialGroup />);
    expect(baseElement).toBeTruthy();
  });
});
