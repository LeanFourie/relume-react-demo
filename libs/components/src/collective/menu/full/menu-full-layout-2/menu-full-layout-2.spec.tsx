import { render } from '@testing-library/react';

import MenuFullLayout2 from './menu-full-layout-2';

describe('MenuFullLayout2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuFullLayout2 />);
    expect(baseElement).toBeTruthy();
  });
});
