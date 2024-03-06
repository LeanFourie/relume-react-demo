import { render } from '@testing-library/react';

import HeroLayout7 from './hero-layout-7';

describe('HeroLayout7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout7 />);
    expect(baseElement).toBeTruthy();
  });
});
