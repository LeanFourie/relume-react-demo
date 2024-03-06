import { render } from '@testing-library/react';

import HeroLayout4 from './hero-layout-4';

describe('HeroLayout4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout4 />);
    expect(baseElement).toBeTruthy();
  });
});
