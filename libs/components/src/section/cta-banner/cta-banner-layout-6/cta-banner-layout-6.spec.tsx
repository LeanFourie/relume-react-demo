import { render } from '@testing-library/react';

import CtaBannerLayout6 from './cta-banner-layout-6';

describe('CtaBannerLayout6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtaBannerLayout6 />);
    expect(baseElement).toBeTruthy();
  });
});
