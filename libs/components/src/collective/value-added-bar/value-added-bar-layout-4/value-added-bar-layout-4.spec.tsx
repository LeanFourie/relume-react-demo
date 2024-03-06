import { render } from '@testing-library/react';

import ValueAddedBarLayout4 from './value-added-bar-layout-4';

describe('ValueAddedBarLayout4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ValueAddedBarLayout4 />);
    expect(baseElement).toBeTruthy();
  });
});
