import { render } from '@testing-library/react';

import PricingLayout2 from './pricing-layout-2';

describe('PricingLayout2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingLayout2 />);
    expect(baseElement).toBeTruthy();
  });
});
