import { render } from '@testing-library/react';

import MenuFullLayout5 from './menu-full-layout-5';

describe('MenuFullLayout5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuFullLayout5 />);
    expect(baseElement).toBeTruthy();
  });
});
