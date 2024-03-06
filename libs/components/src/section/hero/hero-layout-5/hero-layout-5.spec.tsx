import { render } from '@testing-library/react';

import HeroLayout5 from './hero-layout-5';

describe('HeroLayout5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout5 />);
    expect(baseElement).toBeTruthy();
  });
});
