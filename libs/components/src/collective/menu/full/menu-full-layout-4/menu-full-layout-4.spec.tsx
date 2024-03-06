import { render } from '@testing-library/react';

import MenuFullLayout4 from './menu-full-layout-4';

describe('MenuFullLayout4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuFullLayout4 />);
    expect(baseElement).toBeTruthy();
  });
});
