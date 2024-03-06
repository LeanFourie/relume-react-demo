import { render } from '@testing-library/react';

import FooterLayout4 from './footer-layout-4';

describe('FooterLayout4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterLayout4 />);
    expect(baseElement).toBeTruthy();
  });
});
