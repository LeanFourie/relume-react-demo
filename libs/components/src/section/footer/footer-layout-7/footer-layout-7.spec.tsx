import { render } from '@testing-library/react';

import FooterLayout7 from './footer-layout-7';

describe('FooterLayout7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterLayout7 />);
    expect(baseElement).toBeTruthy();
  });
});
