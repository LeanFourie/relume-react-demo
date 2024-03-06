import { render } from '@testing-library/react';

import CtaBannerLayout4 from './cta-banner-layout-4';

describe('CtaBannerLayout4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtaBannerLayout4 />);
    expect(baseElement).toBeTruthy();
  });
});
