import { render } from '@testing-library/react';

import HeroLayout1 from './hero-layout-1';

describe('HeroLayout1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout1 />);
    expect(baseElement).toBeTruthy();
  });
});
