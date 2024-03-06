import { render } from '@testing-library/react';

import HeroLayout17 from './hero-layout-17';

describe('HeroLayout17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout17 />);
    expect(baseElement).toBeTruthy();
  });
});
