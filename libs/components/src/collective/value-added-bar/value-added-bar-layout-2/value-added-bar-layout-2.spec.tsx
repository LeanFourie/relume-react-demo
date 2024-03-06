import { render } from '@testing-library/react';

import ValueAddedBarLayout2 from './value-added-bar-layout-2';

describe('ValueAddedBarLayout2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ValueAddedBarLayout2 />);
    expect(baseElement).toBeTruthy();
  });
});
