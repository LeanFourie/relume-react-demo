import { render } from '@testing-library/react';

import ProductHeaderLayout6 from './product-header-layout-6';

describe('ProductHeaderLayout6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductHeaderLayout6 />);
    expect(baseElement).toBeTruthy();
  });
});
