import { render } from '@testing-library/react';

import ValueAddedBarLayout5 from './value-added-bar-layout-5';

describe('ValueAddedBarLayout5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ValueAddedBarLayout5 />);
    expect(baseElement).toBeTruthy();
  });
});
