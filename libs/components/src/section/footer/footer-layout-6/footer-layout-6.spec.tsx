import { render } from '@testing-library/react';

import FooterLayout6 from './footer-layout-6';

describe('FooterLayout6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterLayout6 />);
    expect(baseElement).toBeTruthy();
  });
});
