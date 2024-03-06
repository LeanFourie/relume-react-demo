import { render } from '@testing-library/react';

import PricingLayout1 from './pricing-layout-1';

describe('PricingLayout1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingLayout1 />);
    expect(baseElement).toBeTruthy();
  });
});
