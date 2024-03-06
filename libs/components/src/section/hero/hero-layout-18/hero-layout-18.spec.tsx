import { render } from '@testing-library/react';

import HeroLayout18 from './hero-layout-18';

describe('HeroLayout18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout18 />);
    expect(baseElement).toBeTruthy();
  });
});
