import { render } from '@testing-library/react';

import FooterLayout11 from './footer-layout-11';

describe('FooterLayout11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterLayout11 />);
    expect(baseElement).toBeTruthy();
  });
});
