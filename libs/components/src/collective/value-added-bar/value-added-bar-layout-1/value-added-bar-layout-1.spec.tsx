import { render } from '@testing-library/react';

import ValueAddedBarLayout1 from './value-added-bar-layout-1';

describe('ValueAddedBarLayout1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ValueAddedBarLayout1 />);
    expect(baseElement).toBeTruthy();
  });
});
