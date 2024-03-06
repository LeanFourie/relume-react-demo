import { render } from '@testing-library/react';

import ActionsList from './actions-list';

describe('ActionsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActionsList />);
    expect(baseElement).toBeTruthy();
  });
});
