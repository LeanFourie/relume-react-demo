import { render } from '@testing-library/react';

import HeroLayout8 from './hero-layout-8';

describe('HeroLayout8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout8 />);
    expect(baseElement).toBeTruthy();
  });
});
