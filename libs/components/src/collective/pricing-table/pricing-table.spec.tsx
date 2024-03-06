import { render } from '@testing-library/react';

import PricingTable from './pricing-table';

describe('PricingTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingTable />);
    expect(baseElement).toBeTruthy();
  });
});
