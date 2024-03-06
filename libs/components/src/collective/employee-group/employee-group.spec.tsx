import { render } from '@testing-library/react';

import EmployeeGroup from './employee-group';

describe('EmployeeGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmployeeGroup />);
    expect(baseElement).toBeTruthy();
  });
});
