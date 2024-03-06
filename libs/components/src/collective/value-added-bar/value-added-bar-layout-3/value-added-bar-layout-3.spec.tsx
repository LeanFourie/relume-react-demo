import { render } from '@testing-library/react';

import ValueAddedBarLayout3 from './value-added-bar-layout-3';

describe('ValueAddedBarLayout3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ValueAddedBarLayout3 />);
    expect(baseElement).toBeTruthy();
  });
});
