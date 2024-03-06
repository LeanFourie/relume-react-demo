import { render } from '@testing-library/react';

import MenuFullLayout6 from './menu-full-layout-6';

describe('MenuFullLayout6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuFullLayout6 />);
    expect(baseElement).toBeTruthy();
  });
});
