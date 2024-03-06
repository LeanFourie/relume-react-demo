import { render } from '@testing-library/react';

import MenuMegaLayout3 from './menu-mega-layout-3';

describe('MenuMegaLayout3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuMegaLayout3 />);
    expect(baseElement).toBeTruthy();
  });
});
