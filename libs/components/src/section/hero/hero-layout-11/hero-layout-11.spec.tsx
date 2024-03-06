import { render } from '@testing-library/react';

import HeroLayout11 from './hero-layout-11';

describe('HeroLayout11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout11 />);
    expect(baseElement).toBeTruthy();
  });
});
