import { render } from '@testing-library/react';

import ProductHeaderLayout7 from './product-header-layout-7';

describe('ProductHeaderLayout7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductHeaderLayout7 />);
    expect(baseElement).toBeTruthy();
  });
});
