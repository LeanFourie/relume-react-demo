import { render } from '@testing-library/react';

import CtaBannerLayout9 from './cta-banner-layout-9';

describe('CtaBannerLayout9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtaBannerLayout9 />);
    expect(baseElement).toBeTruthy();
  });
});
