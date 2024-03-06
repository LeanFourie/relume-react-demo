import { render } from '@testing-library/react';

import TeamLayout2 from './team-layout-2';

describe('TeamLayout2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TeamLayout2 />);
    expect(baseElement).toBeTruthy();
  });
});
