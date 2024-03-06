import { render } from '@testing-library/react';

import TeamLayout3 from './team-layout-3';

describe('TeamLayout3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TeamLayout3 />);
    expect(baseElement).toBeTruthy();
  });
});
