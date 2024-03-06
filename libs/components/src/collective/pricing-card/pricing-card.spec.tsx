import { render } from '@testing-library/react';

import PricingCard from './pricing-card';

describe('PricingCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingCard />);
    expect(baseElement).toBeTruthy();
  });
});
