import { render } from '@testing-library/react';

import HeroLayout13 from './hero-layout-13';

describe('HeroLayout13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout13 />);
    expect(baseElement).toBeTruthy();
  });
});
