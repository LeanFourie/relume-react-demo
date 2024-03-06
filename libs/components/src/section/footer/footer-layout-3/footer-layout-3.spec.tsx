import { render } from '@testing-library/react';

import FooterLayout3 from './footer-layout-3';

describe('FooterLayout3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterLayout3 />);
    expect(baseElement).toBeTruthy();
  });
});
