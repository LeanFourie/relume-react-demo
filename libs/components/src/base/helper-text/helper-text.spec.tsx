import { render } from '@testing-library/react';

import HelperText from './helper-text';

describe('HelperText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HelperText />);
    expect(baseElement).toBeTruthy();
  });
});
