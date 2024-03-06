import { render } from '@testing-library/react';

import FooterLayout8 from './footer-layout-8';

describe('FooterLayout8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterLayout8 />);
    expect(baseElement).toBeTruthy();
  });
});
