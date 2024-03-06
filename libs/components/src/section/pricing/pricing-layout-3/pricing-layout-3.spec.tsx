import { render } from '@testing-library/react';

import PricingLayout3 from './pricing-layout-3';

describe('PricingLayout3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingLayout3 />);
    expect(baseElement).toBeTruthy();
  });
});
