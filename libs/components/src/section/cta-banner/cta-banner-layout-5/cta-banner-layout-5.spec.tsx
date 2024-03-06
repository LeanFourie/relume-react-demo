import { render } from '@testing-library/react';

import CtaBannerLayout5 from './cta-banner-layout-5';

describe('CtaBannerLayout5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtaBannerLayout5 />);
    expect(baseElement).toBeTruthy();
  });
});
