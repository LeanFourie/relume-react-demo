import { render } from '@testing-library/react';

import HeroLayout12 from './hero-layout-12';

describe('HeroLayout12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout12 />);
    expect(baseElement).toBeTruthy();
  });
});
