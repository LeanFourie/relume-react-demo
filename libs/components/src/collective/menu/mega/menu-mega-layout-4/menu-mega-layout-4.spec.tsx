import { render } from '@testing-library/react';

import MenuMegaLayout4 from './menu-mega-layout-4';

describe('MenuMegaLayout4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuMegaLayout4 />);
    expect(baseElement).toBeTruthy();
  });
});
