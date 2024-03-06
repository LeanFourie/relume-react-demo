import { render } from '@testing-library/react';

import MenuMegaLayout6 from './menu-mega-layout-6';

describe('MenuMegaLayout6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuMegaLayout6 />);
    expect(baseElement).toBeTruthy();
  });
});
