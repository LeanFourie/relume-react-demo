import { render } from '@testing-library/react';

import ContentGroup from './content-group';

describe('ContentGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentGroup />);
    expect(baseElement).toBeTruthy();
  });
});
