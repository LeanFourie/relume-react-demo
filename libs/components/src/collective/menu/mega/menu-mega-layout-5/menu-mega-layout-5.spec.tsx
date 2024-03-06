import { render } from '@testing-library/react';

import MenuMegaLayout5 from './menu-mega-layout-5';

describe('MenuMegaLayout5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuMegaLayout5 />);
    expect(baseElement).toBeTruthy();
  });
});
