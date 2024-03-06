import { render } from '@testing-library/react';

import ProductHeaderLayout2 from './product-header-layout-2';

describe('ProductHeaderLayout2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductHeaderLayout2 />);
    expect(baseElement).toBeTruthy();
  });
});
