import { render } from '@testing-library/react';

import ProductHeaderLayout9 from './product-header-layout-9';

describe('ProductHeaderLayout9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductHeaderLayout9 />);
    expect(baseElement).toBeTruthy();
  });
});
