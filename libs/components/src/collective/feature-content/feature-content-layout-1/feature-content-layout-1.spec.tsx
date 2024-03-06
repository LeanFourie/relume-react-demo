import { render } from '@testing-library/react';

import FeatureContentLayout1 from './feature-content-layout-1';

describe('FeatureContentLayout1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureContentLayout1 />);
    expect(baseElement).toBeTruthy();
  });
});
