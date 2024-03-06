import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useAccordion from './accordion';

describe('useAccordion', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useAccordion());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
