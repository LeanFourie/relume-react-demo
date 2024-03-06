import { render } from '@testing-library/react';

import NavLayout2 from './nav-layout-2';

describe('NavLayout2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavLayout2 />);
    expect(baseElement).toBeTruthy();
  });
});
