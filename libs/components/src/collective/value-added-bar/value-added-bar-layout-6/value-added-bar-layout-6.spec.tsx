import { render } from '@testing-library/react';

import ValueAddedBarLayout6 from './value-added-bar-layout-6';

describe('ValueAddedBarLayout6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ValueAddedBarLayout6 />);
    expect(baseElement).toBeTruthy();
  });
});
