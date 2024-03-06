import { render } from '@testing-library/react';

import HeroLayout15 from './hero-layout-15';

describe('HeroLayout15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout15 />);
    expect(baseElement).toBeTruthy();
  });
});
