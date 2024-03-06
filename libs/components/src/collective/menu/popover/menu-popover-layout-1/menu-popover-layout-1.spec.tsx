import { render } from '@testing-library/react';

import MenuPopoverLayout1 from './menu-popover-layout-1';

describe('MenuPopoverLayout1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuPopoverLayout1 />);
    expect(baseElement).toBeTruthy();
  });
});
