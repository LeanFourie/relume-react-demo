import { render } from '@testing-library/react';

import FeatureContentLayout2 from './feature-content-layout-2';

describe('FeatureContentLayout2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureContentLayout2 />);
    expect(baseElement).toBeTruthy();
  });
});
