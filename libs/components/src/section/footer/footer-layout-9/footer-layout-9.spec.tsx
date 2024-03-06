import { render } from '@testing-library/react';

import FooterLayout9 from './footer-layout-9';

describe('FooterLayout9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterLayout9 />);
    expect(baseElement).toBeTruthy();
  });
});
