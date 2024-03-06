import { render } from '@testing-library/react';

import ActionsListItem from './actions-list-item';

describe('ActionsListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActionsListItem />);
    expect(baseElement).toBeTruthy();
  });
});
