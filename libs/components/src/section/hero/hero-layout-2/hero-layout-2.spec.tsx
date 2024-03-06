import { render } from '@testing-library/react';

import HeroLayout2 from './hero-layout-2';

describe('HeroLayout2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout2 />);
    expect(baseElement).toBeTruthy();
  });
});
