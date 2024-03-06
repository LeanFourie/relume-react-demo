import { render } from '@testing-library/react';

import ProductHeaderLayout4 from './product-header-layout-4';

describe('ProductHeaderLayout4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductHeaderLayout4 />);
    expect(baseElement).toBeTruthy();
  });
});
