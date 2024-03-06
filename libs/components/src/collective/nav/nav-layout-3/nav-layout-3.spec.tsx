import { render } from '@testing-library/react';

import NavLayout3 from './nav-layout-3';

describe('NavLayout3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavLayout3 />);
    expect(baseElement).toBeTruthy();
  });
});
