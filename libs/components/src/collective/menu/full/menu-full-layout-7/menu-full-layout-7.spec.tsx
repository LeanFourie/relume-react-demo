import { render } from '@testing-library/react';

import MenuFullLayout7 from './menu-full-layout-7';

describe('MenuFullLayout7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuFullLayout7 />);
    expect(baseElement).toBeTruthy();
  });
});
