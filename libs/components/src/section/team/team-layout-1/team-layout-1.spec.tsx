import { render } from '@testing-library/react';

import TeamLayout1 from './team-layout-1';

describe('TeamLayout1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TeamLayout1 />);
    expect(baseElement).toBeTruthy();
  });
});
