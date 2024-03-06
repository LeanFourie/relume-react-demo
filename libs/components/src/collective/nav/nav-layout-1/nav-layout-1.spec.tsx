import { render } from '@testing-library/react';

import NavLayout1 from './nav-layout-1';

describe('NavLayout1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavLayout1 />);
    expect(baseElement).toBeTruthy();
  });
});
