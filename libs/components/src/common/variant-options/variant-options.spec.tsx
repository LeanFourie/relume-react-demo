import { render } from '@testing-library/react';

import VariantOptions from './variant-options';

describe('VariantOptions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VariantOptions />);
    expect(baseElement).toBeTruthy();
  });
});
