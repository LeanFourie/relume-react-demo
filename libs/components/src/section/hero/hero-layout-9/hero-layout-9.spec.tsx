import { render } from '@testing-library/react';

import HeroLayout9 from './hero-layout-9';

describe('HeroLayout9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout9 />);
    expect(baseElement).toBeTruthy();
  });
});
