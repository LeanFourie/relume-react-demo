import { render } from '@testing-library/react';

import CtaBannerLayout3 from './cta-banner-layout-3';

describe('CtaBannerLayout3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtaBannerLayout3 />);
    expect(baseElement).toBeTruthy();
  });
});
