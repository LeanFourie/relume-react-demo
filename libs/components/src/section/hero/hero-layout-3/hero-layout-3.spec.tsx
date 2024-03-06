import { render } from '@testing-library/react';

import HeroLayout3 from './hero-layout-3';

describe('HeroLayout3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout3 />);
    expect(baseElement).toBeTruthy();
  });
});
