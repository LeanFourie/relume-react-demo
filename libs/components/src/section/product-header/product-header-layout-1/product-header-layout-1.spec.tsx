import { render } from '@testing-library/react';

import ProductHeaderLayout1 from './product-header-layout-1';

describe('ProductHeaderLayout1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductHeaderLayout1 />);
    expect(baseElement).toBeTruthy();
  });
});
