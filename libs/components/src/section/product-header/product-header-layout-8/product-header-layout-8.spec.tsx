import { render } from '@testing-library/react';

import ProductHeaderLayout8 from './product-header-layout-8';

describe('ProductHeaderLayout8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductHeaderLayout8 />);
    expect(baseElement).toBeTruthy();
  });
});
