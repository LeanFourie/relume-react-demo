import { render } from '@testing-library/react';

import ProductHeaderLayout5 from './product-header-layout-5';

describe('ProductHeaderLayout5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductHeaderLayout5 />);
    expect(baseElement).toBeTruthy();
  });
});
