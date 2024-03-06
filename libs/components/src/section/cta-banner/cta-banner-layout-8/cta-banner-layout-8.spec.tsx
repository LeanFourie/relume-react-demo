import { render } from '@testing-library/react';

import CtaBannerLayout8 from './cta-banner-layout-8';

describe('CtaBannerLayout8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtaBannerLayout8 />);
    expect(baseElement).toBeTruthy();
  });
});
