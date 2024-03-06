import { render } from '@testing-library/react';

import HeroLayout6 from './hero-layout-6';

describe('HeroLayout6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout6 />);
    expect(baseElement).toBeTruthy();
  });
});
