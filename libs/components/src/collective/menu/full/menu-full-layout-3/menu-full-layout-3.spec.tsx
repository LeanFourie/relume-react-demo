import { render } from '@testing-library/react';

import MenuFullLayout3 from './menu-full-layout-3';

describe('MenuFullLayout3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuFullLayout3 />);
    expect(baseElement).toBeTruthy();
  });
});
