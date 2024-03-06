import { render } from '@testing-library/react';

import FooterLayout5 from './footer-layout-5';

describe('FooterLayout5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterLayout5 />);
    expect(baseElement).toBeTruthy();
  });
});
