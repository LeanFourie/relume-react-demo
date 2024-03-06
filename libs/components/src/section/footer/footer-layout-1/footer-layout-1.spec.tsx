import { render } from '@testing-library/react';

import FooterLayout1 from './footer-layout-1';

describe('FooterLayout1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterLayout1 />);
    expect(baseElement).toBeTruthy();
  });
});
