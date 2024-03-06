import { render } from '@testing-library/react';

import MenuTrigger from './menu-trigger';

describe('MenuTrigger', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuTrigger />);
    expect(baseElement).toBeTruthy();
  });
});
