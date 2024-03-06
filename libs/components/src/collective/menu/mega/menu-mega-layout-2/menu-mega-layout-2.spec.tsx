import { render } from '@testing-library/react';

import MenuMegaLayout2 from './menu-mega-layout-2';

describe('MenuMegaLayout2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuMegaLayout2 />);
    expect(baseElement).toBeTruthy();
  });
});
