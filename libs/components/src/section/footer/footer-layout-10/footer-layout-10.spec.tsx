import { render } from '@testing-library/react';

import FooterLayout10 from './footer-layout-10';

describe('FooterLayout10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterLayout10 />);
    expect(baseElement).toBeTruthy();
  });
});
