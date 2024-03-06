import { render } from '@testing-library/react';

import ValueAddedBarLayout7 from './value-added-bar-layout-7';

describe('ValueAddedBarLayout7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ValueAddedBarLayout7 />);
    expect(baseElement).toBeTruthy();
  });
});
