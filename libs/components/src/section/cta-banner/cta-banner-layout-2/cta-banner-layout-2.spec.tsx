import { render } from '@testing-library/react';

import CtaBannerLayout2 from './cta-banner-layout-2';

describe('CtaBannerLayout2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtaBannerLayout2 />);
    expect(baseElement).toBeTruthy();
  });
});
