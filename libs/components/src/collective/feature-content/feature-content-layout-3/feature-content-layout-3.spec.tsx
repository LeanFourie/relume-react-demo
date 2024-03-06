import { render } from '@testing-library/react';

import FeatureContentLayout3 from './feature-content-layout-3';

describe('FeatureContentLayout3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureContentLayout3 />);
    expect(baseElement).toBeTruthy();
  });
});
