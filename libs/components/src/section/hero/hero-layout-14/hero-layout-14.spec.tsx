import { render } from '@testing-library/react';

import HeroLayout14 from './hero-layout-14';

describe('HeroLayout14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout14 />);
    expect(baseElement).toBeTruthy();
  });
});
