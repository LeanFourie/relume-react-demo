import { render } from '@testing-library/react';

import NewsletterForm from './newsletter-form';

describe('NewsletterForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewsletterForm />);
    expect(baseElement).toBeTruthy();
  });
});
