import { render } from '@testing-library/react';

import HeroLayout16 from './hero-layout-16';

describe('HeroLayout16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroLayout16 />);
    expect(baseElement).toBeTruthy();
  });
});
