import { render } from '@testing-library/react';

import ProductHeaderLayout3 from './product-header-layout-3';

describe('ProductHeaderLayout3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductHeaderLayout3 />);
    expect(baseElement).toBeTruthy();
  });
});
