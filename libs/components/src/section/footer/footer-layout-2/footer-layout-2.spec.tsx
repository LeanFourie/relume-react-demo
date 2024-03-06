import { render } from '@testing-library/react';

import FooterLayout2 from './footer-layout-2';

describe('FooterLayout2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterLayout2 />);
    expect(baseElement).toBeTruthy();
  });
});
