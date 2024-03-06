import { render } from '@testing-library/react';

import HeroLayout10 from './hero-layout-10';

describe('HeroLayout10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout10 />);
    expect(baseElement).toBeTruthy();
  });
});
