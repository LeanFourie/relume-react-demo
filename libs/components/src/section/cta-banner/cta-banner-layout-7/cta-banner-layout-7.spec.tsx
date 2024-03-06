import { render } from '@testing-library/react';

import CtaBannerLayout7 from './cta-banner-layout-7';

describe('CtaBannerLayout7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtaBannerLayout7 />);
    expect(baseElement).toBeTruthy();
  });
});
