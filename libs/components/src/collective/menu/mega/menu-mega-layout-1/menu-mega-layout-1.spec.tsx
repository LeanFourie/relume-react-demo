import { render } from '@testing-library/react';

import MenuMegaLayout1 from './menu-mega-layout-1';

describe('MenuMegaLayout1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuMegaLayout1 />);
    expect(baseElement).toBeTruthy();
  });
});
