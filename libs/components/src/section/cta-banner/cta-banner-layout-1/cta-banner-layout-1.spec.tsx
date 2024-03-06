import { render } from '@testing-library/react';

import CtaBannerLayout1 from './cta-banner-layout-1';

describe('CtaBannerLayout1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtaBannerLayout1 />);
    expect(baseElement).toBeTruthy();
  });
});
