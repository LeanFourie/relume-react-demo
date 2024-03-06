import { render } from '@testing-library/react';

import MenuFullLayout1 from './menu-full-layout-1';

describe('MenuFullLayout1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuFullLayout1 />);
    expect(baseElement).toBeTruthy();
  });
});
